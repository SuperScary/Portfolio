import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { RobotArmGame } from "./Components/RobotArmGame";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { NavBarLinks } from "./Components/NavLinks";
import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-black">
                <Navbar links={NavBarLinks} />
                <main className="flex-grow flex flex-col justify-start">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects/robot-arm-game" element={<RobotArmGame />} />
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
