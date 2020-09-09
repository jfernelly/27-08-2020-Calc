
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

//PARA CALCULADORA

const botonIgual = document.getElementById("botonIgual")
botonIgual.addEventListener("click", ()=> {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
   
    let ope = document.getElementById("ope").value;      
    console.log(numero1);
    console.log(numero2);
    console.log(ope);


    switch (ope) {
        case "+": 
            resultado = numero1 + numero2
            break;

        case "-": 
            resultado = numero1 - numero2
            break;
        
        case "*": 
            resultado = numero1 * numero2
            break;
        
        default:
            resultado = numero1 / numero2
            break;
    }
    let numeroResultado = parseFloat(document.getElementById("resultado").value= resultado);

})


