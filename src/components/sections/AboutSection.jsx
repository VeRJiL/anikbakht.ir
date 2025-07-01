import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const AboutSection = ({ isDarkMode, visibleElements }) => {
    const aboutCards = [
        {
            icon: Code,
            title: "Full Stack Development",
            description: "Expert in modern web technologies and frameworks",
            id: "about-card-1",
            animation: "animate-slide-in-left",
            delay: "0.2s"
        },
        {
            icon: Server,
            title: "System Architecture",
            description: "Microservices and scalable backend solutions",
            id: "about-card-2",
            animation: "animate-fade-in",
            delay: "0.4s"
        },
        {
            icon: Database,
            title: "Performance Optimization",
            description: "Database tuning and system optimization",
            id: "about-card-3",
            animation: "animate-slide-in-right",
            delay: "0.6s"
        }
    ];

    return (
        <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-animate
                        id="about-title"
                    >
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className={`text-lg leading-relaxed mb-12 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${visibleElements.has('about-text') ? 'animate-fade-in' : 'opacity-0'}`}
                        data-animate
                        id="about-text"
                    >
                        <p className="mb-6">
                            Results-driven Senior Full Stack Engineer with 8+ years of expertise in building high-performance
                            applications using Go, PHP, and JavaScript ecosystems. Demonstrated success in architecting
                            microservices, optimizing system performance, and leading technical initiatives.
                        </p>
                        <p>
                            Track record of increasing system performance by up to 30% and reducing
                            deployment times by 50% through modern architectural patterns and DevOps practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {aboutCards.map((card) => (
                            <div
                                key={card.id}
                                className={`text-center p-6 rounded-lg transition-all duration-300 hover-scale animate-float ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} ${visibleElements.has(card.id) ? card.animation : 'opacity-0'}`}
                                data-animate
                                id={card.id}
                                style={{animationDelay: card.delay}}
                            >
                                <card.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
                                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {card.title}
                                </h3>
                                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;