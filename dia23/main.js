// let nomb = document.querySelector("#name");
// let ape = document.querySelector("#ape");
// setTimeout(() => {
//     console.log(nomb.value)
// }, 5000)
// setTimeout(() => {
//     console.log(ape.value)
// }, 3000)

// let promesaEstudiantes = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let resuelto = false;
//         if (resuelto) {
//             resolve(estudiantes);
//         } else {
//             reject("mala conexión del Servidor")
//         }
//     }, 3000);
// })

// // Crear una promesa
// let miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let exito = Math.random() > 0.5;

//         if (exito) {
//             resolve("¡Operación completada con éxito!");
//         } else {
//             reject("Error: La operación falló");
//         }
//     }, 2000);
// });
// // Consumir la promesa
// miPromesa
//     .then((resultado) => {
//         console.log("Éxito:", resultado);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("La promesa finalizó (éxito o error)");
//     });
/* ----------------EJERCICIOS PROMESAS---------------- */
// 1. Promesa que retorna un array de productos
// ===== Promesas =====
const getProductos = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, nombre: "Laptop", precio: 1200 },
            { id: 2, nombre: "Mouse", precio: 25 },
            { id: 3, nombre: "Teclado", precio: 45 },
        ]);
    }, 1000);
});

const getNotas = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { estudiante: "Ana", notas: [18, 15, 19] },
            { estudiante: "Luis", notas: [12, 14, 16] },
            { estudiante: "María", notas: [20, 19, 18] },
        ]);
    }, 1500);
});

const getUsuarios = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.3; // 70% de éxito
        if (exito) {
            resolve([
                { id: 1, nombre: "Kevin" },
                { id: 2, nombre: "Carla" },
                { id: 3, nombre: "Diego" },
            ]);
        } else {
            reject("Error al obtener usuarios");
        }
    }, 1200);
});

const getCursos = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { codigo: "INF101", nombre: "Programación I" },
            { codigo: "INF202", nombre: "Estructuras de Datos" },
            { codigo: "INF303", nombre: "Base de Datos" },
        ]);
    }, 800);
});

const getTareas = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, titulo: "Estudiar Promesas", completada: false },
            { id: 2, titulo: "Hacer ejercicio", completada: true },
            { id: 3, titulo: "Leer un libro", completada: false },
        ]);
    }, 2000);
});

// ===== Mostrar resultados =====
const container = document.getElementById("container");


// ==== Función para crear tarjetas ====
function crearTarjeta(titulo, htmlContenido) {
    const card = document.createElement("div");
    card.className =
        "bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition";
    card.innerHTML = `
    <h2 class="text-xl font-bold text-blue-600 mb-3">${titulo}</h2>
    ${htmlContenido}
  `;
    container.appendChild(card);
}

// // Ejecutar promesas con then/catch
// getProductos
//     .then((productos) => {
//         crearTarjeta("Productos", JSON.stringify(productos, null, 2));
//     })
//     .catch((err) => {
//         crearTarjeta("Productos", err);
//     });

// getNotas
//     .then((notas) => {
//         crearTarjeta("Notas de Estudiantes", JSON.stringify(notas, null, 2));
//     })
//     .catch((err) => {
//         crearTarjeta("Notas de Estudiantes", err);
//     });

// getUsuarios
//     .then((usuarios) => {
//         crearTarjeta("Usuarios", JSON.stringify(usuarios, null, 2));
//     })
//     .catch((err) => {
//         crearTarjeta("Usuarios", err);
//     });

// getCursos
//     .then((cursos) => {
//         crearTarjeta("Cursos", JSON.stringify(cursos, null, 2));
//     })
//     .catch((err) => {
//         crearTarjeta("Cursos", err);
//     });

// getTareas
//     .then((tareas) => {
//         crearTarjeta("Tareas", JSON.stringify(tareas, null, 2));
//     })
//     .catch((err) => {
//         crearTarjeta("Tareas", err);
//     });
/// ==== Cargar datos con async/await ====
async function cargarDatos() {
    try {
        const [productos, notas, usuarios, cursos, tareas] = await Promise.all([
            getProductos,
            getNotas,
            getUsuarios,
            getCursos,
            getTareas,
        ]);

        // --- Productos ---
        let productosHTML = productos
            .map(
                (p) => `
        <div class="flex justify-between items-center bg-gray-50 p-2 rounded mb-2">
          <span class="font-medium">${p.nombre}</span>
          <span class="text-green-600 font-semibold">$${p.precio.toFixed(2)}</span>
        </div>
      `
            )
            .join("");
        crearTarjeta(" Productos", productosHTML);

        // --- Notas ---
        let notasHTML = notas
            .map(
                (n) => `
        <div class="bg-gray-50 p-2 rounded mb-2">
          <p class="font-semibold">${n.estudiante}</p>
          <p class="text-sm text-gray-600">Notas: ${n.notas.join(", ")}</p>
          <p class="text-sm font-medium text-blue-700">Promedio: ${(n.notas.reduce((a, b) => a + b) / n.notas.length).toFixed(1)}</p>
        </div>
      `
            )
            .join("");
        crearTarjeta(" Notas", notasHTML);

        // --- Usuarios ---
        let usuariosHTML = usuarios
            .map(
                (u) => `
        <div class="flex items-center gap-2 bg-gray-50 p-2 rounded mb-2">
          <div class="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">${u.nombre[0]}</div>
          <span>${u.nombre}</span>
        </div>
      `
            )
            .join("");
        crearTarjeta(" Usuarios", usuariosHTML);

        // --- Cursos ---
        let cursosHTML = cursos
            .map(
                (c) => `
        <div class="bg-gray-50 p-2 rounded mb-2">
          <p class="font-semibold text-blue-700">${c.codigo}</p>
          <p>${c.nombre}</p>
        </div>
      `
            )
            .join("");
        crearTarjeta("🎓 Cursos", cursosHTML);

        // --- Tareas ---
        let tareasHTML = tareas
            .map(
                (t) => `
        <div class="flex justify-between items-center bg-gray-50 p-2 rounded mb-2">
          <span>${t.titulo}</span>
          <span class="text-sm ${t.completada ? "text-green-600" : "text-red-500"
                    } font-medium">
            ${t.completada ? " Hecha" : "⏳ Pendiente"}
          </span>
        </div>
      `
            )
            .join("");
        crearTarjeta("Tareas", tareasHTML);

    } catch (error) {
        crearTarjeta(" Error", `<p class="text-red-600">${error}</p>`);
    } finally {
        console.log(" Carga de datos completa");
    }
}

cargarDatos();