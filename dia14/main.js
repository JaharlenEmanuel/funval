// Ejercicio 1 – Área de triángulos múltiples

// Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

//     Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

//     Usa un bucle for para solicitar los datos 3 veces.

//     Usa condicional para verificar que base y altura sean mayores que 0.

//     Muestra cada área en consola.

function calcularAreaTriangulo() {
    for (let i = 1; i <= 3; i++) {
        let base = parseFloat(prompt("Ingrese la base del triángulo " + i + ":"));
        let altura = parseFloat(prompt("Ingrese la altura del triángulo " + i + ":"));

        if (base > 0 && altura > 0) {
            let area = (base * altura) / 2;
            console.log("El área del triángulo " + i + " es: " + area);
        } else {
            console.log("Error: la base y la altura deben ser mayores que 0 (triángulo " + i + ").");
        }
    }
}

// Llamada a la función
calcularAreaTriangulo();


// Ejercicio 2 – Conversión de Celsius a Fahrenheit

// Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:

//     Pide al usuario 5 temperaturas mediante prompt.

//     Usa un bucle para hacer las 5 conversiones.

//     Usa un condicional para verificar que el valor ingresado sea un número.

//     Muestra cada resultado en consola.


function convertirAFahrenheit() {
    for (let i = 1; i <= 5; i++) {
        let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius " + i + ":"));

        if (!isNaN(celsius)) {
            let fahrenheit = (celsius * 9/5) + 32;
            console.log(celsius + "°C equivale a " + fahrenheit + "°F");
        } else {
            console.log("Error: el valor ingresado no es un número válido (temperatura " + i + ").");
        }
    }
}
convertirAFahrenheit();



// Ejercicio 3 – Contar vocales en un texto

// Crea una función contarVocales que reciba un texto y devuelva el número de vocales:

//     Pide al usuario 3 textos mediante prompt.

//     Usa un bucle para recorrer cada letra del texto.

//     Usa condicionales para determinar si un carácter es vocal.

//     Muestra en consola cuántas vocales tiene cada texto.

function contarVocales() {
    for (let i = 1; i <= 3; i++) {
        let texto = prompt("Ingrese el texto " + i + ":");
        let contador = 0;

        for (let j = 0; j < texto.length; j++) {
            let letra = texto[j].toLowerCase();
            if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
                contador++;
            }
        }

        console.log("El texto " + i + " tiene " + contador + " vocal(es).");
    }
}

contarVocales();


// Ejercicio 4 – Pares e impares en un rango

// Crea una función clasificarParesImpares que reciba dos números inicio y fin y:

//     Use un bucle for para recorrer todos los números desde inicio hasta fin.

//     Use condicional para imprimir si cada número es par o impar.

//     Pide al usuario inicio y fin mediante prompt.

//     Muestra el resultado en consola.

// Ejercicio 4 – Pares e impares en un rango

function clasificarParesImpares() {
    let inicio = parseInt(prompt("Ingrese el número de inicio:"));
    let fin = parseInt(prompt("Ingrese el número final:"));

    if (!isNaN(inicio) && !isNaN(fin) && inicio <= fin) {
        for (let i = inicio; i <= fin; i++) {
            if (i % 2 === 0) {
                console.log(`${i} es par`);
            } else {
                console.log(`${i} es impar`);
            }
        }
    } else {
        console.log("Por favor ingrese números válidos y asegúrese de que el inicio sea menor o igual al fin.");
    }
}

// Llamada a la función
clasificarParesImpares();


// Ejercicio 5 – Número mayor y suma

// Crea una función mayorYSuma que reciba 5 números separados y:

//     Use un bucle para comparar cada número y encontrar el mayor.

//     Use condicionales para verificar cuál es el mayor.

//     Calcula también la suma de los 5 números.

//     Pide al usuario los 5 números mediante prompt.

//     Muestra en consola el número mayor y la suma total.

function mayorYSuma() {
    let mayor = -Infinity, suma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingrese el número " + i + ":"));
        if (!isNaN(num)) {
            suma += num;
            if (num > mayor) mayor = num;
        } else {
            console.log("Valor no válido en la posición " + i);
            return;
        }
    }
    console.log("El número mayor es: " + mayor);
    console.log("La suma total es: " + suma);
}

mayorYSuma();
