import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navigation = ({ isDarkMode, toggleDarkMode, isScrolled }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? (isDarkMode ? 'text-white' : 'text-gray-800') : 'text-white'}`}>
                        Arash Nikbakht
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`transition-colors duration-300 ${
                                        isScrolled
                                            ? (isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600')
                                            : 'text-gray-200 hover:text-white'
                                    }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-colors duration-300 ${
                                isScrolled
                                    ? (isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100')
                                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;