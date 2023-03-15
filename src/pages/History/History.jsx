import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { Footer, Navbar } from '../../components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const Pembayarancolumns = [
    {
        field: 'no',
        headerName: 'No',
        width: 60,
        sortable: false,
        valueGetter: (params) => {
            const rowIndex = params.api.getRowIndex(params.row.id_pembayaran);
            return rowIndex + 1;
        },
    },
    {
        field: 'nama_petugas',
        headerName: 'Nama Petugas',
        width: 130,
        valueGetter: (params) => {
            return params.row.petugas ? `${params.row.petugas.nama_petugas}` : ''
        }
    },
    {
        field: 'nisn',
        headerName: 'Nisn',
        width: 120,
        valueGetter: (params) => {
            return params.row.siswa ? `${params.row.siswa.nisn}` : ''
        }
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 180,
        valueGetter: (params) => {
            return params.row.siswa ? `${params.row.siswa.name}` : ''
        }
    },
    {
        field: 'kelas',
        headerName: 'Kelas',
        width: 130,
        valueGetter: (params) => {
            return params.row.siswa ? `${params.row.siswa.kelas.angkatan} ${params.row.siswa.kelas.kelas}` : ''
        }
    },
    {
        field: 'tahun',
        headerName: 'Tahun Bayar',
        width: 100,
        valueGetter: (params) => {
            return params.row.spp ? `${params.row.spp.tahun} ` : ''
        }
    },
    {
        field: 'tgl_bayar',
        headerName: 'Tanggal Bayar',
        width: 130,
        valueGetter: (params) => {
            const formatDate = (dateString) => {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('id-ID', options);
            };

            return formatDate(params.row.tgl_bayar)
        }

    },
    {
        field: 'jumlah_bayar',
        headerName: 'Total Bayar',
        width: 140,
        valueGetter: (params) => {
            const nominal = params.value || 0;
            const formattedNominal = nominal.toLocaleString('id-ID', {
                minimumFractionDigits: 0,
            });
            return `Rp. ${formattedNominal}`
        }
    },
    {
        field: 'keterangan',
        headerName: 'Keterangan',
        width: 140,
        valueGetter: (params) => {
            return params.value
        }
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        valueGetter: (params) => {
            const value = params.row.status
            const status = value === true ? 'Lunas' : 'Belum Lunas';
            return status
        },
        renderCell: (params) => {
            const value = params.row.status
            const status =
                value === true ? 'Lunas' : 'Belum Lunas';
            return (
                <div
                    style={{
                        backgroundColor: value === true ? "#4CAF50" : "crimson",
                        color: "white",
                        padding: 5,
                        borderRadius: 5,
                        textAlign: "center",
                    }}
                >
                    {status}
                </div>
            );
        },
    },
];


export const History = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getPembayaran();
    }, []);

    const navigate = useNavigate()

    const getPembayaran = async () => {
        const token = Cookies.get("Siswa")
        const siswaId = token.id_siswa
        try {
            const response = await axios.get(`http://localhost:5000/pembayaranU/${siswaId}?limit=10&orderBy=desc`,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("accessToken")}`
                    },
                });
            setData(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate("/login");
            }
        }
    }
    return (
        <>
            <div className="bg-primary h-screen overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section className={`flex md:flex-row flex-col md:py-14 py-4`}>
                            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                                <div style={{ height: 400, width: '100%' }}>
                                    <h2 className="text-3xl font-bold text-white mb-10">History Pembayaran</h2>
                                    <ThemeProvider theme={darkTheme}>
                                        <Box width="100%" autoHeight>
                                            <DataGrid
                                                rows={data}
                                                columns={Pembayarancolumns}
                                                getRowId={(row) => row.id_pembayaran}
                                                pageSize={9}
                                                rowsPerPageOptions={[9]}
                                                autoHeight
                                                width={900}
                                                components={{
                                                    Toolbar: GridToolbar,
                                                    RowsPerPageOptions: {
                                                        style: {
                                                            color: '#fff',
                                                        }
                                                    },
                                                }}
                                                localeText={{
                                                    noRowsLabel: 'Anda Belum Melakukan Pembayaran',
                                                }}
                                                style={{
                                                    '& .MuiDataGrid-overlay.css-1w53k9d-MuiDataGrid-overlay': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </ThemeProvider>
                                </div>
                            </div>
                            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                                {/* gradient start */}
                                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                                {/* gradient end */}
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </>

    )
}

