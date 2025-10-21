// 2. Dado un array de estudiantes con objetos {nombre, edad, notas: [..]},
// desestructura para obtener nombre y calcular promedio de notas.

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
function calcularPromedioEstudiante({ nombre, notas }) {
    let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return {
        nombre,
        promedio: parseFloat((suma / notas.length).toFixed(2))
    };
}

estudiantesFunval.forEach(estudiante => {
    let resultado = calcularPromedioEstudiante(estudiante);
    console.log(`${resultado.nombre}: ${resultado.promedio}`);
});

// 3. Desestructura el primer y último elemento de un array sin usar índices directos.

// 4. Dado un objeto producto con muchas propiedades, usa desestructuración con rest
// para extraer "nombre" y "precio" y guardar el resto en otra variable.

let producto = {
    nombre: "Laptop Gamer",
    marca: "TechMaster",
    categoria: "Electrónicos",
    stock: 15,
    descripcion: "Laptop para gaming con RTX 4060 y Intel i7",
    caracteristicas: ["16GB RAM", "1TB SSD", "Pantalla 15.6''"],
    garantia: "2 años",
    envioGratis: true,
    color: "Negro",
    precio: 1299.99,
    peso: "2.3 kg",
    dimensiones: "36 x 25 x 2 cm",
    sku: "LTG-2024-001",
    proveedor: "TechCorp International"
};

// Desestructuración: extraemos nombre y precio, el resto va a 'detalles'
// const { nombre, precio, ...detalles } = producto;

// console.log(" Propiedades extraídas directamente:");
// console.log("Nombre:", nombre);
// console.log("Precio: $" + precio);

// console.log("\n Resto de propiedades (en objeto 'detalles'):");
// console.log(detalles);

// 5. Usa desestructuración en parámetros de una función para recibir
// un objeto con {usuario, rol, activo} y mostrar solo usuario y rol.

// 6. Dado un array anidado [[1,2],[3,4],[5,6]], desestructura para obtener el número 6 directamente.

let arrayAnidado = [[1, 2], [3, 4], [5, 6]];
let [[,], [,], [, ultimo]] = arrayAnidado;
console.log("Número:", ultimo); // 6

// 7. Desestructura un array de 10 elementos para obtener solo los primeros 3
// y el resto guardarlo en otra variable con rest.

// 8. Dado un objeto con propiedades anidadas (empresa → departamento → empleado),
// desestructura en una sola línea para obtener el nombre del empleado.

let empresa = {
    nombre: "TechCorp",
    fundacion: 2010,
    departamento: {
        nombre: "Desarrollo",
        presupuesto: 500000,
        empleado: {
            nombre: "Juan Pérez",
            edad: 28,
            puesto: "Desarrollador Full Stack",
            salario: 75000
        }
    }
};
let { departamento: { empleado: { nombre } } } = empresa;
console.log("Nombre del empleado:", nombre);

// 9. Usa desestructuración para intercambiar el valor de dos variables sin usar una variable temporal.

// 10. Desestructura una función que retorna un array [estado, setEstado],
// similar a como hace React con useState().

//  BLOQUE 2: Operador Spread aplicado
// Objetivo: crear, combinar y actualizar datos sin mutar.

// 11. Combina dos arrays de objetos (estudiantes y nuevosEstudiantes)
// en uno solo usando spread y muestra la lista combinada.

// 12. A partir de un array de productos, agrega un nuevo producto usando spread
// sin usar push.

let productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 80 }
];

let nuevoProducto = { id: 4, nombre: "Monitor", precio: 300 };
let productosActualizados = [...productos, nuevoProducto];

console.log("Array original:", productos);
console.log("Array actualizado:", productosActualizados);

// 13. A partir de un objeto usuario, crea uno nuevo con un rol adicional "admin"
// sin modificar el original.

// 14. Dado un array de usuarios, reemplaza el usuario con id = 3
// con uno nuevo usando map + spread.

const usuarios = [
    { id: 1, nombre: "Ana", email: "ana@gmail.com", edad: 25 },
    { id: 2, nombre: "Carlos", email: "carlos@gmail.com", edad: 30 },
    { id: 3, nombre: "Maria", email: "maria@gmail.com", edad: 28 },
    { id: 4, nombre: "Pedro", email: "pedro@gmail.com", edad: 35 }
];

const nuevoUsuario = { id: 3, nombre: "José", email: "jose@gmail.com", edad: 29 };

let usuariosActualizados = [];
usuarios.forEach(usuario => {
    if (usuario.id === 3) {
        usuariosActualizados.push({ ...nuevoUsuario });
    } else {
        usuariosActualizados.push(usuario);
    }
});

console.log(usuariosActualizados);

// 15. Combina las propiedades de dos objetos que tienen claves repetidas
// y observa qué propiedad prevalece.

// 16. Crea una copia profunda de un array de objetos usando spread
// y modifica uno de ellos sin afectar el original.

// 17. A partir de un array de notas, usa spread para agregar múltiples notas de una sola vez.

// 18. Clona un objeto anidado y modifica solo una propiedad interna sin alterar el original.

// 19. Crea un nuevo objeto "pedido" combinando los datos de un cliente y un producto.

// 20. Usa spread para clonar un array grande y ordénalo sin modificar el original.

//  BLOQUE 3: Casos prácticos combinando Desestructuración + Spread
// Objetivo: simular casos reales tipo mini app / lógica avanzada.

// 21. Dado un array de estudiantes con notas, crea una función que
// devuelva un nuevo array con todos los estudiantes que tengan promedio > 80,
// usando desestructuración y spread para crear nuevos objetos.

// 22. Crea una función "actualizarStock" que reciba un array de productos y un id,
// y retorne un nuevo array con el producto incrementado en +1 stock sin mutar.

// 23. Crea una función "agregarTarea" que reciba una lista de tareas y una nueva tarea
// y retorne una nueva lista (no mutar el original).

// 24. Crea una función que reciba un objeto usuario y retorne otro
// con la propiedad "estado: activo" agregada usando spread.

// 25. Desestructura un array de objetos libros y devuelve un nuevo array
// solo con el título y autor usando map + desestructuración.

// 26. Crea una función que desestructure los parámetros {nombre, precio}
// de un producto y devuelva un nuevo objeto con un impuesto agregado (IVA).

// 27. Combina dos arrays de objetos usuarios y usa desestructuración para
// crear un nuevo array solo con {nombre, email} de cada uno.

// 28. Desestructura un objeto anidado de configuración de app para extraer
// opciones específicas y combina con otras opciones usando spread.

// 29. Simula una “actualización masiva”: dado un array de estudiantes,
// retorna un nuevo array con +1 año en edad para todos (sin mutar el original).

// 30. Crea una función que reciba un array de órdenes de compra y devuelva
// un nuevo array con el total calculado por cada orden usando desestructuración y spread.

