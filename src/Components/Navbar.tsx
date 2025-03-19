import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ExternalLinkIcon, { IconType } from "./ExternalLinkIcon";
import ThemeToggle from "./ThemeToggle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface NavLink {
    path: string;
    label: string;
}

interface NavGroup {
    title: string;
    items: NavLink[];
}

interface SeeMore {
    text: string;
    path: string;
    type: 'internal' | 'external';
    iconType?: IconType;
}

interface NavItem {
    label: string;
    path?: string;
    children?: (NavLink | NavGroup)[];
    seeMore?: SeeMore;
}

interface NavbarProps {
    links: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || 
            (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const renderDropdownContent = (children: (NavLink | NavGroup)[], seeMore?: SeeMore) => {
        // Group the items by their group
        const groups = children.filter((item): item is NavGroup => 'items' in item);
        
        return (
            <>
                <div className="dropdown-groups">
                    {groups.map((group) => (
                        <div key={group.title} className="dropdown-group">
                            <div className="dropdown-group-title">{group.title}</div>
                            {group.items.map((subItem) => (
                                <li key={subItem.label} className="dropdown-item">
                                    <Link
                                        to={subItem.path}
                                        className="dropdown-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {subItem.label}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    ))}
                </div>
                {seeMore && (
                    <div className="dropdown-see-more">
                        <span>{seeMore.text}</span>
                        {seeMore.type === 'internal' ? (
                            <Link 
                            to={seeMore.path}
                            className="see-more-link external"
                            target=""
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            <ExternalLinkIcon 
                                type={'internal'} 
                                className="internal-icon"
                            />
                        </Link>
                        ) : (
                            <a 
                                href={seeMore.path}
                                className="see-more-link external"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                            >
                                <ExternalLinkIcon 
                                    type={seeMore.iconType || 'external'} 
                                    className="external-icon"
                                />
                            </a>
                        )}
                    </div>
                )}
            </>
        );
    };

    const renderNavItem = (link: NavItem) => {
        if (link.children) {
            return (
                <li
                    key={link.label}
                    className="navbar-item dropdown"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <button
                        className="navbar-link dropdown-toggle"
                        onClick={() => toggleDropdown(link.label)}
                    >
                        {link.label}
                        <span className="dropdown-arrow">{ activeDropdown === link.label ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
                    </button>
                    <ul
                        className={`dropdown-menu ${
                            activeDropdown === link.label ? "show" : ""
                        }`}
                    >
                        {renderDropdownContent(link.children, link.seeMore)}
                    </ul>
                </li>
            );
        }

        return (
            <li key={link.label} className="navbar-item">
                <Link
                    to={link.path!}
                    className="navbar-link"
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </Link>
            </li>
        );
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src="/logo.svg" alt="SuperScary Logo" className="navbar-logo" />
                    SuperScary
                </Link>

                <button className="navbar-toggle" onClick={toggleMenu}>
                    <span
                        className={`hamburger ${isOpen ? "open" : ""}`}
                    ></span>
                    <span
                        className={`hamburger ${isOpen ? "open" : ""}`}
                    ></span>
                    <span
                        className={`hamburger ${isOpen ? "open" : ""}`}
                    ></span>
                </button>

                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    {links.map(renderNavItem)}
                </ul>

                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
        </nav>
    );
};

export default Navbar;
