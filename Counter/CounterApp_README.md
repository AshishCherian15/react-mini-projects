# Counter App

> Built as an assignment for the **React Bootcamp** — LetsUpgrade Bootcamp Program

A simple but interactive React Counter App with Increment, Decrement, and Reset buttons. The count updates instantly on every click using the useState hook. Includes a color change bonus effect when count exceeds 5.

---

## Live Demo

[Add your live demo link here]

---

## Screenshots

| Default State | High Count |
|---|---|
| ![Default](screenshots/default.png) | ![High](screenshots/high.png) |

---

## Tech Used

- React 18 (via CDN — no npm needed)
- Babel Standalone (JSX in browser)
- useState Hook
- HTML5, CSS3

---

## How to Run

No installation needed! Single HTML file using React via CDN.

1. Download `counter-app.html`
2. Open it directly in **Chrome or Edge**
3. Click the +, -, and Reset buttons

---

## Features

- Increment button — adds 1 to count
- Decrement button — subtracts 1 (stops at 0, won't go negative)
- Reset button — sets count back to 0
- Color change — display turns pink/red when count is greater than 5
- Hover effects on all buttons

---

## Key Concepts Learned

| Concept | Used For |
|---|---|
| `useState(0)` | Stores the count value, starts at 0 |
| `onClick` | Fires when button is clicked |
| `setCount(count + 1)` | Updates state — triggers re-render automatically |
| Conditional styling | `count > 5 ? 'high' : ''` changes display color |
| Guard clause | `if (count > 0)` prevents negative numbers |
| Functional component | `function App()` — the modern React way |

---

## Core Code

```jsx
const { useState } = React;

function App() {
  // State starts at 0
  const [count, setCount] = useState(0);

  // Increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement — stops at 0
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      {/* Color changes when count > 5 */}
      <div className={`count-display ${count > 5 ? 'high' : ''}`}>
        {count}
      </div>
      <button onClick={handleIncrement}>+ Increment</button>
      <button onClick={handleDecrement}>- Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

---

## Certificate

| Field | Details |
|---|---|
| Bootcamp | React Bootcamp |
| Completed by | Ashish Cherian |
| Date | 11 December 2025 — 12 December 2025 (2 Days) |
| Certificate No | LUERJSDEC12530 |
| Verify | [www.letsupgrade.in/verify](https://www.letsupgrade.in/verify) |
| In collaboration with | NSDC, ITM Edutech, GDG MAD |

---

## Project Structure

```
02-counter-app/
├── counter-app.html     ← complete project (React via CDN)
├── README.md
└── certificate/
    └── LUERJSDEC12530.pdf
```

---

*Built during LetsUpgrade React Bootcamp — December 2025*
