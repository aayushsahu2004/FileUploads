import React from 'react'
import Header from './Header'
import Cards from './Cards'
import Footer from './Footer'

const Home = () => {
  const cardData = [
    {
      img: '/assets/upload-icon.png',
      heading: 'Telegram Bot & Terminal Upload',
      para: 'You can Upload your files using Normal Upload Page, Telegram BOT or Server Terminal'
    },
    {
      img: '/assets/storage-icon.png',
      heading: 'Unlimited Storage',
      para: "Don't worry about low space, There is no limit for Storage you can upload as you like."
    },
    {
      img: '/assets/download-icon.png',
      heading: '2 Click Download',
      para: "Users can download with just 2 easy clicks. no annoying ads or popups."
    },
    {
      img: '/assets/adds-icon.png',
      heading: 'No PopupAds',
      para: 'Enjoy downloading and surfing in our website without the interruption of PopupAds.'
    },
    {
      img: '/assets/unlimited-icon.png',
      heading: 'Unlimited Speed',
      para: 'Downloading has never been faster with our blazing fast servers.'
    },
    {
      img: '/assets/secure-icon.png',
      heading: 'Safe & Secure',
      para: 'With our advanced encryption method your files will be always safe with us.'
    }
  ]

  return (
    <div className='w-full h-screen'>
      <Header />
      <div className='w-full h-screen md:h-[110vh] bg-gradient-to-t from-[#85E2D0] to-[#3baaa9] md:pt-32 md:px-20 px-6'>
        <div className="w-full h-full flex items-center justify-between">
          <div className='w-full h-full flex flex-col justify-center gap-6 md:gap-9'>
            <h1 className='text-zinc-600 font-medium'>Presenting MedhyaTech</h1>
            <h1 className='text-white text-5xl md:text-6xl font-bold'>Developer's Solution for Monetisation</h1>
            <h1 className='text-zinc-600 font-medium'>Unlimited Storage, Easy 2 click Downloads (No Popup Ads)</h1>
            <button className='w-fit px-6 py-2 bg-red-600 md:shadow-2xl bg-gradient-to-r from-[#FB8D10] to-[#3baaa9] shadow-black uppercase font-medium text-white transition-shadow duration-300 ease-in-out hover:shadow-none'>Get Started</button>
          </div>
          <img className='w-1/2 hidden md:block' src="/assets/BG-img.png" alt="Background" />
        </div>
      </div>
      <div className='w-full h-[308vh] md:h-[145vh] bg-slate-200 relative'>
        <div className='w-full hidden md:block h-52 bg-[#85E2D0]'></div>
        <div className='w-full absolute -top-20 md:top-28 px-6 md:px-20 pb-20 flex flex-col md:flex-row md:flex-wrap justify-between gap-8'>
          {
            cardData.map((data, index) => (
              <Cards key={index} data={data} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home