# Tic Tac Toe – Simple & Clean Version

A beginner‑friendly **Tic Tac Toe** game made with **HTML, CSS, and JavaScript**, featuring a clear UI, smooth gameplay, and win/draw indicators.

---

## ⭐ Features

* Clean and simple layout
* Player turn indicator (X / O)
* Win detection
* **Win counters** for X and O
* **Match draw indicator**
* **Winning cells glow** for clarity
* "New Round" button
* "Reset Scores" button

---

## 📁 Project Structure

```
project-folder/
│
├── index.html   # Buttons and Tags
├── style.css    # Boxes and styles
├── script.js    # Logics for game
└── README.md    # Documentation 
```

---

## 🎮 How to Play

1. Open the HTML file in any browser.
2. Player X starts first.
3. Click any box to place your mark.
4. When a player wins:

   * The winning 3 boxes will **glow**.
   * A message will show **“X Wins!”** or **“O Wins!”**.
5. If all 9 boxes are filled with no winner:

   * **“Match Draw!”** will appear.

---

## 🔄 Buttons

### **New Round**

* Clears the board
* Keeps win scores

### **Reset Scores**

* Clears board
* Resets X and O win counters

---

## 🧠 Logic Overview

* Game state is stored in a 9‑cell array.
* Winning combinations are checked on every move.
* On detecting a win:

  * Highlight winning cells
  * Stop further moves
  * Update the win counter
* On detecting a draw:

  * Show "Match Draw!"

---

## 📌 Customization

You can easily edit in the CSS file:

* Colors of X / O
* Glow effect
* Font size
* Button styling

---

## 📌 Features

* Dark mode?
* Sound effects?
* Strike-through winning line?
* Animation when a player wins?

---

## ✔ Requirements

* Any modern browser (Chrome, Edge, Firefox, Safari)
* No external libraries required
