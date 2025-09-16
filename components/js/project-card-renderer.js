/**
 * Project Card Renderer - Renders project cards dynamically
 * Maintains existing UI and responsiveness
 */

class ProjectCardRenderer {
  constructor() {
    this.projectData = window.ProjectData;
  }

  /**
   * Render a single project card
   * @param {Object} project - Project data object
   * @param {string} containerSelector - CSS selector for container
   * @param {Object} options - Rendering options
   */
  renderProjectCard(project, containerSelector, options = {}) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error(`Container not found: ${containerSelector}`);
      return;
    }

    const cardHtml = this.generateProjectCardHTML(project, options);
    container.insertAdjacentHTML("beforeend", cardHtml);
  }

  /**
   * Render multiple project cards
   * @param {Array} projects - Array of project data objects
   * @param {string} containerSelector - CSS selector for container
   * @param {Object} options - Rendering options
   */
  renderProjectCards(projects, containerSelector, options = {}) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error(`Container not found: ${containerSelector}`);
      return;
    }

    // Clear container if requested
    if (options.clear) {
      container.innerHTML = "";
    }

    projects.forEach((project) => {
      const cardHtml = this.generateProjectCardHTML(project, options);
      container.insertAdjacentHTML("beforeend", cardHtml);
    });
  }

  /**
   * Generate HTML for a project card
   * @param {Object} project - Project data object
   * @param {Object} options - Rendering options
   */
  generateProjectCardHTML(project, options = {}) {
    const {
      showFeatured = true,
      showStats = true,
      showTechStack = true,
      showLinks = true,
      customClasses = "",
    } = options;

    // Determine filter classes
    const filterClasses = this.getFilterClasses(project);

    // Generate tech stack badges
    const techStackHtml = showTechStack
      ? this.generateTechStackHTML(project.techStack)
      : "";

    // Generate featured badge
    const featuredBadgeHtml =
      showFeatured && project.featured
        ? '<div class="featured-badge">FEATURED</div>'
        : "";

    // Generate image or placeholder
    const imageHtml = this.generateImageHTML(project);

    // Generate stats
    const statsHtml = showStats ? this.generateStatsHTML(project) : "";

    // Generate links
    const linksHtml = showLinks ? this.generateLinksHTML(project) : "";

    return `
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${filterClasses} ${customClasses}" id="${project.id}">
        <div class="portfolio-card">
          ${featuredBadgeHtml}
          ${imageHtml}
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${project.category}</p>
            ${techStackHtml}
            ${statsHtml}
            ${linksHtml}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generate filter classes for Isotope
   * @param {Object} project - Project data object
   */
  getFilterClasses(project) {
    const classes = [];

    // Add featured class
    if (project.featured) {
      classes.push("filter-featured");
    }

    // Add tech stack classes
    project.techStack.forEach((tech) => {
      const techClass = tech.toLowerCase().replace(/\s+/g, "-");
      classes.push(`filter-${techClass}`);
    });

    // Add category class
    const categoryClass = project.category.toLowerCase().replace(/\s+/g, "-");
    classes.push(`filter-${categoryClass}`);

    return classes.join(" ");
  }

  /**
   * Generate tech stack HTML
   * @param {Array} techStack - Array of tech stack items
   */
  generateTechStackHTML(techStack) {
    if (!techStack || techStack.length === 0) return "";

    const badges = techStack
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    return `<div class="tech-stack">${badges}</div>`;
  }

  /**
   * Generate image HTML
   * @param {Object} project - Project data object
   */
  generateImageHTML(project) {
    if (project.hasImage && project.image) {
      return `
        <img
          src="${project.image}"
          class="img-fluid"
          alt="${project.title} App"
        />
      `;
    } else {
      // Generate placeholder with appropriate icon
      const icon = this.getProjectIcon(project.category);
      return `
        <div class="project-image-placeholder">
          <i class="bi ${icon}"></i>
          <span>${project.title}</span>
        </div>
      `;
    }
  }

  /**
   * Generate stats HTML
   * @param {Object} project - Project data object
   */
  generateStatsHTML(project) {
    return `
      <div class="project-stats">
        <span><i class="bi bi-download"></i> ${project.downloads} Downloads</span>
        <span><i class="bi bi-star-fill"></i> ${project.rating} Rating</span>
      </div>
    `;
  }

  /**
   * Generate links HTML
   * @param {Object} project - Project data object
   */
  generateLinksHTML(project) {
    let links = "";

    // Preview link (for images)
    if (project.hasImage && project.image) {
      links += `
        <a href="${project.image}" class="glightbox preview-link" data-gallery="portfolio-gallery-${project.id}">
          <i class="bi bi-zoom-in"></i>
        </a>
      `;
    }

    // Play Store link
    if (project.playStoreUrl) {
      links += `
        <a href="${project.playStoreUrl}" target="_blank" class="app-store-link">
          <i class="bi bi-google-play"></i>
        </a>
      `;
    }

    // Details link
    links += `
      <a href="portfolio-details.html?project=${project.id}" class="details-link">
        <i class="bi bi-link-45deg"></i>
      </a>
    `;

    return `<div class="portfolio-links">${links}</div>`;
  }

  /**
   * Get appropriate icon for project category
   * @param {string} category - Project category
   */
  getProjectIcon(category) {
    const iconMap = {
      laundry: "bi-phone",
      hr: "bi-people",
      fitness: "bi-activity",
      barter: "bi-arrow-repeat",
      business: "bi-building",
      yoga: "bi-heart-pulse",
      dating: "bi-heart",
      gaming: "bi-trophy",
      education: "bi-book",
      design: "bi-grid-3x3",
      entertainment: "bi-controller",
    };

    const categoryLower = category.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (categoryLower.includes(key)) {
        return icon;
      }
    }

    return "bi-phone"; // Default icon
  }

  /**
   * Render featured projects carousel
   * @param {string} containerSelector - CSS selector for carousel container
   */
  renderFeaturedCarousel(containerSelector) {
    const featuredProjects = this.projectData.getFeaturedProjects();
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.error(`Carousel container not found: ${containerSelector}`);
      return;
    }

    const carouselHtml = featuredProjects
      .map((project) => this.generateCarouselSlideHTML(project))
      .join("");

    container.innerHTML = carouselHtml;
  }

  /**
   * Generate carousel slide HTML
   * @param {Object} project - Project data object
   */
  generateCarouselSlideHTML(project) {
    const imageHtml = this.generateImageHTML(project);
    const techStackHtml = this.generateTechStackHTML(project.techStack);
    const statsHtml = this.generateStatsHTML(project);

    return `
      <div class="swiper-slide">
        <div class="project-card">
          <div class="project-image">
            ${imageHtml}
            <div class="project-overlay">
              <div class="project-links">
                ${
                  project.hasImage
                    ? `
                  <a href="${project.image}" class="glightbox preview-link" data-gallery="featured-projects">
                    <i class="bi bi-zoom-in"></i>
                  </a>
                `
                    : ""
                }
                ${
                  project.playStoreUrl
                    ? `
                  <a href="${project.playStoreUrl}" target="_blank" class="app-store-link">
                    <i class="bi bi-google-play"></i>
                  </a>
                `
                    : ""
                }
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-badge">Featured</div>
            <h3>${project.title}</h3>
            <p class="project-category">${project.category}</p>
            <p class="project-description">${project.description}</p>
            ${techStackHtml}
            ${statsHtml}
            <a href="portfolio.html#${
              project.id
            }" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Create global instance
window.projectCardRenderer = new ProjectCardRenderer();

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = ProjectCardRenderer;
}
