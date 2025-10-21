/*let computadora = {
    procesador: "ryzen 5 3500g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    tarjeta: "3060ti",
    gabinete: "asus",
    madre: "gigabite",
};

let {
    fuente,
    tarjeta,
    procesador: cerebro,
    disco,
    ram,
    gabinete = "sure",
    madre = "asus prime",
} = computadora;
console.log(gabinete);
 --------------------EJEMPLO REAL------------------------------------- 
let tiendaPC = [
    {
        procesador: "ryzen 5 3500g",
        ram: "16gb",
        disco: "480gb ssd",
        fuente: "1200wts",
        tarjeta: "3060ti",
        gabinete: "asus",
        madre: "gigabite",
    },
    {
        procesador: "intel corei3 1000f",
        ram: "32gb",
        disco: "480gb ssd",
        fuente: "1200wts",
        gabinete: "asus",
        madre: "gigabite",
    },
    {
        procesador: "ryzen 3 3200g",
        ram: "16gb",
        disco: "480gb ssd",
        fuente: "1200wts",
        gabinete: "iris",
        madre: "aorus",
    },
    {
        procesador: "corei7",
        ram: "16gb",
        disco: "1tb hdd",
        fuente: "1000wts",
        tarjeta: "3080ti",
        madre: "gigabite",
    },
    {
        fuente: "1200wts",
        tarjeta: "3060ti",
        gabinete: "asus",
    },
];

let tabla = document.querySelector("#cuerpo-tabla");

tiendaPC.forEach(
    ({
        procesador = "componente no comprado",
        ram = "componente no comprado",
        disco = "componente no comprado",
        fuente = "componente no comprado",
        tarjeta = "componente no comprado",
        gabinete = "componente no comprado",
        madre = "componente no comprado",
    }) => {
        tabla.innerHTML += `          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${procesador}
            </th>
            <td class="px-6 py-4">${ram}</td>
            <td class="px-6 py-4">${disco}</td>
            <td class="px-6 py-4">${fuente}</td>
            <td class="px-6 py-4">${tarjeta}</td>
            <td class="px-6 py-4">${gabinete}</td>
            <td class="px-6 py-4">${madre}</td>
          </tr>`;
    }
);
/*---------------------------------------------------------
let estudiante = {
    nombre: `Jaharlen Emanuel`,
    apellido: `Arcela Ruiz`,
    edad: 26,
    pais: "perú"
};
let copEstud = { ...estudiante };
let mejEstud = {
    ...estudiante,
    talla: 170,
    hobbie: "leer",
};
let estudiante2 = {
    nombre: `kevin`,
    apellido: `Rodriguez`,
    edad: 29,
    pais: "Colombia",
    notas: [95, 76, 45, 78, 100]
}
let fusionEstud = {
    ...mejEstud,
    ...estudiante2
}


console.log(estudiante)
console.log(copEstud)
console.log(mejEstud)
console.log(estudiante2)
console.log(fusionEstud)*/
let estudiantesFunval = [
    {
        nombre: "ALFREDO",
        edad: 35,
        pais: "Mexico",
        notas: [35, 67, 89],
    },
    {
        nombre: "David",
        edad: 25,
        pais: "Chile",
        notas: [12, 98, 64],
    },
    {
        nombre: "Emanuel",
        edad: 28,
        pais: "Peru",
        notas: [67, 39, 100],
    },
    {
        nombre: "Gerardo",
        edad: 22,
        pais: "El Salvador",
        notas: [89, 77, 66],
    },
];
let tabla = document.querySelector("#cuerpo-tabla");
let botoncito = document.querySelector("#btn");
let cerrar = document.querySelector("#close");
let modal = document.querySelector(".modal");
let formulario = document.querySelector("#formulario-estudiante");
mostrarEstudiantes();
botoncito.addEventListener("click", (e) => {
    /* let estudianteNuevo = {
      nombre: "kevin",
      edad: 28,
      pais: "Bolivia",
      notas: [10, 20, 30],
    };
    estudiantesFunval = [...estudiantesFunval, estudianteNuevo];
    mostrarEstudiantes(); */
    modal.classList.remove("hidden");
});
cerrar.addEventListener("click", (e) => {
    modal.classList.add("hidden");
});
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("hola funval");
    let nombre = formulario.nombre.value;
    let edad = formulario.edad.value;
    let pais = formulario.pais.value;
    let objNuevo = { nombre, pais, edad };
    estudiantesFunval = [...estudiantesFunval, objNuevo];
    modal.classList.add("hidden");
    formulario.reset();
    mostrarEstudiantes();
});
function mostrarEstudiantes() {
    tabla.innerHTML = "";
    estudiantesFunval.forEach(({ nombre, edad, pais, notas = [0] }) => {
        tabla.innerHTML += ` <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${nombre}
            </th>
            <td class="px-6 py-4">${edad}</td>
            <td class="px-6 py-4">${pais}</td>
            <td class="px-6 py-4">${promedio(notas)}</td>
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
          </tr>`;
    });
}

function promedio(notasArray) {
    let resultado = 0;
    for (let index = 0; index < notasArray.length; index++) {
        resultado += notasArray[index];
    }
    resultado /= notasArray.length;
    return resultado.toFixed(2);
}
