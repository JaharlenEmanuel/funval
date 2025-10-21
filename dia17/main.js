let lampara = {
    // Propiedades
    marca: "Philips",
    color: "blanca",
    potencia: 60,
    encendida: false,
    intensidad: 0,
    temperatura: 2700,
    consumoTotal: 0,
    tiempoEncendida: 10,
}
lampara.marca = "Sony";
delete lampara.consumoTotal;
lampara.colorLuz = "Amarillo";
console.log(lampara)

let estudianteObj = {
    nombre: "Kevin",
    edad: 28,
    matricula: 1701212,
    pais: "Bolivia",
    altura: 1.6,
    varon: true,
    empresa: {
        nombre: "Funval",
        añoFunvadion: 2005,
    },
    notas: [70, 45, 78, 0, 32, 25, 34],
};
/* 
    quiero q puedan extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/
let suma = 0;
let promedio = 0;
for (let index = 0; index < estudianteObj.notas.length; index++) {
    suma += estudianteObj.notas[index];
    promedio = suma / estudianteObj.notas.length
}
if (promedio <= 50) {
    console.log(`El estudiante ${estudianteObj.nombre} tiene un Promedio de: ${promedio.toFixed(2)}, APROBADO`)
} else {
    console.log(`El estudiante ${estudianteObj.nombre} tiene un Promedio de: ${promedio.toFixed(2)}, DESAPROBADO`)
}
