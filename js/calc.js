
//CALC
//PRIMERO TRAER EL BOTON
const promedio = document.getElementById("promedio");

//SE CREA EL EVENTPO
promedio.addEventListener("click", ()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    //let promedio = num1+num2+num3;
    let suma = (num1 + num2 + num3) / 3 
    console.log(suma)    //respuestainnerHTML
    //respuestatextContent

    respuesta.innerHTML = "<i>" + suma.toFixed(2) + "</i>";

    //ingtesarla a un campo
    //capturar daros desde un campo
    //capturar dato desde un boton



})