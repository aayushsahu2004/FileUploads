import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='w-full'>
            <div className='w-full h-14 bg-white fixed z-50 top-0 left-0 px-6 md:px-20 flex items-center justify-between'>
                <Link to='/' className='font-bold text-2xl text-[#F67122]'>Medhya<span className='text-[#3BAAA9]'>Tech</span></Link>
                {
                    showMenu ? (<i onClick={() => setShowMenu(false)} className="ri-close-line text-3xl md:hidden"></i>) : (<i onClick={() => setShowMenu(true)} className="ri-menu-3-fill text-3xl md:hidden"></i>)
                }
                <div className='min-w-96 h-full hidden md:flex items-center justify-between gap-6'>
                    <div className='w-80 h-full flex items-center gap-6 font-medium text-zinc-700'>
                        <Link className='transition-colors duration-300 ease-in-out hover:text-[#3baaa9]'>Uploads Files</Link>
                        <Link className='transition-colors duration-300 ease-in-out hover:text-[#3baaa9]'>Make Money</Link>
                        <Link className='transition-colors duration-300 ease-in-out hover:text-[#3baaa9]'>Premium</Link>
                    </div>
                    <div className='w-56 h-full flex items-center justify-between'>
                        <Link to='/login' className='px-6 py-2 font-medium bg-gradient-to-r from-[#F67122] to-[#3BAAA9]'>Login</Link>
                        <Link to='/register' className='px-6 py-2 font-medium hover:bg-gradient-to-r from-[#F67122] to-[#3BAAA9]'>Register</Link>
                    </div>
                </div>
            </div>

            <div className={`w-72 h-screen md:hidden bg-red-600 fixed z-40 right-0 transition-transform duration-500 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>

            </div>
        </div>
    )
}

export default Header