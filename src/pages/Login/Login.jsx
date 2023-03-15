import { useContext, useEffect, useState } from 'react';
import { HiUserCircle, HiOutlineLockClosed } from 'react-icons/hi';
import { logo } from "../../assets/index"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { AppContext } from "../../store/index"
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
const CustomToastContainer = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg p-4">{children}</div>
        </div>
    );
};

const Login = () => {

    const [nisn, setNisn] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        if (state.user_token) {
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }, []);

    const handleSuccess = ({ accessToken }) => {
        Cookies.set("accessToken", accessToken)
        const rawSiswa = jwtDecode(accessToken)
        const siswa = btoa(JSON.stringify(rawSiswa));
        Cookies.set("Siswa", siswa)
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            timer: 1000,
            showConfirmButton: false,
            willClose: () => {
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            },
        });
    };

    const Auth = async (e) => {
        e.preventDefault()
        if (!nisn.trim() || !password.trim()) {
            Swal.fire({
                title: "Error",
                text: !nisn.trim() && !password.trim() ? "Lakukan Login Terlebih Dahulu" : !nisn.trim() ? "Masukan Nisn" : "Masukan Password",
                icon: "error",
                button: "OK",
            });
            return;
        }

        return axios.post('http://localhost:5000/login', {
            nisn,
            password
        }
        ).then((resp) => {
            handleSuccess(resp.data);
        }).catch((error) => {
            if (error.response) {
                const errorMsg = error.response.data.msg;
                Swal.fire({
                    icon: 'error',
                    title: errorMsg,
                });
            }
        })
    }

    return (
        <>
            <div className="bg-gradient-to-br from-black to-gray-900 h-screen flex flex-col justify-center items-center">
                <div className="bg-white w-96 rounded-2xl shadow-2xl px-8 py-10 flex flex-col justify-center items-center">
                    <img src={logo} alt="icon" className="h-16 w-16 mb-8 mt-0" />
                    <form onSubmit={Auth} className="w-full">
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <HiUserCircle className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                <input
                                    type="test"
                                    name="nisn"
                                    id="nisn"
                                    placeholder="Nisn"
                                    className="border-gray-300 block w-full pl-10 pr-4 py-2 focus:outline-none shadow-lg"
                                    value={nisn}
                                    onChange={(e) => setNisn(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <HiOutlineLockClosed className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="border-gray-300 block w-full pl-10 pr-4 py-2 focus:outline-none shadow-lg mt-8"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-primary rounded-full text-white py-2 px-6 border hover:bg-opacity-90 transition-colors duration-150 ease-in-out shadow-2xl mt-2"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;