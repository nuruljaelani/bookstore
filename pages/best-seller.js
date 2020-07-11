import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer';

const BestSeller = () => {


    return (
        <>
            <Navbar />
            <div className="flex my-8 md:my-12 lg:my-16 container px-2 md:px-10 lg:px-16">
                <div className="hidden md:block w-1/5">
                    <div className="bg-white shadow rounded">
                        <div className="px-4 py-2 text-gray-800 font-semibold text-xl">Filter</div>
                        <hr/>
                        <div className="flex flex-col py-4 px-4">
                            <div className="text-gray-700 font-semibold mb-2">Range Harga</div>
                            <div className="flex flex-col text-xs">
                                <label className="text-gray-600">Minimum</label>
                                <input type="text" className="bg-white rounded border p-1 appearance-none focus:outline-none"/>
                            </div>
                            <div className="flex flex-col text-xs">
                                <label className="text-gray-600">Maksimum</label>
                                <input type="text" className="bg-white rounded border p-1 appearance-none focus:outline-none"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/5 ml-0 md:ml-4">
                    <div className="flex bg-vermilion-400 rounded py-2 items-center px-2 md:px-6">
                        <div className="text-white text-sm mr-2 font-semibold">Urutkan</div>
                        <select className="bg-white text-sm px-2 py-2 rounded">
                            <option>Terpopuler</option>
                            <option>Terbaru</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_22.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Cinta Yang Bodoh Harus Diakhiri</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Artie Ahmad</div>
                                <div className="text-gray-900 font-medium">Rp 74.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_10_34.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Filsafat Seni</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Mikhail</div>
                                <div className="text-gray-900 font-medium ">Rp 93.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_10_49.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Fihi Ma Fihi</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Jalaludin Rumi</div>
                                <div className="text-gray-900 font-medium">Rp 81.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_07.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Enaknya berdebat dengan Orang Goblok</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Puthut Ea</div>
                                <div className="text-gray-900 font-medium">Rp 69.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_55.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Tuhan Maha Asyik</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Sujiwo Tedjo</div>
                                <div className="text-gray-900 font-medium">Rp 77.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white mt-4 text-sm overflow-hidden w-1/2 md:w-1/4 px-1 md:px-2">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_09_51.jpg" alt=""/>
                            </div>
                            <div className="px-2 py-1 border">
                                <div className="font-medium text-gray-700 h-16 truncate">Tindakan tindakan kecil perlawanan</div>
                                <div className="font-normal text-gray-600 text-xs truncate">Steve crawsaw</div>
                                <div className="text-gray-900 font-medium">Rp 85.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BestSeller