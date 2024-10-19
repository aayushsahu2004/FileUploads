import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full h-full md:h-72 px-20 py-16 md:pt-10 bg-[#5B6A7F] flex flex-col md:flex-row items-center justify-between'>
            <div className='w-full md:w-1/3 h-fit md:h-full text-center'>
                <h1 className='font-bold text-2xl text-[#F67122]'>Medhya<span className='text-[#3BAAA9]'>Tech</span></h1>
                <h1 className='font-medium text-white text-sm mt-2 md:mt-4 mb-2'>© 2024 DevUploads - All Rights Reserved</h1>
                <h1 className='font-medium text-white text-sm'>Website by Medhya Technologies</h1>
            </div>
            <div className=' w-full md:w-1/3 h-fit md:h-full flex flex-col items-center gap-2'>
                <h1 className='font-bold text-xl text-white mb-3'>Ouick Links</h1>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Terminal Upload</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Telegram Upload Bot</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Telegram Group</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Check Links</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Our Links</Link>
            </div>
            <div className='w-full md:w-1/3 h-fit md:h-full flex flex-col items-center gap-2'>
                <h1 className='font-bold text-xl text-white mb-3'>Legal</h1>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>FAQ</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>DMCA</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Contact us</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Privacy Policy</Link>
                <Link className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Terms & Conditions</Link>
            </div>
        </div>
    )
}

export default Footer