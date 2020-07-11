import React from 'react'
import Swiper from 'react-id-swiper'

export const FlashSaleSlider = () => {

    const params = {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        ContainerEl: 'div',
        containerClass: 'swiper-container',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        speed: 500
    }
  

    return (
        <>
            <div className="hidden md:flex flex-col container px-4 md:px-12 lg:px-16 my-4">
                <div className="flex text-gray-800 justify-between items-center">
                    <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium">Flash Sale</p>
                    <p className="text-gray-600 text-sm">Lihat Semua</p>
                </div>
                <div className="flex flex-col md:flex-row my-4 justify-between">
                    <Swiper {...params}>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_01.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">Orang miskin dilarang sekolah</div>
                                <div className="font-normal text-gray-600 text-xs">Puthut Ea</div>
                                <div className="text-gray-900 font-medium">Rp 50.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_20.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">Marxisme untuk pemula</div>
                                <div className="font-normal text-gray-600 text-xs">Rupert Woodfin</div>
                                <div className="text-gray-900 font-medium ">Rp 40.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_37.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">Panggung komunikasi politik</div>
                                <div className="font-normal text-gray-600 text-xs">Dr. Gun gun heryanto</div>
                                <div className="text-gray-900 font-medium">Rp 78.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">Media kooperasi & kooperasi media</div>
                                <div className="font-normal text-gray-600 text-xs">Dave boyle</div>
                                <div className="text-gray-900 font-medium">Rp 72.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_08_46.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">This is why i need you</div>
                                <div className="font-normal text-gray-600 text-xs">Brian khrisna</div>
                                <div className="text-gray-900 font-medium">Rp 80.000</div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border text-sm overflow-hidden w-40">
                            <div className="items-center w-full">
                                <img src="/images/books/berdikaribook_I_2019_Feb_10_02_09_51.jpg" alt=""/>
                            </div>
                            <div className="px-2 my-1">
                                <div className="font-medium text-gray-700 h-16">Tindakan tindakan kecil perlawanan</div>
                                <div className="font-normal text-gray-600 text-xs">Steve crawsaw</div>
                                <div className="text-gray-900 font-medium">Rp 85.000</div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
