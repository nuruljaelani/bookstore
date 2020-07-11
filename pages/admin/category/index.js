import React, {useState} from 'react'
import { Navbar } from '../../../components/admin/Navbar'
import { Sidebar } from '../../../components/admin/Sidebar'
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa'
import { ModalAdd, ModalEdit } from "../../../components/admin/ModalCategory";
import useSWR from 'swr';
import Axios from "axios"

const fetcher = url => fetch(url).then(r => r.json())

const Category = () => {

    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [category, setCategory] = useState('')

    const handleModalAdd = () => {
        setModalAdd(!modalAdd)
    }

    const handleModalEdit = () => {
        setModalEdit(!modalEdit)
    }

    const handleChange = e => {
        setCategory(e.target.value)
    }

    const onSubmit = data => {
        Axios.post("http://localhost:5000/api/category", data)
            .then(result => {
                console.log(result)
                setModal(false)
            })
            .catch(err => console.log(err))
    }

    const editCategory = (id) => {
        Axios.get(`http://localhost:5000/api/category/${id}`)
            .then(response => {
                setCategory(response.data.name)
                setModalEdit(true)
            })
            .catch(err => console.log(err))
    }

    const {data,error} = useSWR("http://localhost:5000/api/category", fetcher, {refreshInterval:1000})

    if (error) return console.log(error)
    if (!data) return "Loading...";

    return (
        <div>
            <Navbar />
            <div className="flex container my-6">
                <Sidebar />
                <div className="bg-white rounded shadow w-4/5 ml-4">
                    <div className="flex flex-col">
                        <div className="flex justify-between px-6 py-4">
                            <div className="text-xl text-gray-700 font-semibold">
                                Daftar Kategori
                            </div>
                            <button className="text-white rounded px-4 w-52 flex items-center justify-center py-2 focus:outline-none bg-vermilion-500 hover:bg-vermilion-600 text-sm" onClick={handleModalAdd}>
                                <FaPlus />
                                <p className="ml-2">Tambah Kategori</p>
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
                                        <th className="text-gray-700 text-left py-2">Nama Kategori</th>
                                        <th className="text-gray-700 text-left py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {data.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="font-medium p-2 w-4/5">{item.name}</td>
                                            <td className="p-2 flex w-1/5">
                                                <button type="button" onClick={()=>editCategory(item.id)} className="rounded px-4 items-center justify-center py-2 focus:outline-none bg-teal-500 hover:bg-teal-600 text-white">
                                                    <FaEdit />
                                                </button>
                                                <button className="rounded px-4 items-center justify-center py-2 focus:outline-none bg-red-500 hover:bg-red-600 text-white ml-2">
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ModalAdd modal={modalAdd} modalHandler={handleModalAdd} onSubmit={onSubmit} />
            <ModalEdit modal={modalEdit} onSubmit={onSubmit} modalHandler={handleModalEdit} handleChange={handleChange} value={category} />
        </div>
    )
}

export default Category
