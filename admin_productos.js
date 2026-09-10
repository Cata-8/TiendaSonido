let listaCompleta = obtenerProductosAdmin();

function renderTablaProductos(lista) {

    let tbody = document.getElementById("tablaProductos");
    tbody.innerHTML = "";

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--admin-gris);">No se encontraron productos</td></tr>`;
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        let p = lista[i];

        let claseStock = "badge-stock-ok";
        if (p.stock === 0) claseStock = "badge-stock-agotado";
        else if (p.stock <= 3) claseStock = "badge-stock-bajo";

        tbody.innerHTML += `
            <tr>
                <td><img src="${p.imagen}" class="thumb"></td>
                <td>${p.codigo}</td>
                <td>${p.nombre}</td>
                <td>${p.categoria}</td>
                <td>${p.marca}</td>
                <td>$${p.precio.toLocaleString("es-CL")}</td>
                <td class="${claseStock}">${p.stock}</td>
                <td>
                    <div class="tabla-acciones">
                        <button onclick="verProducto('${p.codigo}')" title="Ver detalle"><i class="bi bi-eye"></i></button>
                        <a href="admin_editar_prod.html?codigo=${p.codigo}" title="Editar"><i class="bi bi-pencil"></i></a>
                        <button class="btn-eliminar" onclick="eliminarProducto('${p.codigo}')" title="Eliminar"><i class="bi bi-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }
}

function verProducto(codigo) {
    let producto = listaCompleta.find(p => p.codigo === codigo);
    if (!producto) return;

    localStorage.setItem("producto", JSON.stringify(producto));
    window.open("detalle.html", "_blank");
}

function eliminarProducto(codigo) {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    listaCompleta = listaCompleta.filter(p => p.codigo !== codigo);
    renderTablaProductos(listaCompleta);
}

document.getElementById("buscarProducto").addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    let filtrados = listaCompleta.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.marca.toLowerCase().includes(texto) ||
        p.codigo.toLowerCase().includes(texto)
    );

    renderTablaProductos(filtrados);
});
renderTablaProductos(listaCompleta);