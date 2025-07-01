import React from 'react';

const TechIcon = ({ tech, className = "w-8 h-8" }) => {
    const techIcons = {
        'Go': (
            <div className={`${className} bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                Go
            </div>
        ),
        'PHP': (
            <div className={`${className} bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                PHP
            </div>
        ),
        'JavaScript': (
            <div className={`${className} bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-sm`}>
                JS
            </div>
        ),
        'React': (
            <div className={`${className} bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                ⚛️
            </div>
        ),
        'Docker': (
            <div className={`${className} bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                🐳
            </div>
        ),
        'MySQL': (
            <div className={`${className} bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                SQL
            </div>
        ),
        'PostgreSQL': (
            <div className={`${className} bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                PG
            </div>
        ),
        'Redis': (
            <div className={`${className} bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                R
            </div>
        ),
        'Node.js': (
            <div className={`${className} bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                NODE
            </div>
        ),
        'TypeScript': (
            <div className={`${className} bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                TS
            </div>
        ),
        'Laravel': (
            <div className={`${className} bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                L
            </div>
        ),
        'NestJS': (
            <div className={`${className} bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                NEST
            </div>
        ),
        'Microservices': (
            <div className={`${className} bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                🧩
            </div>
        ),
        'CI/CD': (
            <div className={`${className} bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                CI/CD
            </div>
        ),
        'REST APIs': (
            <div className={`${className} bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                API
            </div>
        ),
        'PWA': (
            <div className={`${className} bg-purple-700 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                PWA
            </div>
        ),
        'Testing': (
            <div className={`${className} bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                TEST
            </div>
        ),
        'Performance Optimization': (
            <div className={`${className} bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                ⚡
            </div>
        )
    };

    return (
        <div className="inline-block transform transition-all duration-300 hover:scale-110 hover:rotate-3">
            {techIcons[tech] || (
                <div className={`${className} bg-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                    ?
                </div>
            )}
        </div>
    );
};

export default TechIcon;