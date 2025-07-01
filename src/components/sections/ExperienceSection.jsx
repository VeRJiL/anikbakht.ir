import React from 'react';
import { Terminal } from 'lucide-react';
import TypingAnimation from '../common/TypingAnimation';
import TechIcon from '../common/TechIcon';
import { experiences } from '../../data/experiences';

const ExperienceSection = ({ isDarkMode, visibleElements }) => {
    return (
        <section id="experience" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-animate
                        id="experience-title"
                    >
                        Work Experience
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 last:mb-0 ${visibleElements.has(`exp-${index}`) ? 'animate-slide-in-left' : 'opacity-0'}`}
                            data-animate
                            id={`exp-${index}`}
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-20 text-right mr-8">
                                    <span className="text-sm font-medium text-blue-600">{exp.year}</span>
                                </div>

                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 relative animate-pulse">
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-blue-200 transform -translate-x-1/2"></div>
                                    )}
                                </div>

                                <div className={`flex-grow p-6 rounded-lg transition-all duration-300 hover-scale ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h3 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                            {exp.role}
                                        </h3>
                                        {index === 0 && (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm text-green-500 font-medium">Currently Working</span>
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-lg text-blue-600 font-medium mb-4">{exp.company}</h4>

                                    {/* Typing Animation for Current Job */}
                                    {index === 0 && (
                                        <div className={`mb-4 p-3 rounded-lg font-mono text-sm ${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'} text-green-400`}>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Terminal className="w-4 h-4" />
                                                <span className="text-gray-400">~/specific-group $</span>
                                            </div>
                                            <div className="pl-6">
                                                <TypingAnimation text="func optimizePerformance() {
  // Migrating to microservices...
  services := []string{'auth', 'api', 'db'}
  for _, service := range services {
    deploy(service)
  }
  return 'Performance improved by 30%!'
}" speed={50} />
                                            </div>
                                        </div>
                                    )}

                                    <ul className="space-y-2 mb-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className={`flex items-start transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover-scale flex items-center space-x-1 group cursor-pointer"
                                            >
                        <TechIcon tech={tech} className="w-4 h-4 group-hover:animate-spin" />
                        <span>{tech}</span>
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;