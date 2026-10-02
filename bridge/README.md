# Student Management System

Student Name: Demo Student  
Student ID: STU-20240621

## Project Overview
This project is a responsive React single-page application for BrightPath College. It provides a student directory, individual student detail pages, a prototype add-student form, and a simple about page. The interface uses Bootstrap for layout and styling, while JSON Server serves the mock student data.

## Installation and Run Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the mock API server on port 5000:
   ```bash
   npm run server
   ```
3. Start the React development server on port 5174:
   ```bash
   npm run dev
   ```
4. Open the app in a browser at:
   ```text
   http://localhost:5174
   ```
5. If you need to build for production:
   ```bash
   npm run build
   ```

## Features Completed
- Responsive Bootstrap navigation with active states and mobile collapse
- Home page with welcome message and call-to-action buttons
- Students page with GET data loading and error states
- Dynamic student detail route using React Router and useParams()
- Reusable custom hook named useFetch in its own file
- Reusable components for navigation, student cards, and status messaging
- Add Student visual prototype form with Bootstrap styling
- About page with developer details
- Friendly student-not-found handling for invalid IDs
- Custom 404 page
- Screenshots folder added for home, student list, detail, mobile, error, and loading views

## Design Decisions
The `useFetch` hook accepts a URL string and returns `{ data, loading, error }`. When the URL changes, the effect reruns automatically, clears the previous state, and fetches the new resource. This prevents stale results from appearing while a new request is in flight.

The Students page passes a student’s identity through the route by linking each card to `/students/:id`, and the StudentDetails page reads the ID with `useParams()`. This keeps the detail page dynamic and avoids fetching the entire list again.

If the API is switched off or the server is unavailable, the app shows a clear error alert instead of breaking the UI. If a student ID is missing or invalid, the page shows a friendly “Student not found” message and provides a return route to the directory.

To avoid flicker and stale data, the hook resets loading and data states before each request. This ensures the user sees a clear loading state and never sees old data while a new fetch is pending.

The repeated interface elements such as the navigation bar, request status messages, and student summary cards were extracted into reusable components so the same structure can be reused across multiple pages.

## Known Bugs
- The form is a UI prototype only and does not yet save data to the mock API.
- The app relies on the local mock API being available on port 5000.

## Bonus Work
- Added a custom 404 page.
