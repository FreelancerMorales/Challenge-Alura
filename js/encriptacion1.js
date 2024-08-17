function encriptar() { 
    var texto = document.getElementById("texto").value;
    var encriptado = texto
        .replace(/e/img, 'enter')
        .replace(/i/img, 'imes')
        .replace(/a/img, 'ai')
        .replace(/o/img, 'ober')
        .replace(/u/img, 'ufat');
    document.getElementById("area").value = encriptado; // al dar click en btn encriptar , hace lo de abajo:muestra y oculta
    document.getElementById("area").style.display = 'block'; // mostrar el area de texto

    document.getElementById("btnCopiar").style.display = 'block'; //mostrar botón copiar
    document.querySelector('.resultado__subtitulo').style.display = 'none';  // oculta el subtitulo
    document.querySelector('.resultado__parrafo').style.display = 'none'; // oculta el párrafo 
}

function desencriptar(){
    var area = document.getElementById("texto").value;
    var desencriptar = area
        .replace(/enter/img, 'e')
        .replace(/imes/img, 'i')
        .replace(/ai/img, 'a')
        .replace(/ober/img, 'o')
        .replace(/ufat/img, 'u');
    document.getElementById("area").value = desencriptar;    
    document.getElementById("btnBorrar").style.display = 'block';  //con esto aparece botón borrar
}

function copiar(){
    //al poner .value se refiere al elemento texto
    // sin value se refiere al area
    var copiarArea = document.getElementById("area");//cuando usas select() No se usa value
    copiarArea.select(); // selecciona el id ("area") y lo resalta como si seleccionaras un texto
    document.execCommand('copy'); // copia el area resaltada

}

function borrar() {
    document.getElementById("texto").value = ""; // borra el texto del textarea de entrada
    document.getElementById("area").value = ""; // borra el texto del textarea de salida
    document.getElementById("area").style.display = 'block'; // oculta el textarea de salida
    // También puedes agregar código para ocultar los botones y otros elementos que desees
}