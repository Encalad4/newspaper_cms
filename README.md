# Newspaper CMS (SENIROP)

A modern, component-based Content Management System for managing newspaper articles. Built with React 19, featuring a robust atomic component structure, comprehensive testing suite, and Material-UI integration for professional UI components.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture & Design](#architecture--design)
- [Technology Stack](#technology-stack)
- [Project Dependencies](#project-dependencies)
- [Component Structure (Atomic Design)](#component-structure-atomic-design)
- [Project Setup & Installation](#project-setup--installation)
- [Development Environment](#development-environment)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Project Overview

**Newspaper CMS** is a full-featured Content Management System designed for managing newspaper articles. It provides a user-friendly interface for creating, editing, publishing, and deleting articles with features including:

- **Article Management**: Create, read, update, and delete (CRUD) operations for articles
- **Publish Status Control**: Toggle article publication status with a visual switch
- **Search & Filter**: Search articles by headline and filter by publication status
- **Responsive Design**: Mobile-friendly layout with sidebar navigation
- **Side Panel Editor**: Dedicated panel for viewing, editing, and creating articles
- **Notification System**: User feedback with success/error notifications
- **Pagination**: Navigate through articles with pagination controls

**GitHub Pages**: For the demonstration of this project as a website, GitHub Pages was chosen as the host for this demo. You can find in the .github/workflows directory in this repository the corresponding deploy.yml with the instructions as to how GitHub Actions builds the environment for this website to live in. And so, you can find the working page in this link: https://encalad4.github.io/newspaper_cms/ 


### Key Features

✅ **Dashboard**: Central hub for all article management  
✅ **Sidebar Navigation**: Multi-page navigation structure  
✅ **Article Cards**: Quick overview of article details  
✅ **Advanced Search**: Real-time article search functionality  
✅ **Publication Control**: Toggle article publish status instantly    
✅ **Form Validation**: Input validation for article creation/editing  
✅ **Comprehensive Testing**: Unit and integration tests for core components

---

## Architecture & Design

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     NEWSPAPER CMS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          React 19 Application Layer (SPA)           │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │              Page Components (Templates)             │   │
│  │  ┌────────────────┬──────────────────────────────┐   │   │
│  │  │  ArticlesPage  │  NotFoundPage                │   │   │
│  │  └────────────────┴──────────────────────────────┘   │   │
│  └─────────────────────────▲────────────────────────────┘   │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │            Organism Components (Complex)            │   │
│  │  ┌─────────────┬──────────────┬────────────────┐    │   │
│  │  │  SideBar    │  ArticleList │ RightPanel     │    │   │
│  │  │             │  Container   │                │    │   │
│  │  └─────────────┴──────────────┴────────────────┘    │   │
│  └─────────────────────────▲────────────────────────────┘   │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │     Molecule Components (Medium Complexity)         │   │
│  │  ┌──────────┬─────────────┬─────────────────────┐   │   │
│  │  │ Article  │  HeaderLook │  ArticleForm       │   │   │
│  │  │ Card     │  Up         │                     │   │   │
│  │  └──────────┴─────────────┴─────────────────────┘   │   │
│  └─────────────────────────▲────────────────────────────┘   │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │      Atom Components (Reusable, Simple)            │   │
│  │  ┌────────┬────────┬────────┬───────┬─────────┐    │   │
│  │  │Switch  │Button  │Dropdown│Search │Options  │    │   │
│  │  │        │        │        │       │Menu     │    │   │
│  │  └────────┴────────┴────────┴───────┴─────────┘    │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │         Data Layer & Utilities                       │   │
│  │  ┌──────────────┬─────────────────────────────────┐  │   │
│  │  │ JSON articles│  Constants & Utils              │  │   │
│  │  └──────────────┴─────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Interaction
    │
    ▼
ArticlesPage (State Management)
    │
    ├─►► SideBar (Navigation)
    │
    ├─►► ArticleManagementContainer
         │
         ├─►► ArticleListContainer
         │    │
         │    ▼
         │    ArticleList
         │    │
         │    ▼
         │    ArticleCard (Articles Display)
         │
         ├─►► HeaderLookUp
         │    │
         │    ├─►► SearchBar
         │    ├─►► FilterDropdown
         │    └─►► NewButton
         │
         └─►► RightPanel (Edit/Create/Delete)
              │
              ▼
              ArticleForm
              │
              ├─►► Input Fields
              └─►► Switch (Publish Toggle)
```

### Component Hierarchy

The application follows **Atomic Design Principles** with components organized into atoms, molecules, organisms, and pages:

- **Atoms**: Basic, reusable UI building blocks (buttons, inputs, switches)
- **Molecules**: Combinations of atoms forming functional UI units
- **Organisms**: Complex components combining molecules and atoms
- **Pages (Templates)**: Full-page layouts combining organisms

---

## Technology Stack

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | JavaScript library for building user interfaces with component-based architecture |
| **React DOM** | 19.2.0 | React package for working with the DOM |
| **Vite** | 7.3.1 | Lightning-fast build tool and dev server (ES modules based) |

### UI & Styling
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Material-UI (MUI)** | 7.3.8 | Professional React component library |
| **Emotion React** | 11.14.0 | CSS-in-JS library for styling React components |
| **Emotion Styled** | 11.14.1 | Styled component API for Emotion |
| **CSS Modules** | (Native) | Scoped CSS styling for components |

### Testing & Quality Assurance
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vitest** | 4.0.18 | Fast unit test framework (Vite-native) |
| **@vitest/ui** | 4.0.18 | UI dashboard for Vitest test results |
| **React Testing Library** | 16.3.2 | Testing utilities for React components |
| **@testing-library/jest-dom** | 6.9.1 | Custom Jest matchers for DOM assertions |
| **@testing-library/user-event** | 14.6.1 | User interaction simulation for tests |
| **jsdom** | 28.0.0 | JavaScript implementation of web standards for testing |
| **jest-environment-jsdom** | 30.2.0 | Test environment configuration for jsdom |

### Development Tools
| Technology | Version | Purpose |
|-----------|---------|---------|
| **ESLint** | 9.39.1 | JavaScript linter for code quality |
| **@eslint/js** | 9.39.1 | ESLint JavaScript configuration |
| **eslint-plugin-react-hooks** | 7.0.1 | ESLint plugin for React hooks |
| **eslint-plugin-react-refresh** | 0.4.24 | ESLint plugin for React fast refresh |
| **Vite React Plugin** | 5.1.1 | Fast refresh and JSX compilation for Vite |

### Runtime Environment
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 24.13.1 | JavaScript runtime for development and build |
| **npm** | 11.8.0 | Node package manager for dependency management |

---

## Project Dependencies

### Production Dependencies
```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/material": "^7.3.8",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.39.1",
  "@testing-library/jest-dom": "^6.9.1",
  "@testing-library/react": "^16.3.2",
  "@testing-library/user-event": "^14.6.1",
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "@vitest/ui": "^4.0.18",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "jest-environment-jsdom": "^30.2.0",
  "jsdom": "^28.0.0",
  "vite": "^7.3.1",
  "vitest": "^4.0.18"
}
```

---

## Component Structure (Atomic Design)

### Directory Organization

```
src/
├── components/
│   ├── atoms/                          # Basic, reusable components
│   │   ├── FilterDropdown/             # Filter articles by status
│   │   │   ├── FilterDropdown.jsx
│   │   │   ├── FilterDropdown.module.css
│   │   │   └── FilterDropdown.test.jsx
│   │   │
│   │   ├── FormButton/                 # Customizable form buttons
│   │   │   ├── FormButton.jsx
│   │   │   ├── FormButton.module.css
│   │   │   └── FormButton.test.jsx
│   │   │
│   │   ├── NewButton/                  # Create new article button
│   │   │   ├── NewButton.jsx
│   │   │   ├── NewButton.module.css
│   │   │   └── NewButton.test.jsx
│   │   │
│   │   ├── Notification/               # User feedback notifications
│   │   │   ├── Notification.jsx
│   │   │   └── Notification.module.css
│   │   │
│   │   ├── OptionsMenu/                # Context menu for article actions
│   │   │   ├── OptionsMenu.jsx
│   │   │   ├── OptionsMenu.module.css
│   │   │   └── OptionsMenu.test.jsx
│   │   │
│   │   ├── SearchBar/                  # Article search input
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.module.css
│   │   │   └── SearchBar.test.jsx
│   │   │
│   │   └── Switch/                     # Publication status toggle
│   │       ├── Switch.jsx               # MUI-based toggle switch
│   │       ├── Switch.module.css
│   │       └── Switch.test.jsx
│   │
│   ├── molecules/                      # Combinations of atoms
│   │   ├── ArticleCard/                # Displays article summary
│   │   │   ├── ArticleCard.jsx
│   │   │   ├── ArticleCard.module.css
│   │   │   └── ArticleCard.test.jsx
│   │   │
│   │   ├── ArticleForm/                # Form for article data
│   │   │   ├── ArticleForm.jsx
│   │   │   └── ArticleForm.module.css
│   │   │
│   │   ├── ArticleListHeader/          # Header for article list
│   │   │   ├── ArticleListHeader.jsx
│   │   │   └── ArticleListHeader.module.css
│   │   │
│   │   ├── HeaderLookUp/               # Search and filter controls
│   │   │   ├── HeaderLookUp.jsx
│   │   │   └── HeaderLookUp.module.css
│   │   │
│   │   └── PaginationControls/         # Article pagination
│   │       ├── PaginationControls.jsx
│   │       └── PaginationControls.module.css
│   │
│   ├── organisms/                      # Complex components
│   │   ├── ArticleList/                # Renders list of article cards
│   │   │   ├── ArticleList.jsx
│   │   │   └── ArticleList.module.css
│   │   │
│   │   ├── ArticleListContainer/       # Container for article list
│   │   │   ├── ArticleListContainer.jsx
│   │   │   └── ArticleListContainer.module.css
│   │   │
│   │   ├── ArticleManagementContainer/ # Main article management logic
│   │   │   ├── ArticleManagementContainer.jsx
│   │   │   └── ArticleManagementContainer.module.css
│   │   │
│   │   ├── RightPanel/                 # Side panel for editing
│   │   │   ├── RightPanel.jsx
│   │   │   └── RightPanel.module.css
│   │   │
│   │   └── SideBar/                    # Navigation sidebar
│   │       ├── SideBar.jsx
│   │       └── SideBar.module.css
│   │
├── pages/                              # Full-page components
│   ├── ArticlePage/
│   │   ├── ArticlePage.jsx             # Main dashboard page
│   │   ├── ArticlesPage.module.css
│   │   └── ArticlesPage.test.jsx
│   │
│   └── NotFoundPage/
│       ├── NotFoundPage.jsx
│       └── NotFoundPage.module.css
│
├── styles/                             # Global styles
│   └── global.css
│
├── utils/                              # Utilities and constants
│   └── constants/
│       └── articles.json               # Sample article data
│
├── App.jsx                             # Root App component
├── App.module.css
├── index.jsx                           # React DOM render entry point
└── setupTests.js                       # Test environment setup
```

### Atomic Design Breakdown

#### **Atoms** - Basic UI Building Blocks

| Component | Purpose | Props | State |
|-----------|---------|-------|-------|
| `FilterDropdown` | Filter articles by publication status | `onFilterChange`, `selectedFilter` | None (controlled) |
| `FormButton` | Reusable button with variants | `variant` (primary/delete/disabled), `onClick`, `children` | None |
| `NewButton` | Creates new articles | `onClick` | None |
| `Notification` | User feedback messages | `message`, `type` (success/error), `onClose` | None |
| `OptionsMenu` | Context menu for actions | `onEdit`, `onView`, `onDelete` | Internal menu state |
| `SearchBar` | Search input with icon | `onChange`, `value`, `placeholder` | None (controlled) |
| `Switch` | Publish status toggle (MUI Switch) | `isOn`, `handleToggle`, `onColor` | None (controlled) |

#### **Molecules** - Composed UI Units

| Component | Composed Of | Purpose |
|-----------|-------------|---------|
| `ArticleCard` | Switch, OptionsMenu | Displays article summary with quick actions |
| `ArticleForm` | Input fields, Switch | Form for viewing/editing/creating articles |
| `ArticleListHeader` | Typography/layout | Displays list header information |
| `HeaderLookUp` | SearchBar, FilterDropdown, NewButton | Search and filter controls |
| `PaginationControls` | Pagination controls and info | Navigate article pages |

#### **Organisms** - Complex Components

| Component | Contains | Purpose |
|-----------|----------|---------|
| `ArticleList` | ArticleCard elements | Renders articles as cards in a list |
| `ArticleListContainer` | ArticleListHeader, ArticleList, PaginationControls | Container with pagination logic |
| `ArticleManagementContainer` | HeaderLookUp, ArticleListContainer, RightPanel | Central business logic for article management |
| `RightPanel` | ArticleForm, FormButton | Side panel for editing/creating/deleting/viewing articles |
| `SideBar` | Navigation buttons | Main navigation menu |

#### **Pages** - Full-Page Layouts

| Component | Contains | Purpose |
|-----------|----------|---------|
| `ArticlePage` | SideBar, ArticleManagementContainer, Notification | Main article dashboard page |
| `NotFoundPage` | Error content | 404 page for unimplemented features |

---

## Project Setup & Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v24.13.1 or higher ([Download](https://nodejs.org/))
- **npm**: v11.8.0 or higher (comes with Node.js)

#### Verify Installation

```bash
# Check Node.js version
node --version
# Expected: v24.13.1 or higher

# Check npm version
npm --version
# Expected: 11.8.0 or higher
```

### Installation Steps

1. **Clone or Download the Repository**
   ```bash
   # If using git
   git clone https://github.com/Encalad4/newspaper_cms.git
   cd newspaper_cms
   
   # Or navigate to your project directory
   cd path/to/newspaper_cms
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all dependencies listed in `package.json` including:
   - React and React DOM
   - Vite and plugins
   - Testing libraries (Vitest, React Testing Library)
   - ESLint and development tools
   - Material-UI components

3. **Verify Installation**
   ```bash
   # Check if all dependencies are installed correctly
   npm list
   ```

### Project Configuration Files

#### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/newspaper_cms/',  // Base URL for deployment
})
```

#### `vitest.config.js`
```javascript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           // Browser-like environment for tests
    setupFiles: ['./src/setupTests.js'],
    globals: true,                  // Use global test functions
  },
})
```

#### `eslint.config.js`
Configured with:
- ESLint recommended rules
- React hooks linting
- React refresh support
- Browser globals
- JSX support

---

## Development Environment

### Starting the Development Server

```bash
npm run dev
```

**What this does:**
- Starts Vite development server
- Enables **Hot Module Replacement (HMR)** - code changes reflect instantly in browser
- Serves the application on `http://localhost:5173` (or next available port)
- Watch mode enabled for file changes

**Expected Output:**
```
VITE v7.3.1  ready in XXX ms

➜  Local:   http://localhost:5173/newspaper_cms/
➜  press h to show help
```

### Hot Module Replacement (HMR)

The development environment automatically reloads when you:
- Modify component files (`.jsx`)
- Update styles (`.module.css`)
- Change configuration files

**No manual page refresh needed!**

### Environment-Specific Development

#### Development Features
✅ Source maps for debugging  
✅ Fast refresh on code changes  
✅ Full error reporting in console  
✅ Browser DevTools compatible  

#### Common Development Tasks

**View CSS changes immediately:**
```bash
# Modify a component's CSS and save
# Browser updates automatically
```

**Debug with DevTools:**
1. Open broswer DevTools (F12)
2. React component tree visible in **Components** tab
3. State and props visible in **Props** panel

---

## Building for Production

### Production Build

```bash
npm run build
```

**What this does:**
- Bundles all code and assets
- Minifies JavaScript and CSS
- Generates source maps (optional)
- Optimizes assets for deployment
- Output directory: `dist/`

**Build Output:**
```
dist/
├── index.html              # Minified HTML
├── assets/
│   ├── index-*.js         # Bundled & minified JavaScript
│   ├── index-*.css        # Bundled & minified CSS
│   └── images/            # Optimized images
└── ...
```

### Preview Build

```bash
npm run preview
```

**What this does:**
- Serves the production build locally
- Allows testing the build before deployment
- Identifies any build-specific issues

**URL**: `http://localhost:4173/newspaper_cms/`

### Build Optimization

The build process includes:
- **Code Splitting**: Separate chunks for faster loading
- **Tree Shaking**: Removes unused code
- **CSS Minification**: Reduces CSS file size
- **JavaScript Minification**: Reduces JS file size
- **Asset Compression**: Optimizes images and files

---

## Testing

### Testing Framework & Libraries

The project uses **Vitest** as the testing framework with **React Testing Library** for component testing.

#### Why Vitest?
- ⚡ **Fast**: Built on Vite with native ES modules
- 🔄 **HMR**: Instant test re-runs on code changes
- 🎯 **Jest-compatible**: Same familiar API as Jest
- 📦 **Minimal config**: Works with existing Vite setup

#### Why React Testing Library?
- 🎯 **User-centric**: Tests match user behavior
- ♿ **Accessibility**: Encourages accessible code
- 🔧 **Simple API**: Easy to write and maintain
- 🚫 **No implementation details**: Tests don't break with refactors

### Test Setup

#### `setupTests.js`
```javascript
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})
```

**Purpose:**
- Imports custom matchers from `@testing-library/jest-dom`
- Ensures DOM cleanup between tests
- Prevents test pollution

### Running Tests

#### Run All Tests
```bash
npm test
```

**Features:**
- Watch mode enabled (re-run tests on file changes)
- Shows test results in terminal
- Interactive mode available

#### Run Specific Test File
```bash
npm test -- src/pages/ArticlePage/ArticlesPage.test.jsx
```

#### Run Tests with UI Dashboard
```bash
# Open Vitest UI in browser
npm run vitest-ui
```

**Note:** Add this script to `package.json` if not present:
```json
{
  "scripts": {
    "vitest-ui": "vitest --ui"
  }
}
```

#### Run Tests Once (CI Mode)
```bash
npm test -- --run
```

#### Run with Coverage
```bash
npm test -- --coverage
```

#### Run Tests Matching Pattern
```bash
npm test -- --grep "FilterDropdown"
```

### Types of Tests

The project includes two types of tests:

#### 1. **Unit Tests**
Test individual components in isolation.

**Example: `FilterDropdown.test.jsx`**
```javascript
describe('FilterDropdown Component', () => {
  it('renders with all options', () => {
    // Test component renders correctly
  });
  
  it('calls onFilterChange when selection changes', async () => {
    // Test user interaction
  });
});
```

**Tests:**
- ✅ Component renders
- ✅ Props are applied correctly
- ✅ Event handlers called with correct parameters
- ✅ Styling applied (className existence)

#### 2. **Integration Tests**
Test multiple components working together.

**Example: `ArticlesPage.test.jsx`**
```javascript
describe('ArticlesPage', () => {
  it('shows notification when article is added', async () => {
    // Test page + children integration
  });
});
```

**Tests:**
- ✅ Multiple components render together
- ✅ Data flows between components
- ✅ Notifications display correctly
- ✅ User interactions across components

#### 3. **Component Behavior Tests**
Test user interactions and state changes.

**Example: `ArticleCard.test.jsx`**
```javascript
describe('ArticleCard Component', () => {
  it('calls onPublishToggle when switch is clicked', async () => {
    // Test switch interaction
  });
  
  it('opens menu when three dots clicked', async () => {
    // Test menu interaction
  });
});
```

**Tests:**
- ✅ Click handlers work
- ✅ State changes occur
- ✅ Callbacks triggered
- ✅ DOM updates reflect state

### Common Testing Patterns

#### Testing Component Rendering
```javascript
it('renders without crashing', () => {
  render(<ArticlesPage {...defaultProps} />);
  expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
});
```

#### Testing User Interactions
```javascript
it('shows notification when article is added', async () => {
  const user = userEvent.setup();
  render(<ArticlesPage {...defaultProps} />);
  
  const addButton = screen.getByTestId('mock-add-article');
  await user.click(addButton);
  
  await waitFor(() => {
    expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
  });
});
```

#### Mocking Child Components
```javascript
vi.mock('../../components/organisms/SideBar/SideBar', () => ({
  default: () => <div data-testid="mock-sidebar">Sidebar Mock</div>
}));
```

#### Testing Form Inputs
```javascript
it('updates input value on change', async () => {
  const user = userEvent.setup();
  render(<FilterDropdown onFilterChange={mockChange} />);
  
  const select = screen.getByRole('combobox');
  await user.selectOptions(select, 'Published');
  
  expect(mockChange).toHaveBeenCalled();
});
```

### Test File Structure

Each component has a corresponding test file:

```
Component/
├── Component.jsx           # Component implementation
├── Component.module.css    # Component styles
└── Component.test.jsx      # Component tests
```

### Currently Tested Components

✅ `FilterDropdown.test.jsx` - Filter dropdown functionality  
✅ `FormButton.test.jsx` - Button rendering and variants  
✅ `NewButton.test.jsx` - Create article button  
✅ `OptionsMenu.test.jsx` - Context menu options  
✅ `SearchBar.test.jsx` - Search input functionality  
✅ `Switch.test.jsx` - Publication toggle switch  
✅ `ArticleCard.test.jsx` - Article card display and interactions  
✅ `ArticlesPage.test.jsx` - Page integration testing  

### Test Best Practices

1. **Use `data-testid` for elements**: Makes tests resilient to style changes
   ```javascript
   <button data-testid="mock-switch">Toggle</button>
   ```

2. **Test user behavior, not implementation**:
   ```javascript
   // ✅ Good: Test user interaction
   await user.click(button);
   
   // ❌ Bad: Testing internal state
   expect(component.state.isOpen).toBe(true);
   ```

3. **Use `waitFor` for async operations**:
   ```javascript
   await waitFor(() => {
     expect(element).toBeInTheDocument();
   });
   ```

4. **Mock external dependencies**:
   ```javascript
   vi.mock('../../external-component', () => ({
     default: () => <div>Mocked</div>
   }));
   ```

5. **Clean up between tests**:
   ```javascript
   beforeEach(() => {
     vi.clearAllMocks();
   });
   ```

---

## Code Quality

### Linting

```bash
npm run lint
```

**Checks:**
- JavaScript syntax errors
- React best practices
- Hook usage rules
- Unused variables
- Code style consistency

### ESLint Configuration

Configured with:
- **ESLint recommended**: Standard best practices
- **React hooks plugin**: Hooks dependency rules
- **React refresh plugin**: Fast refresh compatibility
- **Browser globals**: `window`, `document`, etc.

### Fixed ESLint Rules

```javascript
'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
```
Allows uppercase variables (React components, constants) to be unused.

---

## Project Structure

### File Organization

```
newspaper_cms/
│
├── src/                              # Source code
│   ├── components/                   # React components (atomic design)
│   │   ├── atoms/                    # Reusable basic components
│   │   ├── molecules/                # Compound components
│   │   ├── organisms/                # Complex components
│   │   └── templates/                # Layout templates
│   │
│   ├── pages/                        # Full-page components
│   │   ├── ArticlePage/
│   │   └── NotFoundPage/
│   │
│   ├── styles/                       # Global styles
│   │   └── global.css
│   │
│   ├── utils/                        # Utilities and constants
│   │   └── constants/
│   │       └── articles.json         # Sample data
│   │
│   ├── App.jsx                       # Root App component
│   ├── App.module.css                # App styles
│   ├── index.jsx                     # React DOM entry point
│   └── setupTests.js                 # Test environment setup
│
├── public/                           # Static assets
│   └── assets/
│       └── icons/                    # Icon images
│           ├── closeIcon.png
│           ├── SearchIcon.png
│           ├── SeniropLogo.png
│           └── threeDots.png
│
├── dist/                             # Production build (generated)
│
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Locked versions
├── eslint.config.js                  # ESLint configuration
├── vite.config.js                    # Vite configuration
├── vitest.config.js                  # Vitest configuration
├── index.html                        # HTML entry point
├── README.md                         # This file

```

### Key Files Explained

#### `index.html`
Entry point for the React application. Contains:
- `<div id="root">` - React mounts here
- Roboto font import following figma desing
- Script loading `src/index.jsx`

#### `src/index.jsx`
Initializes React:
- Imports React, ReactDOM, App
- Renders App in `#root` element
- Imports global CSS

#### `src/App.jsx`
Root component:
- Manages page routing
- Controls sidebar navigation
- Renders ArticlesPage or NotFoundPage

#### `src/setupTests.js`
Test environment configuration:
- Imports testing library matchers
- Sets up afterEach cleanup

---

## Deployment

### Deployment Environments

The project supports multiple deployment scenarios:

#### **Development Environment**
- **Server**: Local Vite dev server
- **Command**: `npm run dev`
- **Port**: `http://localhost:5173/newspaper_cms/`
- **Features**: Hot reload, source maps, full error reporting

#### **Staging/Testing Environment**
- **Server**: Production build served locally
- **Command**: `npm run build && npm run preview`
- **Port**: `http://localhost:4173/newspaper_cms/`
- **Purpose**: Test production build before deployment

#### **Production Environment**
- **Build**: `npm run build`
- **Output**: `dist/` folder
- **Base URL**: `/newspaper_cms/` (configurable in vite.config.js)
- **Features**: Minified, optimized, production-ready

### Deployment Steps

#### Step 1: Prepare the Build

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Run all tests
npm test -- --run

# Create production build
npm run build
```

#### Step 2: Verify Build

```bash
# Preview production build
npm run preview

# Visit http://localhost:4173/newspaper_cms/
# Test all functionality before deployment
```

#### Step 3: Deploy Artifact

The `dist/` folder contains:
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js    # Main JavaScript bundle
│   ├── index-[hash].css   # Main CSS bundle
│   └── ...                # Other assets
```

#### Step 4: Server Configuration

Configure your web server (Apache, Nginx, IIS, etc.):

**For SPA routing** (ensure all routes serve index.html):

**Nginx Configuration:**
```nginx
location /newspaper_cms/ {
    alias /var/www/newspaper_cms/dist/;
    try_files $uri $uri/ /newspaper_cms/index.html;
}
```

**Apache Configuration:**
```apache
<Directory /var/www/newspaper_cms/dist>
    RewriteEngine On
    RewriteBase /newspaper_cms/
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /newspaper_cms/index.html [L]
</Directory>
```

#### Step 5: Environment Setup

Ensure:
- ✅ Node.js v24+ available on build server
- ✅ npm v11+ available on build server
- ✅ Web server configured for SPA routing
- ✅ CORS configured if needed
- ✅ Base URL matches deployment path (`/newspaper_cms/`)

### Deployment Checklist

- [ ] All tests pass: `npm test -- --run`
- [ ] No lint errors: `npm run lint`
- [ ] Production build succeeds: `npm run build`
- [ ] Build preview works: `npm run preview`
- [ ] No console errors/warnings
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] All features tested (CRUD, search, filter, publish toggle)
- [ ] Links and navigation working
- [ ] Environment variables configured (if any)
- [ ] Performance acceptable (bundle size, load time)

### Build Optimization Tips

1. **Code Splitting**: Vite automatically splits code chunks
2. **Asset Optimization**: Images auto-compressed
3. **CSS Minification**: CSS modules combined and minified
4. **JavaScript Minification**: ES6+ code minified and tree-shaken

---

## Development Workflows

### Feature Development Workflow

```bash
# 1. Start development server
npm run dev

# 2. Create/edit components and features
# Editor open - code with instant HMR

# 3. Write/update tests
# npm test runs in watch mode in another terminal

# 4. Check code quality
npm run lint

# 5. Before commit
npm test -- --run  # Run all tests once

# 6. Build and preview
npm run build
npm run preview

# 7. Deploy when ready
# Copy dist/ to server
```

### Bug Fix Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Create failing test (TDD approach)
# Edit test file with reproduction

# 3. Run test to confirm failure
npm test

# 4. Fix the bug
# Make code changes

# 5. Watch tests pass
# Fix complete!

# 6. Maintain test coverage
# No regression with automatic tests
```

### Performance Optimization Workflow

```bash
# 1. Build your app
npm run build

# 2. Analyze bundle size
# Check dist/ folder size

# 3. Identify large dependencies
# Look at imports in components

# 4. Consider code splitting
# Lazy load components if needed

# 5. Test performance
npm run preview
# Check Network tab, time metrics
```

---

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Dev server can't start on 5173
# Solution: Kill process or use different port

# Linux/Mac:
lsof -i :5173
kill -9 <PID>

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or start on different port:
npm run dev -- --port 3000
```

#### Module Not Found
```bash
# Import errors after installing packages
# Solution: Clear node_modules and reinstall

rm -rf node_modules package-lock.json
npm install
```

#### Tests Failing
```bash
# Run tests with verbose output
npm test -- --reporter=verbose

# Run single test file
npm test -- src/components/atoms/Button.test.jsx

# Update snapshots if needed
npm test -- -u
```

#### Build Size Too Large
```bash
# Check what's in the bundle
npm run build

# Look for large dependencies
# Consider replacing with lighter alternatives
# Use dynamic imports for code splitting
```

---

## Contributing

### Code Standards

1. **Component Structure**
   - Follow atomic design principles
   - Keep components small and focused
   - Reuse atoms and molecules

2. **Naming Conventions**
   - Components: PascalCase (`ArticleCard.jsx`)
   - Functions: camelCase (`handleClick`)
   - Constants: UPPER_SNAKE_CASE (`API_ENDPOINT`)
   - CSS classes: kebab-case (CSS Modules)

3. **Testing**
   - Write tests for new components
   - Test user behavior, not implementation
   - Maintain >80% code coverage goal

4. **Styling**
   - Use CSS Modules (no global styles)
   - Use Material-UI components when available
   - Follow consistent spacing and colors

### Commit Messages

```
[FEATURE] Add new component: SearchBar
[FIX] Resolve filter dropdown styling issue
[TEST] Add tests for ArticleCard component
[DOCS] Update README with setup instructions
```

---

## Additional Resources

### Documentation Links
- [React 19 Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Material-UI Documentation](https://mui.com/)
- [Emotion Documentation](https://emotion.sh/)

### Learning Resources
- React Hooks: https://react.dev/reference/react
- CSS Modules: https://www.npmjs.com/package/css-modules
- Atomic Design: https://atomicdesign.bradfrost.com/

---


**Last Updated**: February 14, 2026  
