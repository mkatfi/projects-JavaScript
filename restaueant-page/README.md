# Restaurant Website
![Restaurant](./src/image/Screenshot%20from%202025-03-04%2023-51-23.png)
## Overview
This project is a dynamic restaurant homepage that is fully generated using JavaScript. The website features tabbed navigation with sections for "Home", "Menu", and "Contact", making use of modular JavaScript and Webpack for bundling.

## Features
- **Dynamically Rendered Content**: All content is created and appended via JavaScript.
- **Tabbed Navigation**: Users can switch between "Home", "Menu", and "Contact" pages without refreshing.
- **Modular Code Structure**: Each tab is a separate module for better organization.
- **Webpack Bundling**: The project is built and served using Webpack.

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mkatfi/projects-JavaScript/tree/main/restaueant-page
   cd restaueant-page
   ```
2. Initialize the project and install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx webpack serve
   ```
   - Open `http://localhost:8080` in your browser to view the site.

## Project Structure
```
restaueant-page/
├── dist/            # Bundled output
├── src/
│   ├── index.js     # Entry point
│   ├── home.js      # Home tab module
│   ├── menu.js      # Menu tab module
│   ├── contact.js   # Contact tab module
│   ├── footer.js   
│   ├── styles.css   # Stylesheet
├── .gitignore       # Ignore node_modules and dist
├── index.html       # HTML template
├── package.json     # Project metadata and dependencies
├── webpack.config.js # Webpack configuration
└── README.md        # Documentation
```

## Acknowledgments
Inspired by The Odin Project’s JavaScript curriculum.

