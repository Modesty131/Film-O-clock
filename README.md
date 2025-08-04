# Film-O-clock

This is my capstone project for my software development program on Darey.io through the 3MTT initiative of the Federal Ministry of Communication and Digital Economy. The name of the project is "Film O'clock" a movie recommendation App. 

It is a full-featured movie recommendation platform where users can discover, search, and save their favorite movies.

Film O’Clock – Project Overview
Tech Stack
Frontend: React (Vite or CRA), TailwindCSS, React Router, Axios

Backend: Node.js + Express.js

Database: MongoDB (Mongo Atlas for cloud deployment)

Authentication: JWT (JSON Web Tokens) + bcrypt for password hashing

External API: TMDB (The Movie Database API)

Deployment:

Frontend → Netlify or Vercel

Backend → Render or Heroku

Database → MongoDB Atlas

CI/CD: GitHub Actions (optional but recommended)

Core Features
1. User Authentication
Registration with secure password (bcrypt hash)

Login with JWT token

Auth middleware for protected routes

Logout (client-side token removal)

Profile management (name, avatar, bio)

2. Movie Discovery
Fetch movies from TMDB API

Search by title, genre, year

Filter by rating, popularity, release date

View detailed info (poster, description, trailer)

Personalized recommendations based on user’s favorites/watchlists

3. User Features
Save favorite movies

Create custom watchlists

Rate and review movies

Manage personal profile

4. Responsive UI
Modern design (mobile-first)

TailwindCSS components

Reusable components for lists, cards, modals

5. Deployment
Production build with optimized frontend and backend

Separate hosting (Netlify + Render) with connected API endpoints

CI/CD pipeline setup (auto deploy on push to main)

Stretch Goals (Optional)
Social features (follow users, share watchlists)

Advanced recommendation engine (e.g., collaborative filtering)

Movie trailers (YouTube/TMDB video)

Folder Structure - Architecture
pgsql
Copy code
film-oclock/
│
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── movieController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Movie.js
│   │   │   ├── Watchlist.js
│   │   │   └── Review.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── movieRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── utils/
│   │   │   └── tmdb.js
│   │   └── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── manifest.json
    ├── src/
    │   ├── components/
    │   │   ├── MovieCard.jsx
    │   │   ├── Navbar.jsx
    │   │   └── WatchlistModal.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── hooks/
    │   │   └── useAuth.js
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Profile.jsx
    │   │   └── MovieDetails.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

    Development Flow
Initialize Backend

Express server

MongoDB connection

JWT auth system

REST API endpoints

Initialize Frontend

React app + Tailwind setup

Auth pages (Login/Register/Profile)

Movie browsing pages (Home/Search/Details)

Watchlist/Favorites management

Integrate TMDB API

Fetch and display movies

Search & filter functionality

Deploy

Frontend to Netlify/Vercel

Backend to Render/Heroku

Configure environment variables (API keys, DB URI)

How to run the App (deployment)
Run with Docker:
docker-compose up --build

Or run manually:
cd backend && npm install && npm run seed && npm start
cd frontend && npm install && npm run dev

Frontend
cd frontend
npm install
npm run dev       # Runs on port 5173

Demo Users
Login credentials for testing:

demo@example.com / 123456

jane@example.com / 123456

Build Production Frontend
(For hosting on Netlify/Vercel)

cd frontend
npm run build
Output will be in frontend/dist/.

Deployment
Frontend (Netlify / Vercel)
Deploy frontend/dist/ folder.

Set VITE_API_URL to your backend URL (Render/Heroku).

Backend (Render / Heroku)
Deploy backend/ folder.

Add .env values in Render/Heroku dashboard.

Expose port 5000.

CI/CD Setup (GitHub Actions)
Add deploy hooks in GitHub repo settings:

RENDER_DEPLOY_HOOK_URL

NETLIFY_BUILD_HOOK_URL

Push to main branch → auto triggers deploy:

Backend → Render

Frontend → Netlify

PWA Features
App is installable (Add to Home Screen).

Offline caching via service worker.

Manifest configured in /public/manifest.json.

Social Features
Follow/unfollow users.

Shared watchlists (viewable on profile).

Ratings/reviews stored in MongoDB.

Replace Demo Keys
For production:

Create your own TMDB API key (https://developer.themoviedb.org/).

Create MongoDB Atlas cluster.

Generate a new JWT_SECRET.

Update .env both locally and in deployment services.

PWA support (offline caching, home screen install)

Film O’Clock! is ready to run

