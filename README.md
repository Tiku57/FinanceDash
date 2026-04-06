# Zorvyn Finance Dashboard UI 🚀

A modern, responsive, and interactive finance dashboard built for the Zorvyn Frontend Developer Intern assignment. This project focuses on clean UI/UX, effective state management, and intuitive data visualization.

---

## 🔗 Live Demo

*(You can add your Vercel or Netlify deployment link here later)*

---

## ✨ Key Features

### 1. Dashboard Overview

* **Summary Cards:** Real-time calculation of Total Balance, Total Income, and Total Expenses.
* **Visualizations:**

  * A time-based **Line Chart** tracking the balance trend over time.
  * A categorical **Pie Chart** breaking down expenses by category.
* **Smart Insights:** Automatically analyzes transaction data to highlight the highest spending category and provides dynamic financial feedback.

---

### 2. Transaction Management

* **Interactive Table:** View all transactions with formatted dates, categories, and color-coded amounts.
* **Search & Filter:** Instantly filter transactions by description/category using the search bar, or filter by transaction type (Income vs. Expense).
* **Add & Delete (Admin):** Simulate backend mutations by adding new transactions or deleting existing ones.

---

### 3. Role-Based UI (RBAC Simulation)

* Seamlessly toggle between **Viewer** and **Admin** roles via the top navigation bar.
* **Viewer:** Read-only access to data and visualizations.
* **Admin:** Unlocks the ability to add new transactions and delete records.

---

### 4. Extra Enhancements 🌟

* **Dark Mode:** Fully integrated dark mode using Tailwind's `class` strategy. Toggleable via the header icon.
* **Data Persistence:** Uses `localStorage` to save transactions, role selection, and theme preferences across browser refreshes.
* **Responsive Design:** A fully responsive layout that adapts gracefully to mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack & Decisions

* **Framework:** React via Vite - Chosen for its fast build times and optimized development server.
* **Styling:** Tailwind CSS (v3.4.17) - Utility-first CSS for rapid, scalable, and responsive styling without leaving the markup.
* **State Management:** Zustand - A small, fast, and scalable state-management solution with minimal boilerplate and easy persistence.
* **Charts:** Recharts - A composable charting library built on React components for clean, responsive SVG charts.
* **Icons & Utils:** lucide-react for iconography and date-fns for date formatting.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine.

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Tiku57/FinanceDash.git
cd FinanceDash
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

```
http://localhost:5173/
```

---

## 📂 Folder Structure Approach

```
src/
├── components/          
│   ├── DashboardOverview.jsx  
│   └── Transactions.jsx       
├── store/               
│   └── useStore.js      
├── App.jsx              
├── index.css            
└── main.jsx             
```

---

## 📝 Evaluation Notes

* **Modularity:** UI components are broken down logically.
* **State:** Global state is isolated in a Zustand store, keeping components clean and focused purely on rendering.
* **Empty States:** The dashboard handles empty transaction data gracefully, updating charts and tables to reflect empty states without breaking.

---

## 👨‍💻 Author

Created by Aaditya Sattawan
