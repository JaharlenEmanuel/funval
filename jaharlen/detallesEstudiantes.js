const estudiantesFunval = [
    {
        id: 1,
        nombre: "Ana García",
        edad: 22,
        pais: "México",
        notas: [85, 90, 78, 92, 88]
    },
    {
        id: 2,
        nombre: "Carlos López",
        edad: 24,
        pais: "Colombia",
        notas: [76, 82, 79, 85, 80]
    },
    {
        id: 3,
        nombre: "María Rodríguez",
        edad: 21,
        pais: "Argentina",
        notas: [92, 95, 89, 94, 91]
    },
    {
        id: 4,
        nombre: "Juan Pérez",
        edad: 23,
        pais: "Perú",
        notas: [68, 72, 65, 70, 67]
    },
    {
        id: 5,
        nombre: "Laura Martínez",
        edad: 20,
        pais: "Chile",
        notas: [88, 85, 90, 87, 89]
    }
];

// Función para calcular el promedio
function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return (suma / notas.length).toFixed(1);
}

// Función para determinar el estado académico
function determinarEstado(promedio) {
    if (promedio >= 90) return "Excelente";
    if (promedio >= 80) return "Muy Bueno";
    if (promedio >= 70) return "Bueno";
    return "Necesita Mejorar";
}

// Función para obtener color según el estado
function obtenerColorEstado(estado) {
    const colores = {
        "Excelente": "text-green-600",
        "Muy Bueno": "text-blue-600",
        "Bueno": "text-yellow-600",
        "Necesita Mejorar": "text-red-600"
    };
    return colores[estado] || "text-gray-600";
}

// Función para obtener color de la nota
function obtenerColorNota(nota) {
    if (nota >= 90) return "bg-green-100 text-green-800";
    if (nota >= 80) return "bg-blue-100 text-blue-800";
    if (nota >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
}

// Función para mostrar detalles del estudiante (PERSONA 4)
function mostrarDetallesEstudiante(id) {
    let estudiante = estudiantesFunval.find(est => est.id === id);

    if (!estudiante) {
        alert("Estudiante no encontrado");
        return;
    }

    const promedio = calcularPromedio(estudiante.notas);
    const estado = determinarEstado(parseFloat(promedio));
    const colorEstado = obtenerColorEstado(estado);

    // Llenar los datos en el modal
    document.getElementById('detalleNombre').textContent = estudiante.nombre;
    document.getElementById('detallePais').textContent = `País: ${estudiante.pais}`;
    document.getElementById('detalleEdad').textContent = `${estudiante.edad} años`;
    document.getElementById('detallePromedio').textContent = promedio;
    document.getElementById('detalleEstado').textContent = estado;
    document.getElementById('detalleEstado').className = `font-semibold ${colorEstado}`;

    // Mostrar las notas
    const contenedorNotas = document.getElementById('detalleNotas');
    contenedorNotas.innerHTML = '';

    estudiante.notas.forEach((nota, index) => {
        const colorNota = obtenerColorNota(nota);
        const badge = document.createElement('span');
        badge.className = `px-3 py-1 rounded-full text-sm font-medium ${colorNota}`;
        badge.textContent = `Nota ${index + 1}: ${nota}`;
        contenedorNotas.appendChild(badge);
    });

    // Mostrar el modal
    document.getElementById('modalVer').classList.remove('hidden');
}

// Función para renderizar la tabla (PERSONA 2)
function renderizarTabla() {
    const tbody = document.getElementById('tablaEstudiantes');
    tbody.innerHTML = '';

    estudiantesFunval.forEach(estudiante => {
        const promedio = calcularPromedio(estudiante.notas);
        const estado = determinarEstado(parseFloat(promedio));
        const colorEstado = obtenerColorEstado(estado);

        const fila = document.createElement('tr');
        fila.className = 'hover:bg-gray-50 transition duration-200';
        fila.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${estudiante.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">${estudiante.nombre}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${estudiante.edad} años</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${estudiante.pais}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorEstado}">
                            ${promedio}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button id="btnVer" class="text-blue-600 hover:text-blue-900 mr-3">
                            <i class="fas fa-eye"></i> Ver
                        </button>
                        <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="text-red-600 hover:text-red-900">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </td>
                `;
        tbody.appendChild(fila);
    });
}

// Event Listeners para cerrar modales



// Inicializar la tabla cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    renderizarTabla();
});
let btn = document.querySelector("#btnVer")
let modalVer = document.querySelector("#modalVer")
let detalleNombre = document.querySelector("#detalleNombre")

document.addEventListener("click", () => {
    modalVer.classList.remove("hidden");
})



// Cerrar modal al hacer clic fuera del contenido
document.getElementById('modalVer').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});