/**
 * This file dictates any and all navigation links for the website.
 * It is used in the Navbar component to render the links.
 */

export const NavBarLinks = [
    { path: "/", label: "Home" },
    {
        label: "Projects",
        children: [
            {
                title: "Projects",
                items: [
                    { path: "/projects/sodium", label: "Sodium" },
                    { path: "/projects/superdocs", label: "SuperDocs" },
                    { path: "/projects/supercl", label: "SuperCL" },
                ],
            },
            {
                title: "Languages",
                items: [
                    { path: "/projects/gecco", label: "Gecco" },
                    { path: "/projects/servo", label: "Servo" },
                ],
            },
            {
                title: "Libraries",
                items: [
                    { path: "/libraries/command-1", label: "⌘ 1" },
                    { path: "/libraries/differencing", label: "Differencing" },
                ],
            },
            {
                title: "APIs",
                items: [
                    { path: "/apis/differencing-api", label: "Differencing API" },
                ],
            },
        ],
        seeMore: {
            text: "Looking for more projects? Check out my GitHub!",
            path: "https://github.com/SuperScary",
            type: "external",
            iconType: "github",
        },
    },
    {
        label: "Research",
        children: [
            {
                title: "Publications",
                items: [
                    {
                        path: "/research/publications/file-versioning",
                        label: "File Versioning System",
                    },
                    {
                        path: "/research/publications/other-publications",
                        label: "Other Publications",
                    },
                ],
            },
        ],
        seeMore: {
            text: "View All Research",
            path: "/research",
            type: "internal",
        },
    },
    { path: "/about", label: "About" },
];
