import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaExternalLinkAlt, FaCode, FaMobile, FaCloud, FaArrowDown, FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "Mobile App Developer", 
    "Cloud Solutions Architect",
    "UI/UX Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [roles.length]);

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1" 
               style={{
                 transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
               }}></div>
          <div className="shape shape-2"
               style={{
                 transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
               }}></div>
          <div className="shape shape-3"
               style={{
                 transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
               }}></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
              <h1 className="hero-name">Herve Tusse</h1>
              <div className="hero-location">
                <FaMapMarkerAlt />
                <span>Pretoria, South Africa</span>
              </div>
            </div>
            
            <div className="hero-role">
              <span className="role-prefix">A passionate</span>
              <div className="role-container">
                <span className="role-text" key={currentRole}>
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="hero-description">
              I craft exceptional digital experiences through innovative web and mobile applications. 
              With expertise spanning frontend development, backend architecture, and cloud solutions, 
              I transform ideas into powerful, user-centric applications that make a difference.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-content">
                  <h3>15+</h3>
                  <p>Projects Delivered</p>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaMobile />
                </div>
                <div className="stat-content">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCloud />
                </div>
                <div className="stat-content">
                  <h3>30+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary pulse-effect" onClick={scrollToProjects}>
                View My Work
                <FaArrowDown />
              </button>
              <a href="#skills" className="btn btn-secondary glow-effect">
                Explore Skills
              </a>
            </div>

            <div className="hero-social">
              <a href="mailto:hervetusse@gmail.com" className="social-link email-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/herve-tusse-8a2479177/" className="social-link linkedin-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/htusse" className="social-link github-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="tel:+27641704892" className="social-link phone-link" title="Phone">
                <FaPhone />
              </a>
            </div>
          </div>

          <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-container">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="window-title">portfolio.js</div>
                </div>
                <div className="window-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-punctuation">{'{'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  name</span>
                    <span className="code-punctuation">: </span>
                    <span className="code-string">'Herve Tusse'</span>
                    <span className="code-punctuation">,</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  passion</span>
                    <span className="code-punctuation">: </span>
                    <span className="code-string">'Building Amazing Apps'</span>
                    <span className="code-punctuation">,</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  skills</span>
                    <span className="code-punctuation">: [</span>
                    <span className="code-string">'React'</span>
                    <span className="code-punctuation">, </span>
                    <span className="code-string">'Node.js'</span>
                    <span className="code-punctuation">],</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  availability</span>
                    <span className="code-punctuation">: </span>
                    <span className="code-boolean">true</span>
                  </div>
                  <div className="code-line">
                    <span className="code-punctuation">{'}'}</span>
                  </div>
                </div>
              </div>

              <div className="floating-elements">
                <div className="floating-element tech-badge react">React</div>
                <div className="floating-element tech-badge node">Node.js</div>
                <div className="floating-element tech-badge aws">AWS</div>
                <div className="floating-element tech-badge mobile">React Native</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToProjects}>
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero; 