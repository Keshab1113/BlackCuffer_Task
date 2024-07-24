import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiCalendar, FiUser, FiList, FiFileText, FiChevronDown, FiChevronUp, FiMessageSquare, FiFile, FiLogOut } from 'react-icons/fi';
import profile from "/mypicture.jpg";
import { MdOutlineDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { PiUserSound } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation(); // Get current location

    const handleDropdown = (name) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    // Function to determine if a menu item is active
    const isMenuItemActive = (menuItemPath) => {
        return location.pathname === menuItemPath;
    };

    return (
        <div className="h-full absolute top-0 bg-gray-800 text-white w-[20vw] flex flex-col overflow-y-scroll overflow-x-hidden hidescrollbar">
            <div className="p-4 flex items-center justify-center space-x-2 mt-4">
                <img src={profile} alt="Logo" className="h-10 w-10" />
                <h1 className="text-2xl font-bold">AdminControl</h1>
            </div>
            <nav className="mt-10 font-semibold px-4">
                <h1 className=' text-slate-400 font-bold mb-2'>Menu</h1>
                <ul className=' space-y-2'>
                    <li className={`px-4 py-2 flex items-center space-x-3 ${isMenuItemActive("/") ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <NavLink to="/" className="flex items-center space-x-3 w-full">
                            <FiHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className={`px-4 py-2 flex items-center space-x-3 ${isMenuItemActive("/dashboard") ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <NavLink to="/dashboard" className="flex items-center space-x-3 w-full">
                            <MdOutlineDashboard />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className={`px-4 py-2 flex items-center space-x-3 ${isMenuItemActive("/charts") ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <NavLink to="/charts" className="flex items-center space-x-3 w-full">
                            <IoStatsChart />
                            <span>Charts</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
            <nav className="mt-10 font-semibold px-4">
                <h1 className=' text-slate-400 font-bold mb-2'>Support</h1>
                <ul>
                    <li className="px-4 py-2 flex items-center justify-between hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdown('calendar')}>
                        <div className="flex items-center space-x-3">
                            <FiCalendar />
                            <span>Calendar</span>
                        </div>
                        {openDropdown === 'calendar' ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    {openDropdown === 'calendar' && (
                        <ul className="pl-8 space-y-2">
                            <li className="px-4 py-2 hover:bg-gray-600">
                                <NavLink to="/calendar/events" className={`w-full items-center flex ${isMenuItemActive("/calendar/events") ? 'bg-gray-600' : ''}`}><MdEventAvailable className=' mr-2'/>Events</NavLink>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-600">
                                <NavLink to="/calendar/meetings" className={`w-full items-center flex ${isMenuItemActive("/calendar/meetings") ? 'bg-gray-600' : ''}`}><PiUserSound className=' mr-2' />Meetings</NavLink>
                            </li>
                        </ul>
                    )}
                    <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700">
                        <NavLink to="/messages" className="flex items-center space-x-3 w-full">
                            <FiMessageSquare />
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700">
                        <NavLink to="/invoice" className="flex items-center space-x-3 w-full">
                            <FiFile />
                            <span>Invoice</span>
                        </NavLink>
                    </li>
                    
                    
                </ul>
            </nav>
            <nav className="mt-10 font-semibold px-4 mb-4">
                <h1 className=' text-slate-400 font-bold mb-2'>Profile</h1>
                <ul>
                    <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700">
                        <NavLink to="/profile" className="flex items-center space-x-3 w-full">
                            <FiUser />
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700">
                        <NavLink to="/logout" className="flex items-center space-x-3 w-full">
                            <FiLogOut />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
