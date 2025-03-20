import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '../../util/CodeBlock';
import '../../../Styles/ModTemplate.css';

interface ModTemplateProps {
    name: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
    longDescription: string;
    codeExample?: string;
    downloadUrl?: string;
    documentationUrl?: string;
    gallery?: string[];
}

const ModTemplate: React.FC<ModTemplateProps> = ({
    name,
    description,
    image,
    features,
    technologies,
    longDescription,
    codeExample,
    downloadUrl,
    documentationUrl,
    gallery
}) => {
    return (
        <div className="mod-template-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mod-hero"
            >
                <div className="mod-hero-content">
                    <h1>{name}</h1>
                    <p className="subtitle">{description}</p>
                </div>
                <div className="mod-hero-image">
                    {image && <img src={image} alt={`${name} preview`} />}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mod-content"
            >
                <section className="mod-section">
                    <h2>About</h2>
                    <p>{longDescription}</p>
                </section>

                <section className="mod-section">
                    <h2>Features</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {codeExample && (
                    <section className="mod-section">
                        <h2>Example Code</h2>
                        <CodeBlock
                            code={codeExample}
                            language="java"
                            canRun={false}
                        />
                    </section>
                )}

                {gallery && gallery.length > 0 && (
                    <section className="mod-section">
                        <h2>Gallery</h2>
                        <div className="gallery-grid">
                            {gallery.map((image, index) => (
                                <div key={index} className="gallery-item">
                                    <img src={image} alt={`${name} gallery ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mod-section">
                    <h2>Technologies Used</h2>
                    <div className="technology-list">
                        {technologies.map((tech) => (
                            <span key={tech} className="technology-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mod-section">
                    <h2>Get Started</h2>
                    <div className="cta-buttons">
                        {downloadUrl && (
                            <a href={downloadUrl} className="cta-button primary" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        )}
                        {documentationUrl && (
                            <a href={documentationUrl} className="cta-button secondary" target="_blank" rel="noopener noreferrer">
                                Documentation
                            </a>
                        )}
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default ModTemplate; 