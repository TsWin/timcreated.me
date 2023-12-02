import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import config from './config';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import './assets/css/main.css';

function App() {
    return (
        <BrowserRouter>
            <ScrollTop>
                <Routes>
                    <Route path={config.defaultPath} element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </ScrollTop>
        </BrowserRouter>
    );
}

export default App;
