// // // /* 
// // //     crear una aplicacion q nos permita determinar q mes estamos del año el cliente debera ingresar
// // //     el mes en un formato numerico 1-12  si coloca x ejemplo 2 el resultado deberia ser febrero
// // //     si coloca 6  deberia ser junio y asi 
// // // */
// // let mes = parseInt(prompt("Ingrese un mes del año en formato numerico (1-12):"));
// // // if (mes == 1) {
// // //     console.log("Enero");
// // // } else if (mes == 2) {
// // //     console.log("Febrero");
// // // } else if (mes == 3) {
// // //     console.log("Marzo");
// // // } else if (mes == 4) {
// // //     console.log("Abril");
// // // } else if (mes == 5) {
// // //     console.log("Mayo");
// // // } else if (mes == 6) {
// // //     console.log("Junio");
// // // } else if (mes == 7) {
// // //     console.log("Julio");
// // // } else if (mes == 8) {
// // //     console.log("Agosto");
// // // } else if (mes == 9) {
// // //     console.log("Septiembre");
// // // } else if (mes == 10) {
// // //     console.log("Octubre");
// // // } else if (mes == 11) {
// // //     console.log("Noviembre");
// // // } else if (mes == 12) {
// // //     console.log("Diciembre");
// // // } else {
// // //     console.log("Mes inválido");
// // // }

// // // switch case
// // switch (mes){
// //     case 1:
// //         console.log("Enero");
// //         break;
// //     case 2:
// //         console.log("Febrero");
// //         break;
// //     case 3:
// //         console.log("Marzo");
// //         break;
// //     case 4:
// //         console.log("Abril");
// //         break;
// //     case 5:
// //         console.log("Mayo");
// //         break;
// //     case 6:
// //         console.log("Junio");
// //         break;
// //     case 7:
// //         console.log("Julio");
// //         break;
// //     case 8:
// //         console.log("Agosto");
// //         break;
// //     case 9:
// //         console.log("Septiembre");
// //         break;
// //     case 10:
// //         console.log("Octubre");
// //         break;
// //     case 11:
// //         console.log("Noviembre");
// //         break;
// //     case 12:
// //         console.log("Diciembre");
// //         break;
// //     default:
// //         console.log("Mes inválido");
// // }


// /* ----------------------------------------------------------------------- */
// // =======================================================
// // IF SIMPLE (EJERCICIOS 1 - 5)
// // =======================================================

// /*
// 1. Pide al usuario un número con prompt.
//    Muestra "Positivo" si el número es mayor que 0.
// // RESPUESTA AQUÍ 👇
// */
// let numero = parseFloat(prompt("Ingresa un número:"));
// if (numero>=0){
//     console.log("El Número es Positivo")
// }else{
//     console.log("El Número es Negativo")
// }
// /*
// 2. Pide la edad del usuario.
//    Si la edad es mayor o igual a 18, muestra "Eres mayor de edad".
// */
// // RESPUESTA AQUÍ 👇

// let edad = parseInt(prompt("Ingrese su Edad"));
// if (edad>=18){
//     console.log("Eres Mayor de Edad")
// }else{
//     console.log("Eres Menor de Edad")
// }

// /*
// 3. Pide un número y verifica si es par.
//    Usa el operador % y un if.
// */
// // RESPUESTA AQUÍ 👇
// numero= parseInt(prompt("Ingrese un Numero"));
// if (numero % 2 ==0){
//     console.log("El Numero es Par")
// }else{
//     console.log("El Numero es Impar")
// }
// /*
// 4. Pide una contraseña con prompt.
//    Si la contraseña es "admin123", muestra "Acceso permitido".
// */
// // RESPUESTA AQUÍ 👇
// let contrasena = prompt("Ingrese la contraseña:");
// if (contrasena === "admin123") {
//     console.log("Acceso permitido");
// } else {
//     console.log("Acceso denegado");
// }

// /*
// 5. Pide un número.
//    Si el número es igual a 100, muestra "Número exacto".
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número:"));
// if (numero === 100) {
//     console.log("Número exacto");
// } else {
//     console.log("Número diferente");
// }

// // =======================================================
// // IF - ELSE (EJERCICIOS 6 - 10)
// // =======================================================

// /*
// 6. Pide un número.
//    Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número:"));
// if (numero > 50) {
//     console.log("Número alto");
// } else {
//     console.log("Número bajo");
// }

// /*
// 7. Pide la edad del usuario.
//    Si es mayor o igual a 18 muestra "Bienvenido",
//    caso contrario "Acceso denegado".
// */
// // RESPUESTA AQUÍ 👇
// edad = parseInt(prompt("Ingrese su Edad"));
// if (edad >= 18) {
//     console.log("Bienvenido");
// } else {
//     console.log("Acceso denegado");
// }

// /*
// 8. Pide una nota entre 0 y 100.
//    Si la nota es mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".
// */
// // RESPUESTA AQUÍ 👇
// let nota = parseFloat(prompt("Ingrese una nota entre 0 y 100:"));
// if (nota >= 60) {
//     console.log("Aprobado");
// } else {
//     console.log("Reprobado");
// }

// /*
// 9. Pide un nombre.
//    Si el nombre es "Kevin" muestra "Hola Kevin",
//    de lo contrario "Hola invitado".
// */
// let nombre = prompt("Ingrese su nombre:");
// if (nombre === "Kevin") {
//     console.log("Hola Kevin");
// } else {
//     console.log("Hola invitado");
// }

// /*
// 10. Pide un número y muestra si es par o impar usando if-else.
// */
// // RESPUESTA AQUÍ 👇

// numero = parseInt(prompt("Ingrese un número:"));
// if (numero % 2 === 0) {
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }
// // =======================================================
// // IF - ELSE IF (EJERCICIOS 11 - 15)
// // =======================================================

// /*
// 11. Pide una nota (0 a 100) e imprime:
//    - "Excelente" si es mayor o igual a 90
//    - "Bueno" si está entre 70 y 89
//    - "Regular" si está entre 50 y 69
//    - "Insuficiente" si es menor a 50
// */
// // RESPUESTA AQUÍ 👇
// nota = parseFloat(prompt("Ingrese una nota entre 0 y 100:"));
// if (nota >= 90) {
//     console.log("Excelente");
// } else if (nota >= 70) {
//     console.log("Bueno");
// } else if (nota >= 50) {
//     console.log("Regular");
// } else {
//     console.log("Insuficiente");
// }

// /*
// 12. Pide la temperatura (en grados Celsius).
//    Muestra:
//    - "Frío" si es menor a 15
//    - "Templado" si está entre 15 y 25
//    - "Caluroso" si es mayor a 25
// */
// // RESPUESTA AQUÍ 👇
// let temperatura = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
// if (temperatura < 15) {
//     console.log("Frío");
// } else if (temperatura <= 25) {
//     console.log("Templado");
// } else {
//     console.log("Caluroso");
// }
// /*

// 13. Pide una hora (0 a 23).
//    Muestra:
//    - "Buenos días" si está entre 6 y 11
//    - "Buenas tardes" si está entre 12 y 18
//    - "Buenas noches" si está entre 19 y 23
//    - "Durmiendo" si está entre 0 y 5
// */
// // RESPUESTA AQUÍ 👇
// let hora = parseInt(prompt("Ingrese la hora (0 a 23):"));
// if (hora >= 6 && hora <= 11) {
//     console.log("Buenos días");
// } else if (hora >= 12 && hora <= 18) {
//     console.log("Buenas tardes");
// } else if (hora >= 19 && hora <= 23) {
//     console.log("Buenas noches");
// } else {
//     console.log("Durmiendo");
// }
// /*
// 14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno.
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número del 1 al 3:"));
// if (numero === 1) {
//     console.log("Número uno");
// } else if (numero === 2) {
//     console.log("Número dos");
// } else if (numero === 3) {
//     console.log("Número tres");
// } else {
//     console.log("Número inválido");
// }

// /*
// 15. Pide un número y muestra:
//    - "Negativo" si es menor que 0
//    - "Cero" si es igual a 0
//    - "Positivo" si es mayor que 0
// */
// // RESPUESTA AQUÍ 👇
// numero = parseFloat(prompt("Ingrese un número:"));
// if (numero < 0) {
//     console.log("Negativo");
// } else if (numero === 0) {
//     console.log("Cero");
// } else {
//     console.log("Positivo");
// }
// // =======================================================
// // IF ANIDADO (EJERCICIOS 16 - 20)
// // =======================================================

// /*
// 16. Pide una edad.
//    Si es mayor o igual a 18 muestra "Mayor de edad".
//    Dentro del mismo if, si es mayor o igual a 60 muestra "Adulto mayor".
// */
// // RESPUESTA AQUÍ 👇
// edad = parseInt(prompt("Ingrese su edad:"));
// if (edad >= 18) {
//     console.log("Mayor de edad");
//    if (edad >= 60) {
//        console.log("Adulto mayor");
//    }
// }else{
//     console.log("Menor de edad");
// }

// /*
// 17. Pide una nota.
//    Si es mayor o igual a 60 muestra "Aprobado".
//    Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".
// */
// // RESPUESTA AQUÍ 👇
// nota = parseFloat(prompt("Ingrese una nota:"));
// if (nota >= 60) {
//     console.log("Aprobado");
//    if (nota >= 90) {
//        console.log("Excelente");
//    }
// }else{
//     console.log("Reprobado");
// }
// /*
// 18. Pide un número.
//    Si es positivo, dentro del if verifica si es par o impar.
// */
// // RESPUESTA AQUÍ 👇
// numero = parseFloat(prompt("Ingrese un número:"));
// if (numero > 0) {
//     if (numero % 2 === 0) {
//         console.log("El número es positivo y par.");
//     } else {
//         console.log("El número es positivo e impar.");
//     }
// } else {
//     console.log("El número es negativo o cero.");
// }

// /*
// 19. Pide usuario y contraseña.
//    Si usuario es "admin", dentro del mismo if verifica si la contraseña es "1234".
//    Si ambos coinciden, muestra "Acceso concedido".
// */
// // RESPUESTA AQUÍ 👇
// let usuario = prompt("Ingrese su usuario:");
// contrasena = prompt("Ingrese su contraseña:");
// if (usuario === "admin") {
//     if (contrasena === "1234") {
//         console.log("Acceso concedido");
//     }
// } else {
//     console.log("Acceso denegado");
// }

// /*
// 20. Pide dos números.
//    Si el primero es mayor, muestra "El primero es mayor".
//    Dentro de ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".
// */
// // RESPUESTA AQUÍ 👇
// let numero1 = parseFloat(prompt("Ingrese el primer número:"));
// let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
// if (numero1 > numero2) {
//     console.log("El primero es mayor.");
//     if (numero1 - numero2 > 10) {
//         console.log("Diferencia grande.");
//     }
// } else {
//     console.log("El segundo es mayor o igual.");
// }

// // =======================================================
// // SWITCH CASE (EJERCICIOS 21 - 22)
// // =======================================================

// /*
// 21. Pide un número del 1 al 7 y muestra el día correspondiente.
//    1 = Lunes, 2 = Martes, ..., 7 = Domingo
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
// switch (numero) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miércoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Número inválido");
// }

// /*
// 22. Pide un número del 1 al 12 y muestra el mes correspondiente.
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número del 1 al 12:"));
// switch (numero) {
//     case 1:
//         console.log("Enero");
//         break;
//     case 2:
//         console.log("Febrero");
//         break;
//     case 3:
//         console.log("Marzo");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Mayo");
//         break;
//     case 6:
//         console.log("Junio");
//         break;
//     case 7:
//         console.log("Julio");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Septiembre");
//         break;
//     case 10:
//         console.log("Octubre");
//         break;
//     case 11:
//         console.log("Noviembre");
//         break;
//     case 12:
//         console.log("Diciembre");
//         break;
//     default:
//         console.log("Número inválido");
// }
// // =======================================================
// // COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 23 - 35)
// // =======================================================

// /*
// 23. Pide dos números.
//    Usa if-else para mostrar si su suma es par o impar.
// */
// // RESPUESTA AQUÍ 👇
// numero1 = parseInt(prompt("Ingrese el primer número:"));
// numero2 = parseInt(prompt("Ingrese el segundo número:"));
// let suma = numero1 + numero2;
// if (suma % 2 === 0) {
//     console.log("La suma es par.");
// } else {
//     console.log("La suma es impar.");
// }

// /*
// 24. Pide tres notas, calcula el promedio.
//    Usa if-else-if para mostrar:
//    - "Excelente" si es mayor a 90
//    - "Aprobado" si es mayor o igual a 60
//    - "Reprobado" si es menor a 60
// */
// // RESPUESTA AQUÍ 👇
// let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
// let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
// let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
// let promedio = (nota1 + nota2 + nota3) / 3;
// if (promedio > 90) {
//     console.log("Excelente");
// } else if (promedio >= 60) {
//     console.log("Aprobado");
// } else {
//     console.log("Reprobado");
// }
// /*
// 25. Pide nombre y edad.
//    Usa un if anidado para mostrar:
//    - "Hola [nombre], eres mayor de edad"
//    - Si tiene 60 o más, agrega también "y adulto mayor"
// */


// // RESPUESTA AQUÍ 👇
// nombre = prompt("Ingrese su nombre:");
// edad = parseInt(prompt("Ingrese su edad:"));
// if (edad >= 18) {
//     console.log("Hola " + nombre + ", eres mayor de edad");
//     if (edad >= 60) {
//         console.log("y adulto mayor");
//     } 
// }else {
//     console.log("Hola " + nombre + ", eres menor de edad");
// }
// /*
// 26. Pide un número del 1 al 5 y usa switch para mostrar una calificación:
//    1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número del 1 al 5:"));
// switch (numero) {
//     case 1:
//         console.log("Muy malo");
//         break;
//     case 2:
//         console.log("Malo");
//         break;
//     case 3:
//         console.log("Regular");
//         break;
//     case 4:
//         console.log("Bueno");
//         break;
//     case 5:
//         console.log("Excelente");
//         break;
//     default:
//         console.log("Número inválido");
// }

// /*
// 27. Pide una letra y determina si es vocal o consonante usando switch.
// */
// // RESPUESTA AQUÍ 👇
// let letra = prompt("Ingrese una letra:").toLowerCase();
// switch (letra) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Es una vocal");
//         break;
//     default:
//         console.log("Es una consonante");
// }
// /*
// 28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
//    Usa switch para realizar la operación correspondiente.
// */
// // RESPUESTA AQUÍ 👇
// numero1 = parseFloat(prompt("Ingrese el primer número:"));
// numero2 = parseFloat(prompt("Ingrese el segundo número:"));
// let operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir):");
// switch (operacion) {
//     case "sumar":
//         console.log("Resultado: " + (numero1 + numero2));
//         break;
//     case "restar":
//         console.log("Resultado: " + (numero1 - numero2));
//         break;
//     case "multiplicar":
//         console.log("Resultado: " + (numero1 * numero2));
//         break;
//     case "dividir":
//         console.log("Resultado: " + (numero1 / numero2));
//         break;
//     default:
//         console.log("Operación inválida");
// }
// /*
// 29. Pide edad y país.
//    Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
//    Caso contrario, muestra "No puede votar".
// */
// // RESPUESTA AQUÍ 👇
//  edad = parseInt(prompt("Ingrese su edad:"));
// let pais = prompt("Ingrese su país:");
// if (pais.toLowerCase() === "bolivia" && edad >= 18) {
//     console.log("Puede votar");
// } else {
//     console.log("No puede votar");
// }
// /*
// 30. Pide tres números.
//    Determina cuál es el mayor de los tres usando if-else-if.
// */
// // RESPUESTA AQUÍ 👇
// numero1 = parseFloat(prompt("Ingrese el primer número:"));
// numero2 = parseFloat(prompt("Ingrese el segundo número:"));
// let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
// if (numero1 > numero2 && numero1 > numero3) {
//     console.log("El número mayor es: " + numero1);
// } else if (numero2 > numero1 && numero2 > numero3) {
//     console.log("El número mayor es: " + numero2);
// } else {
//     console.log("El número mayor es: " + numero3);
// }
// /*
// 31. Pide un número y determina:
//    - Si es múltiplo de 3 muestra "Fizz"
//    - Si es múltiplo de 5 muestra "Buzz"
//    - Si es múltiplo de ambos muestra "FizzBuzz"
// */
// // RESPUESTA AQUÍ 👇
// numero = parseInt(prompt("Ingrese un número:"));
// if (numero % 3 === 0 && numero % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (numero % 3 === 0) {
//     console.log("Fizz");
// } else if (numero % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log("El número no es múltiplo de 3 ni de 5");
// }
// /*
// 32. Pide una nota (0 a 100) y muestra:
//    "A" si es >= 90
//    "B" si es >= 80
//    "C" si es >= 70
//    "D" si es >= 60
//    "F" si es menor de 60
// */
// // RESPUESTA AQUÍ 👇
// nota = parseFloat(prompt("Ingrese una nota entre 0 y 100:"));
// switch (true) {
//     case (nota >= 90):
//         console.log("A");
//         break;
//     case (nota >= 80):
//         console.log("B");
//         break;
//     case (nota >= 70):
//         console.log("C");
//         break;
//     case (nota >= 60):
//         console.log("D");
//         break;
//     default:
//         console.log("F");
// }
// /*
// 33. Pide nombre de usuario y contraseña.
//    Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
//    muestra "Acceso autorizado", de lo contrario "Denegado".
// */
// // RESPUESTA AQUÍ 👇
// usuario = prompt("Ingrese su nombre de usuario:");
// contrasena = prompt("Ingrese su contraseña:");
// if ((usuario === "Alfredo" || usuario === "Moises") && contrasena === "1234") {
//     console.log("Acceso autorizado");
// } else {
//     console.log("Denegado");
// }
// /*
// 34. Pide la cantidad de artículos comprados y el precio por unidad.
//    Si compró más de 10 artículos, aplica 10% de descuento.
//    Muestra el total a pagar.
// */
// // RESPUESTA AQUÍ 👇
let cantidad = parseInt(prompt("Ingrese la cantidad de artículos comprados:"));
let precioUnidad = parseFloat(prompt("Ingrese el precio por unidad:"));
let total = cantidad * precioUnidad;
if (cantidad > 10) {
    total *= 0.9; // Aplica 10% de descuento
}
total = parseFloat(total.toFixed(2));
console.log("Total a pagar: " + total);
/*
// 35. Ejercicio Final:
//    Pide nombre, edad y tres notas.
//    Calcula el promedio, determina si aprueba y muestra:
//    "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
//    Usa if-else-if o anidado.
// */
// // RESPUESTA AQUÍ 👇
// nombre = prompt("Ingrese su nombre:");
// edad = parseInt(prompt("Ingrese su edad:"));
// nota1 = parseFloat(prompt("Ingrese la primera nota:"));
// nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
// nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
// let estado;
// promedio = (nota1 + nota2 + nota3) / 3;
// if (promedio >= 60) {
//     estado = "Aprobado";
// } else {
//     estado = "Reprobado";
// }
// console.log("Hola " + nombre + ", tienes " + edad + " años y tu promedio es " + promedio + ". " + estado + ".");