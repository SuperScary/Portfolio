import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { RobotArmGame } from "./Components/RobotArmGame";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow flex flex-col justify-start">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/robot-arm-game" element={<RobotArmGame />} />
                </Routes>
            </main>
        </div>
    );
}

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
