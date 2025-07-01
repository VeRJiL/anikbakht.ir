import React, { useState } from 'react';
import TechIcon from './TechIcon';

const SkillBar = ({ skill, level, tech, isDarkMode }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="mb-6 group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                    <div className={`transform transition-all duration-300 ${isHovered ? 'scale-110 animate-bounce' : 'scale-100'}`}>
                        <TechIcon tech={tech} className="w-8 h-8" />
                    </div>
                    <span className={`text-base font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {skill}
          </span>
                </div>
                <span className={`text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {level}%
        </span>
            </div>
            <div className={`w-full rounded-full h-3 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'} backdrop-blur-sm`}>
                <div
                    className={`bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${isHovered ? 'animate-glow' : ''}`}
                    style={{ width: `${level}%` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;