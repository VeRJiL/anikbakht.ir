import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`py-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
            <div className="container mx-auto px-6 text-center">
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                    © 2025 Arash Nikbakht. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
