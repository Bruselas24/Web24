//iniciar la pagina con "Live Server" extension de Visual Studio Code

document.getElementById("cargarCatalogo").addEventListener("click", cargarCatalogo);

function cargarCatalogo() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };

    xhr.open("GET", "./materias.xml", true);
    xhr.send();

}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var tabla = "<tr><th>Materia</th><th>Profesor</th></tr>";
    var materias = docXML.getElementsByTagName("MATERIA");
    console.log(materias)

    for (var i = 0; i < materias.length; i++) {

        var aux = materias[i].textContent.split(" \n ")
        console.log(aux)

        tabla += "<tr><td>";
        tabla += aux[0];
        tabla += "</td><td>";
        tabla += aux[1];
        tabla += "</td></tr>";
    }

    document.getElementById("demo").innerHTML = tabla;
    document.getElementById("cargarCatalogo").style.display = "none";
}