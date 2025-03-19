import React from 'react';
import { Link } from 'react-router-dom';

const ServerError: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-bold mb-4">500</h1>
            <h2 className="text-2xl font-semibold mb-4">Server Error</h2>
            <p className="text-gray-600 mb-8">
                Something went wrong on our end. Please try again later.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
};

export default ServerError; 