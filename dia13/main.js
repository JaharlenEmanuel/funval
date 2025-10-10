// // =======================================================
// // BUCLE FOR (EJERCICIOS 1 - 15)
// // =======================================================

// /*
// 1. Muestra los números del 1 al 10 usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇
// let i=1;
// console.log(`======Ejercicio 1======`)
// for (i = 1; i <= 10; i++) {
    
//     console.log(`Numero: `+ i);
// }

// /*
// 2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 2======`)
// for(let i=10; i>0; i--){
//     console.log(`Numero: `+ i);
// }
// /*
// 3. Muestra solo los números pares del 1 al 20 usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 3======`)
// for( let i=2; i<=20; i+=2){
//     console.log(`Numero par: `+ i);
// }

// /*
// 4. Muestra solo los números impares del 1 al 20 usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 4======`)
// for(let i=1; i<=20; i+=2){
//     console.log(`Número impar: `+ i)
// }

// /*
// 5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 5======
//     Tabla del 5`)
// for(i=1; i<=10; i++){
//     let multi= i *5;
//     console.log(`5 * ${i} = `+ multi);
// }
// /*
// 6. Calcula la suma de los números del 1 al 100 usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇
// let suma=0;
// for(i=1; i<=100; i++){
//     suma +=i;
// }
// console.log(`======Ejercicio 6======`)
// console.log(`La Suma de los primeros 100 números es: `+suma);

// /*
// 7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 7======
//     Tabla del 3`)
// for(i=1; i<=10; i++){
//     multi = 3 * i;
//     console.log(`3 * ${i} = `+ multi);
// }

// /*
// 8. Calcula el factorial de un número (por ejemplo 5) usando for.
// */
// // RESPUESTA AQUÍ 👇

// multi=1;
// let num= parseInt(prompt(`Ingrese un Número: `));
// for(i=1; i<= num; i++){

//     multi *= i;
// }
// console.log(`======Ejercicio 8======`)
// console.log(`La Factorial de ${num} es: `+ multi);

// /*
// 9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
// */
// // RESPUESTA AQUÍ 👇

// num=0;
// console.log(`======Ejercicio 9======`);
// for(i=1; i<=10; i++){
//     num= i **2;
//     console.log(num);
// }

// /*
// 10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 10======`);
// for(i=1; i<=50; i++){
//     if (i % 10 === 0) {
//     console.log(i + ` Es Múltiplo de 10`)
// } else {
//     console.log(i)
// }
// }



// /*
// 11. Calcula la suma de los números pares entre 1 y 50.
// */
// // RESPUESTA AQUÍ 👇

// suma=0;
// for(i=2; i<=50; i+=2){
//     suma += i;
// }
// console.log(`======Ejercicio 11======`);
// console.log(`La suma de los Números pares entre 1 y 50 es: ` + suma);

// /*
// 12. Calcula la suma de los números impares entre 1 y 50.
// */
// // RESPUESTA AQUÍ 👇

// suma=0;
// for(i=1; i<=50; i+=2){
//     suma += i;
// }
// console.log(`======Ejercicio 12======`);
// console.log(`La suma de los Números impares entre 1 y 50 es: ` + suma);
// /*
// 13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 13======`);
// for(i=1; i<=20; i++){
//     if (i % 2=== 0) {
//         console.log(i + ` Es par`);
//     } else {
//         console.log(i + ` Es impar`);
//     }
// }


// /*
// 14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 14======`);
// for(i=1; i<=30; i++){
//     if (i % 3=== 0) {
//         console.log(i + ` Es Múltiplo de 3`);
//     } else {
//         console.log(i);
//     }
// }

// /*
// 15. Muestra un conteo regresivo desde 20 hasta 0.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 15======
//     Cuenta Regresiva:`);
// for(i=20; i>=0; i--){
//     console.log(i);
// }

// // =======================================================
// // BUCLE WHILE (EJERCICIOS 16 - 25)
// // =======================================================

// /*
// 16. Muestra los números del 1 al 10 usando un bucle while.
// */
// // RESPUESTA AQUÍ 👇

//  i = 1;
//  console.log(`======Ejercicio 16======`);
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// /*
// 17. Muestra los números pares del 2 al 20 usando while.
// */
// // RESPUESTA AQUÍ 👇 

//  console.log(`======Ejercicio 17======`);

// i=1;
// multi=0;
// while (i <=10){
//     multi= i * 2;
//     console.log(multi);
//     i++;
// }

// /*
// 18. Muestra los números del 10 al 1 usando while.
// */
// // RESPUESTA AQUÍ 👇

// i=10;
//  console.log(`======Ejercicio 18======`);
// while(i >0){
//     console.log(i);
//     i--;
// }

// /*
// 19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
// */
// // RESPUESTA AQUÍ 👇

// i=1;
// console.log(`======Ejercicio 19======`);
// while(i<=30){
//     if (i%5===0){
//         console.log(i);
//     }
//     i++
// }

// /*
// 20. Calcula la suma de los números del 1 al 20 usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 20======`);
// i=1;
// suma=0;
// while (i<=20) {
//     suma+=i;
//     i++
// }console.log(suma);

// /*
// 21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 21 ======`);
// j = 1;
// while(j<=15){
//     if (j % 2 === 0) {
//         console.log(`${j} Es Par`);
//     } else {
//         console.log(`${j} Es Impar`);
//     }

//     j++;
// }


// /*
// 22. Muestra la tabla de multiplicar del número 7 usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 22 =======");

// let numero = 7;
// i = 1;

// while (i <= 10) {
//   console.log(numero + " x " + i + " = " + (numero * i));
//   i++;
// }


// /*
// 23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 23 =======");

// i = 1;
// while (i <= 40) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
//   i++;
// }


// /*
// 24. Calcula el factorial de un número (por ejemplo 6) usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 24 =======");

// numero = 6;
// let factorial = 1;
// i = 1;

// while (i <= numero) {
//   factorial *= i;  // equivalente a factorial = factorial * i
//   i++;
// }

// console.log("El factorial de " + numero + " es: " + factorial);

// /*
// 25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 25 =======");

// i = 15;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// console.log("¡Despegue! ");


// // =======================================================
// // BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// // =======================================================

// /*
// 26. Muestra los números del 1 al 10 usando do...while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 26 ======`);

// i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// /*
// 27. Pide un número y muestra su tabla de multiplicar usando do...while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======= Ejercicio 27 ======`)
// j = parseInt(prompt(`Ingrese un número`));
// i=1;
// do{
//     multi= j * i;
//     console.log(`${j} * ${i} = ${multi}`)
//     i++;
// }while(i<=12)

//  /*
// 28. Muestra los números del 10 al 1 usando do...while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 28======`);
// i=1
// let serie="";
// do{
//     if (i===10) {
//         serie += i;
//     } else {
//         serie += i + ", ";
//     }
//     i++;
// }while (i<=10);
// console.log(serie);

// /*
// 29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 29======`);
// i=1;
// do{
//    if(i%6===0){
//     console.log(`El Número ${i} es Multiplo de 6`)
//    } else{
//     console.log(i)
//    }
//    i++
// }while(i<=30);

// /*
// 30. Calcula la suma de los números del 1 al 50 usando do...while.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======Ejercicio 30======`);
// i=1;
// suma=0;
// do{
// suma+=i;
// i++;
// }while(i<=50)
//     console.log(suma)

// // // =======================================================
// // // COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// // // =======================================================

// /*
// 31. Pide un número y muestra todos los números desde 1 hasta ese número.
//    Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
// */
// // RESPUESTA AQUÍ 👇

// j=parseInt(prompt(`Ingrese un Número:`));
// console.log(`======= Ejercicio 31 ======`)
// for(i=1; i<=j; i++){
//     if(i % 3 === 0){
//         console.log(i, ` Fizz`)
//     }else if(i% 5===0){
//         console.log(`${i} Buzz`)
//     }else{
//         console.log(i)
//     }
// }

// /*
// 32. Pide al usuario un número y calcula su factorial usando un bucle.
// */
// // RESPUESTA AQUÍ 👇

// j=parseInt(prompt(`Ingrese el Número al que hallar su factorial`))
// facto=1;
// console.log(`======= Ejercicio 32 ======`)
// if(j===0){
//     console.log(`El Factorial de ${j} es: ${facto}`)
// }else{
// while (isNaN(j) || j < 0) {
//     j = parseInt(prompt(`Ingrese un Número positivo: `));
// }
// do {
//     facto*=j;
//     j--;
// } while (j>0);

// console.log(facto)
// }

// /*
// 33. Pide nombre de usuario y contraseña.
//    Si usuario es "Kevin" o "Belen" y contraseña es "1234",
//    muestra "Acceso autorizado", de lo contrario "Denegado".
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======= Ejercicio 33 ======`)
// let userName, password;
// let intentos = false;
    
// do {
//     userName = prompt("Ingrese su nombre de usuario:").toLowerCase();
//     password = prompt("Ingrese su contraseña:").toLowerCase();
        
//     if ((userName === "kevin" || userName==="belen")&& password == "1234") {
//         alert("¡Acceso Autorizado! Bienvenido " + userName);
//         intentos = true // Salir de la función si las credenciales son correctas
//     } else {
//         alert("Credenciales incorrectas");
//         }
        
// } while (intentos===false);

// /*
// 34. Pide un número y muestra todos los pares hasta ese número.
//    Luego muestra la cantidad total de pares encontrados.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======= Ejercicio 34 ======`)
// num=parseInt(prompt(`Ingrese un Número:`));
// serie="";
// i=2;
// cont=0;
// do{
// if (i===num) {
//         serie += i;
//     } else {
//         serie += i + ", ";
//     }
//     i+=2;
//     cont++;
// }while(i<=num)
// console.log(`Los ${cont} Primeros Numeros Pares Son: ${serie}`)
// /*
// 35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
// */
// // RESPUESTA AQUÍ 👇

// console.log(`======= Ejercicio 35 ======`)
// i = 1;
// suma = 0;

// while (i <= 100) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     suma += i;
//   }
//   i++;
// }
// console.log(suma)
// /*
// 36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 36 =======");

// num = parseInt(prompt("Ingrese un número:"));
// let primo = true;
// i = 2;

// if (num <= 1) {
//   primo = false;
// } else {
//   do {
//     if (num % i === 0) {
//       primo = false;
//       break;
//     }
//     i++;
//   } while (i <= Math.sqrt(num));
// }

// if (primo) {
//   console.log(num + " es un número primo ");
// } else {
//   console.log(num + " no es un número primo ");
// }


// /*
// 37. Simula un inicio de sesión:
//    Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
//    Si falla los 3 intentos, muestra "Acceso bloqueado".
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 37 =======");

// let usuario, contrasena;
// let contador = 0;
// let permitido = false;

// do {
//   usuario = prompt("Ingrese su usuario:");
//   contrasena = prompt("Ingrese su contraseña:");
//   contador++;

//   if (usuario === "admin" && contrasena === "1234") {
//     alert("¡Acceso concedido! Bienvenido " + usuario);
//     permitido = true;
//     break;
//   } else {
//     alert("Credenciales incorrectas. Intento " + contador + " de 3.");
//   }
// } while (contador < 3 && !permitido);

// if (!permitido) {
//   alert("Acceso bloqueado ");
// }


// /*
// 38. Pide 5 números y calcula su suma total y promedio.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 38 =======");

// suma = 0;
// numero;

// for (let i = 1; i <= 5; i++) {
//   numero = parseFloat(prompt("Ingrese el número " + i + ":"));
//   suma += numero;
// }

// let promedio = suma / 5;

// alert("La suma total es: " + suma + "\nEl promedio es: " + promedio);


// /*
// 39. Muestra los números del 1 al 50.
//    Si el número es divisible por 3 muestra "Fizz",
//    si es divisible por 5 muestra "Buzz",
//    si es divisible por ambos muestra "FizzBuzz".
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 39 =======");

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// /*
// 40. Juego de adivinar número:
//    Genera un número aleatorio entre 1 y 10.
//    Usa un bucle para pedir al usuario que adivine.
//    Da pistas si el número es mayor o menor.
//    El juego termina cuando adivina.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio 40 =======");

// let numeroSecreto = Math.floor(Math.random() * 10) + 1; // genera número entre 1 y 10
// let intento;
// let adivinado = false;

// while (!adivinado) {
//   intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

//   if (intento === numeroSecreto) {
//     alert("¡Correcto! El número era " + numeroSecreto);
//     adivinado = true;
//   } else if (intento < numeroSecreto) {
//     alert("El número secreto es MAYOR");
//   } else if (intento > numeroSecreto) {
//     alert("El número secreto es MENOR");
//   }
// }
// /* -----------------------EJERCICIOS PRUEBAS TECNICAS--------------------- */
// /*
// 1. Serie de Fibonacci
//    Pide al usuario un número n y muestra en consola los primeros n números de la serie de Fibonacci.
//    Ejemplo si n = 8 → 0 1 1 2 3 5 8 13

//    Instrucciones:
//    - Usa un bucle (for o while) para generar la serie.
//    - Usa variables para almacenar los dos números anteriores.
//    - Muestra cada número con console.log().
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio tecnico 1 =======");
// let n = parseInt(prompt("Ingresa un número para generar la serie de Fibonacci:"));
// serie = "";

// if (n <= 0) {
//     console.log("Por favor ingresa un número positivo mayor que 0.");
// } else {
//     console.log(`Serie de Fibonacci (${n} números):`);
    
//     let a = 0;
//     let b = 1;  
//     cont = 1;
    
//     // Usar bucle while
//     while (cont <= n) {
        
//         let siguiente = a + b;
        
//         a = b;
//         b = siguiente;
//         cont++;
//         serie += a + ", ";
//     }
// }console.log(serie);


// /*
// 2. Números Primos
//    Pide al usuario un número n y muestra todos los números primos desde 1 hasta n.
//    Ejemplo si n = 10 → 2, 3, 5, 7

//    Instrucciones:
//    - Usa bucles anidados para verificar si un número es primo.
//    - Un número primo es divisible solo por 1 y por sí mismo.
//    - Usa if para verificar divisibilidad.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio tecnico 2 =======");

// n = parseInt(prompt("Ingrese un número:"));
// let primos = []; // arreglo para guardar los números primos

// for (let i = 2; i <= n; i++) {
//   let esPrimo = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       esPrimo = false;
//       break;
//     }
//   }

//   if (esPrimo) {
//     primos.push(i); // agregar el número primo al arreglo
//   }
// }

// console.log("Números primos del 1 al " + n + ": " + primos.join(", "));



// /*
// 3. Suma de Dígitos
//    Pide al usuario que ingrese un número y calcula la suma de todos sus dígitos.
//    Ejemplo: si el número es 472, la suma es 4 + 7 + 2 = 13.

//    Instrucciones:
//    - Usa parseInt() para convertir el número.
//    - Usa un bucle (while o do...while) para separar y sumar los dígitos.
//    - Muestra el resultado con console.log().
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio tecnico 3 =======");

// numero = parseInt(prompt("Ingrese un número:"));
// let numero1 = numero;
// suma = 0;

// while (numero > 0) {
//   let digito = numero % 10;
//   suma += digito;    
//   numero = Math.floor(numero / 10);
// }

// console.log(`La suma de los dígitos del Número ${numero1}: ${suma}`);


// /*
// 4. Invertir un Número
//    Pide al usuario un número y muestra su versión invertida.
//    Ejemplo: si el número es 1234, la salida debe ser 4321.

//    Instrucciones:
//    - Usa un bucle (while o for) para extraer los dígitos.
//    - Usa operaciones matemáticas (% y /) para obtener cada dígito.
//    - Construye el número invertido y muéstralo en consola.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio tecnico 4 =======");

// num = parseInt(prompt("Ingrese un número:"));
// let invertido2 = 0;

// do {
//   let digito = num % 10;
//   invertido2 = invertido2 * 10 + digito;
//   num = Math.floor(num / 10);
// } while (num > 0);

// console.log("Número invertido: " + invertido2);

// /*
// 5. Número Perfecto
//    Un número perfecto es aquel que es igual a la suma de sus divisores positivos (excluyéndose a sí mismo).
//    Ejemplo: 6 es perfecto porque sus divisores son 1, 2 y 3 → 1 + 2 + 3 = 6

//    Pide al usuario un número y determina si es perfecto o no.

//    Instrucciones:
//    - Usa un bucle for para sumar los divisores del número.
//    - Usa if para comparar la suma con el número original.
//    - Muestra un mensaje indicando si es perfecto o no.
// */
// // RESPUESTA AQUÍ 👇

// console.log("======= Ejercicio tecnico 5 =======");

// numero = parseInt(prompt("Ingrese un número:"));
// let sumaDivisores = 0;

// for (let i = 1; i < numero; i++) {
//   if (numero % i === 0) {   // si i es divisor del número
//     sumaDivisores += i;     // lo suma
//   }
// }

// if (sumaDivisores === numero) {
//   console.log(numero + " es un número perfecto.");
// } else {
//   console.log(numero + " no es un número perfecto.");
// }
