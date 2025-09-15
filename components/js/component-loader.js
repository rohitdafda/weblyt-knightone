/**
 * Component Loader - Loads HTML components dynamically
 * Preserves existing UI and responsiveness
 */

class ComponentLoader {
  constructor() {
    this.components = new Map();
    this.loadedComponents = new Set();
  }

  /**
   * Load a component from HTML file
   * @param {string} componentName - Name of the component
   * @param {string} targetSelector - CSS selector where to insert the component
   * @param {Object} options - Additional options
   */
  async loadComponent(componentName, targetSelector, options = {}) {
    try {
      // Check if component is already loaded
      if (this.loadedComponents.has(componentName)) {
        console.log(`Component ${componentName} already loaded`);
        return;
      }

      // Load component HTML
      const response = await fetch(`components/html/${componentName}.html`);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentName}`);
      }

      const html = await response.text();

      // Find target element
      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) {
        throw new Error(`Target element not found: ${targetSelector}`);
      }

      // Insert component HTML
      if (options.replace) {
        targetElement.outerHTML = html;
      } else {
        targetElement.insertAdjacentHTML("beforeend", html);
      }

      // Mark as loaded
      this.loadedComponents.add(componentName);
      this.components.set(componentName, html);

      // Trigger custom event
      document.dispatchEvent(
        new CustomEvent("componentLoaded", {
          detail: { componentName, targetSelector },
        })
      );

      console.log(`Component ${componentName} loaded successfully`);
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
    }
  }

  /**
   * Load multiple components
   * @param {Array} components - Array of component configurations
   */
  async loadComponents(components) {
    const promises = components.map((comp) =>
      this.loadComponent(comp.name, comp.target, comp.options)
    );
    await Promise.all(promises);
  }

  /**
   * Get loaded component HTML
   * @param {string} componentName - Name of the component
   */
  getComponent(componentName) {
    return this.components.get(componentName);
  }

  /**
   * Check if component is loaded
   * @param {string} componentName - Name of the component
   */
  isLoaded(componentName) {
    return this.loadedComponents.has(componentName);
  }
}

// Create global instance
window.componentLoader = new ComponentLoader();

// Auto-load common components on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // Load header if header placeholder exists
  if (document.querySelector("#header-placeholder")) {
    window.componentLoader.loadComponent("header", "#header-placeholder", {
      replace: true,
    });
  }

  // Load footer if footer placeholder exists
  if (document.querySelector("#footer-placeholder")) {
    window.componentLoader.loadComponent("footer", "#footer-placeholder", {
      replace: true,
    });
  }

  // Load page header if page header placeholder exists
  if (document.querySelector("#page-header-placeholder")) {
    window.componentLoader.loadComponent(
      "page-header",
      "#page-header-placeholder",
      { replace: true }
    );
  }
});

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = ComponentLoader;
}
