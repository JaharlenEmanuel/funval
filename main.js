// // /*Ejercicio*/
// // 2. Calcula el área de un rectángulo(base * altura).
// //    Muestra el resultado en consola.
// // */
// // RESPUESTA AQUÍ 👇
// let base = 5;
// let altura = 10;
// let areaRectangulo = base * altura;
// console.log("Área del rectángulo:", areaRectangulo);
// /*
// 3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
// */
// // RESPUESTA AQUÍ 👇
// base = 8;
// altura = 6;
// let areaTriangulo = (base * altura) / 2;
// console.log("Área del triángulo:", areaTriangulo);

// /*
// 4. Calcula el módulo (resto) de dividir 25 entre 4.
//    Usa el operador %.
// */
// // RESPUESTA AQUÍ 👇
// let modulo = 25 % 4;
// console.log("Módulo de 25 entre 4:", modulo);

// /*
// 5. Declara una variable "numero" y muestra su cuadrado y su cubo.
//    Usa los operadores **2 y **3.
// */
// // RESPUESTA AQUÍ 👇
// let numero = 3;
// let cuadrado = numero ** 2;
// let cubo = numero ** 3;
// console.log("Número:", numero, "Cuadrado:", cuadrado, "Cubo:", cubo);
// /*
// 6. Calcula el perímetro de un cuadrado con lado = 5.
//    Fórmula: lado * 4
// */
// // RESPUESTA AQUÍ 👇
// let lado = 5;
// let perimetroCuadrado = lado * 4;
// console.log("Perímetro del cuadrado:", perimetroCuadrado);

// /*
// 7. Declara dos números y muestra si su suma es par o impar.
//    Usa el operador % para comprobar si el resto es 0.
// */
// // RESPUESTA AQUÍ 👇
// let num1 = 7;
// let num2 = 8;
// let suma = num1 + num2;
// suma % 2 === 0 
//     ? console.log("La suma es par") 
//     : console.log("La suma es impar");

// /*
// 8. Calcula el promedio de tres notas y muestra el resultado en consola.
// */
// // RESPUESTA AQUÍ 👇
// let nota1 = 15;
// let nota2 = 18;
// let nota3 = 20;
// let promedio = (nota1 + nota2 + nota3) / 3;
// console.log("Promedio de las notas:", promedio);
// // =======================================================
// // OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// // =======================================================

// /*
// 9. Declara una variable x = 10.
//    Usa x += 5 y muestra el nuevo valor.
// */
// // RESPUESTA AQUÍ 👇
// let x = 10;
// x += 5;
// console.log("Nuevo valor de x:", x);
// /*
// 10. Declara una variable puntos = 100.
//     Resta 20 puntos usando puntos -= 20 y muestra el resultado.
// */
// // RESPUESTA AQUÍ 👇
// let puntos = 100;
// puntos -= 20;
// console.log("Puntos después de restar 20:", puntos);
// /*
// 11. Declara precio = 50.
//     Duplica su valor usando precio *= 2 y muestra el resultado.
// */
// // RESPUESTA AQUÍ 👇
// let precio = 50;
// precio *= 2;
// console.log("Precio después de duplicar:", precio);
// /*
// 12. Declara saldo = 200.
//     Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
// */
// // RESPUESTA AQUÍ 👇
// let saldo = 200;
// saldo /= 4;
// console.log("Nuevo saldo: ", saldo);
// // =======================================================
// // OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// // =======================================================

// /*
// 13. Declara dos variables numéricas.
//     Muestra si son iguales (==) o diferentes (!=).
// */
// // RESPUESTA AQUÍ 👇
// let num3 = 5;
// let num4 = 10;
// num3 == num4
//     ? console.log("Los números son iguales")
//     : console.log("Los números son diferentes");

// /*
// 14. Declara edad = 17.
//     Muestra si es mayor o igual a 18 (edad >= 18).
// */
// // RESPUESTA AQUÍ 👇
// let edad = 17;
// edad >= 18
//     ? console.log("Es mayor de edad")
//     : console.log("No es mayor de edad");
// /*
// 15. Declara dos variables a = 10, b = "10".
//     Muestra el resultado de a == b y a === b para ver la diferencia.
// */
// // RESPUESTA AQUÍ 👇
// let a = 10;
// let b = "10";
// console.log("a == b:", a == b);
// console.log("a === b:", a === b);

// /*
// 16. Declara dos variables c = 15, d = 20.
//     Muestra si c es menor que d y si c es mayor o igual que d.
// */
// // RESPUESTA AQUÍ 👇
// let c = 15;
// let d = 20;
// c < d
//     ? console.log("c es menor que d")
//     : console.log("c no es menor que d");
// c >= d
//     ? console.log("c es mayor o igual que d")
//     : console.log("c no es mayor o igual que d");

// // =======================================================
// // OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// // =======================================================

// /*
// 17. Declara tieneLicencia = true y tieneAuto = false.
//     Usa && (AND) para verificar si puede conducir.
// */
// // RESPUESTA AQUÍ 👇
// let tieneLicencia = true;
// let tieneAuto = false;
// tieneLicencia && tieneAuto
//     ? console.log("Puede conducir")
//     : console.log("No puede conducir");

// /*
// 18. Declara esMayor = true y tieneEntrada = false.
//     Usa || (OR) para verificar si puede entrar al cine.
// */
// // RESPUESTA AQUÍ 👇
// let esMayor = true;
// let tieneEntrada = false;
// esMayor || tieneEntrada
//     ? console.log("Puede entrar al cine")
//     : console.log("No puede entrar al cine");


// /*
// 19. Declara variable conectado = false.
//     Usa ! (NOT) para mostrar el valor contrario.
// */
// // RESPUESTA AQUÍ 👇
// let conectado = false;
// console.log("Valor contrario de conectado:", !conectado);
// /*
// 20. Declara edad = 25 y nacionalidad = "boliviana".
//     Usa operadores lógicos para verificar si puede votar
//     (edad >= 18 && nacionalidad == "boliviana").
// */
// // RESPUESTA AQUÍ 👇
// edad = 25;
// let nacionalidad = "boliviana";
// edad >= 18 && nacionalidad == "boliviana"
//     ? console.log("Puede votar")
//     : console.log("No puede votar");
// // =======================================================
// // COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// // =======================================================

// /*
// 21. Declara dos números y muestra su suma.
//     Luego, verifica si el resultado es mayor que 50.
// */
// // RESPUESTA AQUÍ 👇
// num1 = 30;
// num2 = 25;
// suma = num1 + num2;
// suma > 50
//     ? console.log("La suma es mayor que 50")
//     : console.log("La suma no es mayor que 50");
// /*
// 22. Declara tres notas (nota1, nota2, nota3).
//     Calcula el promedio y muestra si aprobó (promedio >= 60).
// */
// // RESPUESTA AQUÍ 👇
// nota1 = 70;
// nota2 = 80;
// nota3 = 90;
// promedio = (nota1 + nota2 + nota3) / 3;
// promedio >= 60
//     ? console.log("Aprobado")
//     : console.log("No aprobado");
// /*
// 23. Declara nombre y edad.
//     Muestra un mensaje como:
//     "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
// */
// nombre = "Jaharlen";
// edad = 26;
// console.log("Hola " + nombre + ", tienes " + edad + " años. ¿Eres mayor de edad? " + (edad >= 18));
// // RESPUESTA AQUÍ 👇

// /*
// 24. Declara precioProducto y dineroDisponible.
//     Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
// */
// // RESPUESTA AQUÍ 👇
// let precioProducto = 50;
// let dineroDisponible = 100;
// dineroDisponible >= precioProducto
//     ? console.log("Puedes comprar el producto")
//     : console.log("No puedes comprar el producto");
// /*
// 25. Declara base y altura.
//     Calcula el área de un triángulo (base * altura) / 2.
// */
// // RESPUESTA AQUÍ 👇
// base = 100;
// altura = 50;
// area = (base * altura) / 2;
// console.log("El área del triángulo es:", area);

// /*
// 26. Declara edad, tieneCedula y tienePasaje.
//     Usa operadores lógicos para saber si puede viajar.
//     (edad >= 18 && tieneCedula && tienePasaje)
// */
// // RESPUESTA AQUÍ 👇
// edad = 35;
// let tieneCedula = true;
// let tienePasaje = true;
// edad >= 18 && tieneCedula && tienePasaje
//     ? console.log("Puede viajar")
//     : console.log("No puede viajar");
// /*
// 27. Declara saldo = 100 y gasto = 30.
//     Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
// */
// // RESPUESTA AQUÍ 👇
// saldo = 100;
// let gasto = 30;
// saldo -= gasto;
// console.log("Nuevo saldo después del gasto:", saldo);
// /*
// 28. Declara a = 10, b = 5.
//     Muestra si la suma es par o impar (usa %).
// */
// // RESPUESTA AQUÍ 👇

// a = 10;
// b = 5;
// suma = a + b;
// suma % 2 == 0
//  ?console.log("La Suma es Par")
//  :console.log("La Suma es Impar");

// /*
// 29. Declara usuario = "Kevin" y password = "1234".
//     Usa && para verificar si ambos son correctos.
// */
// // RESPUESTA AQUÍ 👇

// let usuario = "emanuel";
// let password = 1234
// (usuario==="emanuel" && password == 1234)
// ?console.log("los datos son Correctos")
// :console.log("los datos son Incorrectos")

// /*
// 30. Ejercicio Final:
//     Declara tus datos y calcula tu promedio.
//     Luego, muestra un mensaje completo.

//     let nombre = "Kevin";
//     let edad = 28;
//     let nota1 = 70;
//     let nota2 = 80;

//     let promedio = (nota1 + nota2) / 2;
//     let aprobado = promedio >= 60;

//     console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
// */
// // RESPUESTA AQUÍ 👇
// nombre = "Emanuel"
// edad = 26;
// nota1 = 90;
// nota2 = 100;
// promedio = (nota1 + nota2) / 2;
// let aprobado = promedio >=60;
// aprobado == true
// ? aprobado = "aprobado"
// :aprobado = "desaprobado"
// console.log("Hola " + nombre + ", tienes " + edad + " años, tu promedio es " + promedio + ", estas " + aprobado)
let edad=27;
let sexo = "masculino";
saldo=20;
tRes = saldo / 5;
(edad>=18 && edad<=35 && sexo === "masculino")
?saldo<=10
    ?console.log("Saldo Insuficiente, El Consumo mínimo es de 10 Dolares, por favor haga su recarga")
    
    :console.log("Su Saldo es de: "+ saldo + " Dolares"+ ", Tiene un Tiempo restante de: "+ tRes + " Horas")
:console.log("No tiene Permitido el ingreso");