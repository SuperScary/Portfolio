import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../Styles/ThemeToggle.css';

interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
    return (
        <button 
            className="theme-toggle" 
            onClick={onToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? (
                <FaSun className="theme-icon sun" />
            ) : (
                <FaMoon className="theme-icon moon" />
            )}
        </button>
    );
};

export default ThemeToggle; 