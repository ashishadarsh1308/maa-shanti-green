import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaNetworkWired } from "react-icons/fa6";
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-600">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UPKRITI</span>
                    </a>
                    <div className="flex items-center rtl:space-x-reverse">
                        <HashLink
                            to="https://forms.gle/MtpS41M8axGv8pzN6"
                            className="mr-6 flex hover:text-white-500 self-center text-1xl font-semibold whitespace-nowrap dark:text-white"
                            target="_blank"
                        >
                            <FaNetworkWired
                                className='mr-4 hover:text-white-500 self-center font-semibold whitespace-nowrap dark:text-white'
                            />
                            jobQuest
                        </HashLink>
                    </div>
                    <button
                        className="md:hidden text-gray-900 dark:text-white"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            <nav className={`bg-gray-50 dark:bg-gray-400 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex justify-between items-center">
                        <ul className="flex flex-col md:flex-row font-medium mt-0 space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/activity" className="text-gray-900 dark:text-white hover:underline">Activity</a>
                            </li>
                            <li>
                                <a href="/aboutus" className="text-gray-900 dark:text-white hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="/donation" className="text-gray-900 dark:text-white hover:underline">Donation</a>
                            </li>
                            <li>
                                <a href="/gallery" className="text-gray-900 dark:text-white hover:underline">Gallery & media  </a>
                            </li>
                        </ul>
                        <div className="hidden md:flex items-center rtl:space-x-reverse">
                            <IoMdCall className="text-gray-900 dark:text-white mr-2" />
                            <a href="tel:+9661704690" className="text-gray-900 dark:text-white hover:underline">+91-9661704690</a>
                            <MdEmail className="text-gray-900 dark:text-white ml-4 mr-2" />
                            <a href="mailto:upkriti108@gmail.com" className="text-gray-900 dark:text-white hover:underline">upkriti108@gmail.com</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
