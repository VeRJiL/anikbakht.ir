import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const AboutSection = ({ isDarkMode, visibleElements }) => {
    const aboutCards = [
        {
            icon: Code,
            title: "Full Stack Development",
            description: "Go, PHP, NestJS, React, TypeScript, and modern frameworks",
            id: "about-card-1",
            animation: "animate-slide-in-left",
            delay: "0.2s"
        },
        {
            icon: Server,
            title: "Microservices Architecture",
            description: "SOA patterns, RabbitMQ messaging, and scalable solutions",
            id: "about-card-2",
            animation: "animate-fade-in",
            delay: "0.4s"
        },
        {
            icon: Database,
            title: "Performance Optimization",
            description: "Redis caching, database indexing, and system tuning",
            id: "about-card-3",
            animation: "animate-slide-in-right",
            delay: "0.6s"
        }
    ];

    return (
        <section id="about" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-6 max-w-5xl">
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
                            Results-driven Senior Full Stack Engineer with 9+ years of expertise in building scalable
                            applications using Go, PHP, Node.js (NestJS), and modern JavaScript/TypeScript ecosystems.
                            Demonstrated success in architecting microservices, implementing SOA patterns, and leading
                            technical initiatives including mentoring development teams.
                        </p>
                        <p>
                            Proven track record in optimizing system performance, implementing CI/CD pipelines, and
                            delivering complex solutions using Redis caching, RabbitMQ messaging, and comprehensive
                            testing frameworks. Achieved 85% code coverage and reduced production bugs by 65%.
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

            {/* Section Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </section>
    );
};

export default AboutSection;