const input = document.querySelector("#input-texto");
const botonencriptar = document.querySelector("#boton1");
const botondesencriptar = document.querySelector("#boton2");
const mensaje = document.querySelector ("#mensaje");
const botoncopiar = document.querySelector("#boton3");

document.getElementById("aparece").style.display = 'none';
inputverificar();

document.getElementById('boton1').onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensaje.value = textoEncriptado;
    input.value = "";
    aparece()
}

document.getElementById('boton2').onclick = (e) => {
    e.preventDefault();
    const textoDesencriptado = desencriptar(input.value);
    mensaje.value = textoDesencriptado;
    input.value = "";
    aparece()
}

var resultado = document.querySelector(".mensaje")
var botoncopion = document.querySelector(".boton3")

botoncopion.onclick = copiar;

function copiar (){
  var mensajeEncriptado = resultado.value;
  navigator.clipboard.writeText(mensaje.value);
  window.alert('Mensaje copiado')
}

function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringEncriptada.includes(matrixCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
      }
    }
    return stringEncriptada
}
  
function desencriptar(stringDesencriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringDesencriptada.includes(matrixCode[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
      }
    }
    return stringDesencriptada
}

function aparece() {
    document.getElementById("desaparece").style.display = 'none';
    document.getElementById("aparece").style.display = 'flex';
  }

function home() {
    document.getElementById("aparece").style.display = 'none';
    document.getElementById("desaparece").style.display = 'flex';
}

function inputverificar() {
    var inputPalabra = document.querySelector("#input-texto");
    inputPalabra.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 65) {
        e.preventDefault();
      }
    });
  }
  