import { useState } from "react";

import { close, nekat, menu } from "../assets";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import Cookies from "js-cookie"
import axios from "axios";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate()
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={nekat} alt="cueri" className="w-[50px] h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <li
          key="Logout"
          className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite ml-10`}
          onClick={async () => {
            try {
              await Swal.fire({
                title: 'Are you sure?',
                text: 'You will be logged out',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, log out'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await axios.delete(`http://localhost:5000/logout?accessToken=${Cookies.get("accesToken")}`);
                  Cookies.remove('accessToken');
                  Cookies.remove('Siswa');
                  setTimeout(() => {
                    navigate('/login');
                  }, 1000);
                }
              }
              )
            } catch (error) {
              console.log(error);
            }
          }}>
          Logout
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li
              key="Logout"
              className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite `}
              onClick={async () => {
                try {
                  await Swal.fire({
                    title: 'Are you sure?',
                    text: 'You will be logged out',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, log out'
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      await axios.delete(`http://localhost:5000/logout?accessToken=${Cookies.get("accesToken")}`);
                      Cookies.remove('accessToken');
                      Cookies.remove('Siswa');
                      setTimeout(() => {
                        navigate('/login');
                      }, 1000);
                    }
                  }
                  )
                } catch (error) {
                  console.log(error);
                }
              }}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
