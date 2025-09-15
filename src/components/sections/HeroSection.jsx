import React from 'react';
import { ChevronDown, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';
import { achievements } from '../../data/achievements';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50">
            {/* Modern Geometric Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-purple-600/5 to-transparent"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200/50 rounded-2xl rotate-12"></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 bg-blue-600/10 rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-purple-200/50 rotate-45"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Profile Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src="/assets/images/Arash-Nikbakht.jpg"
                                        alt="Arash Nikbakht"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-0.5 bg-blue-600"></div>
                                <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Senior Full Stack Engineer</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Arash
                                <span className="block text-blue-600">Nikbakht</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Crafting scalable applications and microservices architecture with
                                <span className="font-semibold text-gray-900"> 9+ years</span> of expertise in
                                Go, PHP, and modern JavaScript ecosystems.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#about"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="flex gap-3">
                                <a
                                    href="mailto:arash.nykbakht@gmail.com"
                                    className="inline-flex items-center justify-center px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/anikbakht/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl w-fit">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-700 font-medium text-sm">Available for Remote Opportunities</span>
                        </div>
                    </div>

                    {/* Right Column - Stats Cards */}
                    <div className="grid grid-cols-2 gap-6 lg:ml-12">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <achievement.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <div className="w-2 h-2 bg-blue-600 rounded-full opacity-50"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-gray-900">
                                        <AnimatedCounter
                                            end={parseInt(achievement.metric)}
                                            suffix={achievement.metric.replace(/\d+/g, '')}
                                            className="text-3xl font-bold text-gray-900"
                                        />
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">{achievement.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center space-y-2 animate-bounce">
                    <div className="text-xs text-gray-500 font-medium">Scroll</div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;