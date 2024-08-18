const textoInput = document.getElementById('texto');
const areaOutput = document.getElementById('area');
const btnCopiar = document.getElementById('btnCopiar');
const btnBorrar = document.getElementById('btnBorrar');

function encriptar() {
    const texto = textoInput.value;
    const encriptado = texto
        .replace(/e/img, 'enter')
        .replace(/i/img, 'imes')
        .replace(/a/img, 'ai')
        .replace(/o/img, 'ober')
        .replace(/u/img, 'ufat');
    areaOutput.textContent = encriptado;
    areaOutput.style.display = 'block';
    btnCopiar.style.display = 'block';
    document.querySelector('.resultado__subtitulo').style.display = 'none';
    document.querySelector('.resultado__parrafo').style.display = 'none';
}

function desencriptar() {
    const area = textoInput.value;
    const desencriptar = area
        .replace(/enter/img, 'e')
        .replace(/imes/img, 'i')
        .replace(/ai/img, 'a')
        .replace(/ober/img, 'o')
        .replace(/ufat/img, 'u');
    areaOutput.textContent = desencriptar;
    btnBorrar.style.display = 'block';
}

function copiar() {
    const texto = areaOutput.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    });
}

function borrar() {
    textoInput.value = '';
    areaOutput.textContent = '';
    btnCopiar.style.display = 'none';
    btnBorrar.style.display = 'none';
}