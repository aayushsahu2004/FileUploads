import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-full h-fit md:h-[115vh] bg-slate-200 md:px-20 pt-24 md:pt-10 pb-20'>
                <div className='w-full h-full bg-slate-50 rounded py-10 px-8 flex flex-col items-center'>
                    <h1 className='text-4xl mb-4 font-bold bg-gradient-to-r to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent leading-tight whitespace-nowrap'>
                        Login Form
                    </h1>
                    <form className='w-full md:w-5/12 h-1/2 flex flex-col items-center'>
                        <div className='w-full h-fit'>
                            <label className='text-zinc-400'>Username</label>
                            <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="text" />
                        </div>
                        <div className='w-full h-fit mt-6'>
                            <label className='text-zinc-400'>Password</label>
                            <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="text" />
                        </div>
                        <div className='w-64 h-12 self-end mt-4 flex items-center justify-between'>
                            <Link className='text-blue-600 transition-colors duration-300 ease-in-out hover:text-blue-400'>Forgot Password?</Link>
                            <button className='h-full px-8 border border-black font-medium text-zinc-500 transition-all duration-100 ease-in-out hover:bg-gradient-to-r to-[#F67122] from-[#3BAAA9] hover:border-none hover:text-white'>Login</button>
                        </div>
                    </form>
                    <h1 className='text-4xl text-center mt-16 mb-8 md:mb-4 font-bold bg-gradient-to-r to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent leading-tight md:whitespace-nowrap'>
                        Don't have an Account ?
                    </h1>
                    <Link to='/register' className='py-3 px-8 border border-[#3BAAA9] font-medium text-zinc-500 transition-all duration-100 ease-in-out hover:bg-gradient-to-r to-[#F67122] from-[#3BAAA9] hover:border-none hover:text-white'>Register</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login