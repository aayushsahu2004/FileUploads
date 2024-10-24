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
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Terminal Upload</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Telegram Upload Bot</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Telegram Group</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Check Links</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Our Links</a>
            </div>
            <div className='w-full md:w-1/3 h-fit md:h-full flex flex-col items-center gap-2'>
                <h1 className='font-bold text-xl text-white mb-3'>Legal</h1>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>FAQ</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>DMCA</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Contact us</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Privacy Policy</a>
                <a href='' className='text-slate-900 font-medium text-sm transition-colors duration-300 ease-in-out hover:text-[#F67122]'>Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Footer