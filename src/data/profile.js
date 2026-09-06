export const profile = {
    name: 'Arash Nikbakht',
    firstName: 'Arash',
    lastName: 'Nikbakht',
    title: 'Senior Backend Engineer',
    // Ordered deliberately: PHP leads, Go second.
    stack: ['PHP / Laravel', 'Go', 'Node.js / NestJS', 'React'],
    tagline: 'I turn PHP monoliths into systems that scale — and write the Go services that sit beside them.',
    location: 'Remote · Türkiye',
    availability: 'Open to backend roles',
    email: 'arash.nykbakht@gmail.com',
    phone: '+90 539 789 2669',
    phoneHref: 'tel:+905397892669',
    linkedin: 'https://linkedin.com/in/anikbakht',
    linkedinLabel: 'linkedin.com/in/anikbakht',
    github: 'https://github.com/VeRJiL',
    githubLabel: 'github.com/VeRJiL',
    cv: '/Arash-Nikbakht-CV.pdf',
    photo: '/assets/images/Arash-Nikbakht.jpg',
    yearsExperience: 9,
};

export const intro = [
    `Nine years in, most of my work has looked the same shape: a **PHP** application that grew faster than its
     architecture, and a team that needs it to stop falling over. I've done that migration at Specific-Group
     Austria, at Dorhato and at Tutianet — pulling monoliths apart into services, putting Redis in front of the
     hot paths, and moving the slow work onto RabbitMQ.`,
    `Go is the other half. I've led a **PHP**-to-Go migration end to end, built an internal Gin/GORM framework to
     make new services cheap to start, and run gRPC between six of them in production. I'm equally happy in
     Laravel or in Go — the interesting part is the system, not the language.`,
    `I also care a lot about the people side: I've mentored juniors, run weekly knowledge-sharing sessions, and
     taught design patterns, SOLID and TDD to whole teams.`,
];

// Numbers pulled straight from shipped work — each maps to a resume bullet.
export const metrics = [
    { value: 9, suffix: '+', label: 'Years building backends', hint: 'PHP, Go, Node.js' },
    { value: 23, suffix: '×', label: 'Faster API endpoint', hint: '70s → 3s after the rewrite' },
    { value: 50, suffix: '%', label: 'Database load removed', hint: 'Redis caching strategy' },
    { value: 25, suffix: 'K+', label: 'Daily API requests', hint: 'Served by services I own' },
    { value: 85, suffix: '%', label: 'Code coverage', hint: 'With 65% fewer prod bugs' },
    { value: 3, suffix: 'K', label: 'Concurrent users', hint: 'On an SOA rebuild' },
];

export const marqueeTech = [
    'PHP', 'Laravel', 'Go', 'Gin', 'GORM', 'NestJS', 'Node.js', 'TypeScript', 'React',
    'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'RabbitMQ', 'gRPC', 'GraphQL',
    'Docker', 'Nginx', 'GitHub Actions', 'Prometheus', 'Grafana',
];

export const education = {
    degree: 'Bachelor of Computer Engineering',
    school: 'Azad University (IAU)',
    period: 'Sep 2010 — Sep 2014',
};

export const languages = [
    { name: 'Persian', level: 'Native' },
    { name: 'Azerbaijani', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Turkish', level: 'Basic' },
];
