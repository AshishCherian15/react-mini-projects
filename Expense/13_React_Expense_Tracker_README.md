# React Expense Tracker

> Completed as part of **React Expense Tracker Essentials Mini Project** — LetsUpgrade Bootcamp Program

A React Expense Tracker that lets users add expenses with title, amount, and category. Displays all expenses with .map(), calculates total amount automatically, supports filtering by category, shows count badges, allows individual delete, and persists data to localStorage. Uses inline styles for theming.

---

## Live Demo

[Add your live demo link here — deploy on Vercel or GitHub Pages]

---

## Screenshots

| View 1 | View 2 |
|---|---|
| ![Screenshot 1](screenshots/1.png) | ![Screenshot 2](screenshots/2.png) |

---

## Tech Used

- React
- JSX
- useState
- localStorage

---

## How to Run

```bash
npx create-react-app 03-expense-tracker
cd 03-expense-tracker
```
Replace `src/App.js` with the project code, then:
```bash
npm start
```

---

## Key Concepts

| Concept | Purpose |
|---|---|
| `useState for multiple fields` | Separate state for title, amount, category, filter - all useState |
| `Array.reduce()` | Calculates total: expenses.reduce((sum,e)=>sum+e.amount, 0) |
| `Derived state` | filteredExpenses computed from expenses + filterCat on every render |
| `category color map` | Object maps category names to bg/text colors for badge styling |
| `input validation` | Checks trimmed title and parsed amount before adding to state |
| `inline styles` | Style objects passed as style={} prop for dynamic theming |
| `expense delete` | filter() removes expense by id from array |
| `localStorage` | Saves and loads expenses across page refreshes |
| `select element` | Controlled dropdown for category selection |

---

## Core Code

```jsx
const [expenses, setExpenses] = useState(load);
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('Other');
const [filterCat, setFilterCat] = useState('All');

// Total updates automatically (derived from state)
const grandTotal = expenses.reduce((sum, e) => sum + e.amount, 0);

// Filtered list (derived - not stored in state)
const visible = filterCat==='All' ? expenses : expenses.filter(e=>e.category===filterCat);
```

---

## Certificate

| Field | Details |
|---|---|
| Bootcamp | React Expense Tracker Essentials Mini Project |
| Completed by | Ashish Cherian |
| Date | 29 January 2026 |
| Certificate No | LUEETJAN12635 |
| Verify | [www.letsupgrade.in/verify](https://www.letsupgrade.in/verify) |
| In collaboration with | NSDC, ITM Edutech, GDG MAD |

---

## Project Structure

```
03-expense-tracker/
├── src/
│   └── App.jsx
├── README.md
└── certificate/
    └── LUEETJAN12635.pdf
```

---
*Built during LetsUpgrade Bootcamp — 29 January 2026*
