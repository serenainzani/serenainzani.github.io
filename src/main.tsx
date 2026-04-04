import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/roboto-slab/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./NotFound.tsx";
import TopPageElements from "./components/PageTopElements.tsx";
import logo from "/logo.png";
import TechTools from "./TechTools.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <TopPageElements />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/tools" element={<TechTools />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <img
            src={logo}
            className="logo w-12 md:w-14 m-3 mx-auto cursor-pointer"
            alt="Serena logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
    </StrictMode>,
);
