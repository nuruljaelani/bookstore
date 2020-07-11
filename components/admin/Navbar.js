import React from 'react'
import { FaSearch, FaBookOpen, FaAngleDown } from "react-icons/fa";
import Link from 'next/link'

export const Navbar = () => {
    return (
        <>
            <nav className="shadow-lg fixed top-0 inset-x-0 w-full" style={{zIndex:"1000"}}>
                <div className="flex bg-vermilion-500 pt-4">
                    <div className="flex container pb-2 px-4 md:px-12 lg:px-16 md:px-0 w-full">
                        <div className="flex text-white items-center w-1/3">
                            <FaBookOpen size="3rem" />
                            <Link href="/">                    
                                <a className="flex text-2xl md:text-4xl ml-2 tracking-tighter items-center">
                                    <p>tokoBuku</p>
                                    <p className="text-lg items-end ml-2 pt-2 text-gray-100 font-light">Admin</p>
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center w-2/3 ml-20">
                            <div className="w-full flex ml-2 mr-6">
                                <input type="text" className="bg-gray-100 w-full appearance-none rounded-l-full px-4 py-2 focus:outline-none" placeholder="Cari Buku, Penulis, Penerbit" />
                                <button className="rounded-r-full bg-gray-100 px-4 text-gray-600" type="button">
                                    <FaSearch />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
