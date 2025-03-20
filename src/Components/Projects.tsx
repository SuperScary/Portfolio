import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles/Projects.css';

interface ProjectCard {
    name: string;
    description: string;
    image: string;
    path: string;
    status: 'active' | 'coming-soon';
    technologies: string[];
}

const projects: ProjectCard[] = [
    {
        name: 'Robot Arm Game',
        description: 'An interactive 3D game where you control a robotic arm to complete various challenges and puzzles',
        image: '/robot-arm-preview.png', // TODO: Add actual preview image
        path: '/projects/robot-arm',
        status: 'active',
        technologies: ['Three.js', 'React', 'TypeScript']
    },
    {
        name: 'Minecraft Mods',
        description: 'A collection of custom Minecraft modifications and plugins that enhance the game with new features and mechanics',
        image: '/minecraft-preview.png', // TODO: Add actual preview image
        path: '/projects/minecraft',
        status: 'active',
        technologies: ['Java', 'Forge', 'Bukkit/Spigot']
    },
    // Add more projects here as they become available
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="projects-hero"
            >
                <h1>Projects</h1>
                <p className="subtitle">Explore my portfolio of interactive and innovative projects</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="projects-grid"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`project-card ${project.status}`}
                    >
                        <div className="project-image">
                            {project.image && (
                                <img src={project.image} alt={`${project.name} preview`} />
                            )}
                        </div>
                        <div className="project-content">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="technology-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.status === 'active' ? (
                                <Link to={project.path} className="project-link">
                                    View Project
                                </Link>
                            ) : (
                                <div className="coming-soon">Coming Soon</div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects; 