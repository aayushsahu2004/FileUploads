import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import NotFound from '../Components/NotFound'
import Login from '../Components/Login'
import Register from '../Components/Register'

const RouterContext = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default RouterContext