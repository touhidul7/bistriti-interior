import {
    Facebook,
    Globe,
    Instagram,
    Linkedin,
    MessageCircleMore,
    PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-4 p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-[20%] space-y-6">
                        <Link href={"/"} className="flex gap-2 items-center lg:mb-0 mb-10">
                            <Image src={logo} className="h-8 w-auto" alt="Bistriti Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                Bistriti
                            </span>
                        </Link>
                        <div className="text-justify text-gray-400 font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt,
                            recusandae nam quisquam repellat quidem mollitia reiciendis
                            repellendus ullam nobis iste dolorem.
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">
                                Company
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href={"/"}
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Globe size={18} />
                                        Bistriti Interior
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Globe size={18} />
                                        Bistriti Shop
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">
                                Menu
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href={"/"}
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Globe size={18} />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Globe size={18} />
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:text-right lg:text-left">
                            <h2 className="mb-6 text-sm font-semibold text-white">
                                Contact
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <PhoneCall size={18} /> +8801xxxxxxxxx
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.me/#"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <MessageCircleMore size={18} />
                                        +8801xxxxxxxxx
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Refund Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="sm:text-right lg:text-left">
                            <h2 className="mb-6 text-sm font-semibold text-white">
                                Others
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">
                        © 2024{" "}
                        <Link href={"/"} className="hover:underline">
                            Bistriti
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link
                            href={"#"}
                            className="text-gray-500 hover:text-white"
                        >
                            <Facebook />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <a
                            href={"#"}
                            className="text-gray-500 hover:text-white ms-5"
                        >
                            <Instagram />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href={"#"}
                            className="text-gray-500 :hover:text-white ms-5"
                        >
                            <Linkedin />
                            <span className="sr-only">LinkedIn Page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
