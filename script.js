
    
  var valor;
  var nuevaFrase; //variable usada en la funcion encriptar
  var fraseDesencriptada; //variable usada en la funcion desencriptar

  textoEntrada.oninput = function() {
    //result.innerHTML = input.value;
    valor = textoEntrada.value;
      }

   function encriptar(){
     nuevaFrase = valor;
     nuevaFrase = nuevaFrase.replace(/e/g, "enter");
     nuevaFrase = nuevaFrase.replace(/i/g, "imes");
     nuevaFrase = nuevaFrase.replace(/a/g, "ai");
     nuevaFrase = nuevaFrase.replace(/o/g, "ober");
     nuevaFrase = nuevaFrase.replace(/u/g, "ufat");
     //window.alert(nuevaFrase);
     document.getElementById("textoIzq").innerHTML= nuevaFrase;
     document.getElementById("imMunieco").style.display="none";
     document.getElementById("copiar").style.display="show";
     document.getElementById("copiar").style.display="inherit";
     document.getElementById("mensajeMunieco").style.display="none";
    }

   function desencriptar(){
	  //fraseDesencriptada=nuevaFrase;
	  fraseDesencriptada=valor;
	  fraseDesencriptada = fraseDesencriptada.replace(/enter/g, "e");
	  fraseDesencriptada = fraseDesencriptada.replace(/imes/g, "i");
	  fraseDesencriptada = fraseDesencriptada.replace(/ai/g, "a");
	  fraseDesencriptada = fraseDesencriptada.replace(/ober/g, "o");
	  fraseDesencriptada = fraseDesencriptada.replace(/ufat/g, "u");
	  document.getElementById("textoIzq").innerHTML= fraseDesencriptada;
    
      
    }

    function copiarAlPortapapeles() {
            let texto = document.getElementById('textoIzq');
            texto.select();
            //texto.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }

   

	//var button = document.querySelector("button");
	//button.onclick = encriptar;
	
	//document.getElementById("textoIzq").innerHTML= nuevaFrase;
	


