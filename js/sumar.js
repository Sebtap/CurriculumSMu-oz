
document.getElementById('sumar').addEventListener('click',function(){
    let numeroA=document.getElementById('Numero1').value;
    let numeroB=document.getElementById('Numero2').value;
    //let resultado=sumar(numeroA,numeroB); Me lo considera como una cadena de caracteres
    let resultado=sumar(parseInt(numeroA),parseInt(numeroB));
    console.log("El resultado de la suma es: "+resultado);

    document.getElementById('resultado').innerHTML=resultado;
    document.getElementById('contenedorResultado').style.display='block';
});

function sumar(a,b)
{
    return a+b;
};