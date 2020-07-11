import React from 'react'

const NewestBook = () => {
    return (
        <>
            <div className="flex flex-col container px-4 md:px-12 lg:px-16 my-4">
                <div className="flex text-gray-800 justify-between items-center">
                    <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium">Buku Terbaru</p>
                    <p className="text-gray-600 text-sm">Lihat Semua</p>
                </div>
                <div className="flex flex-wrap my-2 justify-between">
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
                        <div className="items-center w-full">
                            <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_22.jpg" alt=""/>
                        </div>
                        <div className="px-2 py-1 border">
                            <div className="font-medium text-gray-700 h-16 truncate">Cinta Yang Bodoh Harus Diakhiri</div>
                            <div className="font-normal text-gray-600 text-xs truncate">Artie Ahmad</div>
                            <div className="text-gray-900 font-medium">Rp 74.000</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
                        <div className="items-center w-full">
                            <img src="/images/books/berdikaribook_I_2019_Feb_10_02_10_34.jpg" alt=""/>
                        </div>
                        <div className="px-2 py-1 border">
                            <div className="font-medium text-gray-700 h-16 truncate">Filsafat Seni</div>
                            <div className="font-normal text-gray-600 text-xs truncate">Mikhail</div>
                            <div className="text-gray-900 font-medium ">Rp 93.000</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
                        <div className="items-center w-full">
                            <img src="/images/books/berdikaribook_I_2019_Feb_10_02_10_49.jpg" alt=""/>
                        </div>
                        <div className="px-2 py-1 border">
                            <div className="font-medium text-gray-700 h-16 truncate">Fihi Ma Fihi</div>
                            <div className="font-normal text-gray-600 text-xs truncate">Jalaludin Rumi</div>
                            <div className="text-gray-900 font-medium">Rp 81.000</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
                        <div className="items-center w-full">
                            <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_07.jpg" alt=""/>
                        </div>
                        <div className="px-2 py-1 border">
                            <div className="font-medium text-gray-700 h-16 truncate">Enaknya berdebat dengan Orang Goblok</div>
                            <div className="font-normal text-gray-600 text-xs truncate">Puthut Ea</div>
                            <div className="text-gray-900 font-medium">Rp 69.000</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
                        <div className="items-center w-full">
                            <img src="/images/books/berdikaribook_I_2019_Feb_10_02_11_55.jpg" alt=""/>
                        </div>
                        <div className="px-2 py-1 border">
                            <div className="font-medium text-gray-700 h-16 truncate">Tuhan Maha Asyik</div>
                            <div className="font-normal text-gray-600 text-xs truncate">Sujiwo Tedjo</div>
                            <div className="text-gray-900 font-medium">Rp 77.000</div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-2 text-sm overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1">
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
        </>
    )
}

export default NewestBook
