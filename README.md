# Newspaper CMS

A modern, responsive Content Management System for managing newspaper articles, built with React and Vite. This application provides a comprehensive interface for creating, editing, publishing, and managing articles with an intuitive user experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Features](#features)
- [Component Architecture](#component-architecture)
- [Usage](#usage)
- [Data Structure](#data-structure)
- [Development](#development)
- [Contributing](#contributing)

## 🎯 Overview

The Newspaper CMS is a full-featured web application designed to streamline article management workflows. It allows journalists and editors to:

- **Browse and Manage Articles**: View all articles in a responsive grid layout
- **Create Articles**: Add new articles with headline, body, author, and publication date
- **Edit Articles**: Update existing article information
- **Publish/Unpublish**: Control article visibility with a toggle switch
- **Delete Articles**: Remove articles from the system
- **Search Articles**: Find articles by headline
- **Filter Articles**: Filter articles by publication status
- **Pagination**: Navigate through large article lists efficiently


## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.3.1** - Lightning-fast build tool and dev server
- **Node.js v24.13.1** - JavaScript runtime
- **npm 11.8.0** - Package manager

### UI & Styling
- **Material-UI (MUI) 7.3.8** - Comprehensive component library
  - `@mui/material` - Core components and themes
  - `@mui/icons-material` - Icon library
- **Emotion** - CSS-in-JS library for styled components
  - `@emotion/react` - Core emotion package
  - `@emotion/styled` - Styled components API
- **CSS Modules** - Scoped styling for individual components

### Development Tools
- **ESLint 9.39.1** - Code quality and linting
- **React Plugins**:
  - `eslint-plugin-react-hooks` - React hooks best practices
  - `eslint-plugin-react-refresh` - Fast Refresh support
- **Vite Plugin for React** - React Fast Refresh support via Babel

## 📁 Project Structure

```
newspaper_cms/
├── public/                          # Static assets
│   └── assets/
│       └── icons/                   # Application icons
├── src/                             # Source code
│   ├── App.jsx                      # Root component
│   ├── App.module.css               # Root styles
│   ├── index.jsx                    # Application entry point
│   ├── setupTests.js                # Test configuration
│   ├── styles/
│   │   └── global.css               # Global styles
│   ├── components/                  # Reusable components (Atomic Design)
│   │   ├── atoms/                   # Smallest UI units
│   │   │   ├── FilterDropdown/      # Dropdown filter component
│   │   │   ├── FormButton/          # Reusable button for forms
│   │   │   ├── NewButton/           # Button to create new items
│   │   │   ├── OptionsMenu/         # Menu for additional options
│   │   │   ├── SearchBar/           # Search input component
│   │   │   └── Switch/              # Toggle switch component
│   │   ├── molecules/               # Combinations of atoms
│   │   │   ├── ArticleCard/         # Single article display card
│   │   │   ├── ArticleForm/         # Form for creating/editing articles
│   │   │   ├── ArticleListHeader/   # Header for article list
│   │   │   ├── HeaderLookUp/        # Header search/filter section
│   │   │   └── PaginationControls/  # Page navigation controls
│   │   ├── organisms/               # Complex component combinations
│   │   │   ├── ArticleList/         # List of articles
│   │   │   ├── ArticleListContainer/# Container for article list with layout
│   │   │   ├── ArticleManagementContainer/ # Main article management interface
│   │   │   ├── RightPanel/          # Right sidebar panel
│   │   │   └── SideBar/             # Left navigation sidebar
│   │   └── templates/               # Page layout templates
│   ├── pages/                       # Page components
│   │   ├── ArticlePage/             # Main articles management page
│   │   │   ├── ArticlePage.jsx      # Page logic and state management
│   │   │   └── ArticlesPage.module.css
│   │   └── NotFoundPage/            # 404/error page
│   │       ├── NotFoundPage.jsx     # Not found page component
│   │       └── NotFoundPage.module.css
│   └── utils/                       # Utility functions and constants
│       └── constants/
│           └── articles.json        # Sample article data
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── package.json                     # Project metadata and dependencies
└── README.md                        # This file

```

### Architecture Explanation

The project follows the **Atomic Design Pattern**, organizing components from smallest to largest:

#### **Atoms** (Basic Building Blocks)
Small, reusable, single-purpose components that form the foundation:
- `FilterDropdown` - Dropdown selector for filtering options
- `FormButton` - Standard button component for form submissions
- `NewButton` - Button for creating new articles
- `OptionsMenu` - Dropdown menu with additional actions
- `SearchBar` - Text input for searching articles
- `Switch` - Toggle switch for publish/unpublish status

#### **Molecules** (Atom Combinations)
Groups of atoms bonded together, forming functional units:
- `ArticleCard` - Displays a single article with headline, author, date
- `ArticleForm` - Complete form for creating/editing articles
- `ArticleListHeader` - Header section for the article list
- `HeaderLookUp` - Search controls at the top
- `PaginationControls` - Previous/Next buttons for page navigation

#### **Organisms** (Complex Components)
Complex, feature-rich components composed of molecules and atoms:
- `ArticleList` - Grid/list display of multiple articles
- `ArticleListContainer` - Container managing article list layout
- `ArticleManagementContainer` - Main component handling article CRUD operations
- `SideBar` - Navigation menu with page routing options
- `RightPanel` - Secondary sidebar for additional information/controls

#### **Templates** (Page Layouts)
Reserved for future layout template components.

#### **Pages** (Full Pages)
Complete page components that bring everything together:
- `ArticlePage` - Main dashboard for article management with state management
- `NotFoundPage` - Fallback page for navigation or errors

## 📦 Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** v24.13.1 or higher
- **npm** 11.8.0 or higher

### Setup Steps

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Encalad4/newspaper_cms.git
   cd newspaper_cms
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npm --version
   node --version
   ```

## 🚀 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR). The application will be available at `http://localhost:5173` (or the next available port).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory. The build is minified and ready for deployment.

### Preview
```bash
npm run preview
```
Serves the production build locally for testing before deployment.


### Testing
```bash
npm test
```
Runs the test suite (configured with Jest and React Testing Library). Use this to verify all components work correctly.

### Start (Alternative)
```bash
npm start
```
Alternative development start command (typically used with Create React App, configured here for compatibility).

## ✨ Features

### 1. **Article Management**
   - **Create**: Add new articles with headline, body, author, and publication date
   - **Read**: View all articles in a card-based list layout
   - **Update**: Edit existing article information
   - **Delete**: Remove articles from the system

### 2. **Publication Control**
   - Toggle article publication status (published/unpublished)
   - Visual indicators for publication status
   - Draft and published article management

### 3. **Search & Filter**
   - Full-text search to find articles by headline or content
   - Filter articles by publication status (Published/Draft)
   - Real-time search results

### 4. **Pagination**
   - Efficient navigation through large lists of articles
   - Previous/Next page controls
   - Page information display


### 5. **User Interface**
   - Clean, intuitive Material Design interface
   - Consistent styling across all components
   - Accessible form inputs and controls
   - Options menu for additional article actions

## 🏗️ Component Architecture

### State Management
The application uses **React Hooks** for state management:
- `useState` - Manages article list, current page, search filters
- Component-level state in `ArticlesPage` for article data
- Props drilling for passing data between components

### Data Flow
1. **ArticlesPage** (parent) maintains article state
2. **ArticleManagementContainer** receives articles and handlers via props
3. **ArticleListContainer** displays articles in appropriate layout
4. **ArticleCard** components render individual articles with action buttons
5. Handlers bubble up to parent for state updates

### Key State Variables in ArticlesPage
```javascript
articles[] - Array of article objects
search query - Current search term
filter status - Publication status filter
pagination - Current page number
```

## 📝 Usage

### Creating a New Article
1. Click the "New" button in the top navigation
2. Fill in the article form with:
   - **Headline**: Article title
   - **Body**: Article content
   - **Author**: Author name
   - **Publication Date**: Date when article should appear
3. Click "Save" to save the article

### Publishing an Article
1. Locate the article in the list
2. Click the toggle switch to publish/unpublish
3. Changes are reflected immediately

### Editing an Article
1. Click on the edit option in the menu of each article entry
2. Modify the article information in the form
3. Click "Update" to save changes

### Deleting an Article
1. Click the options menu (three dots) on the article card
2. Select "Delete"
3. Confirm the deletion

### Searching Articles
1. Use the search bar in the header
2. Type the article headline or keywords
3. Results update in real-time

### Filtering Articles
1. Use the filter dropdown in the header
2. Select "Published" or "Draft"
3. List updates to show filtered articles

## 📊 Data Structure

### Article Object
Each article in the system follows this structure:

```json
{
  "id": 1,
  "headline": "Article Title",
  "body": "Full article content here...",
  "author": "Author Name",
  "publishedDate": "2024-06-01",
  "published": true
}
```

**Field Descriptions:**
- `id` (number) - Unique identifier for the article
- `headline` (string) - Article title/heading
- `body` (string) - Full article content
- `author` (string) - Name of the article author
- `publishedDate` (string) - Publication date in YYYY-MM-DD format
- `published` (boolean) - Publication status (true = published, false = draft)

### Sample Data
Sample articles are stored in [src/utils/constants/articles.json](src/utils/constants/articles.json) and include 13 example articles on various technology topics.

## 🔧 Development

### Code Quality
The project includes ESLint configuration for maintaining code quality:
- React hooks best practices enforced
- Fast Refresh optimizations recommended
- Code consistency rules applied

### Adding New Components
1. Create a folder in the appropriate category (`atoms/`, `molecules/`, `organisms/`)
2. Create component file (`.jsx`) and styles file (`.module.css`)
3. Export component as default
4. Import and use in parent components

### Styling
- Each component has its own CSS Module file (`ComponentName.module.css`)
- Global styles in [src/styles/global.css](src/styles/global.css)
- Material-UI components provide styled components via Emotion
- Scoped styling prevents CSS conflicts

### Building for Production
```bash
npm run build
```
Creates optimized production bundle:
- Minified JavaScript
- Optimized CSS
- Asset optimization
- Ready for deployment to any static hosting service

## 🤝 Contributing

### Best Practices
1. **Follow the component structure** - Place components in appropriate atomic design folders
2. **Use CSS Modules** - Keep styles scoped to components
3. **Maintain code quality** - Run `npm run lint` before committing
4. **Write meaningful commits** - Clear commit messages for tracking changes
5. **Test your changes** - Use `npm test` to verify functionality

### Development Workflow
1. Create a feature branch for your changes
2. Make small, focused commits
3. Lint your code with `npm run lint`
4. Build and preview with `npm run build` and `npm run preview`
5. Submit a pull request with a clear description



## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Material-UI Documentation](https://mui.com)
- [Atomic Design Pattern](https://atomicdesign.bradfrost.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

**Project Version**: 0.0.0  
**Last Updated**: February 2026
