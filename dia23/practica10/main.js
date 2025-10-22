// ===============================
// 1️⃣ Promesa que simula petición GET
// ===============================
const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
        if (exito) {
            const productos = [
                { id: 1, nombre: "Laptop Gamer", precio: 3500, categoria: "Tecnología" },
                { id: 2, nombre: "Auriculares Bluetooth", precio: 250, categoria: "Accesorios" },
                { id: 3, nombre: "Camiseta Nike", precio: 120, categoria: "Ropa" },
                { id: 4, nombre: "Smartwatch", precio: 800, categoria: "Tecnología" },
                { id: 5, nombre: "Zapatillas Adidas", precio: 300, categoria: "Calzado" },
                { id: 6, nombre: "Mochila Deportiva", precio: 150, categoria: "Accesorios" },
            ];
            resolve(productos);
        } else {
            reject("❌ Error al obtener los productos. Inténtalo nuevamente.");
        }
    }, 1500); // simulando retardo de red
});

// ===============================
// 2️⃣ Variables del DOM
// ===============================
const contenedor = document.getElementById("container");
const errorMsg = document.getElementById("error");
const filtro = document.getElementById("filtro");

let listaProductos = [];

// ===============================
// 3️⃣ Función para mostrar productos
// ===============================
function mostrarProductos(productos) {
    contenedor.innerHTML = "";
    if (productos.length === 0) {
        contenedor.innerHTML = `<p class="col-span-full text-center text-gray-500">No se encontraron productos.</p>`;
        return;
    }

    productos.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition";
        card.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-800 mb-2">${p.nombre}</h2>
      <p class="text-gray-600 mb-1"><strong>Categoría:</strong> ${p.categoria}</p>
      <p class="text-gray-800 font-bold">S/ ${p.precio}</p>
    `;
        contenedor.appendChild(card);
    });
}

// ===============================
// 4️⃣ Filtrado en tiempo real
// ===============================
filtro.addEventListener("input", e => {
    const texto = e.target.value.toLowerCase();
    const filtrados = listaProductos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
    );
    mostrarProductos(filtrados);
});

// ===============================
// Consumo de la promesa (async / await)
// ===============================
async function cargarProductos() {
    try {
        const productos = await getProductos;
        listaProductos = productos;
        mostrarProductos(listaProductos);
        errorMsg.classList.add("hidden");
    } catch (error) {
        errorMsg.textContent = error;
        errorMsg.classList.remove("hidden");
    }
}

cargarProductos();
