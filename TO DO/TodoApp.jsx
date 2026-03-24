import { useState } from "react";

// ── helper: load from localStorage (bonus feature) ──
function loadTasks() {
  try {
    const saved = localStorage.getItem("todo-tasks");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// ── helper: save to localStorage ──
function saveTasks(tasks) {
  localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}

export default function App() {
  // ── state ──
  const [tasks, setTasks]       = useState(loadTasks);   // task list
  const [inputVal, setInputVal] = useState("");           // text input
  const [filter, setFilter]     = useState("all");        // all | active | completed

  // ── add task ──
  function addTask() {
    const text = inputVal.trim();
    if (!text) return;                                    // don't add empty tasks
    const newTasks = [
      ...tasks,
      { id: Date.now(), text, done: false }
    ];
    setTasks(newTasks);
    saveTasks(newTasks);
    setInputVal("");
  }

  // ── toggle done/undone ──
  function toggleTask(id) {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
    saveTasks(updated);
  }

  // ── delete task ──
  function deleteTask(id) {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
  }

  // ── clear all completed tasks ──
  function clearCompleted() {
    const updated = tasks.filter(t => !t.done);
    setTasks(updated);
    saveTasks(updated);
  }

  // ── allow Enter key to add task ──
  function handleKeyDown(e) {
    if (e.key === "Enter") addTask();
  }

  // ── filtered list for display ──
  const visibleTasks = tasks.filter(t => {
    if (filter === "active")    return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  // ── counts (bonus) ──
  const totalCount     = tasks.length;
  const completedCount = tasks.filter(t => t.done).length;
  const activeCount    = totalCount - completedCount;

  // ── inline styles ──
  const s = {
    body: {
      minHeight: "100vh",
      background: "#f0f4f8",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "40px 16px",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      background: "#fff",
      borderRadius: "14px",
      boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
      padding: "32px 28px",
      width: "100%",
      maxWidth: "500px",
    },
    title: {
      fontSize: "1.6rem",
      fontWeight: "bold",
      color: "#1a73e8",
      marginBottom: "6px",
    },
    subtitle: {
      fontSize: "0.85rem",
      color: "#888",
      marginBottom: "24px",
    },
    // counts row
    countsRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "22px",
      flexWrap: "wrap",
    },
    countBadge: (color, bg) => ({
      background: bg,
      color: color,
      borderRadius: "20px",
      padding: "4px 14px",
      fontSize: "0.8rem",
      fontWeight: "bold",
    }),
    // input row
    inputRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px 14px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "0.95rem",
      outline: "none",
      background: "#f9f9f9",
    },
    addBtn: {
      padding: "10px 20px",
      background: "#1a73e8",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "0.95rem",
      cursor: "pointer",
    },
    // filter tabs
    filterRow: {
      display: "flex",
      gap: "8px",
      marginBottom: "18px",
    },
    filterBtn: (active) => ({
      padding: "6px 16px",
      borderRadius: "20px",
      border: active ? "2px solid #1a73e8" : "2px solid #ddd",
      background: active ? "#e8f0fe" : "#fff",
      color: active ? "#1a73e8" : "#888",
      fontWeight: active ? "bold" : "normal",
      fontSize: "0.82rem",
      cursor: "pointer",
    }),
    // task list
    taskList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "16px",
    },
    taskRow: (done) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: done ? "#f8fafe" : "#fff",
      border: `1px solid ${done ? "#c5d9fb" : "#eee"}`,
      borderRadius: "8px",
      padding: "12px 14px",
      cursor: "pointer",
      transition: "box-shadow 0.2s",
    }),
    checkbox: (done) => ({
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: `2px solid ${done ? "#1a73e8" : "#ccc"}`,
      background: done ? "#1a73e8" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#fff",
      fontSize: "0.7rem",
      fontWeight: "bold",
    }),
    taskText: (done) => ({
      flex: 1,
      fontSize: "0.93rem",
      color: done ? "#aaa" : "#333",
      textDecoration: done ? "line-through" : "none",
    }),
    deleteBtn: {
      background: "#fdecea",
      color: "#e53935",
      border: "none",
      borderRadius: "6px",
      padding: "4px 10px",
      fontSize: "0.8rem",
      cursor: "pointer",
      fontWeight: "bold",
    },
    emptyMsg: {
      textAlign: "center",
      color: "#aaa",
      fontSize: "0.9rem",
      padding: "24px 0",
    },
    clearBtn: {
      background: "none",
      border: "none",
      color: "#e53935",
      fontSize: "0.82rem",
      cursor: "pointer",
      textDecoration: "underline",
      padding: 0,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "8px",
    },
    footerText: {
      fontSize: "0.8rem",
      color: "#aaa",
    }
  };

  return (
    <div style={s.body}>
      <div style={s.card}>

        {/* title */}
        <div style={s.title}>📝 My To-Do List</div>
        <div style={s.subtitle}>Stay organized, one task at a time</div>

        {/* task count badges (bonus) */}
        <div style={s.countsRow}>
          <span style={s.countBadge("#1a73e8", "#e8f0fe")}>Total: {totalCount}</span>
          <span style={s.countBadge("#27ae60", "#eafaf1")}>Done: {completedCount}</span>
          <span style={s.countBadge("#e67e22", "#fff3e0")}>Remaining: {activeCount}</span>
        </div>

        {/* input row */}
        <div style={s.inputRow}>
          <input
            style={s.input}
            type="text"
            placeholder="Type a new task..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button style={s.addBtn} onClick={addTask}>Add</button>
        </div>

        {/* filter tabs (bonus) */}
        <div style={s.filterRow}>
          {["all", "active", "completed"].map(f => (
            <button
              key={f}
              style={s.filterBtn(filter === f)}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* task list */}
        <div style={s.taskList}>
          {visibleTasks.length === 0 ? (
            <div style={s.emptyMsg}>
              {filter === "completed"
                ? "No completed tasks yet!"
                : filter === "active"
                ? "No pending tasks — you're all caught up! 🎉"
                : "No tasks yet. Add one above!"}
            </div>
          ) : (
            visibleTasks.map(task => (
              <div
                key={task.id}
                style={s.taskRow(task.done)}
                onClick={() => toggleTask(task.id)}
              >
                {/* custom circle checkbox */}
                <div style={s.checkbox(task.done)}>
                  {task.done && "✓"}
                </div>

                {/* task text — strikethrough if done */}
                <span style={s.taskText(task.done)}>{task.text}</span>

                {/* delete button — stop propagation so click doesn't toggle */}
                <button
                  style={s.deleteBtn}
                  onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        {completedCount > 0 && (
          <div style={s.footer}>
            <span style={s.footerText}>{completedCount} task(s) completed</span>
            <button style={s.clearBtn} onClick={clearCompleted}>
              Clear completed
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
