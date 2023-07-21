let lista = ["ARBOL","ANGEL","MARCO", "CARRO","BARRO","PERRO"]
//let palabra = "ARBOL"
//let palabra = lista[Math.floor(Math.random()*lista.length)];

let intentos = 6;
const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"
fetch (API)
.then(response => response.json ())
.then(response => {
    console.log (response)
    palabra = response[0].toUpperCase()
    console.log(palabra)
})
.catch(err => palabra = lista [Math.floor(Math.random()*lista.length)]);


const BOTON = document.getElementById("guess-button");

BOTON.addEventListener("click", intentar);

function intentar(){

    const GRID = document.getElementById('grid');
    const ROW = document.createElement("div");
    ROW.className = "row";
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar
        ("<h1> GANASTE! 👏🤯🥳</h1>")
    
    }
    for (let i in palabra){
        const SPAN = document.createElement("span")
        SPAN.className = "letter";
        if (INTENTO[i]===palabra[i]){
        SPAN.innerHTML = INTENTO[i]
           SPAN.style.backgroundColor = "green";
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "yellow";
        } else {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "gray";
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
	if (intentos==0){
        terminar("<h1>PERDISTE!😭😥😓</h1>")
        
    }

}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
