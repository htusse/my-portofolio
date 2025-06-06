import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Portfolio</h1>
            </div>
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
                <a href="mailto:hervetusse@gmail.com" className="contact-link" title="Email">
                  <FaEnvelope />
                </a>
                <a href="tel:+27641704892" className="contact-link" title="Phone">
                  <FaPhone />
                </a>
                <a href="https://www.linkedin.com/in/herve-tusse-8a2479177/" className="contact-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/htusse" className="contact-link" title="GitHub" target="_blank" rel="noopener noreferrer">
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
          <p>&copy; 2025 Portfolio. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
