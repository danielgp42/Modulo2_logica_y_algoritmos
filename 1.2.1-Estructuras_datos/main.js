const listaDeCompras = [];

const agregarProducto = (producto) => {
  const productoExistente = listaDeCompras.some(
    (item) => item.toLowerCase() === producto.toLowerCase()
  );

  if (!productoExistente) {
    listaDeCompras.push(producto);
    console.log(`"${producto}" ha sido añadido a la lista.`);
  } else {
    console.log(`"${producto}" ya existe en la lista.`);
  }
};

const eliminarProducto = (producto) => {
  const indice = listaDeCompras.findIndex(
    (item) => item.toLowerCase() === producto.toLowerCase()
  );

  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`"${producto}" ha sido eliminado de la lista.`);
  } else {
    console.log(`"${producto}" no se encontró en la lista.`);
  }
};

const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("manzanas"); // Agregar un duplicado (ignorando mayúsculas)
mostrarLista();

eliminarProducto("Leche");
mostrarLista();

eliminarProducto("Jugo"); // Eliminar un producto que no existe
mostrarLista();

agregarProducto("Huevos");
mostrarLista();