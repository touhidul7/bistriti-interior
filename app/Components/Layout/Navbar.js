"use client";
import Image from "next/image";
import logo from "../../icon.png";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log('current page: ', pathname);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Team", path: "/team/" },
    { name: "Projects", path: "/projects/" },
  ];

  return (
    <div className="navbar bg-black text-white fixed w-full top-0 z-50 overflow-x-visible lg:px-20">
      <Link href={"/"} className="navbar-start">
        <Image
          src={logo} 
          alt="Britto Soft Logo"
          width={50}
          height={50}
          className="h-12 w-auto"
        />
      </Link>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link 
                href={menu.path} 
                className={`hover:text-[#FF323A] focus:text-[#FF323A] ${pathname === menu.path ? 'text-[#FF323A]' : 'text-white'}`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Mobile nav */}
        <div className="dropdown dropdown-end lg:hidden bg-black">
          <div tabIndex={0} role="button">
            <IoIosMenu className="h-8 w-auto " />
          </div>
          <ul tabIndex={0} className="dropdown-content bg-black menu  rounded-box z-[1] w-52 p-2 shadow">
            {menus.map((menu, index) => (
              <li key={index} className="border-b-[1px] text-white border-gray-800 hover:text-[#FF323A] focus:text-[#FF323A]">
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
