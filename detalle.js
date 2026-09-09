
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