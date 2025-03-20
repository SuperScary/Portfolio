import "./Styles/theme.css";
import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { RobotArmGame } from "./Components/RobotArmGame";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { NavBarLinks } from "./Components/NavLinks";
import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import About from "./Components/About";
import Gecco from "./Components/languages/Gecco";
import Languages from "./Components/Languages";
import Projects from "./Components/Projects";
import Minecraft from "./Components/projects/Minecraft";
import HotSwap from "./Components/projects/mods/HotSwap";
import HeavyInventories from "./Components/projects/mods/HeavyInventories";
import FluxMachines from "./Components/projects/mods/FluxMachines";
import AEMachines from "./Components/projects/mods/AEMachines";
import NotFound from "./Components/ErrorPages/NotFound";
import ServerError from "./Components/ErrorPages/ServerError";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./Components/PageTransition";

const App: React.FC = () => {
    const location = useLocation();

    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar links={NavBarLinks} />
                <main className="flex-grow flex flex-col justify-start mt-15">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={
                                <PageTransition>
                                    <Home />
                                </PageTransition>
                            } />
                            <Route path="/projects" element={
                                <PageTransition>
                                    <Projects />
                                </PageTransition>
                            } />
                            <Route path="/projects/robot-arm" element={
                                <PageTransition>
                                    <RobotArmGame />
                                </PageTransition>
                            } />
                            <Route path="/minecraft" element={
                                <PageTransition>
                                    <Minecraft />
                                </PageTransition>
                            } />
                            <Route path="/minecraft/hotswap" element={
                                <PageTransition>
                                    <HotSwap />
                                </PageTransition>
                            } />
                            <Route path="/minecraft/heavy-inventories" element={
                                <PageTransition>
                                    <HeavyInventories />
                                </PageTransition>
                            } />
                            <Route path="/minecraft/flux-machines" element={
                                <PageTransition>
                                    <FluxMachines />
                                </PageTransition>
                            } />
                            <Route path="/minecraft/ae-machines" element={
                                <PageTransition>
                                    <AEMachines />
                                </PageTransition>
                            } />
                            <Route path="/languages" element={
                                <PageTransition>
                                    <Languages />
                                </PageTransition>
                            } />
                            <Route path="/languages/gecco" element={
                                <PageTransition>
                                    <Gecco />
                                </PageTransition>
                            } />
                            {/* <Route path="/languages/servo" element={<Servo />} /> */}
                            <Route path="/about" element={
                                <PageTransition>
                                    <About />
                                </PageTransition>
                            } />
                            <Route path="/500" element={
                                <PageTransition>
                                    <ServerError />
                                </PageTransition>
                            } />
                            <Route path="*" element={
                                <PageTransition>
                                    <NotFound />
                                </PageTransition>
                            } />
                        </Routes>
                    </AnimatePresence>
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
