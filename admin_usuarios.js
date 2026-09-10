let usuariosCompleto = obtenerUsuarios();

function renderTablaUsuarios(lista) {

    let tbody = document.getElementById("tablaUsuarios");
    tbody.innerHTML = "";

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:30px; color:var(--admin-gris);">No se encontraron usuarios</td></tr>`;
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        let u = lista[i];

        let claseBadge = u.rol === "admin" ? "badge-admin" : "badge-cliente";

        tbody.innerHTML += `
            <tr>
                <td>${u.nombre}</td>
                <td>${u.correo}</td>
                <td><span class="badge-rol ${claseBadge}">${u.rol}</span></td>
                <td>
                    <div class="tabla-acciones">
                        <a href="admin-usuario-form.html?id=${u.id}" title="Editar"><i class="bi bi-pencil"></i></a>
                        <button class="btn-eliminar" onclick="eliminarUsuario(${u.id})" title="Eliminar"><i class="bi bi-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }
}

function eliminarUsuario(id) {
    if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;

    usuariosCompleto = usuariosCompleto.filter(u => u.id !== id);
    renderTablaUsuarios(usuariosCompleto);
}

document.getElementById("buscarUsuario").addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    let filtrados = usuariosCompleto.filter(u =>
        u.nombre.toLowerCase().includes(texto) ||
        u.correo.toLowerCase().includes(texto)
    );

    renderTablaUsuarios(filtrados);
});

renderTablaUsuarios(usuariosCompleto);