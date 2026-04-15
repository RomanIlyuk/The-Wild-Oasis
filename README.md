# 🌿 The Wild Oasis

**The Wild Oasis** is a full-featured hotel management web application built with modern React technologies and best practices.
It provides an intuitive interface for managing cabins, bookings, guests, and business operations in real time.

This project demonstrates a production-level architecture, focusing on scalability, maintainability, and user experience.

---

## 🚀 Live Demo

👉 https://the-wild-oasis-riliu.netlify.app
_(deployed on Netlify)_

---

## 🧠 Tech Stack

### Frontend

- React
- React Router
- Context API
- TanStack Query (React Query)
- Styled Components
- React Hook Form
- Recharts

---

### Backend & Services

- Supabase
  - PostgreSQL database
  - Authentication
  - File storage
  - Row Level Security (RLS)

---

### Tooling

- Vite
- ESLint
- Prettier
- date-fns

---

## 🔑 Key Features

### 🧭 Application Pages

- **Home (Dashboard)**
  Displays key business metrics such as bookings, sales, check-ins, and occupancy rate.
  Includes charts, statistics, and recent activity.

- **Bookings**
  Manage reservations:
  - View and update bookings
  - Check-in / Check-out functionality
  - Booking status tracking (unconfirmed, checked-in, checked-out)
  - Filtering and sorting

- **Cabins**
  Full CRUD system:
  - Create, edit, and delete cabins
  - Upload cabin images
  - Manage pricing and capacity

- **Users**
  Manage system users and access.

- **Settings**
  Configure application behavior:
  - Booking rules
  - Pricing settings
  - Global preferences

---

### 🌙 Dark Mode

- Built-in light and dark theme
- Seamless switching across the app
- Implemented using Styled Components theming

---

### 🔐 Authentication

- Secure login and logout
- Protected routes
- Session management via Supabase

---

### 👤 User Account Management

- Update user profile (name, password)
- Persistent authentication session

---

### 📊 Dashboard & Analytics

- Business insights:
  - Total bookings
  - Revenue (sales)
  - Check-ins
  - Occupancy rate

- Interactive charts
- Date filtering (last 7 / 30 / 90 days)

---

### ⚡ Additional Functionality

- Optimistic UI updates
- Form validation and error handling
- Image upload and storage
- Responsive UI
- Clean and scalable architecture

---

## 🧩 Architecture & Concepts

- Feature-based folder structure
- Separation of concerns (UI / logic / API)
- Reusable components
- Custom React hooks
- Compound Components pattern
- Server state vs Client state
- Advanced state management with React Query

---

## 📁 Project Structure

```bash
src/
 ├── context/ # Global state (authentication, theme, app settings)
 ├── data/ # Mock data and development utilities (bookings, cabins, guests)
 ├── features/ # Domain-specific logic (bookings, cabins, users, etc.)
 ├── hooks/ # Custom React hooks
 ├── pages/ # Application pages (Dashboard, Bookings, Cabins, etc.)
 ├── services/ # API layer (Supabase integration)
 ├── styles/ # Global styles and theme configuration (Styled Components)
 ├── ui/ # Reusable UI components (buttons, forms, tables, layout, modals)
 ├── utils/ # Helper functions
 ├── App.jsx # Root application component
 └── main.jsx # Application entry point
```

---

## 🎯 Key Learnings

- Building a production-ready React application
- Managing server and client state effectively
- Integrating with a real backend (Supabase)
- Designing scalable architecture
- Handling real-world UI/UX scenarios

---

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/RomanIlyuk/the-wild-oasis.git

# Navigate into the project
cd the-wild-oasis

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📄 License

This project is for educational purposes.
