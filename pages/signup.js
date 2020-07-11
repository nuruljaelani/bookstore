import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Link from 'next/link'

const Signup = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="flex py-6 md:py-10 lg:py-16 px-2 md:px-10 lg:px-48">
                <div className="hidden md:block w-1/2 px-4">
                    <img src="/undraw_authentication_fsn5.svg" />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-6">
                    <div className="flex flex-col bg-white rounded shadow border border-gray-200 py-4">
                        <div className="flex px-4 lg:px-8 justify-between items-center mb-4">
                            <p className="text-xl text-gray-800 font-semibold">Daftar</p>
                            <div className="flex text-xs text-gray-600">
                                Suadah punya akun ? 
                                <Link href="/login"><a className="text-vermilion-500">Login</a></Link>
                            </div>
                        </div>
                        <hr/>
                        <form className="my-6">
                            <div className="flex flex-col mb-4 px-4 lg:px-8">
                                <label className="text-sm text-gray-700 font-semibold">
                                    Email
                                </label>
                                <input type="text" className="bg-white border px-4 py-2 rounded focus:outline-none focus:border-vermilion-500" />
                            </div>
                            <div className="flex flex-col mb-4 px-4 lg:px-8">
                                <label className="text-sm text-gray-700 font-semibold">
                                    Username
                                </label>
                                <input type="text" className="bg-white border px-4 py-2 rounded focus:outline-none focus:border-vermilion-500" />
                            </div>
                            <div className="flex flex-col mb-4 px-4 lg:px-8">
                                <label className="flex justify-between items-center text-sm text-gray-700 font-semibold">
                                    Password
                                    <p className="text-vermilion-500 text-xs font-medium">Lupa password ?</p>
                                </label>
                                <input type="password" className="bg-white border px-4 py-2 rounded focus:outline-none focus:border-vermilion-500" />
                            </div>
                            <div className="flex mb-4 px-4 lg:px-8 items-start">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-xs text-gray-600">Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi Tokobuku.com</p>
                            </div>
                            <div className="flex px-4 lg:px-8">
                                <button type="button" className="w-full bg-vermilion-500 hover:bg-vermilion-600 text-white rounded text-sm font-semibold px-10 py-2">
                                    Daftar
                                </button>
                            </div>
                        </form>
                        <hr />
                        <div className="flex flex-col my-4 px-4 lg:px-8">
                            <p className="text-sm text-center text-gray-600">Atau login dengan</p>
                            <div className="flex mt-4">
                                <button className="bg-gray-100 flex items-center border w-1/2 rounded py-2 px-4 hover:bg-gray-200 mr-2">
                                    <img src="/icons/001-google.svg" className="w-6 mr-4" />
                                    Google
                                </button>
                                <button className="bg-gray-100 flex items-center border w-1/2 rounded py-2 px-4 hover:bg-gray-200">
                                    <img src="/icons/019-facebook-2.svg" className="w-6 mr-4" />
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
