# 💸 Finance Dashboard UI

A clean, responsive, and interactive **Finance Dashboard** built as part of the Zorvyn Frontend Developer Intern assignment.
This project demonstrates strong fundamentals in **UI design, state management, and frontend architecture**.

---

## 🔗 Live Demo

*(Add your Vercel deployment link here after hosting)*

---

## ✨ Features

### 📊 1. Dashboard Overview

* **Summary Cards**

  * Total Balance
  * Total Income
  * Total Expenses
* **Spending Visualization**

  * Simple visual bar representation of financial activity
* **Dynamic Calculations**

  * All values update automatically based on transactions

---

### 📄 2. Transactions Section

* Displays:

  * Date
  * Category
  * Amount
  * Type (Income / Expense)
* Features:

  * 🔍 Search by category
  * 📉 Filtered results in real-time
  * 🧾 Graceful empty state handling

---

### 🔐 3. Role-Based UI (Simulation)

* Toggle between roles:

  * **Viewer**

    * Can only view data
  * **Admin**

    * Can add transactions *(extendable)*
* Demonstrates frontend RBAC logic without backend

---

### 📈 4. Insights Section

* Automatically calculates:

  * Highest spending category
* Displays meaningful financial observation from data

---

### 🧠 5. State Management

* Managed using **React Context API**
* Handles:

  * Transactions data
  * Search filters
  * User role
* Clean separation of logic and UI

---

### 💾 6. Data Persistence

* Uses **localStorage**
* Saves:

  * Transactions
  * User role
* Data remains after refresh

---

### 📱 7. Responsive Design

* Fully responsive layout:

  * Mobile
  * Tablet
  * Desktop
* Built using Tailwind utility classes

---

## 🛠️ Tech Stack

| Technology               | Purpose                            |
| ------------------------ | ---------------------------------- |
| **React (Vite)**         | Fast and modern frontend framework |
| **Tailwind CSS v3.4.17** | Utility-first styling              |
| **Context API**          | State management                   |
| **JavaScript (ES6+)**    | Core logic                         |
| **LocalStorage**         | Data persistence                   |

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── SummaryCard.jsx
│   ├── TransactionTable.jsx
│   ├── Filters.jsx
│   ├── RoleSwitcher.jsx
│   ├── Insights.jsx
│   └── Charts.jsx
│
├── context/
│   └── AppContext.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tiku57/FinanceDash.git
cd FinanceDash
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173/
```

---

## 🎯 Key Design Decisions

* **Simplicity First**

  * Focused on clean UI instead of over-complication

* **Component-Based Architecture**

  * Reusable and modular components

* **Separation of Concerns**

  * UI and state logic are separated

* **Scalable Structure**

  * Easy to extend (charts, APIs, authentication)

---

## 🧪 Edge Case Handling

* No transactions → Shows empty state
* Search with no results → Graceful message
* Data persistence prevents loss on refresh

---

## 🌟 Possible Improvements

* Add charts using **Recharts**
* Add transaction modal (Admin)
* Add dark mode toggle
* Add category filters
* Connect to backend API

---

## 📝 Evaluation Highlights

✔ Clean and intuitive UI
✔ Responsive layout
✔ Functional features implemented
✔ State managed efficiently
✔ Well-structured codebase
✔ Ready for scaling

---

## 👨‍💻 Author

**Aaditya Sattawan**

---

## 📌 Note

This project is built for evaluation purposes and focuses on demonstrating:

* Problem-solving approach
* UI/UX thinking
* Frontend development skills

---
