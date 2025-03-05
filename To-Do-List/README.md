
# Todo List App

## Overview
This project is a fully functional Todo List application built with JavaScript. It allows users to create, organize, and manage their tasks efficiently using projects and priorities. The app dynamically generates content, supports local storage, and utilizes Webpack for bundling.

## Features
- **Project-Based Organization**: Users can create multiple projects and manage tasks within them.
- **Task Management**: Each task includes a title, description, due date, priority, and completion status.
- **Dynamic UI Rendering**: The entire interface is created and updated via JavaScript.
- **Local Storage Persistence**: Tasks and projects are saved even after refreshing the page.
- **Modular Code Structure**: Organized with separate modules for application logic and UI.
- **Webpack Bundling**: The project is structured for maintainability and performance.

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mkatfi/projects-JavaScript/tree/main/To-Do-List
   cd To-Do-List
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx webpack serve
   ```
   - Open `http://localhost:8080` in your browser to use the app.

## Project Structure
```
To-Do-List/
├── dist/             # Bundled output
├── src/
│   ├── index.js      # all code
│   ├── styles.css    # Stylesheet
├── .gitignore        # Ignore node_modules and dist
├── index.html        # HTML template
├── package.json      # Project metadata and dependencies
├── webpack.config.js # Webpack configuration
└── README.md         # Documentation
```

## Technologies Used
- **JavaScript (ES6+):** Functional and modular programming.
- **Webpack:** Bundling and module management.
- **Local Storage API:** Data persistence in the browser.
- **CSS:** Custom styling for UI design.



## Acknowledgments
Inspired by The Odin Project’s JavaScript curriculum.

---
