
let producto = JSON.parse(
    localStorage.getItem("producto")
);

document.getElementById("imagen").src = 
    producto.imagen;

document.getElementById("nombre").textContent = 
    producto.nombre;
    document.getElementById("marca").textContent = `Marca: ${producto.marca}`;
    document.getElementById("modelo").textContent = `Modelo: ${producto.modelo}`;
    document.getElementById("precio").textContent = `Precio: $${producto.precio}`;
    document.getElementById("descripcion").textContent = `Descripción: ${producto.descripcion}`;

function agregarAlCarrito() {
 
    if (!producto) return;
 
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
 
    let existente = carrito.find(item => item.codigo === producto.codigo);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            marca: producto.marca,
            modelo: producto.modelo,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
 
    localStorage.setItem("carrito", JSON.stringify(carrito));
 
    window.location.href = "carrito.html";
}

