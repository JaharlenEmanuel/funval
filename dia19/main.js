let estudiantesFunval = [
    {
        nombre: "Alfredo",
        pais: "Mexico",
        edad: 28,
    },
    {
        nombre: "Belen",
        pais: "Bolivia",
        edad: 28,
    },
    {
        nombre: "Boren",
        pais: "colombia",
        edad: 28,
    },
    {
        nombre: "David",
        pais: "Chile",
        edad: 28,
    },
    {
        nombre: "Ibraim",
        pais: "Mexico",
        edad: 28,
    },
    {
        nombre: "Moises",
        pais: "Bolivia",
        edad: 28,
    },
    {
        nombre: "Emanuel",
        pais: "Perú",
        edad: 26,
    },
];
// el profesor kevin necesita ver la lista de estudiantes en una tabla
//     q tendra las siguientes columnas
//     nombre edad y pais crear una tabla de forma dinamica q cargue los datos
//     de los objetos de la lista estudiantes Funval

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function cargarTabla() {
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = ``;

    let tabla = estudiantesFunval.forEach((estudiante, index) => {
        let fila = document.createElement('tr');
        fila.className = 'border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200';

        fila.innerHTML = `
                    <td class="p-3 text-gray-700">${index + 1}</td>
                    <td class="p-3 font-medium text-gray-800">${estudiante.nombre}</td>
                    <td class="p-3 text-gray-700">${estudiante.edad} años</td>
                    <td class="p-3 text-gray-700">
                        <span class="mr-2">${capitalizar(estudiante.pais)}</span>
                    </td>
                `;

        cuerpoTabla.appendChild(fila);
    });

    document.getElementById('totalEstudiantes').textContent = estudiantesFunval.length;
}

cargarTabla();
/* ============================
 🟢 BLOQUE 1: SELECTORES + MODIFICADORES (Nivel Básico)
 Duración sugerida: 30 minutos
============================ */

/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */

/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */

/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */

/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */



/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */

/* 6. Cambia el contenido de un div usando innerHTML. */



/* 7. Cambia el contenido de un párrafo usando textContent. */

/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */

/* 9. Elimina una clase existente usando classList.remove(). */

/* 10. Alterna una clase (toggle) en un elemento. */

/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */

let hijo = document.querySelector("#tablaEstudiantes");
let padre = hijo.parentNode;
padre.style.backgroundColor = 'lightgreen';
padre.style.padding = '10px';

/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */
padre = document.querySelector("#tablaEstudiantes");
hijo = padre.firstElementChild;
hijo.style.backgroundColor = "blue"

/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */
hijo = padre.lastElementChild;
hijo.style.backgroundColor = "red"
/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */
let primerElemento = document.querySelector(".lista2");
elementHermano = primerElemento.nextElementSibling;
elementHermano.style.backgroundColor = "blue"
/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */
elementHermano = primerElemento.previousElementSibling;
elementHermano.style.backgroundColor = "green"
/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. */

let contenedor = document.querySelector(".lista");
console.log(contenedor.childElementCount)
console.log(contenedor.children.length)

/* 17. Accede a todos los hijos de un contenedor usando children y cambia el color de cada uno. */
contenedor.children.item(0).style.backgroundColor = "purple"
contenedor.children.item(1).style.backgroundColor = "green"
contenedor.children.item(2).style.backgroundColor = "gray"

/* 18. Usa firstChild para mostrar en consola el primer nodo hijo (puede ser texto o elemento). */

/* 19. Accede al nodo padre de un párrafo y cambia su color de fondo. */

/* 20. Selecciona un elemento y recorre sus hijos con un bucle for para cambiarles el estilo. */

/* ============================
 🔴 BLOQUE 3: COMBINADOS (Selectores + Modificadores + Navegación)
 Duración sugerida: 30 minutos
============================ */

/* 21. Selecciona un contenedor, accede a su primer hijo y cambia su texto. */

/* 22. Selecciona una lista (ul), accede al segundo li y cámbiale el color de fondo. */

/* 23. Selecciona el tercer hijo de un contenedor y elimina una clase de él. */

/* 24. Selecciona un contenedor y cambia el texto de todos sus hijos. */

/* 25. Selecciona un div, accede a su padre y cambia su borde. */

/* 26. Selecciona el primer elemento de una lista y cambia el texto de su siguiente hermano. */

/* 27. Selecciona un elemento, navega a su padre y luego a su primer hijo para cambiarle el estilo. */

/* 28. Selecciona un contenedor con varios elementos y alterna una clase en cada uno de sus hijos. */

/* 29. Usa innerHTML para insertar una etiqueta <strong> dentro de un párrafo hijo. */

/* 30. Recorre todos los hijos de un contenedor y cambia el contenido de cada uno con un texto numerado. */
