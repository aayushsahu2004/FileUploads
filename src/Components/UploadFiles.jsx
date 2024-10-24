import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const UploadFiles = () => {
    const [fileUpload, setFileUpload] = useState(true);
    const [remoteURL, setRemoteURL] = useState(false);
    const [copyFiles, setCopyFiles] = useState(false);
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-full min-h-screen bg-gradient-to-t from-[#85E2D0] to-[#3baaa9] px-4 text-center md:px-20 pt-36'>
                <div className='w-full h-fit flex flex-col items-center'>
                    <h1 className='text-5xl font-bold text-white'>Free Unlimited File Sharing Services</h1>
                    <p className='text-lg text-zinc-600 mt-4 font-medium'>Earn money by sharing your files.</p>
                    <div className='min-w-60 h-12 mt-12 flex items-center justify-between gap-6'>
                        <button className='w-fit h-full px-6 rounded md:shadow-2xl bg-gradient-to-r from-[#FB8D10] to-[#3baaa9] shadow-black uppercase font-medium text-white transition-shadow duration-300 ease-in-out hover:shadow-none'>Register</button>
                        <h1 className='font-bold uppercase text-white cursor-pointer'>upload Files</h1>
                    </div>
                </div>
            </div>
            <div className={`w-full ${copyFiles ? 'h-[65vh] md:h-[48vh]' : 'h-[52vh] md:h-52'} bg-slate-200 px-4 md:px-20 pb-20 relative`}>
                <div className='w-[91vw] md:w-[86.3vw] h-[55vh] rounded-sm absolute -top-40'>
                    <div className='w-full md:w-1/2 md:h-12 flex flex-col md:flex-row items-center gap-1'>
                        <h1 onClick={() => { setFileUpload(true); setRemoteURL(false); setCopyFiles(false); }} className={`w-full md:w-96 h-full px-6 py-3 md:py-0 cursor-pointer rounded-sm ${fileUpload ? 'text-[#3baaa9]' : 'text-zinc-400'} bg-slate-50 flex md:items-center md:justify-center font-bold uppercase`}>File Uplaod</h1>
                        <h1 onClick={() => { setFileUpload(false); setRemoteURL(true); setCopyFiles(false); }} className={`w-full h-full px-6 py-3 md:py-0 cursor-pointer rounded-sm ${remoteURL ? 'text-[#3baaa9]' : 'text-zinc-400'}  bg-slate-50 flex md:items-center md:justify-center font-bold uppercase`}>Remote URL upload </h1>
                        <h1 onClick={() => { setFileUpload(false); setRemoteURL(false); setCopyFiles(true); }} className={`w-full md:w-96 h-full px-6 py-3 md:py-0 cursor-pointer rounded-sm ${copyFiles ? 'text-[#3baaa9]' : 'text-zinc-400'} bg-slate-50 flex md:items-center md:justify-center font-bold uppercase`}>Copy files</h1>
                    </div>
                    <div className='w-full h-[47vh]'>
                        {
                            fileUpload && <div className='w-full h-full shadow-md px-10 py-12 bg-slate-50'>
                                <div className='w-full h-fit flex flex-col items-center justify-center'>
                                    <i class="ri-file-upload-fill text-8xl bg-gradient-to-t to-[#F67122] from-[#3BAAA9] bg-clip-text text-transparent"></i>
                                    <h1 className='text-3xl text-center mt-6 text-[#3baaa8bb]'>Drag and drop files here or click <span className='ml-2 cursor-pointer font-bold text-[#3baaa9]'>browse</span></h1>
                                </div>
                            </div>
                        }
                        {
                            remoteURL && <div className='w-full h-full bg-slate-50 shadow-md p-6'>
                                <h1 className='text-blue-500 text-lg cursor-pointer active:text-blue-300 md:hover:text-blue-300'>Register On site</h1>
                                <p className='text-lg text-zinc-500'>to use Remote URL upload</p>
                            </div>
                        }
                        {
                            copyFiles && <div className='w-full h-[60vh] bg-slate-50 shadow-md p-6'>
                                <h1 className='font-bold text-zinc-500 text-lg'>The File Links you trying to copy should be public.</h1>
                                <textarea rows={8} className='w-full mt-4 outline-none border border-[#3baaa858] resize-none px-4 py-2 focus:border-[#3baaa9]'></textarea>
                                <div className='w-full h-fit mt-6 md:mt-4 flex md:items-end md:justify-end'>
                                    <button className='px-5 py-2 text-end text-sm border border-zinc-400 font-medium md:hover:bg-gradient-to-r active:bg-gradient-to-r from-[#F67122] to-[#3BAAA9]'>Uplaod</button>
                                </div>

                            </div>
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default UploadFiles