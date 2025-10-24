# 🍿 movieList Movie App

[![Deployed on Vercel](https://vercel.com/button)](https://movie-list-zeta-seven.vercel.app/)

https://movie-list-zeta-seven.vercel.app/

An interactive movie search application where you can find films, see their details, and curate a personal list of "watched" movies with your own ratings.

This project was built as a hands-on exercise to apply and solidify core React concepts, from state management with hooks to handling asynchronous data fetching and component lifecycles.

![usePopcorn App Demo](./public/Website_Showcase.gif)

---

## Core Features

* 🎬 **Live Movie Search:** Instantly search the OMDB API for any movie as you type.
* 📊 **Detailed Movie Info:** Click any movie to view its plot, actors, director, runtime, and IMDb rating.
* ⭐ **Personal Rating System:** Add movies to your "watched" list and give them a personal star rating from 1 to 10.
* 📈 **Watched List Summary:** Get an automatic summary of your watched movies, including the number of films, your average rating, and the average runtime.
* 🗑️ **Manage Your List:** Easily remove movies from your watched list.
* 🔄 **Clean UI States:** A smooth user experience with dedicated loading spinners and clear, descriptive error messages.
* ⌨️ **Keyboard Navigation:** Press the `Escape` key to close the movie details panel.

---

## Learning Focus & Tech Stack

The primary goal of this project was to move from React theory to practice. The entire application is built on modern React principles.

* **React (v18+):** The core library for building the user interface.
* **React Hooks:**
    * `useState`: Used extensively to manage all component-level state, including the search query, movie results, selected movie ID, watched list, and all loading/error states.
    * `useEffect`: The backbone for all side effects. This hook was used to:
        * Fetch movie data from the API based on the `query` state.
        * Fetch detailed data for a movie when the `selectedId` state changes.
        * Update the document's title to the name of the selected movie for a better UX.
        * Set up a global event listener (`keydown`) to close the movie details panel with the `Escape` key, complete with a proper cleanup function.
* **Data Fetching:**
    * Used the modern `fetch` API with `async/await` syntax for clean, readable asynchronous code.
    * Implemented an `AbortController` within the `useEffect` hook to cancel pending `fetch` requests on every new keystroke. This prevents race conditions and ensures that only the results for the *latest* query are displayed.
* **Component-Based Architecture:**
    * Broke down the entire UI into small, reusable, and composable components (e.g., `NavBar`, `Search`, `MovieList`, `MovieDetails`, `WatchedSummary`).
* **State Management & Prop Drilling:**
    * Practiced lifting state up to the nearest common ancestor (`App` component) and passing data and event handlers down to child components via props.
* **API Proxy (Vercel):**
    * Set up a serverless function (`/api/movies`) to act as a proxy to the OMDB API. This hides the API key from the client-side, which is a crucial security best practice.

---
