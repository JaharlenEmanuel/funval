//  EJERCICIO 2: Sumar números
// Dado un array de números, usa forEach para sumar todos los valores y mostrar el resultado final en consola.
let numeros = [5, 10, 15, 20];

// Tu código aquí 👇
// numeros.forEach( ... )
let suma = 0;

numeros.forEach(numero => suma += numero);

console.log("La suma total es:", suma);

//  EJERCICIO 3: Mostrar índice y valor
// Dado un array de frutas, usa forEach para mostrar en consola:
// "En la posición X está la fruta Y"
let frutitas = ["Manzana", "Banana", "Pera", "Sandía"];

// Tu código aquí 👇
// frutas.forEach( ... )
frutitas.forEach((fruta, indice) => {
    console.log(`En la posición ${indice} está la fruta ${fruta}`);
});
let estudiantesFunval = [
    "DAVID",
    "BOREN",
    "JOSE PELICO",
    "MOISES",
    "BELEN",
    "BOREN",
    "EDMUND",
    "JOSE PELICO",
    "JOSE PELICO",
    "ALFREDO",
];
/* 
    utilizar map para q en los lugares donde Jose Pelico puso su nombre
    puedan cambiarlo x estudiante no registrado
*/
let estudiantes = estudiantesFunval.map((est) => {
    if (est === "JOSE PELICO") {
        return "Estudiante No Registrado"
    } else {
        return est
    }
});
console.log(estudiantes)
let numeroPrimos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 19];
/* 
    x error el profesor Kevin creo una lista de numeros primos pero algunos numeros
    se infiltraron a la lista cambiar los numeros q no son primos x el numero 1 para q todos
    los numeros sean primos
*/




/* 
    crear una lista nueva con las marcas q tengan mas de 4 letras 
*/
let marcas = [
    "toyota",
    "samsung",
    "lg",
    "sony",
    "paramount",
    "adidas",
    "nike",
    "funval",
];
let nuevaMarcas = marcas.filter((marca) => marca.length > 4);
console.log(nuevaMarcas)