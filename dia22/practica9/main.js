// ======== Selección de elementos ========
const newTodoInput = document.getElementById("newTodo");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all"; // all | active | completed

// ======== Funciones principales ========

// Renderizar la lista de tareas
function renderTodos() {
    todoList.innerHTML = "";

    let filtered = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    filtered.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between px-4 py-3 group";

        li.innerHTML = `
      <div class="flex items-center space-x-3">
        <input type="checkbox" class="todo-check h-5 w-5" ${todo.completed ? "checked" : ""} data-index="${index}">
        <span class="todo-text text-base break-all ${todo.completed ? "line-through text-gray-400" : ""}" data-index="${index}">
          ${todo.text}
        </span>
      </div>
      <div class="flex space-x-2 opacity-0 group-hover:opacity-100 transition">
        <button class="edit-btn text-green-500 hover:text-green-700" data-index="${index}">✏️</button>
        <button class="delete-btn text-red-500 hover:text-red-700" data-index="${index}">❌</button>
      </div>
    `;
        todoList.appendChild(li);
    });

    updateItemsLeft();
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Contar tareas activas
function updateItemsLeft() {
    const count = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${count} ${count === 1 ? "tarea" : "tareas"} restantes`;
}

// ======== Eventos ========

// Agregar tarea al presionar Enter
newTodoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const text = newTodoInput.value.trim();
        if (text === "") return;
        todos.push({ text, completed: false });
        newTodoInput.value = "";
        renderTodos();
    }
});

// Delegación de eventos (completar, eliminar, editar)
todoList.addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    // Marcar completada
    if (e.target.classList.contains("todo-check")) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    }

    // Eliminar tarea
    if (e.target.classList.contains("delete-btn")) {
        todos.splice(index, 1);
        renderTodos();
    }

    // Editar tarea
    if (e.target.classList.contains("edit-btn")) {
        startEditing(index);
    }
});

// ======== Función para editar ========
function startEditing(index) {
    const li = todoList.children[index];
    const todo = todos[index];
    const textSpan = li.querySelector(".todo-text");

    // Crear input temporal
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    input.className = "bg-transparent border-b border-blue-400 focus:outline-none w-full text-base dark:text-gray-200";

    textSpan.replaceWith(input);
    input.focus();

    // Guardar al presionar Enter o perder el foco
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") finishEditing(index, input);
    });
    input.addEventListener("blur", () => finishEditing(index, input));
}

function finishEditing(index, input) {
    const newText = input.value.trim();

    if (newText === "") {
        todos.splice(index, 1);
    } else {
        todos[index].text = newText;
    }

    renderTodos();
}

// ======== Filtros ========
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("text-blue-500"));
        btn.classList.add("text-blue-500");
        filter = btn.dataset.filter;
        renderTodos();
    });
});

// ======== Borrar completadas ========
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// ======== Tema oscuro / claro ========
themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Cargar tema guardado
(function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        themeToggle.textContent = "☀️";
    }
})();

// ======== Inicializar ========
renderTodos();
