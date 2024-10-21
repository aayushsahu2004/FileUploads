import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import NotFound from '../Components/NotFound'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Premium from '../Components/Premium'

const RouterContext = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/premium' element={<Premium />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default RouterContext