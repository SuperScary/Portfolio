import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../Styles/Minecraft.css';

interface ModCard {
    name: string;
    description: string;
    image: string;
    status: 'active' | 'coming-soon';
    technologies: string[];
}

const mods: ModCard[] = [
    {
        name: 'HotSwap',
        description: 'A mod that allows for quick and efficient tool swapping in your inventory',
        image: '/hotswap-preview.gif',
        status: 'active',
        technologies: ['Java', 'NeoForge', 'Fabric']
    },
    {
        name: 'Heavy Inventories',
        description: 'Adds weight and mass mechanics to inventory management',
        image: '/heavy-inventories-preview.png', // TODO: Add actual preview image
        status: 'active',
        technologies: ['Java', 'NeoForge', 'Machine Learning']
    },
    {
        name: 'Flux Machines',
        description: 'Advanced machinery powered by flux energy',
        image: '/flux-machines-preview.png', // TODO: Add actual preview image
        status: 'active',
        technologies: ['Java', 'NeoForge',]
    },
    {
        name: 'AE Machines',
        description: 'Applied Energistics 2 addon with new machines and automation',
        image: '/ae-machines-preview.png', // TODO: Add actual preview image
        status: 'active',
        technologies: ['Java', 'NeoForge', 'AE2 API']
    }
];

const Minecraft: React.FC = () => {
    return (
        <div className="minecraft-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="minecraft-hero"
            >
                <h1>Minecraft Mods</h1>
                <p className="subtitle">A collection of mods enhancing the Minecraft experience</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="minecraft-content"
            >
                <section className="minecraft-section">
                    <h2>About</h2>
                    <p>
                        A collection of Minecraft mods that enhance gameplay with new features,
                        mechanics, and content. Built using the NeoForge modding framework and
                        various Minecraft APIs.
                    </p>
                </section>

                <section className="minecraft-section">
                    <h2>Available Mods</h2>
                    <div className="mods-grid">
                        {mods.map((mod, index) => (
                            <motion.div
                                key={mod.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className={`mod-card ${mod.status}`}
                            >
                                <div className="mod-image">
                                    {mod.image && (
                                        <img src={mod.image} alt={`${mod.name} preview`} />
                                    )}
                                </div>
                                <div className="mod-content">
                                    <h3>{mod.name}</h3>
                                    <p>{mod.description}</p>
                                    {mod.status === 'active' ? (
                                        <Link to={`/minecraft/${mod.name.toLowerCase().replace(/\s+/g, '-')}`} className="mod-link">
                                            Learn More
                                        </Link>
                                    ) : (
                                        <div className="coming-soon">Coming Soon</div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default Minecraft; 