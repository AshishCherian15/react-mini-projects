# React Todo List

> Completed as part of **React To-Do List Essentials Mini Project** — LetsUpgrade Bootcamp Program

A full-featured React To-Do List app with add task, display tasks with .map(), toggle task done/undone with strikethrough, delete task, filter by All/Active/Completed, item count badges, localStorage persistence, and Enter key support. Demonstrates complete React state management.

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
npx create-react-app 02-todo-list
cd 02-todo-list
```
Replace `src/App.js` with the project code, then:
```bash
npm start
```

---

## Key Concepts

| Concept | Purpose |
|---|---|
| `useState with array` | const [tasks, setTasks] = useState([]) stores list of task objects |
| `Array.map()` | Renders a list item for each task in the tasks array |
| `Array.filter()` | Removes a task by filtering out items that don't match the deleted id |
| `Array.map() for toggle` | Creates new array with one task's done property flipped |
| `conditional style` | Applies strikethrough and gray color to completed tasks via ternary |
| `localStorage` | JSON.stringify on save, JSON.parse on load for persistence |
| `Date.now()` | Generates unique id for each new task |
| `input controlled` | value={inputVal} + onChange keeps React in sync with input field |
| `filter tabs` | useState('all') tracks active filter; visible list computed from tasks state |

---

## Core Code

```jsx
const [tasks, setTasks] = useState(loadFromStorage);

// Add task
function addTask() {
  const newTasks = [...tasks, {id:Date.now(), text:inputVal, done:false}];
  setTasks(newTasks); saveTasks(newTasks);
}

// Toggle done
function toggleTask(id) {
  const updated = tasks.map(t => t.id===id ? {...t, done:!t.done} : t);
  setTasks(updated); saveTasks(updated);
}

// Delete task
function deleteTask(id) {
  const updated = tasks.filter(t => t.id !== id);
  setTasks(updated); saveTasks(updated);
}
```

---

## Certificate

| Field | Details |
|---|---|
| Bootcamp | React To-Do List Essentials Mini Project |
| Completed by | Ashish Cherian |
| Date | 10 January 2026 |
| Certificate No | LUETLADEC12548 |
| Verify | [www.letsupgrade.in/verify](https://www.letsupgrade.in/verify) |
| In collaboration with | NSDC, ITM Edutech, GDG MAD |

---

## Project Structure

```
02-todo-list/
├── src/
│   └── App.jsx
├── README.md
└── certificate/
    └── LUETLADEC12548.pdf
```

---
*Built during LetsUpgrade Bootcamp — 10 January 2026*
