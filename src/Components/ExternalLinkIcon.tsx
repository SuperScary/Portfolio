import React from 'react';
import { 
    FaGithub, 
    FaLinkedin, 
    FaTwitter, 
    FaExternalLinkAlt,
    FaYoutube,
    FaMedium,
    FaDeviantart,
    FaBehance,
    FaDribbble
} from 'react-icons/fa';
import '../Styles/ExternalLinkIcon.css';
import { IoIosArrowForward } from 'react-icons/io';

type IconType = 
    | 'github'
    | 'linkedin'
    | 'twitter'
    | 'youtube'
    | 'medium'
    | 'deviantart'
    | 'behance'
    | 'dribbble'
    | 'external'
    | 'internal';

interface ExternalLinkIconProps {
    type: IconType;
    size?: number;
    className?: string;
    showLabel?: boolean;
}

interface IconConfig {
    icon: React.ComponentType<any>;
    label: string;
    className: string;
}

const iconMap: Record<IconType, IconConfig> = {
    github: {
        icon: FaGithub,
        label: 'GitHub',
        className: 'github'
    },
    linkedin: {
        icon: FaLinkedin,
        label: 'LinkedIn',
        className: 'linkedin'
    },
    twitter: {
        icon: FaTwitter,
        label: 'Twitter',
        className: 'twitter'
    },
    youtube: {
        icon: FaYoutube,
        label: 'YouTube',
        className: 'youtube'
    },
    medium: {
        icon: FaMedium,
        label: 'Medium',
        className: 'medium'
    },
    deviantart: {
        icon: FaDeviantart,
        label: 'DeviantArt',
        className: 'deviantart'
    },
    behance: {
        icon: FaBehance,
        label: 'Behance',
        className: 'behance'
    },
    dribbble: {
        icon: FaDribbble,
        label: 'Dribbble',
        className: 'dribbble'
    },
    external: {
        icon: FaExternalLinkAlt,
        label: 'Visit',
        className: 'external'
    },
    internal: {
        icon: IoIosArrowForward,
        label: 'Go',
        className: 'internal'
    }
};

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ 
    type, 
    size = 16, 
    className = '',
    showLabel = true
}) => {
    const config = iconMap[type] || iconMap.external;
    const Icon = config.icon;

    return (
        <span className={`platform-button ${config.className} ${className}`}>
            <Icon size={size} />
            {showLabel && <span className="platform-label">{config.label}</span>}
        </span>
    );
};

export type { IconType };
export default ExternalLinkIcon; 