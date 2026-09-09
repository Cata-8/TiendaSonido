function registrar() {
 
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;
    let confirmarClave = document.getElementById("confirmarClave").value;

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


}