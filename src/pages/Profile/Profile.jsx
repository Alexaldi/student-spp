import React, { useEffect } from 'react'
import styles from '../../style'
import { Navbar } from '../../components'
import { HiUserCircle } from 'react-icons/hi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const [kelas, setKelas] = useState('');
    const [token, setToken] = useState([]);
    const cookie = Cookies.get("Siswa")

    useEffect(() => {
        if (cookie !== undefined) {
            const data = JSON.parse(cookie)
            setToken(data)
        }
    }, []);

    useEffect(() => {
        if (token.id_kelas) { // check if token has id_kelas before calling getKelas()
            getKelas();
        }
    }, [token]);

    const navigate = useNavigate()

    const getKelas = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/class/${token.id_kelas}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("accessToken")}`
                }
            })
            setKelas(response.data)
        } catch (error) {
            if (error.response) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/login');
                }
            }
        }
    }
    console.log(kelas);
    return (
        <div className="bg-gradient-to-br from-black to-gray-900 w-full h-screen overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <section className={`flex md:flex-row flex-col ${styles.padding}`}>
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
                        <div className="px-6">
                            <div className="text-center my-5">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                                    {token.nama}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {kelas?.angkatan} {kelas?.kelas}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    Email : {token.email}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    No Telephone : {token.no_telp}
                                </div>
                                <div className="mb-10 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    Alamat : {token.alamat}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
