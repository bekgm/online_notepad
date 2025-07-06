const editor = document.getElementById("editor");
const fontSelector = document.getElementById("fontSelector");
const fontSizeSelector = document.getElementById("fontSizeSelector");

// === Загрузка сохранённого текста и настроек ===
window.addEventListener("load", () => {
  editor.innerHTML = localStorage.getItem("noteHTML") || "";
  editor.style.fontFamily = localStorage.getItem("fontFamily") || "Arial";
  editor.style.fontSize = localStorage.getItem("fontSize") || "16px";

  fontSelector.value = editor.style.fontFamily;
  fontSizeSelector.value = editor.style.fontSize;

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});

// === Автосохранение при вводе ===
editor.addEventListener("input", () => {
  localStorage.setItem("noteHTML", editor.innerHTML);
});

// === Очистка ===
function clearNote() {
  if (confirm("Очистить весь текст?")) {
    editor.innerHTML = "";
    localStorage.removeItem("noteHTML");
  }
}

// === Форматирование текста ===
function formatText(command) {
  document.execCommand(command, false, null);
  editor.focus();
}

// === Выбор шрифта и размера ===
fontSelector.addEventListener("change", () => {
  const font = fontSelector.value;
  editor.style.fontFamily = font;
  localStorage.setItem("fontFamily", font);
});

fontSizeSelector.addEventListener("change", () => {
  const size = fontSizeSelector.value;
  editor.style.fontSize = size;
  localStorage.setItem("fontSize", size);
});

// === Темная тема ===
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}
