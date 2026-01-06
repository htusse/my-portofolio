import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
  FaApple,
  FaGooglePlay,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import "./Projects.css";

// Helper function to get initials from project title
const getInitials = (title) => {
  if (!title) return "HT";
  const words = title.split(" ").filter(word => word.length > 0);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Placeholder component for projects without images
const ProjectPlaceholder = ({ title, className = "", onClick }) => {
  const initials = getInitials(title);
  return (
    <div className={`project-placeholder ${className}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <span className="placeholder-initials">{initials}</span>
    </div>
  );
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Secret Sale - E-commerce Platform",
      period: "August 2025 - September 2025",
      category: "web",
      type: "Full-Stack E-commerce Solution",
      status: "Completed",
      description:
        "Enterprise-grade multi-service e-commerce platform built on MedusaJS v2, featuring a customer storefront, point-of-sale system, campaign management, and comprehensive order fulfillment with multiple payment integrations.",
      benefits: [
        "Complete e-commerce solution with MedusaJS v2 backend and Next.js 15 storefront",
        "Point-of-Sale admin interface with order management and label printing",
        "Multiple payment gateway integrations (Stripe, PayFast, Manual payments)",
        "Advanced product search with Meilisearch integration",
        "Bulk product management with CSV import/export",
        "Partial fulfillment support with item-level tracking",
      ],
      technologies: [
        "Next.js 15",
        "MedusaJS v2",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Meilisearch",
        "Docker",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: {
        website: "https://secretsale.co.za/",
      },
      images: ["/secret-sale.png"],
      featured: true,
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
      type: "Event & Gamification App",
      status: "Completed",
      description:
        "Feature-rich event management app for Africa's largest pop culture convention, featuring gamification with quests and treasure hunts, real-time programme schedules, exhibitor discovery, QR code scanning, leaderboards, and integrated ticketing.",
      benefits: [
        "Gamification system with quests, treasure hunts, and competitive leaderboards",
        "Real-time programme scheduling with detailed event information and notifications",
        "Interactive exhibitor directory with detailed profiles and floorplan navigation",
        "QR code scanning for check-ins, treasure hunts, and exclusive content unlocks",
        "Integrated ticketing via Howler API with secure scan-to-enter functionality",
        "Special zones support including KidsCon, StreamerCon, and Otaku content",
      ],
      technologies: [
        "Expo",
        "React Native",
        "Firebase",
        "Strapi CMS",
        "AWS Cognito",
        "Howler API",
        "QR Scanning",
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
      period: "October 2024 - March 2025",
      category: "mobile",
      type: "Ambassador Management Platform",
      status: "Completed",
      description:
        "Comprehensive multi-country ambassador management platform for Cricut, featuring gamification, training modules, demo scheduling, digital wallet with banking integration, and real-time leaderboards across South Africa, Middle East, Israel, and Turkey.",
      benefits: [
        "Multi-country support with region-specific wallet and payout systems for 4 markets",
        "Comprehensive gamification system with challenges, leaderboards, and tiered rewards",
        "Integrated training platform with video modules, quizzes, and certification tracking",
        "Demo scheduling with GPS verification and buddy system for event coordination",
        "Digital wallet with banking integration for commission payouts and product purchases",
        "Real-time push notifications and OTA updates via Expo for seamless user experience",
      ],
      technologies: [
        "React Native",
        "Expo",
        "Strapi CMS",
        "Firebase",
        "Sentry",
        "Multi-region APIs",
        "Push Notifications",
        "Geolocation",
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
      title: "Cricut Wishlist Plugin",
      period: "February 2025 - March 2025",
      category: "wordpress",
      type: "WordPress Plugin",
      status: "Completed",
      description:
        "Feature-rich WordPress plugin for creating and sharing personalized Cricut product wishlists with live preview, QR code generation, social media integration, and comprehensive admin analytics dashboard.",
      benefits: [
        "Interactive wishlist creator with real-time live preview using HTML5 Canvas",
        "Social media sharing with optimized Open Graph meta tags for Facebook and Twitter",
        "QR code generation for easy mobile sharing and product discovery",
        "Comprehensive admin dashboard with share tracking and wishlist analytics",
        "Multiple customizable messages and background images per campaign",
        "Responsive mobile-first design with custom branded typography",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "jQuery",
        "HTML5 Canvas",
        "AJAX",
        "QRCode.js",
        "Open Graph API",
        "MySQL",
      ],
      images: ["/80.png"],
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
    {
      title: "Vaya X",
      period: "January 2025 - Present",
      category: "mobile",
      type: "Multi-Service Transportation Platform",
      status: "Completed",
      description:
        "Enterprise-grade multi-service transportation platform built with Yarn workspaces monorepo architecture, supporting taxi booking, food delivery, accommodation, and cargo services across 20+ African countries with integrated payment systems and real-time tracking.",
      benefits: [
        "Multi-country and multi-currency support for 20+ African regions including Tanzania e-ticketing compliance",
        "Comprehensive payment integration with 15+ gateways including Stripe, PayPal, PayStack, and Flutterwave",
        "Monorepo architecture with shared business logic across mobile app, web dashboard, and cloud functions",
        "Real-time booking system with driver matching, trip tracking, and automated notifications",
        "Fleet management dashboard for admin and fleet operators with detailed analytics",
        "Wallet system with locked balance support for referral bonuses and promotional credits",
      ],
      technologies: [
        "Expo",
        "React Native",
        "React",
        "Firebase",
        "Cloud Functions",
        "Redux Toolkit",
        "Multi-payment APIs",
        "Google Maps",
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
      featured: false,
      links: {
        website: "https://vayax-78d77.web.app/",
      },
    },
    {
      title: "AmissihArt - Poster Builder",
      period: "August 2025 - December 2025",
      category: "web",
      type: "SaaS Design Platform",
      status: "Completed",
      description:
        "Professional-grade poster and design creation platform with AI-powered template generation, advanced design tools, and seamless collaboration features for creating stunning posters, flyers, and social media graphics.",
      benefits: [
        "AI-powered smart template generation from text prompts using OpenAI",
        "Professional drag-and-drop editor with Fabric.js canvas",
        "Advanced data visualization with 5 chart types (Bar, Line, Pie, Donut, Area)",
        "500+ professional templates across business, marketing, education, and events",
        "Multi-format export (PNG, JPG, PDF, SVG) with quality options up to 2x resolution",
        "Tiered subscription system with Free, Pro, and Business plans",
      ],
      technologies: [
        "React",
        "Firebase",
        "Material-UI",
        "Fabric.js",
        "OpenAI API",
        "Google Fonts API",
        "Cloud Functions",
      ],
      images: ["/amissih-art.png"],
      featured: false,
      links: {
        github: "https://github.com/htusse/poster-builder-ui",
      },
    },
    // {
    //   title: "EventApp - Event Management Platform",
    //   period: "December 2025 - Present",
    //   category: "web",
    //   type: "React Event Management PWA",
    //   status: "In Progress",
    //   description:
    //     "Comprehensive event management platform enabling users to create, manage, and sell tickets for events with integrated PayFast payment processing, QR-coded tickets, and real-time order management.",
    //   benefits: [
    //     "Complete event creation and management with draft saving at every step",
    //     "PayFast payment integration with secure webhook handling and signature verification",
    //     "Automated QR-coded ticket generation upon successful payment",
    //     "4-day free trial system for new users",
    //     "Order management with automatic cleanup of abandoned orders",
    //     "Mobile-first responsive design with PWA capabilities",
    //   ],
    //   technologies: [
    //     "React 19",
    //     "TypeScript",
    //     "Vite",
    //     "Tailwind CSS 4",
    //     "Firebase",
    //     "PayFast API",
    //     "Cloud Functions",
    //   ],
    //   images: ["/eventapp.png"],
    //   featured: false,
    // },
    // {
    //   title: "TruFit Lifestyle - Health & Wellness PWA",
    //   period: "2025 - Present",
    //   category: "web",
    //   type: "Progressive Web Application",
    //   status: "In Progress",
    //   description:
    //     "Mobile-first Progressive Web Application for health and wellness management featuring client onboarding, referral tracking, subscription management, e-commerce health shop, and community features.",
    //   benefits: [
    //     "Client database supporting 5,000+ users with unique WhatsApp referral links",
    //     "Three-tier subscription system (Free, Monthly/Quarterly, One-Time Programs)",
    //     "Integrated e-commerce health shop with member discounts",
    //     "Live webinar platform with Zoom/Google Meet integration",
    //     "Real-time community chat with group rooms and private messaging",
    //     "PayFast payment integration for South African market",
    //   ],
    //   technologies: [
    //     "React 19",
    //     "TypeScript",
    //     "Vite",
    //     "Tailwind CSS 4",
    //     "Firebase",
    //     "Zustand",
    //     "TanStack Query",
    //     "PayFast",
    //   ],
    //   images: ["/trufit.png"],
    //   featured: false,
    // },
    {
      title: "WhatsApp Business Bot",
      period: "December 2025 - January 2026",
      category: "web",
      type: "Node.js Bot Application",
      status: "Completed",
      description:
        "Automated WhatsApp bot using Meta's WhatsApp Business Platform API for business communication, featuring webhook integration, automated responses, and interactive messaging capabilities.",
      benefits: [
        "Automated customer response system with customizable commands",
        "Webhook integration for real-time message processing",
        "Interactive button and media message support",
        "Easy deployment with ngrok for local development",
        "Scalable architecture for business communication needs",
        "Comprehensive command system (greeting, help, info, contact)",
      ],
      technologies: [
        "Node.js",
        "Express",
        "Meta WhatsApp API",
        "Webhooks",
        "ngrok",
      ],
      images: ["/whatsappbot.png"],
      featured: false,
      links: {
        github: "https://github.com/htusse/whatsappbot",
      },
    },
    {
      title: "Strapi Excel Exporter Plugin",
      period: "2024",
      category: "strapi",
      type: "Strapi CMS Plugin",
      status: "Completed",
      description:
        "Custom Strapi plugin enabling administrators to export collection data to Excel spreadsheets with configurable columns, filters, and formatting options for streamlined data analysis and reporting.",
      benefits: [
        "One-click Excel export from any Strapi collection with custom column selection",
        "Support for filtered data exports based on current view settings",
        "Configurable column formatting and data transformation",
        "Seamless integration with Strapi admin panel UI",
        "Bulk data export for reporting and analytics workflows",
      ],
      technologies: [
        "Strapi",
        "Node.js",
        "xlsx",
        "React",
        "Strapi Plugin API",
      ],
      images: [],
      featured: false,
    },
    {
      title: "Ambassador Overview Dashboard Plugin",
      period: "2024",
      category: "strapi",
      type: "Strapi CMS Plugin",
      status: "Completed",
      description:
        "Custom Strapi admin plugin providing a comprehensive dashboard for ambassador program management with real-time analytics, performance metrics, and activity tracking across multiple regions.",
      benefits: [
        "Real-time ambassador performance metrics and KPI visualization",
        "Multi-region overview with country-specific filtering",
        "Activity tracking for demos, training completions, and engagements",
        "Leaderboard integration with point-based ranking system",
        "Quick access to ambassador profiles and management actions",
      ],
      technologies: [
        "Strapi",
        "Node.js",
        "React",
        "Chart.js",
        "Strapi Plugin API",
      ],
      images: [],
      featured: false,
    },
    {
      title: "Custom Email Plugin",
      period: "2024",
      category: "strapi",
      type: "Strapi CMS Plugin",
      status: "Completed",
      description:
        "Custom Strapi plugin extending email functionality with template management, bulk email capabilities, and SendGrid integration for ambassador communications and automated notifications.",
      benefits: [
        "Custom email template management with dynamic variable support",
        "Bulk email sending to filtered user groups (ambassadors, trainees, trainers)",
        "SendGrid integration with delivery tracking and analytics",
        "Scheduled email campaigns with cron-based automation",
        "Role-based email targeting for targeted communications",
      ],
      technologies: [
        "Strapi",
        "Node.js",
        "SendGrid API",
        "React",
        "Strapi Plugin API",
      ],
      images: [],
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "web", label: "Web Applications" },
    { key: "wordpress", label: "WordPress Plugins" },
    { key: "strapi", label: "Strapi Plugins" }
  ];

  const filteredProjects =
    filter === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter(
          (project) => project.category === filter && !project.featured
        );

  const featuredProjects = projects.filter((project) => project.featured);

  // Navigation functions for featured projects carousel
  const navigateToProject = (direction) => {
    if (direction === "next") {
      setCurrentProject((prev) => 
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentProject((prev) => 
        prev === 0 ? featuredProjects.length - 1 : prev - 1
      );
    }
  };

  // Project detail modal functions
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (!selectedProject?.images?.length) return;
    const totalImages = selectedProject.images.length;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedProject) return;
      switch (e.key) {
        case 'Escape':
          closeProjectModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedProject]);

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
          {/* Carousel Navigation Arrows */}
          <button 
            className="carousel-nav-btn prev" 
            onClick={() => navigateToProject("prev")}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel-container">
            <div className="featured-project">
              <div className="project-images-collage" onClick={() => openProjectModal(featuredProjects[currentProject])}>
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

                <div className="images-grid grid-single">
                  <div className="image-item item-1">
                    <ProjectPlaceholder 
                      title={featuredProjects[currentProject]?.title} 
                      className="show" 
                    />
                  </div>
                </div>
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

          <button 
            className="carousel-nav-btn next" 
            onClick={() => navigateToProject("next")}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>

          <div className="carousel-indicators">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentProject === index ? "active" : ""
                }`}
                onClick={() => setCurrentProject(index)}
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
            return (
              <div key={index} className="project-card">
                <div className="card-image" onClick={() => openProjectModal(project)} style={{ cursor: 'pointer' }}>
                  <ProjectPlaceholder title={project.title} className="show" />
                  <div className="card-overlay">
                    <span
                      className={`status-badge ${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>
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

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeProjectModal} aria-label="Close modal">
                <FaTimes />
              </button>

              <div className="modal-content">
                {/* Image/Placeholder Section */}
                <div className="modal-image-section">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <>
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="modal-main-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <ProjectPlaceholder title={selectedProject.title} className="modal-fallback-placeholder" />
                      
                      {selectedProject.images.length > 1 && (
                        <>
                          <button 
                            className="modal-nav-btn prev" 
                            onClick={() => navigateImage('prev')}
                            aria-label="Previous image"
                          >
                            <FaChevronLeft />
                          </button>
                          <button 
                            className="modal-nav-btn next" 
                            onClick={() => navigateImage('next')}
                            aria-label="Next image"
                          >
                            <FaChevronRight />
                          </button>
                          <div className="modal-image-counter">
                            {currentImageIndex + 1} / {selectedProject.images.length}
                          </div>
                        </>
                      )}

                      {/* Thumbnail Strip */}
                      {selectedProject.images.length > 1 && (
                        <div className="modal-thumbnails">
                          {selectedProject.images.map((img, idx) => (
                            <div 
                              key={idx}
                              className={`modal-thumbnail ${currentImageIndex === idx ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(idx)}
                            >
                              <img 
                                src={img} 
                                alt={`Thumbnail ${idx + 1}`}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <ProjectPlaceholder title={selectedProject.title} className="show modal-placeholder" />
                  )}
                </div>

                {/* Details Section */}
                <div className="modal-details-section">
                  <div className="modal-header">
                    <span className={`status-badge ${selectedProject.status.toLowerCase().replace(" ", "-")}`}>
                      {selectedProject.status}
                    </span>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-type">{selectedProject.type}</p>
                    <p className="modal-period">
                      <FaCalendarAlt /> {selectedProject.period}
                    </p>
                  </div>

                  <div className="modal-description">
                    <p>{selectedProject.description}</p>
                  </div>

                  {selectedProject.benefits && selectedProject.benefits.length > 0 && (
                    <div className="modal-benefits">
                      <h4>Key Benefits</h4>
                      <ul>
                        {selectedProject.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-technologies">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.links && (
                    <div className="modal-links">
                      {renderProjectLinks(selectedProject.links)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
