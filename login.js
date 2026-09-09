function ingresar(){

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if (correo === "" || clave === "") {
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

    if (correo === "sonidovivo@gmail.cl" && clave === "1234") {
        window.location.href = "admin/admin.html";
    }
    else if (correo === "usuario@gmail.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    }else if (correo === "usuario2@gmail.cl" && clave === "5678") {
        window.location.href = "usuario2.html";
    }else{
        alert("Correo o clave incorrectos");
    }
}