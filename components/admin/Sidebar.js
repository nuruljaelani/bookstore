import React, { useState } from 'react'
import Link from 'next/link'
import { FaHome, FaUsers, FaAngleDown } from 'react-icons/fa'
import { useRouter } from "next/router";

export const Sidebar = () => {

    const router = useRouter()

    const active = "flex text-gray-700 text-sm bg-gray-300 py-2 px-4"
    const inactive = "flex text-gray-700 text-sm py-2 px-4 hover:bg-gray-200"

    const [product, setProduct] = useState(false)

    const productDropdown = () => {
        setProduct(!product)
    }

    return (
        <>
            <div className="w-1/5">
                <div className="flex flex-col py-6 bg-white shadow rounded">
                    <Link href="/admin">
                        <a className={router.pathname == "/admin" ? active : inactive}>
                            <FaHome />
                            <p className="ml-2">Dashboard</p>
                        </a>
                    </Link>
                    <div className={product ? "text-sm rounded hover:bg-gray-200 px-4 py-2 flex items-center transition duration-700 ease-in-out text-gray-700" : "text-sm rounded hover:bg-gray-200 px-4 py-2 flex items-center text-gray-700"} onClick={productDropdown}>
                        <div className="w-11/12 inline-flex items-center">
                            <FaUsers size="1em" />
                            <p className="ml-2">Product</p>
                        </div>
                        <div className="w-1/12">    
                            <FaAngleDown size="1em" className={product ? "transform rotate-180 transition duration-500 ease-in-out items-end": "transition duration-500 ease-in-out"} />
                        </div>
                    </div>
                    <div className={product ? "text-sm" : "hidden"}>
                        <Link href="/admin/product">
                            <a className={router.pathname == "/admin/product" ? "flex text-gray-600 text-xs bg-gray-300 py-2 pl-8" : "flex text-gray-600 text-xs py-2 pl-8 hover:bg-gray-200"}>
                                <FaHome />
                                <p className="ml-2">Daftar Produk</p>
                            </a>
                        </Link>
                        <Link href="/admin/product/add">
                            <a className={router.pathname == "/admin/product/add" ? "flex text-gray-600 text-xs bg-gray-300 py-2 pl-8" : "flex text-gray-600 text-xs py-2 pl-8 hover:bg-gray-200"}>
                                <FaHome />
                                <p className="ml-2">Tambah Produk</p>
                            </a>
                        </Link>
                    </div>
                    <Link href="/admin/user">
                        <a className={router.pathname == "/admin/user" ? active : inactive}>
                            <FaUsers />
                            <p className="ml-2">Users</p>
                        </a>
                    </Link>
                    <Link href="/admin/category">
                        <a className={router.pathname == "/admin/category" ? active : inactive}>
                            <FaUsers />
                            <p className="ml-2">Categoris</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
