var campo1=document.getElementById("campo1");
var boton1=document.getElementById("botonAdd");

var pulsar=function(){
    var insertado=(campo1.value);
    document.getElementById("resultado").innerHTML=insertado;
}

boton1.addEventListener('click',pulsar);

