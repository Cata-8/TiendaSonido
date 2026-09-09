function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarrito() {

    let carrito = obtenerCarrito();
    let contenedor = document.getElementById("carritoContenedor");

    let badge = document.getElementById("cartBadge");
    let totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    if (badge) badge.textContent = totalUnidades;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío. <a href="catalogo.html">Ver catálogo</a>
            </p>
        `;
        actualizarResumen(0, 0);
        return;
    }

    contenedor.innerHTML = "";

    let total = 0;

    for (let i = 0; i < carrito.length; i++) {

        let item = carrito[i];
        let subtotal = item.precio * item.cantidad;
        total += subtotal;

        contenedor.innerHTML += `
            <div class="carrito-item-card">
                <img src="${item.imagen}" class="carrito-item-img" alt="${item.nombre}">

                <div class="carrito-item-info">
                    <p class="carrito-item-nombre">${item.nombre}</p>
                    <p class="carrito-item-marca">${item.marca}${item.modelo ? " - " + item.modelo : ""}</p>
                    <p class="carrito-item-precio">$${item.precio.toLocaleString("es-CL")}</p>
                </div>

                <div class="cantidad-control">
                    <button type="button" onclick="cambiarCantidad('${item.codigo}', -1)">−</button>
                    <input type="text" value="${item.cantidad}" readonly>
                    <button type="button" onclick="cambiarCantidad('${item.codigo}', 1)">+</button>
                </div>

                <button class="carrito-item-eliminar" onclick="eliminarItem('${item.codigo}')">
                    <i class="bi bi-trash"></i> Eliminar
                </button>
            </div>
        `;
    }

    actualizarResumen(totalUnidades, total);
}

function actualizarResumen(cantidadProductos, total) {
    document.getElementById("resumenCount").textContent = cantidadProductos;
    document.getElementById("resumenSubtotal").textContent = "$" + total.toLocaleString("es-CL");
    document.getElementById("resumenTotal").textContent = "$" + total.toLocaleString("es-CL");
}

function cambiarCantidad(codigo, delta) {

    let carrito = obtenerCarrito();
    let item = carrito.find(p => p.codigo === codigo);

    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.codigo !== codigo);
    }

    guardarCarrito(carrito);
    renderizarCarrito();
}

function eliminarItem(codigo) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(p => p.codigo !== codigo);
    guardarCarrito(carrito);
    renderizarCarrito();
}

function finalizarCompra() {
    let carrito = obtenerCarrito();

    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    alert("¡Compra realizada con éxito! Gracias por tu compra en Sonido Vivo.");
    localStorage.removeItem("carrito");
    renderizarCarrito();
}

renderizarCarrito();