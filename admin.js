

function inicializarProductosAdmin() {
    if (typeof catalogo === "undefined") return;

    let productos = localStorage.getItem("productosAdmin");

    if (!productos) {
        localStorage.setItem("productosAdmin", JSON.stringify(catalogo));
    }
}

function obtenerProductosAdmin() {
    return JSON.parse(localStorage.getItem("productosAdmin")) || [];
}

function guardarProductosAdmin(productos) {
    localStorage.setItem("productosAdmin", JSON.stringify(productos));
}

// Inicializa un listado de usuarios de ejemplo la primera vez
function inicializarUsuarios() {
    let usuarios = localStorage.getItem("usuarios");

    if (!usuarios) {
        let usuariosBase = [
            { id: 1, nombre: "Administrador", correo: "admin@demo.cl", clave: "1234", rol: "admin" },
            { id: 2, nombre: "Usuario Demo", correo: "usuario@demo.cl", clave: "5678", rol: "cliente" }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuariosBase));
    }
}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


/* ---------- Solo para admin.html (dashboard) ---------- */

inicializarProductosAdmin();
inicializarUsuarios();

if (document.getElementById("statProductos")) {

    let productos = obtenerProductosAdmin();
    let usuarios = obtenerUsuarios();
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let stockBajo = productos.filter(p => p.stock <= 3).length;
    let unidadesCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    document.getElementById("statProductos").textContent = productos.length;
    document.getElementById("statStockBajo").textContent = stockBajo;
    document.getElementById("statUsuarios").textContent = usuarios.length;
    document.getElementById("statCarritos").textContent = unidadesCarrito;
}