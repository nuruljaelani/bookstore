import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import DatePicker from 'react-datepicker'

export const ProfileSection = () => {

    const [startDate,setStartDate] = useState(new Date())

    const handleChange = date => {
        setStartDate(date)
    }

    return (
        <div className="flex flex-col my-8 px-4 w-1/2">
            <form>
                <div className="flex text-sm items-center mb-6">
                    <label className="text-gray-600 w-1/3">Nama Lengkap</label>
                    <input type="text" className="w-2/3 appearance-none focus:outline-none border-b-2 bg-transparent focus:border-vermilion-500" />
                </div>
                <div className="flex text-sm items-center mb-6">
                    <label className="text-gray-600 w-1/3">Email</label>
                    <input type="text" className="w-2/3 appearance-none focus:outline-none border-b-2 bg-transparent focus:border-vermilion-500" />
                </div>
                <div className="flex text-sm items-center mb-6">
                    <label className="text-gray-600 w-1/3">Jenis Kelamin</label>
                    <select className="w-2/3 appearance-none bg-transparent border-b-2 focus:border-vermilion-500 focus:outline-none">
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                    </select>
                </div>
                <div className="flex text-sm items-center">
                    <label className="text-gray-600 w-1/3">Tanggal Lahir</label>
                    <DatePicker 
                    selected={startDate}
                    onChange={handleChange}
                    showYearDropdown
                    yearDropdownItemNumber={10}
                    scrollableYearDropdown
                    showPopperArrow={false}
                    dateFormat="dd/MM/yyyy"
                    />
                </div>
            </form>
        </div>
    )
}

export const AlamatSection = () => {
    return (
        <div className="flex flex-col my-8 px-4">
            <button type="button" className="flex items-center bg-vermilion-500 rounded px-8 py-2 text-white text-sm w-48 focus:outline-none hover:bg-vermilion-600">
                <FaPlus />
                <p className="ml-2">Tambah Alamat</p>
            </button>
        </div>
    )
}