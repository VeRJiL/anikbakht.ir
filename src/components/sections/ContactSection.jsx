import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Trophy, Globe, Wifi, Laptop } from 'lucide-react';
import TechIcon from '../common/TechIcon';

const RemoteWorkIndicator = () => {
    const [activeIcon, setActiveIcon] = useState(0);
    const icons = [Globe, Wifi, Laptop];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIcon((prev) => (prev + 1) % icons.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center space-x-4">
            <div className="relative w-8 h-8 flex-shrink-0">
                {icons.map((Icon, index) => (
                    <Icon
                        key={index}
                        className={`w-8 h-8 text-blue-400 absolute top-0 left-0 transition-all duration-500 ${
                            activeIcon === index
                                ? 'opacity-100 scale-100 rotate-0'
                                : 'opacity-0 scale-75 rotate-45'
                        }`}
                    />
                ))}
            </div>
            <div className="flex-1">
                <p className="text-gray-300 text-sm mb-1">Work Style</p>
                <div className="flex items-center space-x-3">
          <span className="text-white hover:text-blue-400 transition-colors font-medium">
            5+ Years Remote Experience
          </span>
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactSection = () => {
    const expertiseTechs = ['Go', 'React', 'PHP', 'Docker', 'Microservices', 'Performance Tuning'];

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
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

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="animate-slide-in-left">
                            <h3 className="text-2xl font-bold mb-8">Let's Talk</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 hover-scale group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                        <Mail className="w-6 h-6 text-blue-400 animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-300 text-sm mb-1">Email</p>
                                        <a href="mailto:arash.nykbakht@gmail.com" className="text-white hover:text-blue-400 transition-colors font-medium">
                                            arash.nykbakht@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 hover-scale group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                        <Linkedin className="w-6 h-6 text-blue-400 animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-300 text-sm mb-1">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/anikbakht/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors font-medium">
                                            linkedin.com/in/anikbakht
                                        </a>
                                    </div>
                                </div>

                                <div className="hover-scale">
                                    <RemoteWorkIndicator />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-lg animate-slide-in-right hover-scale">
                            <h3 className="text-2xl font-bold mb-6">Available for Opportunities</h3>
                            <div className="space-y-4">
                                <div className="p-6 bg-gray-700 rounded-lg hover-scale">
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
                                <div className="p-4 bg-gray-700 rounded-lg hover-scale">
                                    <h4 className="font-semibold text-blue-400 mb-3">My Expertise</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {expertiseTechs.map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover-scale flex items-center space-x-2 group transition-all duration-300">
                        <div className="flex-shrink-0">
                          <TechIcon tech={tech} className="w-5 h-5 group-hover:animate-bounce" />
                        </div>
                        <span className="font-medium">{tech}</span>
                      </span>
                                        ))}
                                    </div>
                                </div>
                                <a
                                    href="mailto:arash.nykbakht@gmail.com"
                                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 text-center hover-scale group font-medium"
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <Mail className="w-5 h-5 group-hover:animate-bounce" />
                                        <span>Contact Me</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Footer */}
                <div className="mt-16 text-center">
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-gray-300 font-medium">8+ Years Experience</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-gray-300 font-medium">5+ Years Remote</span>
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