let params = new URLSearchParams(window.location.search);
let idEditar = params.get("id") ? parseInt(params.get("id")) : null;

let usuarios = obtenerUsuarios();
let usuarioEditando = null;

if (idEditar) {
    usuarioEditando = usuarios.find(u => u.id === idEditar);

    if (usuarioEditando) {
        document.getElementById("tituloPagina").textContent = "Editar Usuario | Panel Administrador";
        document.getElementById("tituloFormulario").textContent = "Editar Usuario";

        document.getElementById("nombre").value = usuarioEditando.nombre;
        document.getElementById("correo").value = usuarioEditando.correo;
        document.getElementById("clave").value = usuarioEditando.clave;
        document.getElementById("rol").value = usuarioEditando.rol;
    }
}

function guardarUsuario(event) {
    event.preventDefault();

    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo válido");
        return false;
    }

    if (clave.length !== 4) {
        alert("La clave debe tener 4 dígitos");
        return false;
    }

    // Verificar que el correo no esté repetido en otro usuario
    let correoRepetido = usuarios.some(u =>
        u.correo === correo && (!usuarioEditando || u.id !== usuarioEditando.id)
    );

    if (correoRepetido) {
        alert("Ya existe un usuario con ese correo");
        return false;
    }

    let usuarioData = {
        id: usuarioEditando ? usuarioEditando.id : Date.now(),
        nombre: document.getElementById("nombre").value.trim(),
        correo: correo,
        clave: clave,
        rol: document.getElementById("rol").value
    };

    if (usuarioEditando) {
        // Simulación: no se guarda de forma permanente.
        // Se deja como aviso de un solo uso en sessionStorage.
        sessionStorage.setItem("usuarioEditadoTemp", JSON.stringify(usuarioData));
    } else {
        usuarios.push(usuarioData);
        guardarUsuarios(usuarios);
    }

    alert(usuarioEditando ? "Usuario actualizado correctamente" : "Usuario creado correctamente");
    window.location.href = "admin_usuarios.html";

    return false;
}