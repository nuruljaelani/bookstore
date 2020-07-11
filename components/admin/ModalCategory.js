import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup"
import Axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required().min(3)
})

export const ModalAdd = ({ modal, modalHandler, onSubmit }) => {

    const {register,handleSubmit,errors} = useForm({
        resolver: yupResolver(schema)
    })

    // const onSubmit = data => {
    //     Axios.post("http://localhost:5000/api/category", data)
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err))
    // }

    return (
    <>
        <div className={modal ? "flex justify-center items-center fixed w-full h-full inset-0" : "hidden"}>
            <div className="bg-gray-900 opacity-75 h-screen w-full absolute" onClick={modalHandler}></div>
            <div className="flex flex-col items-center">
                <div className="bg-white shadow rounded-md text-sm overflow-hidden w-100 z-50">
                    <p className="text-gray-700 text-base font-semibold p-4">Tambah Kategori</p>
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-4 px-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Nama Kategori</label>
                                <input type="text" name="name" className="border rounded bg-white p-2 text-sm focus:outline-none focus:border-vermilion-500" ref={register} />
                                <p className="text-xs text-red-600">{errors.name?.message}</p>
                            </div>
                        </div>
                        <div className="flex justify-end my-2 mx-6">
                            <button type="submit" className="p-2 bg-vermilion-500 text-sm rounded hover:bg-vermilion-600 text-white shadow mr-2 focus:outline-none">Submit</button>
                            <button type="button" className="bg-gray-500 p-2 text-sm rounded hover:bg-gray-400 text-white shadow focus:outline-none" onClick={modalHandler}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )       
}


export const ModalEdit = ({ modal, modalHandler, onSubmit, handleChange, value }) => {

    const {register,handleSubmit,errors} = useForm({
        resolver: yupResolver(schema)
    })

    // const onSubmit = data => {
    //     Axios.post("http://localhost:5000/api/category", data)
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err))
    // }

    return (
    <>
        <div className={modal ? "flex justify-center items-center fixed w-full h-full inset-0" : "hidden"}>
            <div className="bg-gray-900 opacity-75 h-screen w-full absolute" onClick={modalHandler}></div>
            <div className="flex flex-col items-center">
                <div className="bg-white shadow rounded-md text-sm overflow-hidden w-100 z-50">
                    <p className="text-gray-700 text-base font-semibold p-4">Tambah Kategori</p>
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-4 px-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Nama Kategori</label>
                                <input type="text" name="name" className="border rounded bg-white p-2 text-sm focus:outline-none focus:border-vermilion-500" ref={register} value={value} onChange={handleChange} />
                                <p className="text-xs text-red-600">{errors.name?.message}</p>
                            </div>
                        </div>
                        <div className="flex justify-end my-2 mx-6">
                            <button type="submit" className="p-2 bg-vermilion-500 text-sm rounded hover:bg-vermilion-600 text-white shadow mr-2 focus:outline-none">Submit</button>
                            <button type="button" className="bg-gray-500 p-2 text-sm rounded hover:bg-gray-400 text-white shadow focus:outline-none" onClick={modalHandler}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )       
}