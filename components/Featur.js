import React from 'react'
import { BsBook, BsBookHalf, BsGift, BsLightning } from "react-icons/bs";

export const Featur = () => {
    return (
        <>
            <div className="hidden lg:flex flex-wrap container px-16 mt-0 lg:my-4 justify-between w-full">
                <div className="flex flex-col w-1/8">
                    <div className="flex justify-center items-center rounded-full h-28 w-28 bg-gray-200">
                    <BsBook size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Buku Populer</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsBookHalf size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Buku Terbaru</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsBookHalf size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Buku Bestseller</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsGift size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Promo</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsLightning size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Flash Sale</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsLightning size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Buku Preorder</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsLightning size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Penerbit</div>
                </div>
                <div className="flex flex-col w-1/8">
                    <div className="flex rounded-full justify-center items-center h-28 w-28 bg-gray-200">
                    <BsLightning size="4rem" />
                    </div>
                    <div className="text-center mt-2 text-vermilion-900 font-medium text-sm">Cek Ongkir</div>
                </div>
            </div>
                {/* Medium */}
            <div className="flex flex-wrap lg:hidden container px-4 md:px-10 mt-6 justify-between w-full">
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex justify-center items-center rounded-full h-16 w-16 bg-gray-200">
                    <BsBook size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Buku Populer</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsBookHalf size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Buku Terbaru</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsBookHalf size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Buku Bestseller</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsGift size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Promo</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsLightning size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Flash Sale</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsLightning size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Buku Preorder</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsLightning size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Penerbit</div>
                </div>
                <div className="flex flex-col flex-none w-1/4 md:w-20 items-center">
                    <div className="flex rounded-full justify-center items-center h-16 w-16 bg-gray-200">
                    <BsLightning size="2rem" />
                    </div>
                    <div className="text-center text-vermilion-900 font-medium text-xs">Cek Ongkir</div>
                </div>
            </div>
        </>
    )
}
