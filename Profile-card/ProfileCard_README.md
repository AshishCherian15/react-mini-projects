# Personal Profile Card

> Built as an assignment for the **React Bootcamp** — LetsUpgrade Bootcamp Program

A React-based Personal Profile Card that updates in real-time as the user types. Enter your name, age, city, and bio — the card preview updates instantly with a live initials avatar. Includes a dark/light theme toggle.

---

## Live Demo

[Add your live demo link here]

---

## Screenshots

| Light Mode | Dark Mode |
|---|---|
| ![Light](screenshots/light.png) | ![Dark](screenshots/dark.png) |

---

## Tech Used

- React 18 (via CDN — no npm needed)
- Babel Standalone (JSX in browser)
- useState Hook
- Inline CSS Styles
- HTML5

---

## How to Run

No installation needed! Single HTML file using React via CDN.

1. Download `profile-card.html`
2. Open it directly in **Chrome or Edge**
3. Type in the input fields — card updates live instantly

---

## Features

- Live preview — card updates on every single keystroke
- Initials avatar — auto-generated from first letters of name
- Dark / Light theme toggle button
- 4 input fields — Name, Age, City, Bio
- Conditional rendering — shows placeholder when all fields empty

---

## Key Concepts Learned

| Concept | Used For |
|---|---|
| `useState('')` | Stores name, age, city, bio as separate state variables |
| Controlled Input | `value={state}` + `onChange={e => setState(e.target.value)}` |
| `onChange` event | Fires on every keystroke — this is how live preview works |
| Conditional rendering | `{name && <p>{name}</p>}` — only renders when name has value |
| Inline styles | `style={{ color: theme.accent }}` — dynamic theme switching |
| String methods | `.trim().split(' ').map(w => w[0]).join('')` for initials |

---

## Core Code

```jsx
const { useState } = React;

function ProfileCard() {
  const [name, setName] = useState('');
  const [age,  setAge]  = useState('');
  const [city, setCity] = useState('');
  const [dark, setDark] = useState(false);

  // Controlled input — updates state on every keystroke
  <input
    value={name}
    onChange={e => setName(e.target.value)}
  />

  // Conditional rendering — only show if value exists
  {name && <p>{name}</p>}

  // Theme toggle
  <button onClick={() => setDark(!dark)}>Toggle Theme</button>
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
01-profile-card/
├── profile-card.html     ← complete project (React via CDN)
├── README.md
└── certificate/
    └── LUERJSDEC12530.pdf
```

---

*Built during LetsUpgrade React Bootcamp — December 2025*
