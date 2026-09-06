// Ordered so PHP/Laravel reads first everywhere on the site — matching the CV.
export const skillGroups = [
    {
        id: 'backend',
        label: 'Backend',
        blurb: 'Where I spend most of my day.',
        items: [
            { name: 'PHP', detail: 'Laravel, legacy modernisation', level: 95, tech: 'PHP', flagship: true },
            { name: 'Go', detail: 'Gin, GORM, gRPC services', level: 92, tech: 'Go', flagship: true },
            { name: 'Node.js', detail: 'NestJS microservices', level: 85, tech: 'Node.js' },
        ],
    },
    {
        id: 'architecture',
        label: 'Architecture',
        blurb: 'Monolith → services, without the big-bang rewrite.',
        items: [
            { name: 'Microservices', detail: 'Service boundaries, contracts', level: 92, tech: 'Microservices' },
            { name: 'SOA', detail: '3K concurrent users in production', level: 88, tech: 'SOA' },
            { name: 'Design Patterns', detail: 'Strategy, Factory, SOLID', level: 92, tech: 'Design Patterns' },
        ],
    },
    {
        id: 'data',
        label: 'Data & Caching',
        blurb: 'Query plans, indexes and the cache in front of them.',
        items: [
            { name: 'MySQL', detail: 'Indexing, query tuning', level: 90, tech: 'MySQL' },
            { name: 'PostgreSQL', detail: 'Primary store for Go services', level: 88, tech: 'PostgreSQL' },
            { name: 'Redis', detail: 'Caching, queues, rate limiting', level: 90, tech: 'Redis' },
            { name: 'Elasticsearch', detail: 'Search and log aggregation', level: 78, tech: 'Elasticsearch' },
        ],
    },
    {
        id: 'apis',
        label: 'APIs & Messaging',
        blurb: 'How the services actually talk.',
        items: [
            { name: 'REST', detail: 'OpenAPI-documented, validated', level: 95, tech: 'REST' },
            { name: 'gRPC', detail: 'Type-safe RPC across 6 services', level: 82, tech: 'gRPC' },
            { name: 'GraphQL', detail: 'Schema design, resolvers', level: 78, tech: 'GraphQL' },
            { name: 'RabbitMQ', detail: 'Async work, event fan-out', level: 88, tech: 'RabbitMQ' },
        ],
    },
    {
        id: 'devops',
        label: 'DevOps',
        blurb: 'Shipping it, then watching it.',
        items: [
            { name: 'Docker', detail: 'Compose, Swarm', level: 90, tech: 'Docker' },
            { name: 'CI/CD', detail: 'GitHub Actions, quality gates', level: 88, tech: 'CI/CD' },
            { name: 'Nginx', detail: 'Reverse proxy, TLS, tuning', level: 82, tech: 'Nginx' },
            { name: 'Observability', detail: 'Prometheus, Grafana, ELK', level: 80, tech: 'Prometheus' },
        ],
    },
    {
        id: 'frontend',
        label: 'Frontend & Testing',
        blurb: 'Enough to own a feature end to end.',
        items: [
            { name: 'React', detail: 'Admin panels, PWAs', level: 88, tech: 'React' },
            { name: 'TypeScript', detail: 'Typed API clients', level: 85, tech: 'TypeScript' },
            { name: 'TDD', detail: '85% coverage on a real codebase', level: 88, tech: 'TDD' },
            { name: 'Tailwind', detail: 'Design systems in CSS', level: 85, tech: 'Tailwind' },
        ],
    },
];
