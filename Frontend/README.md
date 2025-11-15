Mini Dashboard – LeadBlocks Assignment
A small full-stack dashboard with filtering, CRUD lead management, and API integration.

Overview

This project is a mini dashboard built as part of the LeadBlocks second-round assignment.
The goal is to demonstrate:
Clean React + TypeScript architecture
UI built in LeadBlocks visual style
API integration with a lightweight backend
Filtering, table display, modal forms

Maintainable folder structure and clear code decisions

The dashboard displays a list of leads (Name, Company, Email, Status), allows filtering by status, and supports adding new leads via a modal.

Tech Stack
Frontend:-
React (TypeScript)
Vite
TailwindCSS
React Router
Axios

Backend:-
Node.js + Express
JSON file for mock storage
REST API

Running the Project Locally:-
Clone the repository
git clone <repo-url>
cd foldername

Install dependencies:-
Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
npm install
npm start

The backend runs at:
http://localhost:5000

The frontend runs at:
http://localhost:5173

certain decisions:-
1. React + TypeScript
TypeScript ensures type-safety and prevents runtime errors, especially helpful when managing API responses and form data.
2. Separate UI components
LeadTable → Data display
FilterBar → Controls
AddLeadModal → Add new lead
This keeps the UI modular and easy to extend.

3. Lightweight Express backend
A full CMS like Strapi is perfect for large projects, but for this assignment, Express provides:
very fast setup
full control
easier debugging

4. TailwindCSS
Used to match LeadBlocks’ clean, modern style, avoiding unnecessary CSS complexity.

5. API abstraction layer
api/leadsApi.ts keeps fetch logic separate from components.

If I Had More Time:-
Add authentication (JWT)
Add pagination for large lead lists
Add edit modal for updating leads
Move backend to Strapi for faster CMS-driven scaling
Improve animations (Framer Motion)
Add unit tests (Cypress)