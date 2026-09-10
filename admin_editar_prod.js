let params = new URLSearchParams(window.location.search);
let codigoEditar = params.get("codigo");

let productos = obtenerProductosAdmin();
let productoEditando = null;

if (codigoEditar) {
    productoEditando = productos.find(p => p.codigo === codigoEditar);

    if (productoEditando) {
        document.getElementById("tituloPagina").textContent = "Editar Producto | Panel Administrador";
        document.getElementById("tituloFormulario").textContent = "Editar Producto";

        document.getElementById("codigo").value = productoEditando.codigo;
        document.getElementById("codigo").disabled = true; // el código no se cambia al editar
        document.getElementById("categoria").value = productoEditando.categoria;
        document.getElementById("nombre").value = productoEditando.nombre;
        document.getElementById("marca").value = productoEditando.marca;
        document.getElementById("modelo").value = productoEditando.modelo;
        document.getElementById("precio").value = productoEditando.precio;
        document.getElementById("stock").value = productoEditando.stock;
        document.getElementById("imagen").value = productoEditando.imagen;
        document.getElementById("descripcion").value = productoEditando.descripcion;
    }
}

function guardarProducto(event) {
    event.preventDefault();

    let codigo = document.getElementById("codigo").value.trim();

    if (!productoEditando) {
        let yaExiste = productos.some(p => p.codigo === codigo);
        if (yaExiste) {
            alert("Ya existe un producto con ese código. Usa uno distinto.");
            return false;
        }
    }

    let productoData = {
        codigo: codigo,
        categoria: document.getElementById("categoria").value,
        nombre: document.getElementById("nombre").value.trim(),
        marca: document.getElementById("marca").value.trim(),
        modelo: document.getElementById("modelo").value.trim(),
        stock: parseInt(document.getElementById("stock").value),
        precio: parseInt(document.getElementById("precio").value),
        descripcion: document.getElementById("descripcion").value.trim(),
        imagen: document.getElementById("imagen").value.trim()
    };

    if (productoEditando) {
        sessionStorage.setItem("productoEditadoTemp", JSON.stringify(productoData));
    } else {
        productos.push(productoData);
        guardarProductosAdmin(productos);
    }

    alert(productoEditando ? "Producto actualizado correctamente" : "Producto creado correctamente");
    window.location.href = "admin_productos.html";

    return false;
}