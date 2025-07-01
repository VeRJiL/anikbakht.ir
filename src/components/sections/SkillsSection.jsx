import React from 'react';
import { Server, Code, Zap, Database, Trophy } from 'lucide-react';
import SkillBar from '../common/SkillBar';
import { skills } from '../../data/skills';

const SkillsSection = ({ isDarkMode }) => {
    const skillCategories = [
        {
            title: "Backend",
            icon: Server,
            color: "blue-600",
            bgClass: "backend-bg",
            skills: skills.backend,
            id: "backend-skills"
        },
        {
            title: "Frontend",
            icon: Code,
            color: "purple-600",
            bgClass: "frontend-bg",
            skills: skills.frontend,
            id: "frontend-skills"
        },
        {
            title: "DevOps",
            icon: Zap,
            color: "green-600",
            bgClass: "devops-bg",
            skills: skills.devops,
            id: "devops-skills"
        },
        {
            title: "Databases",
            icon: Database,
            color: "red-600",
            bgClass: "database-bg",
            skills: skills.databases,
            id: "database-skills"
        }
    ];

    return (
        <section id="skills" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-animate
                        id="skills-title"
                    >
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Expertise across the full technology stack with 8+ years of hands-on experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.bgClass} p-8 rounded-xl shadow-xl transition-all duration-300 hover-scale border ${isDarkMode ? 'bg-gray-800/95 hover:bg-gray-800 border-gray-700/50' : 'bg-white/95 hover:bg-white hover:shadow-2xl border-gray-200/50'} backdrop-blur-sm relative overflow-hidden`}
                            data-animate
                            id={category.id}
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <category.icon className={`w-8 h-8 text-${category.color}`} />
                                <h3 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {category.title}
                                </h3>
                            </div>
                            {category.skills.map((skill, index) => (
                                <SkillBar
                                    key={index}
                                    skill={skill.name}
                                    level={skill.level}
                                    tech={skill.tech}
                                    isDarkMode={isDarkMode}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Constantly learning and adapting to new technologies
            </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;