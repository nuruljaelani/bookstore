import React from 'react'
import { Navbar } from '../../components/admin/Navbar'
import { Sidebar } from '../../components/admin/Sidebar';

export default () => {

    return (
        <div>
            <Navbar />
            <div className="flex container my-6">
                <Sidebar />
                <div className="bg-white rounded shadow w-4/5 ml-4">
                    <div className="flex flex-col">
                        <div className="px-6 py-4 text-xl font-semibold text-gray-800">Aktivitas Hari ini</div>
                        <hr/>
                        <div className="flex my-6 mx-6 flex-wrap">
                            <div className="items-center p-2 border-l w-1/4 mt-3">
                                <p className="text-gray-600 font-semibold text-sm mb-4">Pesanan Masuk</p>
                                <span className="text-gray-700 font-semibold">38</span>
                            </div>
                            <div className="items-center p-2 border-l w-1/4 mt-3">
                                <p className="text-gray-600 font-semibold text-sm mb-4">Siap Dikirim</p>
                                <span className="text-gray-700 font-semibold">38</span>
                            </div>
                            <div className="items-center p-2 border-l w-1/4 mt-3">
                                <p className="text-gray-600 font-semibold text-sm mb-4">Komplain</p>
                                <span className="text-gray-700 font-semibold">38</span>
                            </div>
                            <div className="items-center p-2 border-l w-1/4 mt-3">
                                <p className="text-gray-600 font-semibold text-sm mb-4">Chat Belum dibaca</p>
                                <span className="text-gray-700 font-semibold">38</span>
                            </div>
                            <div className="items-center p-2 border-l w-1/4 mt-3">
                                <p className="text-gray-600 font-semibold text-sm mb-4">Ulasan belum dibaca</p>
                                <span className="text-gray-700 font-semibold">38</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
