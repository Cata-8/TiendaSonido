let sesion = {
    nombre: "Usuario",
    apellidos: "Ejemplo",
    run: "123456789",
    correo: "usuario@gmail.cl",
    fechaNacimiento: "1998-05-14",
    tipoUsuario: "cliente",
    region: "Región Metropolitana de Santiago",
    comuna: "Santiago",
    direccion: "Calle Hola 456"
};

let nombreCompleto = sesion.nombre + " " + sesion.apellidos;

document.getElementById("bienvenidaTexto").textContent = "Bienvenido de vuelta, " + sesion.nombre;
document.getElementById("avatarInicial").textContent = sesion.nombre.charAt(0).toUpperCase();
document.getElementById("nombreCompleto").textContent = nombreCompleto;
document.getElementById("tipoBadge").textContent = sesion.tipoUsuario;

document.getElementById("campoRun").textContent = sesion.run;
document.getElementById("campoCorreo").textContent = sesion.correo;
document.getElementById("campoFecha").textContent = sesion.fechaNacimiento;
document.getElementById("campoComuna").textContent = sesion.comuna + ", " + sesion.region;
document.getElementById("campoDireccion").textContent = sesion.direccion;

function cerrarSesion() {
    window.location.href = "login.html";
}

// Badge del carrito en el navbar
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
let badge = document.getElementById("cartBadge");
if (badge) badge.textContent = totalUnidades;