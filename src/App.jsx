import React from 'react'
import RouterContext from './Routes/RouterContext'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className='w-full h-screen overflow-y-auto md:pt-14 '>
      <RouterContext />
    </div>
  )
}

export default App