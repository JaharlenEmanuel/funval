// let btn = document.querySelector("#btn1");
// let img = document.querySelector("#img1")
// btn.addEventListener("click", () => {
//     if (btn.classList.contains("bg-green-800")) {
//         btn.textContent = "Noche"
//         img.src = "https://preview.redd.it/ladies-and-gentlemen-her-excellency-princess-fiona-v0-1ethk84s7k691.jpg?width=640&crop=smart&auto=webp&s=c006a16099615dceefcf8786a6330dc16be88b17"
//         btn.classList.replace("bg-green-800", "bg-red-800");
//     } else {
//         btn.classList.replace("bg-red-800", "bg-green-800");
//         btn.textContent = "Dia";
//         img.src = "https://www.nbcstore.com/cdn/shop/files/SHK-FS_195_5572_MF1.jpg?v=1737104152"
//     }

// })


let tasasCambio = {
    'Peru': {
        'Chile': 380,    // 1 PEN = 380 CLP
        'Argentina': 420, // 1 PEN = 420 ARS
        'Peru': 1
    },
    'Chile': {
        'Peru': 0.0026,  // 1 CLP = 0.0026 PEN
        'Argentina': 1.1, // 1 CLP = 1.1 ARS
        'Chile': 1
    },
    'Argentina': {
        'Peru': 0.0024,  // 1 ARS = 0.0024 PEN
        'Chile': 0.91,   // 1 ARS = 0.91 CLP
        'Argentina': 1
    }
};

// Símbolos de moneda
let simbolosMoneda = {
    'Peru': 'S/',
    'Chile': '$',
    'Argentina': '$'
};

// Nombres de moneda
let nombresMoneda = {
    'Peru': 'Soles Peruanos',
    'Chile': 'Pesos Chilenos',
    'Argentina': 'Pesos Argentinos'
};

document.getElementById('formularioCambio').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    let nombre = document.getElementById('nombre').value;
    let paisOrigen = document.getElementById('paisOrigen').value;
    let paisDestino = document.getElementById('paisDestino').value;
    let cantidad = parseFloat(document.getElementById('cantidad').value);

    // Validaciones
    if (paisOrigen === paisDestino) {
        alert('Por favor selecciona países diferentes para la conversión');
        return;
    }

    if (cantidad <= 0) {
        alert('Por favor ingresa una cantidad válida');
        return;
    }

    // Calcular conversión
    const tasa = tasasCambio[paisOrigen][paisDestino];
    const cantidadConvertida = cantidad * tasa;

    // Mostrar resultado
    document.querySelector('#resultadoNombre').textContent = nombre;
    document.querySelector('#resultadoOrigen').textContent =
        `${paisOrigen} (${simbolosMoneda[paisOrigen]} ${cantidad.toFixed(2)} ${nombresMoneda[paisOrigen]})`;
    document.querySelector('#resultadoDestino').textContent = paisDestino;
    document.querySelector('#resultadoCantidad').textContent =
        `${simbolosMoneda[paisOrigen]} ${cantidad.toFixed(2)} ${nombresMoneda[paisOrigen]}`;
    document.querySelector('#resultadoConvertido').textContent =
        `${simbolosMoneda[paisDestino]} ${cantidadConvertida.toFixed(2)} ${nombresMoneda[paisDestino]}`;

    // Mostrar sección de resultado
    document.getElementById('resultado').classList.remove('hidden');
});

// Validación en tiempo real para países diferentes
document.querySelector('#paisDestino').addEventListener('change', function () {
    const origen = document.getElementById('paisOrigen').value;
    const destino = this.value;

    if (origen && destino && origen === destino) {
        this.classList.add('border-red-500');
    } else {
        this.classList.remove('border-red-500');
    }
});

document.getElementById('paisOrigen').addEventListener('change', function () {
    const origen = this.value;
    const destino = document.getElementById('paisDestino').value;

    if (origen && destino && origen === destino) {
        document.getElementById('paisDestino').classList.add('border-red-500');
    } else {
        document.getElementById('paisDestino').classList.remove('border-red-500');
    }
});
console.log(cantidadConvertida)