

/*
// Objetos

const persona = {
    nombre: "Henry",
    edad: 23,
    profesion: "Estudiante",
    saludar: function(){
        console.log("Hola, soy" + this.nombre)
    }

}

persona.saludar();

//Objetos anidados

const universidad = {
    nombre: "UNIVO",
    ubicacion: {
        ciudad: "San Miguel",
        pais: "El Salvador"
    },
    facultades: {
        ingenieriaYarquitectura: {
            carreras: ["Ingenieria en desarrollo de software", "Ingenieria en sistemas", "Arquitectura"]
        }
    }
        
}
/*

/*EJERCICIOS DE CLASE */

const estudiante = {
    nombre: "Henry",
    edad: 23,
    contacto: {
        email: "correofalso@correo.com",
        telefono: "1234-5678"
    },
    materias: ["Programacion I", "Matematicas II", "Realidad nacional", "Fisica", "Estadistica"],
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre "y llevo la materia de" + this.materias[0]);
    }

}
estudiante.saludar()

// Ejercicio 2
const tienda = {
    nombre: "Tienda del campo",
    productos:{
        campo: {
            nombre: "carton de huevos",
            stock: 5,
            precio: 7.5
        },
        celulares:{
            nombre: "Samsung s22+",
            stock: 10,
            precio: 450
        }
    }
}

console.log("\n\n\nNombre del producto:", tienda.productos.celulares.nombre)
console.log("Precio del producto: $", tienda.productos.celulares.precio)
console.log("cantidad de stock restante:", tienda.productos.celulares.stock -1)
