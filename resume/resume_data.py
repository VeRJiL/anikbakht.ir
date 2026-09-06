# -*- coding: utf-8 -*-
"""
Single source of truth for Arash Nikbakht's resume.

Positioning: PHP / Laravel FIRST, Go second. Every literal occurrence of the
word "PHP" is wrapped in **...** and rendered bold by both builders.
"""

NAME = "Arash Nikbakht"
TITLE = "Senior Backend Engineer  |  **PHP** / Laravel  ·  Go"

CONTACT = [
    ("mail", "arash.nykbakht@gmail.com", "mailto:arash.nykbakht@gmail.com"),
    ("phone", "+90 539 789 2669", "tel:+905397892669"),
    ("link", "linkedin.com/in/anikbakht", "https://linkedin.com/in/anikbakht"),
]

SUMMARY = (
    "Senior Backend Engineer with 9+ years shipping and scaling production web platforms in "
    "**PHP** (Laravel) and Go, alongside Node.js (NestJS) and TypeScript. Deep track record "
    "modernising **PHP** monoliths into service-oriented and microservice architectures, "
    "upgrading and refactoring legacy **PHP** codebases, and designing REST, GraphQL and gRPC "
    "APIs. Hands-on with Redis caching, RabbitMQ messaging, MySQL/PostgreSQL tuning, Docker and "
    "CI/CD - consistently cutting database load, response times and production defects. "
    "Experienced mentor who has led design-pattern, SOLID and TDD training for development teams."
)

EXPERIENCE = [
    {
        "dates": "Mar 2025 - Now",
        "role": "Senior Software Engineer",
        "company": "Self Employed",
        "location": "Remote",
        "bullets": [
            "Delivered a full-stack e-commerce platform for a music-industry client end to end - "
            "requirements gathering, system architecture, implementation and production deployment.",
            "Built a custom headless CMS, separating a React admin panel from the RESTful API "
            "backend for flexible multi-channel content delivery.",
            "Designed and implemented gRPC-based inter-service communication across 6 distributed "
            "services, enabling type-safe, high-performance synchronous RPC calls.",
            "Established production monitoring with Prometheus and Grafana, tracking service health, "
            "latency percentiles and resource utilisation across the distributed system.",
            "Deployed centralised logging on the ELK Stack (Elasticsearch, Logstash, Kibana) for "
            "distributed tracing, error aggregation and real-time log analysis.",
            "Engineered an algorithmic trading Expert Advisor for MetaTrader 5 in MQL5, implementing "
            "automated position sizing and risk-management rules for forex strategies.",
        ],
    },
    {
        "dates": "Aug 2024 - Mar 2025",
        "role": "Senior Software Engineer",
        "company": "Specific-Group Austria",
        "location": "Remote",
        "bullets": [
            "Spearheaded the migration of a **PHP** monolith to a microservices architecture "
            "(**PHP** + NestJS), improving system scalability and service reliability.",
            "Architected Redis caching strategies for high-traffic endpoints, reducing database load "
            "by 50% and improving average API response times from 200ms to 80ms.",
            "Designed and implemented RESTful APIs serving 25K+ daily requests, with standardised "
            "OpenAPI documentation and comprehensive input validation.",
            "Built NestJS microservices integrated with a RabbitMQ message broker for asynchronous "
            "inter-service communication.",
            "Deployed automated testing frameworks and deployment pipelines, achieving 85% code "
            "coverage and reducing production bugs by 65%.",
            "Drove performance optimisation across the stack, focusing on code efficiency and "
            "resource utilisation.",
            "Engineered frontend optimisations including client-side validation, substantially "
            "decreasing server load.",
        ],
    },
    {
        "dates": "Jun 2022 - Jul 2024",
        "role": "Full Stack Developer",
        "company": "Tutianet",
        "location": "Remote",
        "bullets": [
            "Led the migration of a monolithic **PHP** gym PWA to Go (Gin, GORM) with PostgreSQL, "
            "Redis, AWS S3, Docker and GitHub Actions.",
            "Optimised API endpoints by analysing real UI requirements, reducing query complexity and "
            "adding database indexing - cutting response times from 70 seconds to 3 seconds.",
            "Built a multi-provider SMS notification system using the Strategy and Factory patterns, "
            "making providers swappable through configuration.",
            "Created an internal development framework (Go, Gin, GORM, Redis, PostgreSQL, Amazon S3, "
            "RabbitMQ, Elasticsearch, Kibana) to accelerate microservice delivery.",
            "Mentored junior developers and ran structured onboarding to accelerate team productivity.",
            "Taught design patterns, SOLID principles and pragmatic best practices, balancing delivery "
            "speed against code quality.",
            "Established group code reviews and weekly knowledge-sharing sessions as a knowledge-"
            "transfer mechanism across the team.",
        ],
    },
    {
        "dates": "Nov 2018 - May 2022",
        "role": "Full Stack Developer",
        "company": "Dorhato",
        "location": "Remote",
        "bullets": [
            "Implemented a Service-Oriented Architecture in **PHP** supporting 3K concurrent users, "
            "using Redis caching, queue-based async processing and direct service communication to "
            "reduce server load.",
            "Developed a complex full-stack **PHP** reservation system using Test-Driven Development.",
            "Delivered a PWA auction application for online car sales, taking over all frontend "
            "responsibilities after the team departed.",
            "Implemented CI/CD pipelines with automated testing and code-quality gates to keep the "
            "main branch safely deployable.",
            "Conducted thorough code reviews to maintain quality standards across the team.",
            "Contributed to UI/UX and product design meetings to keep engineering and product aligned.",
        ],
    },
    {
        "dates": "Mar 2018 - Nov 2018",
        "role": "Full Stack Developer",
        "company": "IMTMC",
        "location": "Iran",
        "bullets": [
            "Developed a modular **PHP** (Laravel) backend architecture that shortened development "
            "cycles and improved maintainability, enabling delivery of 7 projects in 7 months.",
            "Ran client requirement meetings, designed database schemas and implemented the "
            "corresponding backend solutions.",
            "Converted PSD designs into responsive HTML, CSS and JavaScript implementations.",
            "Promoted Git workflow adoption across the team to improve code synchronisation and "
            "repository management.",
        ],
    },
    {
        "dates": "Oct 2016 - Dec 2017",
        "role": "Full Stack Developer",
        "company": "Daba",
        "location": "Iran",
        "bullets": [
            "Executed a **PHP** upgrade from 5.7 to 7 across the codebase, improving maintainability "
            "by 30%.",
            "Transformed a legacy codebase onto a modern **PHP** framework, reducing development "
            "cycles by 50%.",
            "Established best practices through design-pattern training, cutting maintenance costs "
            "by 50%.",
        ],
    },
]

SKILLS = [
    ("Backend", "**PHP** (Laravel), Go (Gin, GORM), Node.js (NestJS)"),
    ("Architecture", "Microservices, SOA, Monolith modernisation, Design Patterns, SOLID"),
    ("API Design", "REST, GraphQL, gRPC, OpenAPI / Swagger"),
    ("Databases", "MySQL, PostgreSQL, Redis, Elasticsearch"),
    ("Message Brokers", "RabbitMQ"),
    ("DevOps", "Docker, Docker Swarm, GitHub Actions, CI/CD, Nginx"),
    ("Testing", "TDD, Unit Testing, E2E Testing"),
    ("Frontend", "React, TypeScript, JavaScript, Ionic, HTML5, CSS3, Tailwind"),
    ("Tools", "Git, Postman, Swagger, Kibana, Prometheus, Grafana"),
]

EDUCATION = {
    "degree": "Bachelor of Computer Engineering",
    "school": "Azad University (IAU)",
    "dates": "Sep 2010 - Sep 2014",
}

LANGUAGES = "English (Fluent)  ·  Turkish (Basic)  ·  Persian (Native)  ·  Azerbaijani (Native)"
