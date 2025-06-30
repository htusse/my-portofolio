import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update header background based on scroll
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills'];
      const offset = 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - offset && scrollPosition < offsetTop + offsetHeight - offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <nav className="navigation">
              <button 
                className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
              <button 
                className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
              <button 
                className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </nav>
            <div className="contact-info">
              <div className="contact-links">
                <a href="mailto:hervetusse@gmail.com" className="contact-link" title="Email" aria-label="Send email">
                  <FaEnvelope />
                </a>
                <a href="tel:+27641704892" className="contact-link" title="Phone" aria-label="Call phone">
                  <FaPhone />
                </a>
                <a href="https://www.linkedin.com/in/herve-tusse-8a2479177/" className="contact-link" title="LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/htusse" className="contact-link" title="GitHub" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <Skills />
      </main>

      <footer className="main-footer">
        <div className="container">
          <p style={{color: '#fff'}}>&copy; 2025 Herve Tusse. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
