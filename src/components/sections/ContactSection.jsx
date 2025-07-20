import React from 'react';
import { Mail, Linkedin, Trophy } from 'lucide-react';
import TechIcon from '../common/TechIcon';

const ContactSection = () => {
    const expertiseTechs = ['Go', 'React', 'PHP', 'Docker', 'Microservices', 'Performance Tuning'];

    return (
        <section id="contact" className="py-16 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 animate-fade-in">Get In Touch</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-in-left">
                        Ready to discuss your next project or opportunity? Let's connect!
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
                            <span className="text-green-400 text-sm font-medium">🟢 Available for Remote Opportunities</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Contact Information Row */}
                    <div className="grid md:grid-cols-2 gap-6 animate-slide-in-up">
                        <div className="flex items-center space-x-4 hover-scale group bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-300 text-sm mb-1">Email</p>
                                <a href="mailto:arash.nykbakht@gmail.com" className="text-white hover:text-blue-400 transition-colors font-medium">
                                    arash.nykbakht@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 hover-scale group bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                <Linkedin className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-300 text-sm mb-1">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/anikbakht/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors font-medium">
                                    linkedin.com/in/anikbakht
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Available for Opportunities Section */}
                    <div className="bg-gray-800 p-6 rounded-lg animate-slide-in-up hover-scale">
                        <h3 className="text-2xl font-bold mb-6 text-center">Available for Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* What I'm Looking For */}
                            <div className="p-4 bg-gray-700 rounded-lg hover-scale">
                                <h4 className="font-semibold text-blue-400 mb-4 flex items-center space-x-2">
                                    <Trophy className="w-5 h-5" />
                                    <span>What I'm Looking For</span>
                                </h4>
                                <ul className="text-gray-300 space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                        <span>Senior/Lead Engineering Roles</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                        <span>Microservices Architecture Projects</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                                        <span>Performance Optimization Challenges</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                                        <span>Technical Leadership Opportunities</span>
                                    </li>
                                </ul>
                            </div>

                            {/* My Expertise */}
                            <div className="p-4 bg-gray-700 rounded-lg hover-scale">
                                <h4 className="font-semibold text-blue-400 mb-4">My Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                    {expertiseTechs.map((tech) => (
                                        <span key={tech} className="px-3 py-2 bg-blue-600 text-white text-sm rounded-full hover-scale flex items-center space-x-2 group transition-all duration-300">
                                            <div className="flex-shrink-0">
                                                <TechIcon tech={tech} className="w-4 h-4 group-hover:animate-bounce" />
                                            </div>
                                            <span className="font-medium">{tech}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Me Button */}
                    <div className="text-center animate-slide-in-up">
                        <a
                            href="mailto:arash.nykbakht@gmail.com"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover-scale group font-medium"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                                <span>Contact Me</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Quick Stats Footer */}
                <div className="mt-12 text-center">
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-gray-300 font-medium">8+ Years Experience</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-gray-300 font-medium">Available Worldwide</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;