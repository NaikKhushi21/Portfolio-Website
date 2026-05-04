import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import HomeGrid from './components/HomeGrid';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

function App() {
  return (
    <Router basename="/Portfolio-Website">
      <AppContent />
    </Router>
  );
}

export default App;
