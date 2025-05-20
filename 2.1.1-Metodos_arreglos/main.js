// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 90, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 40, categoria: "Accesorios" },
];


// 1. filter() 
const productosMenosDeCien = productos.filter(producto => producto.precio < 100);

console.log("Productos con precio menor a $100");
console.log(productosMenosDeCien);

// 2. sort()
const productosOrdenadosPorNombre = [...productosMenosDeCien].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) {
        return -1;
    }
    if (nombreA > nombreB) {
        return 1;
    }
    return 0;
});

console.log("Productos (menos de $100) Ordenados Alfabéticamente por Nombre");
console.log(productosOrdenadosPorNombre);

// 3. map()
const nombresDeProductosFiltradosYOrdenados = productosOrdenadosPorNombre.map(producto => producto.nombre);

console.log("Nombres de los Productos Filtrados y Ordenados");
console.log(nombresDeProductosFiltradosYOrdenados);

//4. reduce()
const precioTotalInventario = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
}, 0);

console.log("Precio Total de todos los Productos en el Inventario");
console.log(`$${precioTotalInventario}`);