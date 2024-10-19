import React from 'react'

const Cards = ({ data }) => {
    return (
        <div className='w-full md:w-[27vw] h-80 rounded-xl bg-slate-50 px-12 py-10 flex flex-col items-center justify-between'>
            <img className='w-16' src={data.img} alt="" />
            <div className='w-full h-32'>
            <h1 className='font-medium text-xl mb-2 text-[#FDA508]'>{data.heading}</h1>
            <h1 className='font-medium text-zinc-500'>{data.para}</h1>
            </div>
        </div>
    )
}

export default Cards