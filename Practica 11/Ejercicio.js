// 1. Crear array de objetos llamado inventario
let inventario = [
    { nombre: "Laptop", precio: 1200, cantidad: 5 },
    { nombre: "Mouse", precio: 25, cantidad: 15 },
    { nombre: "Teclado", precio: 75, cantidad: 8 },
    { nombre: "Monitor", precio: 300, cantidad: 0 },
    { nombre: "Auriculares", precio: 50, cantidad: 12 }
];

// 2. Mostrar productos disponibles (cantidad > 0)
console.log("Productos disponibles:");
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].cantidad > 0) {
        console.log(`${inventario[i].nombre} - $${inventario[i].precio} (Stock: ${inventario[i].cantidad})`);
    }
}

// 3. Calcular valor total del inventario
let valorTotal = 0;
for (let i = 0; i < inventario.length; i++) {
    valorTotal += inventario[i].precio * inventario[i].cantidad;
}
console.log(`\nValor total del inventario: $${valorTotal}`);

// 4. Buscar producto por nombre
function buscarProducto(nombre) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return inventario[i];
        }
    }
    return null;
}

// Ejemplo de búsqueda
let productoBuscado = buscarProducto("Laptop");
console.log("\nBúsqueda de producto:");
if (productoBuscado) {
    console.log(`Producto encontrado: ${productoBuscado.nombre}`);
    console.log(`Precio: $${productoBuscado.precio}`);
    console.log(`Cantidad: ${productoBuscado.cantidad}`);
} else {
    console.log("Producto no encontrado");
}