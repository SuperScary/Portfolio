import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GeccoLogo from '../assets/Gecco.svg';
import '../Styles/Languages.css';

interface LanguageCard {
    name: string;
    description: string;
    logo: string;
    path: string;
    status: 'active' | 'coming-soon';
}

const languages: LanguageCard[] = [
    {
        name: 'Gecco',
        description: 'A high-level, object-oriented programming language bridging performance and readability',
        logo: GeccoLogo,
        path: '/languages/gecco',
        status: 'active'
    },
    {
        name: 'Servo',
        description: 'A systems programming language focused on safety and performance',
        logo: '', // TODO: Add Servo logo
        path: '/languages/servo',
        status: 'coming-soon'
    }
];

const Languages: React.FC = () => {
    return (
        <div className="languages-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="languages-hero"
            >
                <h1>Programming Languages</h1>
                <p className="subtitle">Explore the programming languages I've developed</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="languages-grid"
            >
                {languages.map((lang, index) => (
                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`language-card ${lang.status}`}
                    >
                        <div className="language-logo">
                            {lang.logo && <img src={lang.logo} alt={`${lang.name} logo`} />}
                        </div>
                        <h2>{lang.name}</h2>
                        <p>{lang.description}</p>
                        {lang.status === 'active' ? (
                            <Link to={lang.path} className="language-link">
                                Learn More
                            </Link>
                        ) : (
                            <div className="coming-soon">Coming Soon</div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Languages; 