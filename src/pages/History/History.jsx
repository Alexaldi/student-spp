import { Table } from 'flowbite-react'
import React from 'react'
import styles from '../../style'
import { Footer, Navbar } from '../../components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import styled from '@emotion/styled';


const WhitePagination = styled('div')({
    '& .MuiPaginationItem-root': {
        color: '#fff',
    },
});

const WhiteRowsPerPage = styled('div')({
    '& .MuiFormControl-root': {
        color: '#fff',
    },
});

const columns = [
    { field: 'productName', headerName: 'Product name', width: 250 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
        field: 'edit',
        headerName: 'Edit',
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params) => (
            <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
                Edit
            </a>
        ),
    },
];

const rows = [
    {
        id: 1,
        productName: 'Apple MacBook Pro 17"',
        color: 'Silver',
        category: 'Laptop',
        price: '$2999',
    },
    {
        id: 2,
        productName: 'Microsoft Surface Pro',
        color: 'White',
        category: 'Laptop PC',
        price: '$1999',
    },
    {
        id: 3,
        productName: 'Magic Mouse 2',
        color: 'Black',
        category: 'Accessories',
        price: '$99',
    },
];

export const History = () => {
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
                                    <Box width={800} autoHeight>
                                        <DataGrid rows={rows} columns={columns} pageSize={9}
                                            rowsPerPageOptions={[9]}
                                            autoHeight
                                            width={900}
                                            sx={{
                                                '& .MuiDataGrid-cell': {
                                                    color: 'white',
                                                },
                                                '& .MuiDataGrid-footerContainer': {
                                                    backgroundColor: 'black',
                                                    '& .MuiDataGrid-selectedRowCount': {
                                                        color: 'white',
                                                    },
                                                    '& .MuiDataGrid-rowCount': {
                                                        color: 'white',
                                                    },
                                                },
                                                '& .MuiTablePagination-root': {
                                                    '& .MuiTablePagination-select': {
                                                        color: 'white',
                                                    },
                                                    '& .MuiTablePagination-caption': {
                                                        color: 'white',
                                                    },
                                                },
                                                '& .MuiTablePagination-displayedRows': {
                                                    color: 'white',
                                                },
                                                '& .MuiTablePagination-selectLabel ': {
                                                    color: 'white',
                                                },
                                                '& .MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root': {
                                                    color: '#fff',
                                                },
                                                '& .MuiDataGrid-columnHeader': {
                                                    color: '#fff',
                                                },
                                                '& .MuiTablePagination- actions': {
                                                    color: '#fff',
                                                },
                                                '& .MuiDataGrid-menuIcon': {
                                                    color: '#fff',
                                                }

                                            }}
                                            components={{
                                                Toolbar: GridToolbar,
                                                RowsPerPageOptions: {
                                                    style: {
                                                        color: '#fff',
                                                    }
                                                },
                                            }}
                                        />
                                    </Box>
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
