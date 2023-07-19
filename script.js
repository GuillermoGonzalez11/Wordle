const apiKey ="20d66fe92d055ea9c827e1c8dbe9f05d";
const ciudad ="Fram,py"
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${apiKey}&units=metric`
let dato;
const VIENTO = document.getElementById("viento")
const ESTADO = document.getElementById("estado")
const TEMPERATURA = document.getElementById("temperatura")


fetch(apiUrl)
.then(response=> response.json())
.then(response=>{
    console.log(response)
    dato = response
    let temperatura = dato.main.temp //"Rain"
    let tempMin = dato.main.temp_min
    let tempMax = dato.main.temp_max
    TEMPERATURA.innerHTML = temperatura+"°"
    console.log('temp min', tempMin)
    console.log('temp max', tempMax)
    let viento = dato.wind.speed
    VIENTO.innerHTML=viento+"km/h"
    console.log(viento)
    let clima = dato.weather[0].main
    ESTADO.innerHTML = estado+
    console.log(clima)

})
.catch(
    err => console.error(err)
)

console.log(dato)
