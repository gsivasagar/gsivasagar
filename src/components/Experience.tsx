import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    const projects = [
        {
            title: "Financial Investment Analysis Platform",
            role: "Backend & Systems Architect",
            period: "Oct 2025 — Feb 2026",
            description: "Built a microservices investment analysis platform with Python and FastAPI, aggregating live market data from 3+ external APIs through a multi-agent LangGraph pipeline for real-time bull vs. bear comparisons. Containerized the full stack with Docker Compose, enabling reproducible deployments via automated CI/CD pipelines.",
            link: "https://bull-vs-bear-ipb1b0dvw-siva-sagars-projects.vercel.app/",
            tech: ["Python", "FastAPI", "LangGraph", "React.js", "Docker", "CI/CD"]
        },
        {
            title: "Subscription Management Dashboard",
            role: "Full-Stack Engineer",
            period: "Jun 2025 — Sep 2025",
            description: "Built a subscription billing dashboard with Node.js, MySQL, and automated cron-based recurring payments, achieving sub-second load times and a 95+ Lighthouse score through schema optimization. Implemented Google OAuth with Role-Level Security (RLS) policies enforcing strict data isolation.",
            link: "https://subscription-management-dashboard-git-main-siva-sagars-projects.vercel.app/",
            tech: ["Node.js", "MySQL", "React.js", "TypeScript", "Docker", "OAuth"]
        },
        {
            title: "Smart Bookmark Platform",
            role: "Full-Stack Developer",
            period: "Feb 2025 — May 2025",
            description: "Built a real-time multi-user bookmark manager with Next.js and Supabase, replacing polling with WebSocket-based live sync and deploying on Vercel with OAuth authentication.",
            link: "https://member-berries-og6qgveo7-siva-sagars-projects.vercel.app/",
            tech: ["Next.js", "Supabase", "WebSockets", "Tailwind CSS", "OAuth", "Vercel"]
        },
        {
            title: "Exam & Quiz Generator",
            role: "AI & Data Engineer",
            period: "Nov 2024 — Jan 2025",
            description: "Built a RAG pipeline with fine-tuned TinyLlama and ChromaDB that ingests PDFs and semantically retrieves context across 1,000+ document chunks, auto-generating high-relevance quiz questions.",
            link: "https://exam-q-a-generator-ml8ost5r2xjygiv92bbmq5.streamlit.app/",
            tech: ["Python", "TinyLlama", "ChromaDB", "Streamlit", "RAG"]
        },
        {
            title: "Interactive Mock Interview Platform",
            role: "Frontend Engineer",
            period: "Aug 2024 — Oct 2024",
            description: "Built a browser-based voice interview simulator with WebRTC, WebSpeech API, and Gemini API, delivering context-aware, resume-based question generation across 4+ interview types.",
            link: "https://ai-mock-interview-lac-six.vercel.app",
            tech: ["React.js", "TypeScript", "WebRTC", "WebSpeech API", "Gemini API"]
        },
        {
            title: "LeetCode AI Assistant",
            role: "Independent Developer",
            period: "May 2024 — Jul 2024",
            description: "Built a Chrome Extension (React.js, TypeScript) that injects Gemini API-powered AI overlays into LeetCode pages, providing real-time debugging hints and pseudocode without disrupting user workflow.",
            link: "https://leetcode-assistant-six.vercel.app/",
            tech: ["React.js", "TypeScript", "Chrome Extension APIs", "Gemini API", "Git"]
        },
        {
            title: "HPCL ISC",
            role: "Software Engineering Intern",
            period: "Nov 2022 — Apr 2023",
            description: "Designed and shipped an Inventory Management System supporting 50+ product categories, reducing query execution time by 30% through PostgreSQL schema redesign and index optimization. Delivered production-ready code with 150+ JUnit test cases across 3 role-based access tiers by following TDD practices.",
            link: "https://hindustanpetroleum.com/",
            tech: ["Java", "PostgreSQL", "Apache Tomcat", "JSP", "JUnit", "Git"]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="mobile-section-header">Experience</div>

            <div className="hover-group" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="hover-card"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Left side: Date (Desktop) or top (Mobile) */}
                        <div style={{
                            flex: '0 0 130px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginTop: '0.25rem'
                        }}>
                            {project.period}
                        </div>

                        {/* Right side: Content */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                                >
                                    {project.role} · {project.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '1rem', height: '1rem', marginLeft: '0.1rem', marginTop: '0.1rem', transition: 'transform 0.2s', transform: 'translateY(-1px) translateX(1px)' }}>
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </h3>

                            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                                {project.description}
                            </p>

                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <li key={i} className="badge">{t}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
