

// ==================
// Ejercicio 1
// ==================
function formatearPrecio(valor, moneda) {
    try {
        let formato = new Intl.NumberFormat('es-ES', { 
            style: 'currency', 
            currency: moneda 
        });
        return formato.format(valor);
    } catch (error) {
        return "Error: Código de moneda no válido.";
    }
}

// ==================
// Ejercicio 2
// ==================
function analizarNumeros(parrafo) {
    let numeros = parrafo.match(/\d+/g);

    if (!numeros) {
        console.log("No se encontraron números en el texto.");
        return;
    }

    numeros = numeros.map(n => parseInt(n));

    let suma = numeros.reduce((acc, n) => acc + n, 0);
    let promedio = suma / numeros.length;

    let mayores = numeros.filter(n => n > promedio).length;

    console.log("Números encontrados:", numeros);
    console.log("Promedio:", promedio);
    console.log("Cantidad mayores al promedio:", mayores);
}

// ==================
// Ejercicio 3
// ==================
function validarFecha(fechaStr) {
    let regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    let match = fechaStr.match(regex);

    if (!match) {
        console.log("Error: Formato de fecha inválido (use YYYY-MM-DD).");
        return;
    }

    let año = parseInt(match[1]);
    let mes = parseInt(match[2]);
    let dia = parseInt(match[3]);

    if (mes < 1 || mes > 12) {
        console.log("Error: Mes inválido.");
        return;
    }

    let diasMes = [
        31, 
        (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) ? 29 : 28, 
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    
    if (dia < 1 || dia > diasMes[mes - 1]) {
        console.log("Error: Día inválido para el mes.");
        return;
    }

    let timestamp = Date.parse(fechaStr);
    console.log(`Fecha válida. Timestamp: ${timestamp}`);
}

// ==================
// Ejecuciones de ejemplo
// ==================
console.log("=== Ejercicio 1 ===");
console.log(formatearPrecio(12345.678, "USD"));
console.log(formatearPrecio(12345.678, "EUR"));
console.log(formatearPrecio(12345.678, "JPY"));
console.log(formatearPrecio(12345.678, "ABC")); // Moneda inválida

console.log("\n=== Ejercicio 2 ===");
let texto = "En la clase habían 25 estudiantes, 3 profesores y 2024 libros con 15 temas.";
analizarNumeros(texto);

console.log("\n=== Ejercicio 3 ===");
validarFecha("2025-02-29"); // Fecha inválida
validarFecha("2024-02-29"); // Fecha válida (bisiesto)
validarFecha("2025-10-01"); // Fecha válida
