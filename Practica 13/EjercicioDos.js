function ejecutarOpcion(opcion) {
    switch (opcion) {
        case 1:
            console.log("Realizando un Retiro de Efectivo...");
            break;
        case 2:
            console.log("Consultando Saldo en Cuenta...");
            break;
        case 3:
            console.log("Accediendo a Transferencias...");
            break;
        case 'salir':
            console.log("Saliendo del sistema. ¡Gracias!");
            break;
        default:
            console.log("Opción no reconocida. Por favor, intente de nuevo.");
    }
}

// Pruebas del Ejercicio 2
console.log("\n=== Pruebas Ejercicio 2 ===");
ejecutarOpcion(1);           
ejecutarOpcion(2);           
ejecutarOpcion(3);           
ejecutarOpcion('salir');     
ejecutarOpcion(4);          
ejecutarOpcion('ayuda');     