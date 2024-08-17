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

     document.getElementById("btnCopiar").style.display = 'block'; //mostrar boton copiar
     document.querySelector('.resultado__muñeco').style.display = 'none'; //oculta el dibujo muñeco
     document.querySelector('.resultado__subtitulo').style.display = 'none';  // oculta el subtitulo
     document.querySelector('.resultado__parrafo').style.display = 'none'; // oculta el parrafo 
     
     //document.querySelector('.btn__container').classList.add('btn__container--copy'); // esto alinea los botones
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

}

function copiar(){
    //al poner .value se refiere al elemento texto
    // sin value se refiere al area
   var copiarArea = document.getElementById("area");//cuando usas select() No se usa value
   copiarArea.select(); // selecciona el id ("area") y lo resalta como si seleccionaras un texto
    document.execCommand('copy'); // copia el area resaltada

}