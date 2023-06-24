
function suma() {
//el valor caturara el primer valor para realizar una suma//
    let A = 0
    let B = 0
    let S = 0
//let para nombrar las variables//
    A=parseInt(prompt("ingrese el primer valor a sumar"));
    B=parseInt(prompt("ingrese el segundo valor"));
    S= A+B;
    alert("el resultado de la suma es: "+ S);
}

function opBasicas() {
    //se agrega tres variables mas la realizacion de la oprarcion//
    let A = 0
    let B = 0
    let S = 0
    let R = 0
    let M = 0
    let D = 0
    A=parseInt(prompt("ingrese el primer valor"));
    B=parseInt(prompt("ingrese el segundo valor"));
    S= A+B;
    R= A-B;
    M= A*B;
    D= A/B;
    alert("el resultado de la suma es: "+ S);
    alert("el resultado de la resta es: "+ R);
    alert("el resultado de la multi es: "+ M);
    alert("el resultado de la div es: "+ D);
    
}

function NCuadrado() {
    let A = 0
    let C = 0
    A=parseInt(prompt("ingrese el primer numero"))
    C = A*A;
    alert("el cuadrado del numero ingresado es: "+ C);
    
}

function ATriangulo() {
    let b = 0
    let h = 0
    const D = 2
    let A = 0
    b=parseInt(prompt("ingrese el valor de la base del triangulo"));
    h=parseInt(prompt("ingrese la altura del triangulo"));
    A = b*h/D;
    alert("el area del triangulo es: "+ A);
    
}

function InvCapital() {
    //un individuo desea invertitir su capital en un banco y requiere un sistema que le permita saber cuanto dinero ganara en despues de N neumero de años.//
    //teniendo en cuenta que el banco paga un interest del 1,7% mensual//

    let cap = 0;
    let meses = 1.7;
    let total = 0;
    cap=parseInt(prompt("ingrese el valor de su capital"));
    meses=parseInt(prompt("ingrese valor de meses que desea dejar su capital"));
    cap= cap;
    total= cap*meses;

    alert("su ganancia es: "+ total);

}

function añonacimiento () {
    const año= 2023;
    let edad=0;
    let total=0; 
    edad=parseInt(prompt('ingrese su edad actual'));
    total= año- edad;
    alert("Su año de naciemiento es: " + total);
}

//realizar un algotitmo  que permita saber el año de nacimiento de un individuo ingresando  su edad y el año actual//
        //realizar un algotimo que capture un valor en metros y os muestre en pantalla la covercion a klm y pulgadas//

function conversion() {
    let metros=0
    let klm=0
    let pulgadas=
    metros=parseInt(prompt('ingreses los metros a resolver'))
    klm= metros/1000;
    pulgadas=metros *  39.370;
    alert("los metros a kilometros son los siguientes:" + klm);
    alert("los metros a pulgadas son los siguientes:" + pulgadas);
    
}

function mados() {
    let num1 = prompt('Digite el primer numero');
    let num2 = prompt('Digite el segundo numero');

    if (num1 > num2) {
        alert('El numero menor es: '+ num1) ;
    }
    else if(num1 == num2){
        alert('Son iguales');
    } 
    else {
    alert('El numero mayor es: '+ num2) ;
    }
}

function metres() {
    let num1 = prompt('Digite el primer numero');
    let num2 = prompt('Digite el segundo numero');
    let num3 = prompt('Digite el tercer numero');

    let menor = num1;

    if (num2 < menor) {
    menor = num2;
    }

    if (num3 < menor) {
    menor = num3;
    }

    alert('Numero menor: ' + menor);
    }

    function desc() {
        let cantidad = 0
        let precio = 0
        let desc = 0
        let compra = 0
        let pagar = 0

        precio = parseFloat(prompt("Ingresar precio"));
        cantidad = parseFloat(prompt("Ingresar cantidad"));
    
        compra = precio*cantidad;
        desc = compra*0.15;
        pagar = compra-desc;
    
        alert("El descuento es de: " + desc);
        alert("El total a pagar es: " + pagar);
        
    }