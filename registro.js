function registrar() {
 
    let datos = {
        run: document.getElementById("run").value.trim(),
        nombre: document.getElementById("nombre").value.trim(),
        apellidos: document.getElementById("apellidos").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        tipoUsuario: document.getElementById("tipoUsuario").value,
        region: document.getElementById("region").value,
        comuna: document.getElementById("comuna").value,
        direccion: document.getElementById("direccion").value.trim()
    };

    let clave = document.getElementById("clave").value;
    let confirmarClave = document.getElementById("confirmarClave").value;

    let resultado = validarFormularioUsuario(datos);
 
    if (!resultado.valido) {
        alert(resultado.mensaje);
        return;
    }

    if (nombre === "" || correo === "" || clave === "" || confirmarClave === "") {
        alert("Debe completar todos los campos");
        return;
    }
 
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo válido");
        return;
    }

    if (clave.length !== 4) {
        alert("La clave debe tener 4 dígitos");
        return;
    }
 
    if (clave !== confirmarClave) {
        alert("Las claves no coinciden");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 
    let correoRepetido = usuarios.some(u => u.correo === datos.correo);
    if (correoRepetido) {
        alert("Ya existe una cuenta registrada con ese correo");
        return;
    }
 
    let runRepetido = usuarios.some(u => u.run === datos.run);
    if (runRepetido) {
        alert("Ya existe una cuenta registrada con ese RUN");
        return;
    }

}