# Weather Forecast App
🌐 Live Demo: https://projects-java-script-tpni.vercel.app/
---
![Weather](./src/image/67051d4fd00fc9b5f6818014_Weather%20webpart.png)
## Overview
This project is a weather forecast web application that fetches real-time weather data using the **Visual Crossing API**. Users can search for a specific location and toggle between Celsius and Fahrenheit. The UI dynamically updates based on the weather conditions.

## Features
- **Search for Weather Data**: Users can enter a city or location to retrieve the current weather.
- **Unit Toggle**: Allows switching between Fahrenheit and Celsius.
- **Dynamic UI Updates**: The background and icons change based on weather conditions.
- **Async/Await & Promises**: Uses modern JavaScript techniques for API requests.
- **Loading Indicator**: Displays a loading message while fetching data.
- **Error Handling**: Displays user-friendly messages for invalid inputs or API issues.

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mkatfi/projects-JavaScript/tree/main/Weather-App
   cd Weather-App
   ```
2. Install dependencies (if any):
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npx webpack serve
   ```
   - Open `http://localhost:8080` in your browser.

## Project Structure
```
weather-app/
├── dist/              # Bundled output
├── src/
│   ├── index.js       # Entry point
│   ├── styles.css     # Styling for the app
|   ├── icos/
|   ├── image/
├── .gitignore         # Ignore node_modules and API keys
├── index.html         # HTML template
├── package.json       # Project metadata and dependencies
├── webpack.config.js  # Webpack configuration
└── README.md          # Documentation
```

## Technologies Used
- **JavaScript (ES6+)**: Modern JavaScript with async/await.
- **Visual Crossing API**: Fetches weather data.
- **Webpack**: Bundles and optimizes assets.
- **CSS**: Custom styles for dynamic UI changes.

## Acknowledgments
Inspired by The Odin Project’s JavaScript curriculum.

---
