# React Movie

## Overview

This project is a React application for browsing and viewing movies. It leverages several modern libraries and tools to provide a smooth and interactive user experience. The application fetches popular movies from The Movie Database (TMDb) API, displays them in a responsive layout, and allows users to navigate to detailed pages for each movie.

You can preview the application [here](https://movie-coral-six.vercel.app/).

## Key Features

- **Hero Section**: Displays a prominent image and overview of the top movie.
- **Genres & Categories**: Shows various film genres and categories with a brief description.
- **Movie Grid**: Lists popular movies in a horizontally scrollable grid with clickable movie cards.
- **Responsive Design**: Ensures that the application is usable and visually appealing on both mobile and desktop devices.

## Project Structure

Here is a brief overview of the project structure:


### Components

- **`Loading.js`**: A component to display a loading spinner or message.
- **`Error.js`**: A component to display an error message when data fails to load.
- **`MovieCard.js`**: Displays a movie card with details such as title, poster, rating, and release date.

### Pages

- **`HomeScreen.js`**: The landing page displaying a carousel of featured movies and quick links to other sections.
- **`FilmScreen.js`**: Displays popular films, a hero section, genre categories, and a grid of movie cards.
- **`MovieDetails.js`**: Shows detailed information about a selected movie, including cast, crew, and additional details.
- **`ActorScreen.js`**: Displays detailed information about a selected actor, including filmography and biography.

### Hooks

- **`useFetch.js`**: Custom hook for fetching data from APIs.

### Utilities

- **`motionConfig.js`**: Contains animation configurations for Framer Motion.

## Libraries and Plugins Used

1. **Tailwind CSS**: A utility-first CSS framework for styling components.
   - **Installation**: Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/vite).
   - **Usage**: Used for responsive design, utility classes, and overall styling.

2. **Framer Motion**: A library for animations and transitions.
   - **Installation**: `npm install framer-motion`
   - **Usage**: Used for page transitions and animations in the application.

3. **React Icons**: Provides a set of icons for React applications.
   - **Installation**: `npm install react-icons`
   - **Usage**: Used for displaying icons such as stars in movie cards.

4. **Swiper JS**: A modern touch slider with great performance and modular architecture.
   - **Installation**: `npm install swiper`
   - **Usage**: (Optional) For implementing a carousel or slider if needed.

5. **Axios**: A promise-based HTTP client for making requests.
   - **Installation**: `npm install axios`
   - **Usage**: Used for fetching data from APIs.

6. **Vite**: A modern build tool that provides a faster and leaner development experience.
   - **Installation**: Follow the [Vite documentation](https://vitejs.dev/guide/) for setup.
   - **Usage**: Used as the build tool and development server.

7. **React Router DOM**: Provides routing and navigation functionality in React applications.
   - **Installation**: `npm install react-router-dom`
   - **Usage**: Used for navigating between different pages in the application.

## Issues and Bugs Encountered

### Issues

1. **Mobile Design Issues**: Ensuring responsiveness and proper layout on various devices required multiple adjustments, including handling overflow and padding.




## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Urasajoshua/movie.git
   cd movie

2. **Create a .env File**:
   ```
   VITE_API_KEY=your_api_key_here

3. **Install dependecies**:
   ```
   npm install
   npm run dev





## Contact

If you have any questions or need further assistance, feel free to reach out:

    Email: urasajoshuag@gmail.com
    GitHub: UrasaJoshua
    WhatsApp: +255779764577

