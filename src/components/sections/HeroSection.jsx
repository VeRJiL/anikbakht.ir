import React from 'react';
import { ChevronDown, Linkedin } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import AnimatedCounter from '../common/AnimatedCounter';
import { achievements } from '../../data/achievements';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-teal-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-teal-400/30"></div>
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <FloatingParticles />
            </div>

            <div className="relative z-10 text-center text-white px-6">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in drop-shadow-lg text-white">
                        Arash Nikbakht
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90 drop-shadow-md animate-slide-in-left">
                        Senior Full Stack Engineer
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-slide-in-right">
                        8+ Years Building High-Performance Applications
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover-scale animate-float"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            <achievement.icon className="w-8 h-8 mx-auto mb-2 text-white animate-pulse" />
                            <AnimatedCounter
                                end={parseInt(achievement.metric)}
                                suffix={achievement.metric.replace(/\d+/g, '')}
                            />
                            <div className="text-sm text-white/80">{achievement.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-24 md:mb-0">
                    <a
                        href="#about"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View My Work
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anikbakht/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        <Linkedin className="w-5 h-5 inline mr-2" />
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white" />
            </div>
        </section>
    );
};

export default HeroSection;