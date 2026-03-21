import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="about" className="section" style={{ scrollMarginTop: '6rem' }}>
            <div className="mobile-section-header">About</div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
                <p>
                    I am an entry-level Full-Stack Engineer with a strong foundation in backend systems, gained through my internship at HPCL ISC, and a passion for building complex <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>AI/ML pipelines</span>. Over the past year, I've designed and deployed 6 production-ready projects spanning <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>React, FastAPI, and Next.js</span>.
                </p>

                <p>
                    My main focus these days is building scalable <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>microservices</span> and integrating cutting-edge AI architectures like LangGraph, ChromaDB, and fine-tuned LLMs into robust enterprise applications.
                </p>

                <p>
                    When I'm not carefully constructing database schemas or debugging state machines, I'm usually solving algorithmic challenges on LeetCode (400+ solved!), optimizing my personal workflows, or continuing my lifelong pursuit of learning new system design strategies.
                </p>

            </motion.div>
        </section>
    );
};

export default Hero;
