/**
 * Project Data Component - Centralized project information
 * Maintains all project data in one place for easy management
 */

const ProjectData = {
  // Project information from CSV and organized folders
  projects: {
    "wilton-green": {
      id: "wilton-green",
      title: "Wilton Green",
      category: "Laundry Management System",
      description:
        "Comprehensive laundry management solution with booking system, service selection, and real-time order tracking. Built with Flutter for both mobile and web platforms.",
      techStack: ["Flutter", "Supabase"],
      platform: ["Mobile", "Web"],
      downloads: "1K+",
      rating: "4.5",
      featured: true,
      image: "assets/img/projects/wilton-green/banner.webp",
      hasImage: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.wiltongreen",
      features: [
        "Booking System with date/time selection",
        "Service Selection with pricing tiers",
        "Real-time Order Tracking",
        "Profile Management",
        "Email Notifications",
        "Service Area Listing",
      ],
      technical:
        "Built using Flutter framework with Firebase backend for real-time data synchronization, ensuring cross-platform compatibility and optimal performance.",
    },
    "adal-badal": {
      id: "adal-badal",
      title: "Adal Badal",
      category: "Barter Exchange Platform",
      description:
        "Innovative barter exchange platform connecting users for item trading and services exchange. Built with modern web technologies for seamless user experience.",
      techStack: ["Flutter", "Web Platform", "Firebase"],
      platform: ["Mobile"],
      downloads: "2K+",
      rating: "4.3",
      featured: false,
      image: "assets/img/projects/adal-badal/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Item Listing & Search",
        "Barter Matching System",
        "User Profiles & Ratings",
        "Secure Messaging",
        "Transaction History",
        "Category-based Trading",
      ],
      technical:
        "Developed with Flutter web for responsive design and Firebase for real-time data management and user authentication.",
    },
    bleexyou: {
      id: "bleexyou",
      title: "BleexYou",
      category: "Business Management Platform",
      description:
        "Comprehensive business management platform with advanced analytics and workflow automation. Designed for modern enterprises seeking digital transformation.",
      techStack: ["Flutter", "Mobile & Web", "Firebase"],
      platform: ["Mobile"],
      downloads: "3K+",
      rating: "4.6",
      featured: false,
      image: "assets/img/projects/bleexyou/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Business Analytics Dashboard",
        "Workflow Automation",
        "Team Collaboration Tools",
        "Document Management",
        "Performance Tracking",
        "Custom Reporting",
      ],
      technical:
        "Built with Flutter for cross-platform compatibility and Firebase for scalable backend infrastructure.",
    },
    keka: {
      id: "keka",
      title: "Keka",
      category: "HR Management System",
      description:
        "Powerful employee management platform with HR processes, time tracking, and workforce efficiency tools. Built with native Android Kotlin for enterprise-grade performance.",
      techStack: ["Kotlin", "Android"],
      platform: ["Mobile"],
      downloads: "5K+",
      rating: "4.7",
      featured: true,
      image: "assets/img/projects/keka/banner.webp",
      hasImage: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.keka.xhr",
      features: [
        "Employee Management",
        "Time Tracking",
        "HR Processes Automation",
        "Workforce Analytics",
        "Leave Management",
        "Performance Tracking",
      ],
      technical:
        "Developed using native Android Kotlin with enterprise-grade architecture, ensuring high performance and scalability for large organizations.",
    },
    yogavivo: {
      id: "yogavivo",
      title: "Yogavivo",
      category: "Yoga & Wellness App",
      description:
        "Comprehensive yoga and wellness application with guided sessions, meditation, and health tracking. Built with Flutter for seamless cross-platform experience.",
      techStack: ["Flutter", "Mobile & Web", "Health"],
      platform: ["Mobile"],
      downloads: "2.5K+",
      rating: "4.4",
      featured: false,
      image: "assets/img/projects/yogavivo/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Guided Yoga Sessions",
        "Meditation Programs",
        "Health Tracking",
        "Progress Monitoring",
        "Personalized Plans",
        "Community Features",
      ],
      technical:
        "Built with Flutter for cross-platform compatibility and integrated with health tracking APIs for comprehensive wellness management.",
    },
    "live-dating": {
      id: "live-dating",
      title: "Live Dating",
      category: "Dating Application",
      description:
        "Modern dating application with advanced matching algorithms and real-time communication features. Built with native Android for optimal performance.",
      techStack: ["Kotlin", "Android", "Real-time"],
      platform: ["Mobile"],
      downloads: "4K+",
      rating: "4.2",
      featured: false,
      image: "assets/img/projects/live-dating/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Smart Matching Algorithm",
        "Real-time Chat",
        "Video Calls",
        "Profile Verification",
        "Location-based Matching",
        "Safety Features",
      ],
      technical:
        "Developed with native Android Kotlin and integrated with real-time communication services for seamless user interaction.",
    },
    gg11: {
      id: "gg11",
      title: "GG11",
      category: "Gaming Platform",
      description:
        "Comprehensive gaming platform with tournaments, leaderboards, and social features. Built with modern web technologies for engaging gaming experience.",
      techStack: ["Flutter", "Web Platform", "Gaming"],
      platform: ["Mobile"],
      downloads: "3.5K+",
      rating: "4.5",
      featured: false,
      image: "assets/img/projects/gg11/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Tournament Management",
        "Leaderboards",
        "Social Gaming Features",
        "Achievement System",
        "Real-time Updates",
        "Community Forums",
      ],
      technical:
        "Built with Flutter web and integrated with gaming APIs for real-time tournament management and social features.",
    },
    rwl: {
      id: "rwl",
      title: "RWL",
      category: "Comprehensive Fitness App",
      description:
        "Comprehensive fitness app with health quizzes, workout videos, calorie tracking, and community features. Built with native Android Kotlin for optimal performance.",
      techStack: ["Kotlin", "Android"],
      platform: ["Mobile"],
      downloads: "4K+",
      rating: "4.6",
      featured: true,
      image: "assets/img/projects/rwl/banner.webp",
      hasImage: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=uk.co.disciplemedia.resultswithlucy",
      features: [
        "Health Quizzes",
        "Workout Videos",
        "Calorie Tracking",
        "Community Features",
        "Progress Monitoring",
        "Personalized Plans",
      ],
      technical:
        "Built with native Android Kotlin using modern architecture patterns, integrated with video streaming capabilities and real-time community features.",
    },
    cleanhome: {
      id: "cleanhome",
      title: "CleanHome",
      category: "Home Cleaning Services",
      description:
        "Professional home cleaning services platform connecting customers with verified cleaning professionals. Modern web platform for booking and managing cleaning services.",
      techStack: ["Web Platform", "Modern UI", "Booking System"],
      platform: ["Web"],
      downloads: "1.5K+",
      rating: "4.4",
      featured: false,
      image: "assets/img/projects/clean-home/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Service Booking System",
        "Professional Profiles",
        "Customer Reviews",
        "Service Scheduling",
        "Payment Integration",
        "Quality Assurance",
      ],
      technical:
        "Built with modern web technologies and responsive design for seamless booking experience across all devices.",
    },
    "laptop-india": {
      id: "laptop-india",
      title: "Laptop India",
      category: "E-commerce Platform",
      description:
        "Comprehensive e-commerce platform for laptop sales and services. Features product catalog, comparison tools, and customer support for laptop purchases.",
      techStack: ["Web Platform", "E-commerce", "Product Catalog"],
      platform: ["Web"],
      downloads: "2K+",
      rating: "4.3",
      featured: false,
      image: "assets/img/projects/laptop-india/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Product Catalog",
        "Price Comparison",
        "Customer Reviews",
        "Technical Specifications",
        "Purchase Assistance",
        "After-sales Support",
      ],
      technical:
        "Developed with modern web technologies and integrated e-commerce solutions for seamless shopping experience.",
    },
    "one-avenue-group": {
      id: "one-avenue-group",
      title: "One Avenue Group",
      category: "Corporate Business Website",
      description:
        "Professional corporate website showcasing business services, team information, and company portfolio. Modern design with comprehensive business information.",
      techStack: ["Web Platform", "Corporate", "Portfolio"],
      platform: ["Web"],
      downloads: "800+",
      rating: "4.5",
      featured: false,
      image: "assets/img/projects/one-avenue-group/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Company Portfolio",
        "Team Information",
        "Service Showcase",
        "Contact Integration",
        "Business Information",
        "Professional Design",
      ],
      technical:
        "Built with modern web technologies and responsive design principles for professional corporate presentation.",
    },
    wise: {
      id: "wise",
      title: "Wise",
      category: "Business Consulting Platform",
      description:
        "Professional business consulting platform offering expert advice, business solutions, and consulting services. Comprehensive web platform for business growth.",
      techStack: ["Web Platform", "Consulting", "Business Solutions"],
      platform: ["Web"],
      downloads: "1.2K+",
      rating: "4.6",
      featured: false,
      image: "assets/img/projects/wise/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Consulting Services",
        "Business Solutions",
        "Expert Profiles",
        "Service Packages",
        "Client Portal",
        "Resource Center",
      ],
      technical:
        "Developed with modern web technologies and integrated business management tools for comprehensive consulting services.",
    },
    "ysios-capital": {
      id: "ysios-capital",
      title: "Ysios Capital",
      category: "Investment Platform",
      description:
        "Professional investment platform for capital management and investment opportunities. Comprehensive web platform for investors and financial services.",
      techStack: ["Web Platform", "Investment", "Financial Services"],
      platform: ["Web"],
      downloads: "900+",
      rating: "4.4",
      featured: false,
      image: "assets/img/projects/ysios-capital/banner.webp",
      hasImage: true,
      playStoreUrl: null,
      features: [
        "Investment Opportunities",
        "Portfolio Management",
        "Market Analysis",
        "Financial Tools",
        "Investor Resources",
        "Professional Services",
      ],
      technical:
        "Built with modern web technologies and integrated financial tools for comprehensive investment management.",
    },
  },

  /**
   * Get all projects
   */
  getAllProjects() {
    return Object.values(this.projects);
  },

  /**
   * Get featured projects
   */
  getFeaturedProjects() {
    return Object.values(this.projects).filter((project) => project.featured);
  },

  /**
   * Get project by ID
   */
  getProjectById(id) {
    return this.projects[id] || null;
  },

  /**
   * Get projects by category
   */
  getProjectsByCategory(category) {
    return Object.values(this.projects).filter((project) =>
      project.category.toLowerCase().includes(category.toLowerCase())
    );
  },

  /**
   * Get projects by tech stack
   */
  getProjectsByTech(tech) {
    return Object.values(this.projects).filter((project) =>
      project.techStack.some((t) =>
        t.toLowerCase().includes(tech.toLowerCase())
      )
    );
  },

  /**
   * Get projects with images
   */
  getProjectsWithImages() {
    return Object.values(this.projects).filter((project) => project.hasImage);
  },

  /**
   * Get projects without images
   */
  getProjectsWithoutImages() {
    return Object.values(this.projects).filter((project) => !project.hasImage);
  },

  /**
   * Get projects by platform
   */
  getProjectsByPlatform(platform) {
    return Object.values(this.projects).filter((project) =>
      project.platform.some((p) => p.toLowerCase() === platform.toLowerCase())
    );
  },

  /**
   * Get web projects
   */
  getWebProjects() {
    return this.getProjectsByPlatform("web");
  },
};

// Make available globally
window.ProjectData = ProjectData;

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectData;
}
