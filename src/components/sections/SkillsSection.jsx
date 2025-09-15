import React from 'react';
import { Server, Code, Zap, Database, Layers, ArrowUpRight } from 'lucide-react';
import TechIcon from '../common/TechIcon';
import { skills } from '../../data/skills';

const SkillsSection = ({ isDarkMode }) => {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: Server,
            gradient: "from-blue-500 to-blue-600",
            skills: skills.backend,
            id: "backend-skills",
            description: "Server-side technologies"
        },
        {
            title: "Frontend Development",
            icon: Code,
            gradient: "from-purple-500 to-purple-600",
            skills: skills.frontend,
            id: "frontend-skills",
            description: "User interface technologies"
        },
        {
            title: "DevOps & Infrastructure",
            icon: Zap,
            gradient: "from-green-500 to-green-600",
            skills: skills.devops,
            id: "devops-skills",
            description: "Deployment and automation"
        },
        {
            title: "Database Technologies",
            icon: Database,
            gradient: "from-red-500 to-red-600",
            skills: skills.databases,
            id: "database-skills",
            description: "Data storage solutions"
        },
        {
            title: "System Architecture",
            icon: Layers,
            gradient: "from-indigo-500 to-indigo-600",
            skills: skills.architecture,
            id: "architecture-skills",
            description: "Design patterns and scalability"
        },
        {
            title: "Additional Technologies",
            icon: ArrowUpRight,
            gradient: "from-gray-500 to-gray-600",
            skills: [
                ...skills.apis,
                ...skills.testing,
                ...skills.tools,
                ...skills.messaging
            ],
            id: "additional-skills",
            description: "Other tools and frameworks"
        }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-8 h-0.5 bg-blue-600"></div>
                        <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Technical Expertise</span>
                        <div className="w-8 h-0.5 bg-blue-600"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Comprehensive expertise across the full technology stack with
                        <span className="font-semibold text-gray-900"> 9+ years</span> of hands-on experience
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            data-animate
                            id={category.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                            {/* Header */}
                            <div className="relative z-10 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    {category.description}
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="relative z-10 space-y-4">
                                {category.title === "Additional Technologies" ? (
                                    <div className="grid grid-cols-2 gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105">
                                                <TechIcon tech={skill.tech} className="w-4 h-4" />
                                                <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <TechIcon tech={skill.tech} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                                <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-semibold text-gray-500 min-w-[2rem]">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </section>
    );
};

export default SkillsSection;