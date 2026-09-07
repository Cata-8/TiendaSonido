function ingresar(){

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;


    if (correo === "admin@demo.cl" && clave === "1234") {
        window.location.href = "admin.html";
    }
    else if (correo === "usuario@demo.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    }
    else{
        alert("Correo o clave incorrectos");
    }
}