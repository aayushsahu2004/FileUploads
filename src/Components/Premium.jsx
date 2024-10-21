import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Premium = () => {
    const packages = [
        {
            img: '/assets/FreePackage.png',
            type: 'Free',
            headings: [
                'Download With Ads',
                '9 Seonds Wait Time',
                'Download Speed: 2MBps (16Mbps)',
                'Download Volume: 20GB Per Day',
                'Max file size : 0KB',
                "Can't Upload Files"
            ]
        },
        {
            img: '/assets/PremiumPackage.png',
            type: 'Premium',
            headings: [
                'Direct Dowload Any File',
                'Just click on Link and your download Starts',
                'No Wait, Instant Download',
                'Download Speed: 30MBps (240Mbps)',
                'Download Volume: Unlimited',
                "Max file size : 10GB",
                'Delete File : Unlimited (Your Files Never Delete)'
            ]
        },
        {
            img: '/assets/RegisterPackage.png',
            type: 'Registered',
            headings: [
                'Download With Ads',
                '9 Seonds Wait Time',
                'Download Speed: 2MBps (16Mbps)',
                'Download Volume: 20GB Per Day',
                'Max file size : 5GB',
                "Delete File : 30 days after last download"
            ]
        },
    ]

    const plans = [
        {
            price: '9',
            time: '30 DAYS',
            Monthly_Fee: '($9.0 /month)',
            img: [
                '/assets/buy-btc.jpeg',
                '/assets/buy-ltc.jpeg',
                '/assets/buy-eth.jpeg'
            ]
        },
        {
            price: '19',
            time: '90 DAYS',
            Monthly_Fee: '($6.3 /month)',
            img: [
                '/assets/buy-btc.jpeg',
                '/assets/buy-ltc.jpeg',
                '/assets/buy-eth.jpeg'
            ]
        },
        {
            price: '69',
            time: '365 DAYS',
            Monthly_Fee: '($5.7 /month)',
            img: [
                '/assets/buy-btc.jpeg',
                '/assets/buy-ltc.jpeg',
                '/assets/buy-eth.jpeg'
            ]
        }
    ]

    return (
        <div className='w-full h-screen '>
            <Header />
            <div className='w-full min-h-screen bg-slate-200 md:px-20 pt-24 md:pt-10 pb-20'>
                <h1 className='text-center font-bold text-3xl bg-gradient-to-r to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent leading-tight whitespace-nowrap'>Premium Packages</h1>
                <p className='text-center text-lg text-zinc-500 mt-4'>Choose from one of our packages below</p>
                <div className='w-full min-h-[96vh] md:h-[96vh] mt-6 flex flex-col md:flex-row items-center gap-8 md:gap-5 px-8 md:px-4'>
                    {
                        packages.map((data, index) => (
                            <div key={index} className='w-full md:w-1/3 h-full bg-slate-50 rounded text-center shadow-md py-10 px-6 flex flex-col items-center gap-3'>
                                <img className='w-32' src={data.img} alt="" />
                                <h1 className={`text-2xl font-bold mb-3 ${data.type === 'Premium' ? 'bg-gradient-to-r from-[#3BAAA9] to-[#F67122] bg-clip-text text-transparent' : 'text-[#8B97AA]'}`}>
                                    {data.type}
                                </h1>
                                {
                                    data.headings.map((heading, index) => (
                                        <h1 className={`${data.type === 'Premium' ? 'bg-gradient-to-r from-[#3BAAA9] to-[#F67122] bg-clip-text text-transparent' : 'text-zinc-400'}`} key={index}>{heading}</h1>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='w-full min-h-[75vh] md:h-[75vh] mt-16 px-6 md:px-0'>
                    <h1 className='w-fit font-bold text-3xl bg-gradient-to-r to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent leading-tight whitespace-nowrap border-b-4 border-[#3baaa85b]'>Premium plans</h1>
                    <div className='w-full min-h-[65vh] md:h-[65vh] mt-5 flex flex-col md:flex-row items-center gap-6 md:gap-5'>
                        {
                            plans.map((data, index) => (
                                <div key={index} className='w-full md:w-1/3 h-full bg-slate-50 pt-6 pb-8 md:py-4 px-4 text-center'>
                                    <div className='w-full h-32 pb-4 border-b-2 border-zinc-300 flex flex-col items-center justify-center gap-2'>
                                        <h1 className='text-4xl font-bold text-[#2990ff]'><span className='text-xl font-medium'>$</span>{data.price}</h1>
                                        <h1 className='text-sm font-bold text-[#85c0fed2]'>{data.time}</h1>
                                        <h1 className='text-lg font-bold text-[#2990ff]'>{data.Monthly_Fee}</h1>
                                    </div>
                                    <div className='w-full h-48 mt-5 flex flex-col items-center justify-between'>
                                        {
                                            data.img.map((img, index) => (
                                                <div key={index} className='md:w-1/2 h-14 rounded border-2 border-zinc-500'>
                                                    <img className='w-full h-full object-cover object-center' src={img} alt="" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className='w-full h-32 pb-4 border-b-2 border-zinc-300 flex flex-col items-center justify-center gap-2'>
                                <h1 className='text-4xl font-bold text-[#2990ff]'><span className='text-xl font-medium'>$</span>9</h1>
                                <h1 className='text-sm font-bold text-[#85c0fed2]'>30 DAYS</h1>
                                <h1 className='text-lg font-bold text-[#2990ff]'>($9.0 /month)</h1>
                            </div>
                            <div className='w-full h-48 mt-5 flex flex-col items-center justify-between'>
                                <div className='w-1/2 h-14 rounded border-2 border-zinc-500'>
                                    <img className='w-full h-full object-cover object-center' src="/assets/buy-btc.jpeg" alt="" />
                                </div>
                            </div> */}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Premium