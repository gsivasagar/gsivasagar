import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript (ES6+)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "Python", url: "https://www.python.org/" },
                { name: "Java", url: "https://dev.java/" },
                { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", url: "https://react.dev/" },
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
                { name: "WebRTC", url: "https://webrtc.org/" },
                { name: "WebSpeech API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "Express.js", url: "https://expressjs.com/" },
                { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
                { name: "Flask", url: "https://flask.palletsprojects.com/" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "PostgreSQL", url: "https://www.postgresql.org/" },
                { name: "MySQL", url: "https://www.mysql.com/" },
                { name: "MongoDB", url: "https://www.mongodb.com/" },
                { name: "Supabase", url: "https://supabase.com/" }
            ]
        },
        {
            title: "AI / ML",
            skills: [
                { name: "LangChain", url: "https://www.langchain.com/" },
                { name: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
                { name: "ChromaDB", url: "https://www.trychroma.com/" },
                { name: "RAG", url: "https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation" },
                { name: "OpenCV", url: "https://opencv.org/" }
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Docker", url: "https://www.docker.com/" },
                { name: "CI/CD", url: "https://about.gitlab.com/topics/ci-cd/" },
                { name: "GitHub Actions", url: "https://github.com/features/actions" },
                { name: "Vercel", url: "https://vercel.com/" },
                { name: "Render", url: "https://render.com/" },
                { name: "JUnit", url: "https://junit.org/" },
                { name: "TDD", url: "https://en.wikipedia.org/wiki/Test-driven_development" },
                { name: "Git", url: "https://git-scm.com/" }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="mobile-section-header">Skills</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <h3 style={{
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem',
                            fontWeight: 600
                        }}>
                            {category.title}
                        </h3>

                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {category.skills.map((skill, sIdx) => (
                                <li key={sIdx}>
                                    <a
                                        href={skill.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="badge hover-badge"
                                    >
                                        {skill.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
