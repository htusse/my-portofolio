import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaMobile,
  FaCode,
  FaCloud,
  FaTools,
  FaChartBar,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedBars(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: <FaCode />,
      color: "#6b97af",
      skills: [
        {
          name: "React.js",
          level: 95,
          icon: <FaReact />,
          years: 4,
          projects: +10,
        },
        {
          name: "Angular",
          level: 85,
          icon: <FaAngular />,
          years: 3,
          projects: 8,
        },
        {
          name: "JavaScript",
          level: 92,
          icon: <SiJavascript />,
          years: 5,
          projects: 15,
        },
        {
          name: "TypeScript",
          level: 88,
          icon: <SiTypescript />,
          years: 3,
          projects: 10,
        },
        { name: "HTML5", level: 95, icon: <SiHtml5 />, years: 5, projects: 20 },
        { name: "CSS3", level: 90, icon: <SiCss3 />, years: 5, projects: 18 },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: <FaDatabase />,
      color: "#85abc4",
      skills: [
        {
          name: "Node.js",
          level: 88,
          icon: <FaNodeJs />,
          years: 4,
          projects: 9,
        },
        { name: "Java", level: 85, icon: <FaJava />, years: 4, projects: 7 },
        {
          name: "Spring Boot",
          level: 82,
          icon: <SiSpringboot />,
          years: 3,
          projects: 5,
        },
        {
          name: "REST APIs",
          level: 90,
          icon: <FaCode />,
          years: 4,
          projects: 12,
        },
        {
          name: "JWT Authentication",
          level: 85,
          icon: <FaTools />,
          years: 3,
          projects: 8,
        },
      ],
    },
    {
      id: "database",
      name: "Database & Storage",
      icon: <FaDatabase />,
      color: "#56829a",
      skills: [
        {
          name: "SQL Server",
          level: 88,
          icon: <FaDatabase />,
          years: 4,
          projects: 8,
        },
        {
          name: "MongoDB",
          level: 82,
          icon: <SiMongodb />,
          years: 3,
          projects: 6,
        },
        { name: "MySQL", level: 85, icon: <SiMysql />, years: 3, projects: 7 },
        {
          name: "Firebase",
          level: 87,
          icon: <SiFirebase />,
          years: 3,
          projects: 9,
        },
        {
          name: "PostgreSQL",
          level: 78,
          icon: <SiPostgresql />,
          years: 2,
          projects: 4,
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <FaCloud />,
      color: "#a8c5d6",
      skills: [
        {
          name: "AWS",
          level: 85,
          icon: <FaAws />,
          years: 2,
          certified: true,
          projects: 6,
        },
        { name: "Git", level: 90, icon: <FaGitAlt />, years: 5, projects: 20 },
        { name: "CI/CD", level: 75, icon: <FaTools />, years: 2, projects: 4 },
        { name: "Docker", level: 78, icon: <FaCloud />, years: 2, projects: 5 },
      ],
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <FaMobile />,
      color: "#4a6d85",
      skills: [
        {
          name: "React Native",
          level: 90,
          icon: <FaReact />,
          years: 3,
          projects: 8,
        },
        {
          name: "NativeScript",
          level: 80,
          icon: <FaMobile />,
          years: 2,
          projects: 3,
        },
        {
          name: "Cross-platform Development",
          level: 88,
          icon: <FaMobile />,
          years: 3,
          projects: 6,
        },
        {
          name: "Mobile UI/UX",
          level: 85,
          icon: <FaMobile />,
          years: 3,
          projects: 7,
        },
      ],
    },
    {
      id: "other",
      name: "Other Technologies",
      icon: <FaTools />,
      color: "#af856b",
      skills: [
        {
          name: "Performance Optimization",
          level: 90,
          icon: <FaChartBar />,
          years: 4,
          projects: 10,
        },
        {
          name: "API Integration",
          level: 92,
          icon: <FaCode />,
          years: 4,
          projects: 15,
        },
        {
          name: "Flowcentric",
          level: 82,
          icon: <FaTools />,
          years: 2,
          projects: 3,
        },
        {
          name: "SSRS",
          level: 80,
          icon: <FaChartBar />,
          years: 2,
          projects: 4,
        },
        {
          name: "VB Script",
          level: 75,
          icon: <FaCode />,
          years: 2,
          projects: 3,
        },
      ],
    },
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "#10B981"; // Green
    if (level >= 80) return "#3B82F6"; // Blue
    if (level >= 70) return "#F59E0B"; // Yellow
    return "#EF4444"; // Red
  };

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const topSkills = allSkills.sort((a, b) => b.level - a.level).slice(0, 8);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Top Skills Overview */}
        <div className="top-skills">
          <h3>Top Skills</h3>
          <div className="top-skills-grid">
            {topSkills.map((skill, index) => (
              <div key={index} className="top-skill-item">
                <div
                  className="skill-icon"
                  style={{ color: getSkillColor(skill.level) }}
                >
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <div className="skill-meta">
                    <span className="skill-level">
                      {getSkillLevel(skill.level)}
                    </span>
                    <span className="skill-years">{skill.years}+ years</span>
                    {skill.certified && (
                      <span className="certified">Certified</span>
                    )}
                  </div>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: getSkillColor(skill.level),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="skills-section">
          <div className="category-tabs">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="category-content">
            <div className="category-header">
              <div className="category-title">
                {activeSkills.icon}
                <h3>{activeSkills.name}</h3>
              </div>
              <div className="category-stats">
                <span>{activeSkills.skills.length} Skills</span>
                <span>
                  Avg:{" "}
                  {Math.round(
                    activeSkills.skills.reduce(
                      (sum, skill) => sum + skill.level,
                      0
                    ) / activeSkills.skills.length
                  )}
                  %
                </span>
              </div>
            </div>

            <div className="skills-grid">
              {activeSkills.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card ${
                    hoveredSkill === skill.name ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-header">
                    <div
                      className="skill-icon"
                      style={{ color: activeSkills.color }}
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-details">
                      <h4>{skill.name}</h4>
                      <div className="skill-meta">
                        <span className="skill-level">
                          {getSkillLevel(skill.level)}
                        </span>
                        <span className="skill-years">
                          {skill.years}+ years
                        </span>
                        {skill.certified && (
                          <span className="certified">
                            <FaCertificate />
                            Certified
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>

                  <div className="skill-progress-container">
                    <div
                      className={`skill-progress ${
                        animatedBars ? "animated" : ""
                      }`}
                      style={{
                        width: animatedBars ? `${skill.level}%` : "0%",
                        backgroundColor: activeSkills.color,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
{/* 
                  {hoveredSkill === skill.name && (
                    <div className="skill-tooltip">
                      <div className="tooltip-content">
                        <div className="tooltip-item">
                          <FaTrophy />
                          <span>{skill.projects} Projects</span>
                        </div>
                        <div className="tooltip-item">
                          <FaChartBar />
                          <span>{skill.level}% Proficiency</span>
                        </div>
                        <div className="tooltip-item">
                          <FaCode />
                          <span>{skill.years}+ Years Experience</span>
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon expert">
                <FaChartBar />
              </div>
              <div className="summary-content">
                <h4>Expert Level</h4>
                <p>
                  {allSkills.filter((s) => s.level >= 90).length} Technologies
                </p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon advanced">
                <FaCode />
              </div>
              <div className="summary-content">
                <h4>Advanced Level</h4>
                <p>
                  {
                    allSkills.filter((s) => s.level >= 80 && s.level < 90)
                      .length
                  }{" "}
                  Technologies
                </p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon years">
                <FaTools />
              </div>
              <div className="summary-content">
                <h4>5+ Years</h4>
                <p>Professional Experience</p>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon certified">
                <FaAws />
              </div>
              <div className="summary-content">
                <h4>AWS Certified</h4>
                <p>Cloud Practitioner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
