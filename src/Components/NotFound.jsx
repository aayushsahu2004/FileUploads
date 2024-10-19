import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col px-3 md:px-10 bg-gray-100">
            <h1 className="text-5xl md:text-7xl text-center mb-4 text-gray-800 font-bold">404</h1>
            <h2 className="text-2xl md:text-3xl text-center mb-6 text-gray-600">Page Not Found</h2>
            <p className="text-center text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <button
                onClick={handleGoBack}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;