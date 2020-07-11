import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { ProfileSection, AlamatSection } from "../../components/account/Section";

const Account = () => {

    const active = "py-4 border-b-4 border-vermilion-500 w-full focus:outline-none"
    const inactive = "py-4 border-b-4 border-gray-200 w-full focus:outline-none"

    const [profil, setProfil] = useState(true)
    const [alamat, setAlamat] = useState(false)
    const [pesanan, setPesanan] = useState(false)
    const [pembayaran, setPembayaran] = useState(false)
    const [pengaturan, setPengaturan] = useState(false)

    const profilActive = () => {
        setProfil(true)
        setAlamat(false)
        setPembayaran(false)
        setPengaturan(false)
        setPesanan(false)
    }
    const alamatActive = () => {
        setProfil(false)
        setAlamat(true)
        setPembayaran(false)
        setPengaturan(false)
        setPesanan(false)
    }
    const pesananActive = () => {
        setProfil(false)
        setAlamat(false)
        setPembayaran(false)
        setPengaturan(false)
        setPesanan(true)
    }
    const pembayaranActive = () => {
        setProfil(false)
        setAlamat(false)
        setPembayaran(true)
        setPengaturan(false)
        setPesanan(false)
    }
    const pengaturanActive = () => {
        setProfil(false)
        setAlamat(false)
        setPembayaran(false)
        setPengaturan(true)
        setPesanan(false)
    }

    let section;
    if (profil) {
        section = <ProfileSection />
    }
    else if(alamat) {
        section = <AlamatSection />
    }

    return (
        <div>
            <Navbar />
            <div className="container my-16 px-4 md:px-16 lg:px-20">
                <div className="flex bg-white border justify-between">
                    <button className={profil ? active : inactive} onClick={profilActive}>Profil</button>
                    <button className={alamat ? active : inactive} onClick={alamatActive}>Alamat</button>
                    <button className={pesanan ? active : inactive} onClick={pesananActive}>Pesanan</button>
                    <button className={pembayaran ? active : inactive} onClick={pembayaranActive}>Pembayaran</button>
                    <button className={pengaturan ? active : inactive} onClick={pengaturanActive}>Pengaturan</button>
                </div>
                { section }
            </div>
        </div>
    )
}

export default Account
