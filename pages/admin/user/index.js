import React from 'react'
import { Navbar } from "../../../components/admin/Navbar";
import { Sidebar } from '../../../components/admin/Sidebar'
import { FaPlus, FaSearch } from 'react-icons/fa'

const User = () => {
    return (
        <div>
            <Navbar />
            <div className="flex container my-6">
                <Sidebar />
                <div className="bg-white rounded shadow w-4/5 ml-4">
                    <div className="flex flex-col">
                        <div className="flex justify-between px-6 py-4">
                            <div className="text-xl text-gray-700 font-semibold">
                                Daftar User
                            </div>
                            <button className="text-white rounded px-4 w-52 flex items-center justify-center py-2 focus:outline-none bg-vermilion-500 hover:bg-vermilion-600 text-sm">
                                <FaPlus />
                                <p className="ml-2">Tambah User</p>
                            </button>
                        </div>
                        <hr />
                        <div className="flex my-6">
                            <div className="flex px-6">
                                <input type="text" className="bg-white border w-full appearance-none rounded-l-full px-4 py-2 focus:outline-none" placeholder="Cari User" />
                                <button className="rounded-r-full bg-white border px-4 text-gray-600" type="button">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                        <div className="px-6 mb-6">
                            <table className="w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-gray-700 text-left py-2">Name</th>
                                        <th className="text-gray-700 text-left py-2">Gender</th>
                                        <th className="text-gray-700 text-left py-2">Status</th>
                                        <th className="text-gray-700 text-left py-2">Address</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, esse.</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum</td>
                                        <td className="py-2 text-gray-700">Lorem</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, esse.</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum</td>
                                        <td className="py-2 text-gray-700">Lorem</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, esse.</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum dolor</td>
                                        <td className="py-2 text-gray-700">Lorem ipsum</td>
                                        <td className="py-2 text-gray-700">Lorem</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
