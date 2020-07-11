import React from 'react'
import { Sidebar } from '../../../components/admin/Sidebar'
import { Navbar } from '../../../components/admin/Navbar'

const Add = () => {
    return (
        <div>
            <Navbar />
            <div className="flex container my-6">
                <Sidebar />
                <div className="bg-white rounded shadow w-4/5 ml-4">
                    <div className="flex flex-col">
                        <div className="text-gray-800 font-semibold text-2xl py-4 px-6">Form Tambah Product</div>
                        <hr />
                        <form className="my-6 px-6 text-gray-700">
                            <div className="flex">
                                <label className="w-1/3">
                                    <p className="font-semibold">Gambar</p>
                                    <span className="text-2xs">Maksimal 1MB, format jpg, jpeg, png</span>
                                </label>
                                <input type="file" className="w-2/3 bg-white shadow border appearance-none px-4 py-2" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Nama/Judul buku
                                </label>
                                <input type="text" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Nama Penulis
                                </label>
                                <input type="text" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Penerbit
                                </label>
                                <input type="text" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Deskripsi
                                </label>
                                <textarea className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" rows="15"></textarea>
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Kategori
                                </label>
                                <select className="w-2/3 bg-white px-4 py-2 border focus:border-vermilion-500 focus:outline-none">
                                    <option>Filsafat</option>
                                    <option>Sastra & Novel</option>
                                    <option>Fiksi</option>
                                </select>
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Harga
                                </label>
                                <input type="number" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Status
                                </label>
                                <select className="w-2/3 bg-white px-4 py-2 border focus:border-vermilion-500 focus:outline-none">
                                    <option>Tersedia</option>
                                    <option>Kosong</option>
                                    <option>Preorder</option>
                                </select>
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Stock
                                </label>
                                <input type="number" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Berat buku
                                </label>
                                <input type="number" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" placeholder="berat dalam gram" />
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Dimensi
                                </label>
                                <div className="flex w-2/3 items-center justify-between">
                                    <span>Panjang</span>
                                    <input type="number" className="bg-white px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                                    <span>Lebar</span>
                                    <input type="number" className="bg-white px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <label className="w-1/3 font-semibold">
                                    Tebal Halaman
                                </label>
                                <input type="number" className="bg-white w-2/3 px-4 py-2 border appearance-none focus:border-vermilion-500 focus:outline-none" />
                            </div>
                            <div className="flex my-6">
                                <div className="w-1/3"></div>
                                <div className="flex w-2/3">
                                    <button type="button" className="bg-vermilion-500 px-10 py-2 text-white font-semibold text-sm hover:bg-vermilion-600">
                                        Simpan
                                    </button>
                                    <button type="reset" className="bg-gray-300 hover:bg-gray-400 text-sm font-semibold px-6 py-2 ml-4">
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
