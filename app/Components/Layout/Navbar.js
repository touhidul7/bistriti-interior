import Image from "next/image";
import React from "react";
import logo from "../../icon.png"
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  const menus = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Team",
      path: "/team"
    },
    {
      name: "Projects",
      path: "/projects"
    },
  ]
  return (
    <>
      <div className="navbar bg-base-100 border-b border-gray-500 overflow-x-visible">
        <div className="navbar-start">

          <Image
            src={logo} // Image component for mobile
            alt="Britto Soft Logo"
            className="h-12 w-auto"
          />


        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              menus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.path}>{menu.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-end">
          {/* Mobile nav */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className=""><IoIosMenu className="h-8 w-auto" /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {
                menus.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.path}>{menu.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
