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
                title: "Games",
                items: [
                    { path: "/projects/robot-arm", label: "Robot Arm Game" },
                    { path: "/projects/other-game", label: "Other Game" },
                ],
            },
            {
                title: "Web Apps",
                items: [
                    { path: "/projects/web-app1", label: "Web Application 1" },
                    { path: "/projects/web-app2", label: "Web Application 2" },
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
        },
    },
    { path: "/about", label: "About" },
];
