import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaTags,
  FaChevronLeft,
  FaChevronRight,
  FaApple,
  FaGooglePlay,
  FaGlobe,
} from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({});

  const projects = [
    {
      title: "Vaya X",
      period: "January 2025 - Present",
      category: "mobile",
      type: "Rideshare Mobile Application",
      status: "Completed",
      description:
        "Comprehensive rideshare application specifically designed for the South African market, featuring localized payment methods, multi-language support, and safety features tailored to local needs.",
      benefits: [
        "Localized payment integration including EFT, SnapScan, Zapper, and mobile banking",
        "Multi-language support for English, Afrikaans, Zulu, and Xhosa",
        "Enhanced safety features with trip sharing and emergency contacts",
        "Offline mode for areas with limited connectivity and cash payment options",
        "South African compliance with POPIA and local transportation regulations",
        "Optimized for local traffic patterns and township area coverage",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "Firebase",
        "Payment Gateways",
        "Geolocation",
        "Offline Storage",
        "Multi-language",
        "Push Notifications",
      ],
      images: [
        "/20.png", // Cover image
        "/21.png", // Additional images
        "/22.png",
        "/23.png",
        "/24.png",
        "/25.png",
        "/26.png",
        "/27.png",
        "/28.png",
        "/29.png",
        "/30.png",
        "/31.png",
        "/19.png",
      ],
      featured: true,
      links: {
        website: "https://vayax-78d77.web.app/",
      },
    },
    {
      title: "Jaride - Multi-Service Platform",
      period: "January 2024 - March 2024",
      category: "web",
      type: "WordPress Multi-Service Platform",
      status: "Completed",
      description:
        "Comprehensive multi-service platform offering taxi booking, food delivery, accommodation booking, and cargo services with integrated payment systems and mobile app availability.",
      benefits: [
        "Unified platform for multiple transportation and lifestyle services",
        "Integrated payment system with credit purchasing functionality",
        "Mobile app availability on both iOS and Android platforms",
        "Real-time booking and tracking across all services",
        "Multi-language support and localized payment methods",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Mobile Apps",
        "Payment Integration",
        "Multi-service API",
      ],
      images: ["/85.png"],
      featured: false,
      links: {
        website: "https://jaride.org",
        appStore: "https://apps.apple.com/us/app/ja-ride/id6478985246",
        playStore:
          "https://play.google.com/store/apps/details?id=com.xcellencetech.jaride",
      },
    },
    {
      title: "JaCASA - Accommodation Platform",
      period: "June 2024 - November 2024",
      category: "web",
      type: "WordPress Real Estate Platform",
      status: "Completed",
      description:
        "Comprehensive accommodation and real estate platform offering property listings, agent management, and booking functionality with advanced search and filtering capabilities.",
      benefits: [
        "Advanced property search with multiple filters and amenities",
        "Integrated booking system for rentals and sales",
        "Agent and agency management with listing promotion",
        "Multi-property type support including apartments, condos, offices, and shops",
        "Location-based search across multiple cities",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Real Estate API",
        "Booking System",
        "Geolocation",
      ],
      images: ["/82.png"],
      featured: false,
      links: {
        website: "https://accommodation.jaride.org",
      },
    },
    {
      title: "Jaride Eat - Food Delivery Platform",
      period: "April 2024 - October 2024",
      category: "web",
      type: "WordPress Food Delivery Platform",
      status: "Completed",
      description:
        "Food delivery and restaurant platform offering online ordering, takeaway services, and grocery delivery with categorized menu browsing and promotional pricing.",
      benefits: [
        "Comprehensive food ordering system with pickup and delivery options",
        "Restaurant and grocery integration with real-time inventory",
        "Category-based food browsing (BBQ, Burger, Pizza, Vegetarian, etc.)",
        "Promotional pricing system with discounted menu items",
        "Shopping cart functionality with user account management",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Food Delivery API",
        "Payment Integration",
        "Inventory Management",
      ],
      images: ["/84.png"],
      featured: false,
      links: {
        website: "https://eat.jaride.org",
      },
    },
    {
      title: "Esorpa Inc Corporate Website",
      period: "March 2024 - April 2024",
      category: "web",
      type: "React Corporate Website",
      status: "Completed",
      description:
        "Modern corporate website built with React, featuring responsive design and professional presentation for business services and company information.",
      benefits: [
        "Modern, responsive design optimized for all devices",
        "Fast loading performance with React optimization",
        "Professional corporate presentation and branding",
        "SEO-optimized structure for better search visibility",
      ],
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Responsive Design",
        "SEO Optimization",
      ],
      images: ["/83.png"],
      featured: false,
      links: {
        website: "https://esorpainc.com",
      },
    },
    {
      title: "WordPress Wishlist Generator",
      period: "February 2025 - March 2025",
      category: "web",
      type: "WordPress Plugin",
      status: "Completed",
      description:
        "Custom WordPress plugin enabling users to create, preview, and share personalized Cricut wishlists with multi-language support and social media integration.",
      benefits: [
        "Increased brand engagement through social media sharing capabilities",
        "Enhanced product discovery via QR codes linking to product pages",
        "Improved campaign flexibility with modular system supporting seasonal campaigns",
        "Optimized mobile experience with responsive design",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Social Media APIs",
        "QR Codes",
        "Multi-language",
      ],
      images: ["/80.png"],
      featured: false,
    },
    {
      title: "Rectron Summit App",
      period: "August 2024 - September 2024",
      category: "mobile",
      type: "Event Management App",
      status: "Completed",
      description:
        "Comprehensive Summit app developed within a three-week deadline, providing attendee engagement, networking, and event navigation features.",
      benefits: [
        "Enhanced attendee experience through objective-based engagement and rewards",
        "Facilitated networking with e-business card sharing functionality",
        "Improved event navigation with interactive floorplan",
        "Streamlined communication through notifications and program updates",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "React Admin Panel",
      ],
      images: [
        "/11.png", // Cover image
        "/12.png", // Additional images
        "/13.png",
        "/14.png",
        "/15.png",
        "/16.png",
        "/17.png",
      ],
      featured: true,
      links: {
        appStore: "https://apps.apple.com/us/app/rectron-summit/id6503193353",
        playStore:
          "https://play.google.com/store/apps/details?id=com.nexus.rrsummit",
        website: "https://rectronapp.co.za",
      },
    },
    {
      title: "Comic Con Africa",
      period: "April 2023 - September 2023",
      category: "mobile",
      type: "Event Management App",
      status: "Completed",
      description:
        "Event management app with real-time updates, dynamic floor plans, notifications, social media integration, and ticketing via Howler API.",
      benefits: [
        "Enhanced user engagement with interactive features and real-time updates",
        "Streamlined event management with dynamic scheduling and exhibitor listings",
        "Simplified administrative tasks and enabled fast, secure ticketing",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "React",
        "Node.js",
        "Howler API",
      ],
      images: [
        "/40.png",
        "/41.png",
        "/42.png",
        "/43.png",
        "/44.png",
        "/45.png",
        "/46.png",
        "/47.png",
        "/48.png",
        "/49.png",
        "/50.png",
      ],
      featured: true,
      links: {
        appStore: "https://apps.apple.com/us/app/comic-con-africa/id6447425714",
        playStore:
          "https://play.google.com/store/apps/details?id=com.nexus.comicconafrica",
      },
    },
    {
      title: "Equity Bank Data Portal",
      period: "January 2021 - January 2022",
      category: "web",
      type: "Financial Application",
      status: "Completed",
      description:
        "Web application for remote credit card application processing in Congo, enabling global access for Congolese citizens.",
      benefits: [
        "Enables global access for Congolese credit card applications",
        "Removes geographical limits and boosts financial inclusion",
        "Improved user satisfaction with multi-language support",
      ],
      technologies: [
        "Angular 7",
        "Java",
        "Spring Boot",
        "MongoDB",
        "MySQL",
        "JWT",
        "Firebase",
      ],
      images: ["/81.png"],
      featured: false,
      links: {
        website:
          "https://www.equitybcdc-diasporabanking.com/equity-bank-ui/home",
      },
    },
    {
      title: "Cricut Ambassador App",
      period: "October 2024 - Present",
      category: "mobile",
      type: "Mobile Application",
      status: "Completed",
      description:
        "Comprehensive mobile application for Cricut's ambassador program, facilitating onboarding, training, rewards, and engagement for product ambassadors.",
      benefits: [
        "Streamlined ambassador onboarding with automated verification and profile setup",
        "Enhanced ambassador skills through integrated training modules and assessments",
        "Optimized store demonstration scheduling with GPS verification",
        "Increased engagement through point-based reward system and tiered ambassador levels",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "Firebase",
        "AWS",
        "Geolocation",
        "Push Notifications",
      ],
      images: [
        "/70.png", // Cover image
        "/71.png", // Additional images
        "/72.png",
        "/73.png",
        "/74.png",
        "/75.png",
        "/76.png",
        "/77.png",
        "/78.png",
      ],
      featured: false,
    },
    {
      title: "JOJ Mobile App",
      period: "October 2022 - December 2023",
      category: "mobile",
      type: "Festival App",
      status: "Completed",
      description:
        "Mobile app for festival-goers providing up-to-date lineup and schedule information, available on both Play Store and Apple Store.",
      benefits: [
        "Detailed lineup and schedule information with real-time updates",
        "Engaging features like personalized schedules and interactive maps",
        "Enhanced user experience and satisfaction for festival attendees",
      ],
      technologies: ["React Native", "Firebase", "Node.js", "Howler API"],
      images: [
        "/51.png", // Cover image
        "/52.png", // Additional images
        "/53.png",
        "/54.png",
        "55.png",
        "/56.png",
        "/57.png",
        "/58.png",
        "/59.png",
        "/60.png",
      ],
      featured: false,
      links: {
        appStore:
          "https://apps.apple.com/us/app/standard-bank-joy-of-jazz/id6467728574",
        playStore:
          "https://play.google.com/store/apps/details?id=com.ganizani.joj",
      },
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "web", label: "Web Applications" }
  ];

  const filteredProjects =
    filter === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter(
          (project) => project.category === filter && !project.featured
        );

  const featuredProjects = projects.filter((project) => project.featured);

  // Helper functions for card image navigation
  const getCardImageIndex = (projectIndex) => {
    return cardImageIndices[projectIndex] || 0;
  };

  const setCardImageIndex = (projectIndex, imageIndex) => {
    setCardImageIndices((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  const navigateCardImage = (projectIndex, direction, totalImages) => {
    const currentIndex = getCardImageIndex(projectIndex);
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }

    setCardImageIndex(projectIndex, newIndex);
  };

  const renderProjectLinks = (links) => {
    if (!links) return null;

    return (
      <div className="project-links">
        {links.appStore && (
          <a
            href={links.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link app-store"
          >
            <FaApple />
            <span>App Store</span>
          </a>
        )}
        {links.playStore && (
          <a
            href={links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link play-store"
          >
            <FaGooglePlay />
            <span>Play Store</span>
          </a>
        )}
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link website"
          >
            <FaGlobe />
            <span>Website</span>
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my most impactful work across various technologies and
            industries
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="featured-carousel">
          <div className="carousel-container">
            <div className="featured-project">
              <div className="project-image">
                <img
                  src={
                    featuredProjects[currentProject]?.images[currentImageIndex]
                  }
                  alt={featuredProjects[currentProject]?.title}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHN2Zz4K";
                  }}
                />
                <div className="project-overlay">
                  <div className="project-status">
                    <span
                      className={`status-badge ${featuredProjects[
                        currentProject
                      ]?.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {featuredProjects[currentProject]?.status}
                    </span>
                  </div>
                </div>

                {/* Image Gallery Navigation */}
                {featuredProjects[currentProject]?.images.length > 1 && (
                  <>
                    <button
                      className="image-nav-btn prev"
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? featuredProjects[currentProject].images.length - 1
                            : prev - 1
                        )
                      }
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="image-nav-btn next"
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev ===
                          featuredProjects[currentProject].images.length - 1
                            ? 0
                            : prev + 1
                        )
                      }
                    >
                      <FaChevronRight />
                    </button>

                    {/* Image Indicators */}
                    <div className="image-indicators">
                      {featuredProjects[currentProject].images.map(
                        (_, index) => (
                          <button
                            key={index}
                            className={`image-indicator ${
                              currentImageIndex === index ? "active" : ""
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        )
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">
                    {featuredProjects[currentProject]?.title}
                  </h3>
                  <p className="project-type">
                    {featuredProjects[currentProject]?.type}
                  </p>
                  <p className="project-period">
                    <FaCalendarAlt />
                    {featuredProjects[currentProject]?.period}
                  </p>
                </div>

                <p className="project-description">
                  {featuredProjects[currentProject]?.description}
                </p>

                <div className="project-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {featuredProjects[currentProject]?.benefits
                      .slice(0, 3)
                      .map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {featuredProjects[currentProject]?.technologies.map(
                    (tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {renderProjectLinks(featuredProjects[currentProject]?.links)}
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentProject === index ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentProject(index);
                  setCurrentImageIndex(0); // Reset to first image when switching projects
                }}
              />
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                filter === category.key ? "active" : ""
              }`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const currentCardImageIndex = getCardImageIndex(index);
            return (
              <div key={index} className="project-card">
                <div className="card-image">
                  <img
                    // style={{objectFit: 'contain'}}
                    src={project.images[currentCardImageIndex]}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHN2Zz4K";
                    }}
                  />
                  <div className="card-overlay">
                    <span
                      className={`status-badge ${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Card Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="card-image-nav-btn prev"
                        onClick={() =>
                          navigateCardImage(
                            index,
                            "prev",
                            project.images.length
                          )
                        }
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="card-image-nav-btn next"
                        onClick={() =>
                          navigateCardImage(
                            index,
                            "next",
                            project.images.length
                          )
                        }
                      >
                        <FaChevronRight />
                      </button>

                      {/* Card Image Indicators */}
                      <div className="card-image-indicators">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            className={`card-image-indicator ${
                              currentCardImageIndex === imgIndex ? "active" : ""
                            }`}
                            onClick={() => setCardImageIndex(index, imgIndex)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-type">{project.type}</p>
                    <p className="card-period">
                      <FaCalendarAlt />
                      {project.period}
                    </p>
                  </div>

                  <p className="card-description">{project.description}</p>

                  <div className="card-technologies">
                    <FaCode />
                    <div className="tech-list">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {renderProjectLinks(project.links)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
