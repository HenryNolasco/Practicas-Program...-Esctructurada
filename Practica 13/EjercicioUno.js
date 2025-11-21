function clasificarCalificacion(calificacion) {
    switch (calificacion) {
        case 'A':
        case 'a':
            console.log("Excelente rendimiento");
            break;
        case 'B':
        case 'b':
            console.log("Buen rendimiento");
            break;
        case 'C':
        case 'c':
            console.log("Rendimiento satisfactorio");
            break;
        case 'D':
        case 'd':
            console.log("Necesita mejorar");
            break;
        case 'F':
        case 'f':
            console.log("Reprobado");
            break;
        default:
            console.log("Calificación no válida.");
    }
}

// Pruebas del Ejercicio 1
console.log("=== Pruebas Ejercicio 1 ===");
clasificarCalificacion('A');  
clasificarCalificacion('b');  
clasificarCalificacion('C'); 
clasificarCalificacion('d');  
clasificarCalificacion('F');  
clasificarCalificacion('X');  