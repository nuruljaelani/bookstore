import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="bg-gray-200 w-full mt-6 py-8">
                <div className="container px-4 md:px-12 lg:px-16 mb-20">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <div className="text-gray-700 font-medium text-sm">Belanja</div>
                            <div className="mt-4">
                                <ul className="text-xs text-gray-600">
                                    <li className="mb-2">Cara Order</li>
                                    <li className="mb-2">Cek Ongkir</li>
                                    <li className="mb-2">Metode Pembayaran</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-700 font-medium text-sm">Lainnya</div>
                            <div className="mt-4">
                                <ul className="text-xs text-gray-600">
                                    <li className="mb-2">Syarat & Ketentuan</li>
                                    <li className="mb-2">Kebijakan & Privasi</li>
                                    <li className="mb-2">Tentang Kami</li>
                                    <li className="mb-2">Bantuan</li>
                                    <li className="mb-2">Hubungi Kami</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-700 font-medium text-sm mb-4">Pembayaran</div>
                            <img src="/payment2.png" className="w-32 h-8 lg:w-52 lg:h-16" />
                            <div className="text-gray-700 font-medium text-sm my-4">Pengiriman</div>
                            <img src="/delivery.png" className="w-32 h-6 lg:w-48 lg:h-6" />
                        </div>
                        <div>
                            <div className="text-gray-700 font-medium text-sm mb-4">Ikuti kami</div>
                            <div className="flex">
                                <img src="/icons/007-instagram-2.svg" className="w-4 h-4 lg:w-6 lg:h-6" />
                                <img src="/icons/012-facebook.svg" className="w-4 h-4 lg:w-6 lg:h-6 mx-2" />
                                <img src="/icons/008-twitter.svg" className="w-4 h-4 lg:w-6 lg:h-6" />
                            </div>
                            <div className="mt-4 mb-10 flex">
                                <img src="/icons/google-play.png" className="w-16 h-6 md:w-20 md:h-8 lg:w-30 lg:h-8 mr-2" />
                                <img src="/icons/app-store.png" className="w-16 h-6 md:w-20 md:h-8 lg:w-30 lg:h-8" />
                            </div>
                            <p className="text-sm text-gray-600">&copy; 2020 | tokobuku.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
