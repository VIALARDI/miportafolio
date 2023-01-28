const inputtextarea = document.querySelector(".Ingresa");
const inputmensaje = document.querySelector(".mensaje");

const BotonEncriptar = document.querySelector(".b1");
const BotonDesencriptar = document.querySelector(".b2");
const BotonCopiar = document.querySelector(".copiar");


function encriptar (){
	var mensaje = inputtextarea.value;
	var mensajeOculto = mensaje
	.replaceAll("e", "enter")
	.replaceAll("i", "imes")
	.replaceAll("a", "ai")
	.replaceAll("o", "ober")
	.replaceAll("u", "ufat");

	inputmensaje.value = mensajeOculto;
}

function desencriptar (){
	var mensajeOculto = inputtextarea.value;
	var mensaje = mensajeOculto
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");

	inputmensaje.value = mensaje;
}

function copiar (){
	var mensajeOculto = inputmensaje.value;
	navigator.clipboard.writeText(mensajeOculto);
}



BotonEncriptar.onclick = encriptar;
BotonDesencriptar.onclick = desencriptar;
BotonCopiar.onclick = copiar;



document.getElementById("b1").addEventListener("click", function(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "block";
});


const lettersRegex = /^[a-z\s]*$/;
const textarea = document.getElementById("Ingresa");
textarea.oninput = function() {
  if (!lettersRegex.test(textarea.value)) {
    textarea.value = textarea.value.replace(/[^a-z\s]/g, "");
    alert("solo letras minúsculas y sin acento");
  }
};
