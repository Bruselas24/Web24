const ejemplo = () => {
    let usuario = document.getElementById("usuario").value
    let muestra = enc(usuario)

    alert(`Al servidor le llegaria esto "${mostrar(muestra)}"`)
}

//funcion de encryptado basado en el codigo ASCII
const enc = (cadena) => {
    let arrEnc = []
    for (let i = 0; i < cadena.length; i++) {
        arrEnc.push(cadena.charCodeAt(i) + 1);
    }

    return arrEnc;
}

//obtener la palabra a partir de codigo ASCII
const mostrar = (arr) => {
    return String.fromCharCode(...arr)
}

//desencriptado de una palabra
const desEnc = (arr) => {
    arr.map((x) => { x - 1 })
    return String.fromCharCode(...arr)
}