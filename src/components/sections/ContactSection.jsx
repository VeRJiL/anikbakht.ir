import React from 'react';
import { Mail, Linkedin, MessageCircle, ArrowRight, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            subtitle: "Best way to reach me",
            contact: "arash.nykbakht@gmail.com",
            href: "mailto:arash.nykbakht@gmail.com",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            subtitle: "Professional network",
            contact: "linkedin.com/in/anikbakht",
            href: "https://www.linkedin.com/in/anikbakht/",
            gradient: "from-blue-600 to-blue-700"
        }
    ];

    const opportunities = [
        "Senior/Lead Engineering Roles",
        "Microservices Architecture Projects",
        "Performance Optimization Challenges",
        "Technical Leadership Opportunities"
    ];

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-8 h-0.5 bg-blue-600"></div>
                        <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Let's Connect</span>
                        <div className="w-8 h-0.5 bg-blue-600"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Ready to discuss your next project or opportunity? I'd love to hear from you.
                    </p>

                    {/* Status */}
                    <div className="inline-flex items-center space-x-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 font-medium">Available for Remote Opportunities</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

                        {/* Left Column - Contact Methods */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <a
                                            key={index}
                                            href={method.href}
                                            target={method.href.startsWith('http') ? '_blank' : undefined}
                                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="group flex items-center p-4 sm:p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mr-6`}>
                                                <method.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                                                <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
                                                <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                                                    {method.contact}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-6">Quick Information</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-600">Remote Worldwide</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-600">Usually responds within 24 hours</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MessageCircle className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-600">9+ Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Opportunities */}
                        <div className="space-y-8">
                            <div className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm Looking For</h3>
                                <div className="space-y-4 mb-8">
                                    {opportunities.map((opportunity, index) => (
                                        <div key={index} className="flex items-center space-x-4 group">
                                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            </div>
                                            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                                {opportunity}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                                    <h4 className="font-semibold text-gray-900 mb-3">Core Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Go", "PHP", "NestJS", "Microservices", "System Architecture", "Performance Optimization"].map((tech, index) => (
                                            <span key={index} className="px-3 py-2 bg-white/80 border border-blue-200/50 text-gray-700 text-sm rounded-lg font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-8 rounded-2xl text-white">
                                <h3 className="text-xl font-bold mb-2">Ready to Start a Conversation?</h3>
                                <p className="text-blue-100 mb-6">
                                    I'm always interested in discussing new opportunities and interesting projects.
                                </p>
                                <a
                                    href="mailto:arash.nykbakht@gmail.com"
                                    className="group inline-flex items-center justify-center w-full px-4 sm:px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                    Send me an email
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;