import { useState } from "react";

import { close, nekat, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom"
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

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
          onClick={() => console.log("Logout")}>
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
      </div>
    </nav>

  );
};

export default Navbar;
