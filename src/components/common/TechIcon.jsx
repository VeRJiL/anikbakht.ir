import React from 'react';

const SVG_DIR = '/assets/images/svgs';

// Techs that have a real logo shipped in /public.
const LOGOS = {
    'PHP': 'php-svgrepo-com.svg',
    'Go': 'go-svgrepo-com.svg',
    'Laravel': 'laravel-svgrepo-com.svg',
    'Docker': 'docker-svgrepo-com.svg',
    'MySQL': 'mysql-svgrepo-com.svg',
    'PostgreSQL': 'postgresql-svgrepo-com.svg',
    'Redis': 'redis-svgrepo-com.svg',
    'Node.js': 'nodejs-svgrepo-com.svg',
    'TypeScript': 'typescript-svgrepo-com.svg',
    'JavaScript': 'javascript-svgrepo-com.svg',
    'React': 'react-svgrepo-com.svg',
    'RabbitMQ': 'rabbitmq-icon-svgrepo-com.svg',
    'Elasticsearch': 'elasticsearch-logo-svgrepo-com.svg',
    'AWS S3': 'amazons3-svgrepo-com.svg',
    'Nginx': 'nginx-svgrepo-com.svg',
    'Git': 'git-svgrepo-com.svg',
    'GitHub Actions': 'github-svgrepo-com.svg',
    'Microservices': 'microservices-svgrepo-com.svg',
    'SOA': 'soa-svgrepo-com.svg',
    'CI/CD': 'ci-circle-svgrepo-com.svg',
    'TDD': 'test-driven-development-svgrepo-com.svg',
    'Design Patterns': 'design-patterns-svgrepo-com.svg',
    'Legacy Modernisation': 'optimization-svgrepo-com.svg',
    'Ionic': 'ionic-svgrepo-com.svg',
    'Tailwind': 'tailwind-svgrepo-com.svg',
};

// Everything else falls back to a tinted monogram so the grid never breaks.
const MONOGRAMS = {
    'Gin': ['GIN', '#00b5b8'],
    'GORM': ['ORM', '#e07b39'],
    'NestJS': ['NEST', '#e0234e'],
    'gRPC': ['gRPC', '#2496ed'],
    'GraphQL': ['GQL', '#e535ab'],
    'REST': ['REST', '#14b8a6'],
    'Prometheus': ['PROM', '#e6522c'],
    'Grafana': ['GRAF', '#f46800'],
    'Observability': ['OBS', '#e6522c'],
    'PWA': ['PWA', '#5a0fc8'],
    'Kibana': ['KBN', '#00bfb3'],
    'MQL5': ['MQL', '#0a84ff'],
    'Monolithic': ['MONO', '#64748b'],
};

const TechIcon = ({ tech, className = 'h-8 w-8' }) => {
    const logo = LOGOS[tech];
    if (logo) {
        return (
            <img
                src={`${SVG_DIR}/${logo}`}
                alt=""
                loading="lazy"
                decoding="async"
                className={`${className} shrink-0 object-contain`}
            />
        );
    }

    const [label, color] = MONOGRAMS[tech] || [(tech || '?').slice(0, 3).toUpperCase(), '#8f7cff'];
    return (
        <span
            aria-hidden
            className={`${className} inline-flex shrink-0 items-center justify-center rounded-md
                        text-[0.5rem] font-bold leading-none tracking-tight`}
            style={{ backgroundColor: `${color}22`, color, boxShadow: `inset 0 0 0 1px ${color}45` }}
        >
            {label}
        </span>
    );
};

export default TechIcon;
