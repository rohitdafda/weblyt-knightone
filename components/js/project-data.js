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
};

// Make available globally
window.ProjectData = ProjectData;

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectData;
}
