import { useState } from 'react';
import { HiUserCircle, HiOutlineLockClosed } from 'react-icons/hi';
import { logo } from "../../assets/index"
const Login = () => {
    // state and functions for handling form inputs and submission
    const [nisn, setNisn] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // code for handling form submission
    };

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-96 rounded-2xl shadow-2xl px-8 py-10 flex flex-col justify-center items-center">
                <img src={logo} alt="icon" className="h-16 w-16 mb-8 mt-0" />
                <form onSubmit={handleSubmit} className="w-full">
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
                            className="bg-primary rounded-full text-white py-2 px-4 border hover:bg-opacity-90 transition-colors duration-150 ease-in-out shadow-lg mt-2"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;