import { FaInstagram, FaTwitter, FaBookOpen, FaSearch, FaAngleDown, FaBars, FaUser, FaAngleRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

    const [hover, setHover] = useState(false)

    const dropdown = () => {
        setHover(true)
    }

    const closeDropdown = () => {
        setHover(false)
    }

    return (
        <nav className="shadow-lg fixed top-0 inset-x-0 w-full" style={{zIndex:1000}}>
            <div className="hidden md:flex bg-vermilion-600">
                <div className="container px-4 md:px-12 lg:px-16 flex justify-between text-white pt-1 w-full">
                    <div className="flex">
                        <FaInstagram className="mr-2" />
                        <FaTwitter />
                    </div>
                    <div className="flex text-xs">
                        <p className="mr-4">Bantuan</p>
                        <p>Tentang tokoBuku</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex bg-vermilion-500 pt-4">
                <div className="flex container pb-2 px-4 md:px-12 lg:px-16 md:px-0 w-full">
                    <div className="flex text-white items-center">
                        <FaBookOpen size="3rem" />
                        <Link href="/">                    
                            <a className="text-2xl md:text-4xl ml-2 tracking-tighter">tokoBuku</a>
                        </Link>
                    </div>
                    <div className="flex items-center w-full ml-20">
                        <div className="flex flex-col">
                            <button className="flex items-center text-white" type="button" onMouseOver={dropdown} onMouseOut={closeDropdown}>
                                <p>Kategori</p>
                                <FaAngleDown className="mx-4" />
                            </button>
                            <div className={hover ? "block absolute pt-4 px-6 bg-white rounded mt-6": "hidden"} onMouseOver={dropdown} onMouseLeave={closeDropdown}>
                                <ul className="font-medium uppercase text-gray-900 block">
                                    <li className="mb-3">
                                        <Link href="/[category]" as="/komik">
                                            <a>Komik</a>
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link href="/[category]" as="/agama">
                                            <a>Agama</a>
                                        </Link>
                                    </li>
                                    <li className="mb-3">Novel & Sastra</li>
                                    <li className="mb-3 flex justify-between">
                                        Non Fiksi
                                        <FaAngleRight />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full flex ml-2 mr-6">
                            <input type="text" className="bg-gray-100 w-full appearance-none rounded-l-full px-4 py-2 focus:outline-none" placeholder="Cari Buku, Penulis, Penerbit" />
                            <button className="rounded-r-full bg-gray-100 px-4 text-gray-600" type="button">
                                <FaSearch />
                            </button>
                        </div>
                        <div className="flex">
                            <button type="button" className="text-white mr-4">
                                <AiOutlineShoppingCart size="2.2rem" />
                            </button>
                            <div className="flex text-white items-center">
                                <Link href="/login">
                                    <a className="bg-transparent border border-vermilion-300 rounded p-2 text-sm mr-2 hover:bg-vermilion-600 hover:border-transparent">Masuk</a>
                                </Link>
                                <Link href="/signup" as="/daftar">
                                    <a className="bg-vermilion-600 border border-transparent rounded p-2 text-sm hover:bg-transparent  hover:border-vermilion-300">Daftar</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medium */}
            <div className="flex lg:hidden pt-2 bg-vermilion-500">
                <div className="container flex flex-col md:flex-row pb-2 px-4 md:px-12 w-full">
                    <div className="hidden md:block text-white items-center">
                        <Link href="/">
                            <div className="inline-flex items-center">
                                <FaBookOpen size="2rem" />
                                <p className="text-3xl ml-2 tracking-tighter">tokoBuku</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex md:hidden justify-between items-center">
                        <div className="text-white">
                            <FaBars size="1.3rem" />
                        </div>
                        <div className="text-white items-center">
                            <div className="flex items-center">
                                <FaBookOpen size="1.5rem" />
                                <p className="text-xl tracking-tighter">tokoBuku</p>
                            </div>
                        </div>
                        <div className="text-white items-center">
                            <FaUser size="1.3rem" />
                        </div>
                    </div>
                    <div className="flex items-center w-full ml-0 md:ml-10 pt-2">
                        <div className="w-full flex mr-2 md:mr-8 text-sm">
                            <input type="text" className="bg-gray-100 w-full appearance-none rounded-l-full px-4 py-2" placeholder="Cari Buku, Penulis, Penerbit" />
                            <button className="rounded-r-full bg-gray-200 px-4" type="button">
                                <FaSearch />
                            </button>
                        </div>
                        <button type="button" className="text-white">
                            <AiOutlineShoppingCart size="2rem" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar