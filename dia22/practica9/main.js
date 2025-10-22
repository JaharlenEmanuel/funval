let lista = document.querySelector("#listaTareas");
let input = document.querySelector("#tareaInput");
let modal = document.querySelector("#modalEditar");
let editarInput = document.querySelector("#editarInput");
let guardarBtn = document.querySelector("#guardarEditar");
let cancelarBtn = document.querySelector("#cancelarEditar");

let tareas = [];
let filtroActual = "todas";
let tareaEditando = null;

// Delegación de eventos principal
document.addEventListener("click", (e) => {
    let target = e.target;

    // Agregar tarea
    if (target.id === "agregarBtn") {
        let texto = input.value.trim();
        if (texto) {
            tareas.push({ texto, completada: false });
            input.value = "";
            renderTareas();
        }
    }

    // Eliminar tarea
    if (target.classList.contains("eliminar")) {
        let index = target.closest("li").dataset.index;
        tareas.splice(index, 1);
        renderTareas();
    }

    // Marcar como completada
    if (target.classList.contains("check")) {
        let index = target.closest("li").dataset.index;
        tareas[index].completada = !tareas[index].completada;
        renderTareas();
    }

    // Abrir modal de edición
    if (target.classList.contains("editar")) {
        let index = target.closest("li").dataset.index;
        tareaEditando = index;
        editarInput.value = tareas[index].texto;
        modal.classList.remove("hidden");
    }

    // Filtros
    if (target.dataset.filtro) {
        filtroActual = target.dataset.filtro;
        document.querySelectorAll(".filtro").forEach(btn => {
            btn.classList.remove("bg-blue-600", "text-white");
            btn.classList.add("bg-gray-200");
        });
        target.classList.add("bg-blue-600", "text-white");
        renderTareas();
    }
});

// Guardar cambios desde modal
guardarBtn.addEventListener("click", () => {
    let nuevoTexto = editarInput.value.trim();
    if (nuevoTexto && tareaEditando !== null) {
        tareas[tareaEditando].texto = nuevoTexto;
        tareaEditando = null;
        modal.classList.add("hidden");
        renderTareas();
    }
});

// Cancelar edición
cancelarBtn.addEventListener("click", () => {
    tareaEditando = null;
    modal.classList.add("hidden");
});

function renderTareas() {
    lista.innerHTML = "";
    let tareasFiltradas = tareas.filter(t => {
        if (filtroActual === "pendientes") return !t.completada;
        if (filtroActual === "completadas") return t.completada;
        return true;
    });

    tareasFiltradas.forEach((tarea, i) => {
        let li = document.createElement("li");
        li.dataset.index = i;
        li.className = `flex justify-between items-center p-3 border rounded-lg shadow-sm transition ${tarea.completada ? "bg-green-100" : "bg-gray-50"
            }`;

        li.innerHTML = `
      <span class="flex-1 ${tarea.completada ? "line-through text-gray-500" : "text-gray-800"
            }">${tarea.texto}</span>
      <div class="flex gap-2">
        <button class="check bg-green-500 hover:bg-green-600 text-white rounded-lg px-2 py-1 text-sm">✔</button>
        <button class="editar bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-2 py-1 text-sm">✏️</button>
        <button class="eliminar bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 py-1 text-sm">🗑️</button>
      </div>
    `;

        lista.appendChild(li);
    });
}
