import React from 'react';

const TechIcon = ({ tech, className = "w-8 h-8" }) => {
    const techIcons = {
        'Go': (
            <img src="/assets/images/svgs/go-svgrepo-com.svg" alt="Go" className={`${className} rounded-lg p-1`} />
        ),
        'PHP': (
            <img src="/assets/images/svgs/php-svgrepo-com.svg" alt="PHP" className={`${className} rounded-lg p-1`} />
        ),
        'JavaScript': (
            <div className={`${className} bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-sm`}>
                JS
            </div>
        ),
        'React': (
            <div className={`${className} bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                ⚛️
            </div>
        ),
        'Docker': (
            <img src="/assets/images/svgs/docker-svgrepo-com.svg" alt="Docker" className={`${className} rounded-lg p-1`} />
        ),
        'MySQL': (
            <img src="/assets/images/svgs/mysql-svgrepo-com.svg" alt="MySQL" className={`${className} rounded-lg p-1`} />
        ),
        'PostgreSQL': (
            <img src="/assets/images/svgs/postgresql-svgrepo-com.svg" alt="PostgreSQL" className={`${className} rounded-lg p-1`} />
        ),
        'Redis': (
            <img src="/assets/images/svgs/redis-svgrepo-com.svg" alt="Redis" className={`${className} rounded-lg p-1`} />
        ),
        'Node.js': (
            <img src="/assets/images/svgs/nodejs-svgrepo-com.svg" alt="Node.js" className={`${className} rounded-lg p-1`} />
        ),
        'TypeScript': (
            <img src="/assets/images/svgs/typescript-svgrepo-com.svg" alt="TypeScript" className={`${className} rounded-lg p-1`} />
        ),
        'Laravel': (
            <img src="/assets/images/svgs/laravel-svgrepo-com.svg" alt="Laravel" className={`${className} rounded-lg p-1`} />
        ),
        'NestJS': (
            <div className={`${className} bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                NEST
            </div>
        ),
        'Microservices': (
            <img src="/assets/images/svgs/microservices-svgrepo-com.svg" alt="Microservices" className={`${className} rounded-lg p-1`} />
        ),
        'SOA': (
            <img src="/assets/images/svgs/soa-svgrepo-com.svg" alt="SOA" className={`${className} rounded-lg p-1`} />
        ),
        'CI/CD': (
            <img src="/assets/images/svgs/ci-circle-svgrepo-com.svg" alt="CI/CD" className={`${className} rounded-lg p-1`} />
        ),
        'REST': (
            <div className={`${className} bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                REST
            </div>
        ),
        'GraphQL': (
            <div className={`${className} bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                GQL
            </div>
        ),
        'gRPC': (
            <div className={`${className} bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                gRPC
            </div>
        ),
        'RabbitMQ': (
            <img src="/assets/images/svgs/rabbitmq-icon-svgrepo-com.svg" alt="RabbitMQ" className={`${className} rounded-lg p-1`} />
        ),
        'Elasticsearch': (
            <img src="/assets/images/svgs/elasticsearch-logo-svgrepo-com.svg" alt="Elasticsearch" className={`${className} rounded-lg p-1`} />
        ),
        'AWS S3': (
            <img src="/assets/images/svgs/amazons3-svgrepo-com.svg" alt="AWS S3" className={`${className} rounded-lg p-1`} />
        ),
        'Nginx': (
            <img src="/assets/images/svgs/nginx-svgrepo-com.svg" alt="Nginx" className={`${className} rounded-lg p-1`} />
        ),
        'Git': (
            <img src="/assets/images/svgs/git-svgrepo-com.svg" alt="Git" className={`${className} rounded-lg p-1`} />
        ),
        'TDD': (
            <img src="/assets/images/svgs/test-driven-development-svgrepo-com.svg" alt="TDD" className={`${className} rounded-lg p-1`} />
        ),
        'Performance Optimization': (
            <img src="/assets/images/svgs/optimization-svgrepo-com.svg" alt="Performance Optimization" className={`${className} rounded-lg p-1`} />
        ),
        'Ionic': (
            <img src="/assets/images/svgs/ionic-svgrepo-com.svg" alt="Ionic" className={`${className} rounded-lg p-1`} />
        ),
        'Tailwind': (
            <div className={`${className} bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                TW
            </div>
        ),
        'Monolithic': (
            <div className={`${className} bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                MONO
            </div>
        )
    };

    return (
        <div className="inline-block transform transition-all duration-300 hover:scale-110 hover:rotate-3">
            {techIcons[tech] || (
                <div className={`${className} bg-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                    ?
                </div>
            )}
        </div>
    );
};

export default TechIcon;