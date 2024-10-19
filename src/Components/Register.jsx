import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-full h-fit md:h-[120vh] bg-slate-200 md:px-20 pt-24 md:pt-10 pb-20'>
                <div className='w-full h-full bg-slate-50 rounded px-8 py-10 flex flex-col items-center'>
                    <h1 className='text-4xl mb-4 font-bold bg-gradient-to-r to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent leading-tight whitespace-nowrap'>
                        Register Form
                    </h1>
                    <form className='w-full md:w-2/3 h-3/5 mt-2'>
                        <div className='w-full h-fit flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Username</label>
                                <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="text" />
                            </div>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Email</label>
                                <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="email" />
                            </div>
                        </div>
                        <div className='w-full h-fit flex flex-col md:flex-row items-center gap-2 md:gap-8 mt-6 md:mt-4'>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Password</label>
                                <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="password" />
                            </div>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Confirm Password</label>
                                <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="password" />
                            </div>
                        </div>
                        <div className='w-full h-fit flex flex-col md:flex-row items-center gap-2 md:gap-8 mt-6 md:mt-4'>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Payment Info (any of [paypal email, upi id, gpay number, etc]) [Optional]</label>
                                <input className='w-full text-zinc-600 py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="password" />
                            </div>
                            <div className='w-full h-fit'>
                                <label className='text-zinc-400'>Payment Method [Optional]</label>
                                <select className='w-full py-2 px-4 mt-2 outline-none border border-[#3baaa885] focus:border-[#3BAAA9]' type="password">
                                    <option value="PayPal">PayPal</option>
                                    <option value="PhonePe">PhonePe</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Bank India">Bank India</option>
                                    <option value="Payeer">Payeer</option>
                                    <option value="PerfectMoney">PerfectMoney</option>
                                    <option value="BKash">BKash</option>
                                    <option value="TRX TRC20">TRX TRC20</option>
                                    <option value="USDT Binance">USDT Binance</option>
                                    <option value="USDT TRC20">USDT TRC20</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <h1 className='text-zinc-400 mt-4'>If you're signing up, then you are agreeing to our <Link className='text-blue-600 transition-colors duration-300 ease-in-out hover:text-blue-400'>Terms of Service.</Link></h1>
                    <button className='mt-6 py-3 px-8 border border-[#3BAAA9] font-medium text-zinc-500 transition-all duration-100 ease-in-out hover:bg-gradient-to-r to-[#F67122] from-[#3BAAA9] hover:border-none hover:text-white'>Register</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register