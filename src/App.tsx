import "./Styles/theme.css";
import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { RobotArmGame } from "./Components/RobotArmGame";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { NavBarLinks } from "./Components/NavLinks";
import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import About from "./Components/About";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar links={NavBarLinks} />
                <main className="flex-grow flex flex-col justify-start mt-15">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects/robot-arm" element={<RobotArmGame />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
