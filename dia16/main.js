// // /* 
// //     dado un array de notas de un estudiante sacar el 
// //     promedio del mismo y verificar si esta aprobado o reprobado
// //     let notas =[90,23,65,0,90]
// // */
// // function verificarPromedio() {
// //     let notas = [90, 23, 65, 0, 90];
// //     let suma = 0;

// //     for (let i = 0; i < notas.length; i++) {
// //         suma += notas[i];
// //     }

// //     let promedio = suma / notas.length;
// //     (promedio >= 60) ? console.log(`Promedio: ${promedio.toFixed(2)}
// // Está Aprobado`) : console.log(`Promedio: ${promedio.toFixed(2)}
// // Está Desaprobado`);

// // }

// // verificarPromedio();

// // /* 
// //     dado una lista de edades de la compañia funval 
// //     let edades=[65,26,33,20,35,67,78]
// //     funval quiere saber la cantidad de personas q deben recibir el bono antiguedad
// //     este bono se da a las personas q tiene mas de 34 años 
// //     crear una lista de las edades q ingresan a el bono
// //     resl=[65,35,67,78]
// // */

// // function bono() {
// //     let edadBono = [];
// //     let edades = [65, 26, 33, 20, 35, 67, 78];
// //     for (let index = 0; index < edades.length; index++) {
// //         if (edades[index] > 34) {
// //             edadBono.push(edades[index]);
// //         }
// //     }
// //     console.log(edadBono);
// // }
// // bono()

// // /* 
// //     crear un programa q reciba una matriz cuadrada de cualquier dimensaion ejemplo
// //     let mat=[[2,3,7],[35,78,2],[57,35,28]]
// //     y realizar la suma de la diagonal principal y en otra variable la diagonal secundaria
// // */

// // function sumarDiagonales() {
// //     let mat = [
// //         [7, 3, 10, 55],
// //         [35, 73, 2, 37],
// //         [57, 35, 20, 50],
// //         [33, 72, 15, 40]
// //     ];

// //     let principal = 0, secundaria = 0;
// //     for (let i = 0; i < mat.length; i++) {
// //         principal += mat[i][i];
// //         secundaria += mat[i][(mat.length - 1) - i];
// //     }

// //     console.log("Suma diagonal principal:", principal);
// //     console.log("Suma diagonal secundaria:", secundaria);
// // }

// // sumarDiagonales();

// /* ---------------------EJERCICIOS----------------------------------- */
// // 1. Crea un array con 5 nombres y muestra el primero y el último elemento en consola.
// let nombres = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
// console.log(nombres[0]);
// console.log(nombres[nombres.length - 1]);

// // 2. Agrega un elemento al final del array usando push y muestra el nuevo array.
// nombres.push("Roberto")
// console.log(nombres)
// // 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
// // 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.
// // nombres.unshift("Javier")
// // console.log(nombres)

// // 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
// eliminar = nombres.shift()
// console.log(eliminar)
// // 6. Crea un array de números y muestra cuántos elementos tiene con length.
let numeros = [19, 34, 32, 12, 51, 36, 17];
// console.log(numeros.length);
// // 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
// let frutas = ["pera", "Manazana", "sandia", "mandarina"];
// for (let index = 0; index < frutas.length; index++) {
//     console.log(frutas[index]);

// }
// // 8. Recorre un array de números con for of y muestra el doble de cada número.
// newNumero = [];
// for (let index = 0; index < numeros.length; index++) {
//     newNumero.push(numeros[index] * 2);
//     console.log(newNumero[index])
// }
// 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.

// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.
// let numerito = [];
// for (let index = 0; index < 5; index++) {
//     numerito.push(parseInt(prompt("Ingrese el numero:")));
// }
// console.log(numerito);

// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.

// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.
let palabras = ["hola", "Ceviche", "Cebolla", "ola", "Dos", "uno", "majadito"];
let j = 0;
for (let index = 0; index < palabras.length; index++) {

    if (palabras[index].length > 4) {
        j += 1;
    }
}
console.log(j)
// 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.
// 14. Crea un array con edades y muestra solo las edades mayores a 18.
let edades = [13, 15, 17, 18, 23, 24, 12, 13, 13, 18, 20, 34];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 18) {
        console.log(edades[i])
    }
}
// 15. Crea un array de números y crea un nuevo array con el triple de cada número.
// 16. Crea un array de precios y calcula el total sumando todos sus elementos.
// 17. Crea un array de 10 números y cuenta cuántos son pares.
// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.
// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
for (let index = 0; index < numeros.length; index++) {

}
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).
menor = edades[0];
for (let index = 0; index < edades.length; index++) {
    if (menor > edades[index]) {
        menor = edades[index];
    }
}
console.log(`El Número Menor es: ${menor}`)
// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.
// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.
// 23. Crea un array con 5 números y crea otro array con los números invertidos.
// 24. Crea un array de 5 números y calcula el promedio.
// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.
// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).
// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.

// 1. Crea un array con varios números y muestra cuántos 
// de ellos son pares y cuántos son impares.

let serie = [12, 34, 13, 23, 34, 45, 56, 432, 45, 65, 6];
par = 0;
impar = 0;
for (i = 0; i < serie.length; i++) {
    if (serie[i] % 2 === 0) {
        par++;
    } else if (serie[i] % 2 === 1) {
        impar++;
    }
}
console.log(`La Cantidad de Pares son: ${par}
La Cantidad de Inpares son: ${impar}`)

// 4. Crea un array con números y elimina los números repetidos dejando solo uno de cada valor (sin usar Set).
numeros = [2, 5, 3, 2, 8, 5, 9, 3, 1, 8];
let sinRepetidos = [];

for (let i = 0; i < numeros.length; i++) {
    let repetido = false;
    for (let j = 0; j < sinRepetidos.length; j++) {
        if (numeros[i] === sinRepetidos[j]) {
            repetido = true;
            break;
        }
    }
    if (!repetido) sinRepetidos.push(numeros[i]);
}
console.log("Array original:", numeros);
console.log("Array sin repetidos:", sinRepetidos);