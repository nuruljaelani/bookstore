import React from 'react'
import { Navbar } from '../../../components/admin/Navbar'
import { Sidebar } from '../../../components/admin/Sidebar'
import { FaPlus, FaSearch } from 'react-icons/fa'


const Product = () => {
    return (
        <div>
            <Navbar />
            <div className="flex container my-6">
                <Sidebar />
                <div className="bg-white rounded shadow w-4/5 ml-4">
                    <div className="flex flex-col">
                        <div className="flex justify-between px-6 py-4">
                            <div className="text-xl text-gray-700 font-semibold">
                                Daftar Produk
                            </div>
                            <button className="text-white rounded px-4 w-52 flex items-center justify-center py-2 focus:outline-none bg-vermilion-500 hover:bg-vermilion-600 text-sm">
                                <FaPlus />
                                <p className="ml-2">Tambah Produk</p>
                            </button>
                        </div>
                        <hr />
                        <div className="flex my-6">
                            <div className="flex px-6">
                                <input type="text" className="bg-white border w-full appearance-none rounded-l-full px-4 py-2 focus:outline-none" placeholder="Cari Buku, Penulis, Penerbit" />
                                <button className="rounded-r-full bg-white border px-4 text-gray-600" type="button">
                                    <FaSearch />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm mr-2 font-semibold text-gray-700">Urutkan</div>
                                <select className="border text-sm px-2 py-2 rounded">
                                    <option>Terpopuler</option>
                                    <option>Terbaru</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-6 mb-6">
                            <table className="w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-gray-700 text-left py-2">Nama Buku</th>
                                        <th className="text-gray-700 text-left py-2">Penulis</th>
                                        <th className="text-gray-700 text-left py-2">Status</th>
                                        <th className="text-gray-700 text-left py-2">Stok</th>
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

export default Product
