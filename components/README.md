# Weblyt Technologies - Reusable Components

This directory contains reusable components for the Weblyt Technologies website. These components help maintain consistency, reduce code duplication, and make the website easier to maintain.

## 📁 Directory Structure

```
components/
├── html/           # HTML component templates
├── css/            # Component-specific CSS (if needed)
├── js/             # JavaScript component logic
└── README.md       # This documentation
```

## 🧩 Available Components

### HTML Components

#### 1. Header Component (`html/header.html`)

- **Purpose**: Main navigation header with logo and menu
- **Usage**: Load into `#header-placeholder`
- **Features**: Responsive navigation, mobile menu, CTA button

#### 2. Footer Component (`html/footer.html`)

- **Purpose**: Site footer with social links and copyright
- **Usage**: Load into `#footer-placeholder`
- **Features**: Social media links, copyright notice, scroll-to-top button

#### 3. Page Header Component (`html/page-header.html`)

- **Purpose**: Standardized page title section
- **Usage**: Load into `#page-header-placeholder`
- **Features**: Page title, subtitle, breadcrumbs

#### 4. Project Card Component (`html/project-card.html`)

- **Purpose**: Template for individual project cards
- **Usage**: Used by JavaScript renderer
- **Features**: Project image, info, tech stack, links

### JavaScript Components

#### 1. Component Loader (`js/component-loader.js`)

- **Purpose**: Dynamically loads HTML components
- **Features**: Async loading, error handling, event system

#### 2. Project Data (`js/project-data.js`)

- **Purpose**: Centralized project information management
- **Features**: All project data, filtering methods, data access

#### 3. Project Card Renderer (`js/project-card-renderer.js`)

- **Purpose**: Renders project cards dynamically
- **Features**: Responsive cards, image placeholders, filtering support

## 🚀 Usage Examples

### Basic Component Loading

```javascript
// Load header component
window.componentLoader.loadComponent("header", "#header-placeholder", {
  replace: true,
});

// Load footer component
window.componentLoader.loadComponent("footer", "#footer-placeholder", {
  replace: true,
});

// Load page header component
window.componentLoader.loadComponent(
  "page-header",
  "#page-header-placeholder",
  { replace: true }
);
```

### Project Card Rendering

```javascript
// Render all projects
const allProjects = window.ProjectData.getAllProjects();
window.projectCardRenderer.renderProjectCards(
  allProjects,
  "#portfolio-container"
);

// Render featured projects only
const featuredProjects = window.ProjectData.getFeaturedProjects();
window.projectCardRenderer.renderProjectCards(
  featuredProjects,
  "#featured-container"
);

// Render projects with custom options
window.projectCardRenderer.renderProjectCards(projects, "#container", {
  clear: true,
  showFeatured: true,
  showStats: true,
  customClasses: "custom-class",
});
```

### Project Data Access

```javascript
// Get all projects
const allProjects = window.ProjectData.getAllProjects();

// Get featured projects
const featuredProjects = window.ProjectData.getFeaturedProjects();

// Get project by ID
const project = window.ProjectData.getProjectById("wilton-green");

// Get projects by category
const flutterProjects = window.ProjectData.getProjectsByCategory("flutter");

// Get projects by tech stack
const kotlinProjects = window.ProjectData.getProjectsByTech("kotlin");
```

## 📄 HTML Page Structure

To use components in your HTML pages, follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Head content -->
  </head>
  <body>
    <!-- Header placeholder -->
    <div id="header-placeholder"></div>

    <main class="main">
      <!-- Page header placeholder (optional) -->
      <div id="page-header-placeholder"></div>

      <!-- Your page content -->
      <section id="content">
        <!-- Content here -->
      </section>
    </main>

    <!-- Footer placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Include component scripts -->
    <script src="components/js/component-loader.js"></script>
    <script src="components/js/project-data.js"></script>
    <script src="components/js/project-card-renderer.js"></script>
  </body>
</html>
```

## 🎨 Styling

Components use the existing CSS from `assets/css/main.css`. No additional CSS files are needed for basic functionality. The components maintain the existing design system and responsiveness.

## 🔧 Customization

### Adding New Projects

To add a new project, update the `ProjectData.projects` object in `components/js/project-data.js`:

```javascript
'new-project': {
  id: 'new-project',
  title: 'New Project',
  category: 'Category',
  description: 'Project description',
  techStack: ['Tech1', 'Tech2'],
  downloads: '1K+',
  rating: '4.5',
  featured: false,
  image: 'path/to/image.jpg',
  hasImage: true,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=...',
  features: ['Feature 1', 'Feature 2'],
  technical: 'Technical description'
}
```

### Customizing Project Cards

You can customize project card rendering by modifying the `ProjectCardRenderer` class methods:

- `generateProjectCardHTML()` - Main card HTML generation
- `generateImageHTML()` - Image or placeholder generation
- `generateTechStackHTML()` - Tech stack badges
- `generateStatsHTML()` - Download and rating stats
- `generateLinksHTML()` - Action links

## 🐛 Troubleshooting

### Components Not Loading

- Check browser console for errors
- Ensure component files are accessible
- Verify placeholder elements exist in HTML

### Images Not Displaying

- Check image paths in project data
- Ensure images exist in the specified locations
- Verify `hasImage` property is set correctly

### Styling Issues

- Ensure `assets/css/main.css` is loaded
- Check for CSS conflicts
- Verify Bootstrap classes are available

## 📱 Responsiveness

All components are designed to be fully responsive and work across all device sizes. The existing responsive design system is preserved.

## 🔄 Updates and Maintenance

When updating components:

1. Test on all pages that use the component
2. Ensure responsiveness is maintained
3. Update documentation if needed
4. Test with different project data configurations

## 📞 Support

For issues or questions about components, check the browser console for errors and refer to this documentation. Components are designed to be self-contained and should not interfere with existing functionality.
