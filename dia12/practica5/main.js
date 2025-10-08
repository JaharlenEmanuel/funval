// Ejercicio 1 – Calculadora de Promedio y Rendimiento

// Pide al usuario cuatro notas (del 0 al 100).
// Calcula el promedio y muestra un mensaje según el resultado:

//     “Excelente” si el promedio es mayor o igual a 90

//     “Bueno” si es mayor o igual a 75

//     “Regular” si es mayor o igual a 60

//     “Insuficiente” en caso contrario

// Instrucciones:
// Usa if-else-if y operadores lógicos para determinar el mensaje.
// Muestra el resultado con console.log() o alert().

let nota1 = parseFloat(prompt("Ingresa la primera nota (0-100):"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota (0-100):"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota (0-100):"));
let nota4 = parseFloat(prompt("Ingresa la cuarta nota (0-100):"));
    
let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
let mensaje = "";
    
if (promedio >= 90) {
    mensaje = "Excelente";
} else if (promedio >= 75) {
    mensaje = "Bueno";
} else if (promedio >= 60) {
    mensaje = "Regular";
} else {
    mensaje = "Insuficiente";
}
    
alert(`=== RESULTADO ACADÉMICO ===
    
Notas ingresadas: ${nota1}, ${nota2}, ${nota3}, ${nota4}
Promedio: ${promedio.toFixed(2)}
Rendimiento: ${mensaje}`);


// Ejercicio 2 – Calculadora de Tarifa de Transporte

// El programa debe pedir al usuario:

//     Su edad

//     Si es estudiante (“sí” o “no”)

//     La distancia que recorrerá (en kilómetros)

// Reglas del costo:

//     Menores de 18 pagan 50% del precio base

//     Estudiantes pagan 75% del precio base

//     Mayores de 60 pagan 40% del precio base

//     Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

// Instrucciones:
// Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.

let edad = parseInt(prompt("Ingresa tu edad:"));
let estudiante = prompt("¿Eres estudiante? (sí/no):").toLowerCase();
let distancia = parseFloat(prompt("Ingresa la distancia (km):"));
    
const PRECIO_BASE = 10;
let precioBase = distancia * PRECIO_BASE;
let descuento = 0;
let tipoDescuento = "";
    
// Aplicar descuentos principales
if (edad < 18) {
    descuento = 0.5;
    tipoDescuento = "Menor de edad (50%)";
} else if (edad > 60) {
    descuento = 0.6;
    tipoDescuento = "Adulto mayor (60%)";
} else if (estudiante === "sí" || estudiante === "si") {
    descuento = 0.75;
    tipoDescuento = "Estudiante (75%)";
} else {
    descuento = 1;
    tipoDescuento = "Sin descuento";
}
    
let precioConDescuento = precioBase * descuento;
    
let recargo = 0;
if (distancia > 30) {
    recargo = precioConDescuento * 0.1;
}
    
let precioFinal = precioConDescuento + recargo;
    
alert(`=== TARIFA DE TRANSPORTE ===
    
Edad: ${edad} años
Estudiante: ${estudiante}
Distancia: ${distancia} km

Precio base: $${precioBase.toFixed(2)}
${tipoDescuento}: $${precioConDescuento.toFixed(2)}
${distancia > 30 ? `Recargo (10% por >30km): $${recargo.toFixed(2)}` : ''}

TOTAL: $${precioFinal.toFixed(2)}`);


// Ejercicio 3 – Menú de Conversión de Unidades

// Muestra un menú con 4 opciones:

//     Convertir de Celsius a Fahrenheit

//     Convertir de Fahrenheit a Celsius

//     Convertir de Metros a Kilómetros

//     Convertir de Kilómetros a Metros

// El usuario debe elegir una opción y escribir el valor a convertir.
// El programa mostrará el resultado correspondiente.

// Instrucciones:
// Usa switch-case para realizar las conversiones y prompt() para las entradas.

let opcion = prompt(`=== MENÚ DE CONVERSIONES ===

1. Celsius a Fahrenheit
2. Fahrenheit a Celsius  
3. Metros a Kilómetros
4. Kilómetros a Metros

Elige una opción (1-4):`);

let valor = parseFloat(prompt("Ingresa el valor a convertir:"));
let tipo=""
resultado = 0;
let conversion = "";
switch(opcion) {
    case "1":
        tipo = "Celsius a Fahrenheit"
        resultado = (valor * 9/5) + 32;
        conversion = `${valor}°C = ${resultado.toFixed(2)}°F`;
        break;
    case "2":
        tipo = "Farenheit a Celsius"
        resultado = (valor - 32) * 5/9;
        conversion = `${valor}°F = ${resultado.toFixed(2)}°C`;
        break;
    case "3":
        tipo = "Metros a Kilómetros"
        resultado = valor / 1000;
        conversion = `${valor}m = ${resultado.toFixed(2)}km`;
        break;
    case "4":
        tipo = "Kilómetros a Metros"
        resultado = valor * 1000;
        conversion = `${valor}km = ${resultado.toFixed(2)}m`;
        break;
    default:
        conversion = "Opción no válida";
}

alert(`==Resumen de Conversion==
Tipo de Conversión: ${tipo}
Valor Ingresado: ${valor}
Resultado: ${conversion}
 `)


// Ejercicio 4 – Sistema de Descuentos en una Tienda

// El usuario debe ingresar:

//     El precio total de su compra

//     Si tiene tarjeta de cliente frecuente (“sí” o “no”)

// Reglas:

//     Si el total es mayor a 500, aplica un 10% de descuento

//     Si además tiene tarjeta, aplica un 5% adicional

//     Si el total es menor o igual a 100, aplica un recargo del 5%

// El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

// Instrucciones:
// Utiliza operadores de asignación y condiciones anidadas para determinar el total.

let precio = parseFloat(prompt("Ingresa el precio total de tu compra:"));
let tarjeta = prompt("¿Tienes tarjeta de cliente frecuente? (sí/no):").toLowerCase();    
let descuentoAplicado = 0;
let recargoAplicado = 0;
mensaje = "";
precioFinal = precio;
    
if (precio > 500) {
    descuentoAplicado = precio * 0.10;
    precioFinal -= descuentoAplicado;
    mensaje = "Descuento del 10% por compra mayor a $500";
        
    if (tarjeta === "sí" || tarjeta === "si") {
        let descuentoAdicional = precioFinal * 0.05;
        descuentoAplicado += descuentoAdicional;
        precioFinal -= descuentoAdicional;
        mensaje += " + 5% adicional por tarjeta de cliente frecuente";
    }
} else if (precio <= 100) {
    recargoAplicado = precio * 0.05;
    precioFinal += recargoAplicado;
    mensaje = "Recargo del 5% por compra menor o igual a $100";
} else {
    mensaje = "Sin descuentos ni recargos aplicables";
}
    
alert(`=== FACTURA DE COMPRA ===
    
Precio original: $${precio.toFixed(2)}
${mensaje}
${descuentoAplicado > 0 ? `Descuento total: $${descuentoAplicado.toFixed(2)}` : ''}
${recargoAplicado > 0 ? `Recargo: $${recargoAplicado.toFixed(2)}` : ''}

PRECIO FINAL: $${precioFinal.toFixed(2)}`);

    


// Ejercicio 5 – Calculadora de Edad y Etapa de Vida

// Pide al usuario:

//     Su año de nacimiento

//     El año actual

// Calcula su edad y muestra un mensaje según el rango:

//     Menor de edad: menos de 18 años

//     Adulto joven: entre 18 y 30 años

//     Adulto: entre 31 y 59 años

//     Adulto mayor: 60 años o más

// BONUS:
// Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

// Instrucciones:
// Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.

let añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
let añoActual = parseInt(prompt("Ingresa el año actual:"));
let cumpleaños = prompt("¿Ya cumpliste años este año? (sí/no):").toLowerCase();
    
edad = añoActual - añoNacimiento;
    
    
if (cumpleaños === "no") {
    edad-=1;
}
    
if (edad < 18) {
    mensaje = "Menor de edad";
} else if (edad >= 18 && edad <= 30) {
    mensaje = "Adulto joven";
} else if (edad >= 31 && edad <= 59) {
    mensaje = "Adulto";
} else {
    mensaje = "Adulto mayor";
}
    
alert(`=== CALCULADORA DE EDAD ===
    
Año de nacimiento: ${añoNacimiento}
Año actual: ${añoActual}
¿Cumpliste años?: ${cumpleaños}

Tu edad: ${edad} años
Eres ${mensaje}`);