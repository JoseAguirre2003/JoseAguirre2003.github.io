"use strict"

window.onload = () => document.getElementById("experienciaContent").style.display = "block";

document.getElementById("uno").addEventListener("click", () => {
    document.getElementById("programContent").style.display = "none";
    document.getElementById("experienciaContent").style.display = "block";
});

document.getElementById("dos").addEventListener("click", () => {
    document.getElementById("experienciaContent").style.display = "none";
    document.getElementById("programContent").style.display = "block";
});

/* */

// document.getElementById("uno").addEventListener("click", () => {cargarContent("./html/e.html")});
// document.getElementById("dos").addEventListener("click", () => {cargarContent("./html/p.html")});

function cargarContent(url){
    var peticion = new XMLHttpRequest();
    peticion.open('GET', url);
    peticion.onload = ()=>{
        let resp = peticion.responseText;
        document.getElementById("info").innerHTML = resp
    };
    peticion.send();
}