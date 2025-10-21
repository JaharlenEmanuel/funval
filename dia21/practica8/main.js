// ==========================
// EJERCICIO 1 — TARJETAS DE USUARIOS
// ==========================
let usuarios = [
    { nombre: "Ana García", edad: 28, pais: "España", profesion: "Ingeniera", email: "ana@gmail.com" },
    { nombre: "Carlos López", edad: 35, pais: "México", profesion: "Diseñador", email: "carlos@gmail.com" },
];

const contenedorUsuarios = document.getElementById("contenedorUsuarios");
const modalUsuario = document.getElementById("modalUsuario");
const formUsuario = document.getElementById("formUsuario");

function renderUsuario({ nombre, edad, pais, ...resto }) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "bg-blue-50 p-4 rounded-lg shadow relative";
    tarjeta.innerHTML = `
    <h3 class="text-lg font-bold">${nombre}</h3>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>País:</strong> ${pais}</p>
    <button class="mt-2 bg-blue-600 text-white px-3 py-1 rounded verMas">Ver más</button>
  `;
    tarjeta.querySelector(".verMas").addEventListener("click", () => {
        alert(`Datos adicionales:\n${Object.entries(resto).map(([k, v]) => `${k}: ${v}`).join("\n")}`);
    });
    contenedorUsuarios.appendChild(tarjeta);
}

usuarios.forEach(renderUsuario);

document.getElementById("btnNuevoUsuario").addEventListener("click", () => {
    modalUsuario.classList.remove("hidden");
});
document.getElementById("cerrarUsuario").addEventListener("click", () => {
    modalUsuario.classList.add("hidden");
});

formUsuario.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formUsuario));
    usuarios = [...usuarios, data];
    renderUsuario(data);
    formUsuario.reset();
    modalUsuario.classList.add("hidden");
});

// ==========================
// EJERCICIO 2 — TABLA DE PRODUCTOS
// ==========================
let productos = [
    { nombre: "Laptop", precio: 3500, stock: 10, categoria: "Tecnología", marca: "HP" },
    { nombre: "Auriculares", precio: 250, stock: 30, categoria: "Accesorios", marca: "Sony" },
];

const tablaProductos = document.getElementById("tablaProductos");
const modalProducto = document.getElementById("modalProducto");
const formProducto = document.getElementById("formProducto");

function renderProducto({ nombre, precio, stock, ...rest }) {
    const tr = document.createElement("tr");
    tr.className = "border-b hover:bg-gray-50";
    tr.innerHTML = `
    <td class="p-2">${nombre}</td>
    <td class="p-2">S/. ${precio}</td>
    <td class="p-2">${stock}</td>
    <td class="p-2">${Object.entries(rest).map(([k, v]) => `${k}: ${v}`).join(", ")}</td>
  `;
    tablaProductos.appendChild(tr);
}

productos.forEach(renderProducto);

document.getElementById("btnNuevoProducto").addEventListener("click", () => {
    modalProducto.classList.remove("hidden");
});
document.getElementById("cerrarProducto").addEventListener("click", () => {
    modalProducto.classList.add("hidden");
});

formProducto.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formProducto));
    productos = [...productos, data];
    renderProducto(data);
    formProducto.reset();
    modalProducto.classList.add("hidden");
});

// ==========================
// EJERCICIO 3 — LISTA DE TAREAS
// ==========================
let tareas = [
    { titulo: "Estudiar JS", descripcion: "Repasar desestructuración", fecha: "2025-10-21", prioridad: "Alta" },
    { titulo: "Preparar clase", descripcion: "Tema: funciones", fecha: "2025-10-22", prioridad: "Media" },
];

const listaTareas = document.getElementById("listaTareas");
const modalTarea = document.getElementById("modalTarea");
const formTarea = document.getElementById("formTarea");

function renderTarea({ titulo, descripcion, ...extra }) {
    const li = document.createElement("li");
    li.className = "bg-purple-50 p-3 rounded flex justify-between items-center";
    li.innerHTML = `
    <div>
      <h4 class="font-bold">${titulo}</h4>
      <p>${descripcion}</p>
    </div>
    <button class="bg-purple-600 text-white px-3 py-1 rounded">Ver más</button>
  `;
    li.querySelector("button").addEventListener("click", () => {
        console.log("Datos extra:", extra);
        alert(`Extra:\n${Object.entries(extra).map(([k, v]) => `${k}: ${v}`).join("\n")}`);
    });
    listaTareas.appendChild(li);
}

tareas.forEach(renderTarea);

document.getElementById("btnNuevaTarea").addEventListener("click", () => {
    modalTarea.classList.remove("hidden");
});
document.getElementById("cerrarTarea").addEventListener("click", () => {
    modalTarea.classList.add("hidden");
});

formTarea.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formTarea));
    tareas = [...tareas, data];
    renderTarea(data);
    formTarea.reset();
    modalTarea.classList.add("hidden");
});

// ==========================
// EJERCICIO 4 — TABLA DE ESTUDIANTES
// ==========================
let estudiantes = [
    { nombre: "Luis", edad: 20, notas: [15, 18, 19] },
    { nombre: "María", edad: 22, notas: [14, 16, 18] },
];

const tablaEstudiantes = document.getElementById("tablaEstudiantes");
const modalEstudiante = document.getElementById("modalEstudiante");
const formEstudiante = document.getElementById("formEstudiante");

function renderEstudiantes() {
    tablaEstudiantes.innerHTML = "";
    estudiantes.forEach((est, i) => {
        const { nombre, edad, notas } = est;
        const promedio = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
        const tr = document.createElement("tr");
        tr.className = "border-b hover:bg-gray-50";
        tr.innerHTML = `
      <td class="p-2">${nombre}</td>
      <td class="p-2">${edad}</td>
      <td class="p-2">${promedio}</td>
      <td class="p-2">
        <button class="bg-orange-600 text-white px-2 py-1 rounded editar" data-index="${i}">Editar</button>
      </td>
    `;
        tablaEstudiantes.appendChild(tr);
    });
}

renderEstudiantes();

document.getElementById("btnNuevoEstudiante").addEventListener("click", () => {
    formEstudiante.reset();
    formEstudiante.removeAttribute("data-index");
    modalEstudiante.classList.remove("hidden");
});

document.getElementById("cerrarEstudiante").addEventListener("click", () => {
    modalEstudiante.classList.add("hidden");
});

formEstudiante.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formEstudiante));
    const notasArray = data.notas.split(",").map(n => Number(n.trim()));
    const nuevo = { nombre: data.nombre, edad: Number(data.edad), notas: notasArray };

    const index = formEstudiante.dataset.index;
    if (index !== undefined) {
        estudiantes = estudiantes.map((est, i) => i == index ? nuevo : est);
    } else {
        estudiantes = [...estudiantes, nuevo];
    }
    renderEstudiantes();
    modalEstudiante.classList.add("hidden");
});

tablaEstudiantes.addEventListener("click", e => {
    if (e.target.classList.contains("editar")) {
        const index = e.target.dataset.index;
        const est = estudiantes[index];
        formEstudiante.nombre.value = est.nombre;
        formEstudiante.edad.value = est.edad;
        formEstudiante.notas.value = est.notas.join(", ");
        formEstudiante.dataset.index = index;
        modalEstudiante.classList.remove("hidden");
    }
});

// ==========================
// EJERCICIO 5 — CONFIGURACIÓN DE APP
// ==========================
let configuracion = {
    titulo: "Mi Aplicación Dinámica",
    version: "1.0.0",
    autor: "J. Arcela",
    licencia: "MIT",
    tema: "Oscuro",
    idioma: "Español",
};

const divConfig = document.getElementById("configApp");

function configurarApp({ titulo, version, ...resto }) {
    divConfig.innerHTML = `
    <h3 class="text-lg font-bold">${titulo}</h3>
    <p class="text-gray-600">Versión: ${version}</p>
    <ul class="list-disc ml-6 mt-2">
      ${Object.entries(resto).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("")}
    </ul>
  `;
}

configurarApp(configuracion);

document.getElementById("btnActualizarConfig").addEventListener("click", () => {
    configuracion = {
        ...configuracion,
        version: "1.1.0",
        tema: configuracion.tema === "Oscuro" ? "Claro" : "Oscuro",
        ultimaActualizacion: new Date().toLocaleString(),
    };
    configurarApp(configuracion);
});
