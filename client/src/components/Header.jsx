// src/components/Header.js
import React, { useState } from 'react';
import { FiSearch, FiBell, FiMoon, FiSun } from 'react-icons/fi';
import profile from "/mypicture.jpg"
import { FiHome, FiCalendar, FiUser, FiList, FiFileText, FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 w-[80vw] float-right h-[10vh] border-b">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                    />
                    <FiSearch className="absolute top-3 right-3 text-gray-400 dark:text-gray-300" />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="focus:outline-none border bg-slate-100 p-1 rounded-full">
                    {darkMode ? (
                        <FiSun className="text-yellow-500" size={22} />
                    ) : (
                            <FiMoon size={22} className="text-gray-800 dark:text-gray-200" />
                    )}
                </button>

                <button className="relative focus:outline-none border bg-slate-100 p-1 rounded-full dark:bg-slate-900">
                    <FiBell size={22} className="text-gray-800 dark:text-gray-200" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex flex-row-reverse items-center space-x-2" >
                    {profileDropdownOpen ? <FiChevronUp size={22} onClick={toggleProfileDropdown} className=' cursor-pointer dark:text-white' /> : <FiChevronDown size={22} onClick={toggleProfileDropdown} className=' cursor-pointer dark:text-white' />}
                    {profileDropdownOpen && (
                        <div className="absolute right-1 top-[11vh] w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-20">
                            <a href="#" className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"><FiUser className=' mr-2'/>My Profile</a>
                            <a href="#" className=" flex px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"><FiLogOut className=' mr-2' />Logout</a>
                        </div>
                    )}
                    <img
                        src={profile}
                        alt="Profile"
                        className="h-12 w-12 rounded-full"
                    />
                    <div className=' text-right pr-2'>
                        <h1 className="text-gray-800 dark:text-gray-200 font-semibold">Keshab Das</h1>
                        <h1 className="text-gray-600 text-[10px] dark:text-gray-200">Web Developer</h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
