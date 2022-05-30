let estado;

let añadirLink = () => {

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario == "admin" && contraseña == "admin") {
        document.getElementById('boton').setAttribute("href", "bienvenida.html")
        estado = true;
    } else {
        document.getElementById('boton').setAttribute("href", "#")
        estado = false;
    }

}

function alerta() {
    if (!estado) alert("Datos incorrectos")
}