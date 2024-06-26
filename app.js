let numeroSecreto = 0;
let numeroDeUsuario=0;
let intento = 1;
let listaNumerosGenerados=[];
let numeroMaximo = 10;

//recibe los valores que le mandan de la funcion condicionalesIniciales
function asignarElementos(_elemento, texto){
    let elementoAsignado= document.querySelector(_elemento);
    elementoAsignado.innerHTML = texto;
    return;
}
//retorna un numero aleatorio 
function numeroSecretoMath() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    //si ya sorteron todos los numeros
    if(listaNumerosGenerados.length== numeroMaximo){
        condicionesIniciales("p","Ya se sortearon todos los numeros posibles");
    }else{
        //si el  numero generado esta incluido en la lista 
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return numeroSecretoMath();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
//verifica si el elemento introducido
function verificarIntento(){
    numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //te dice que acertaste le numero cuando la comparacion es igual
    if(numeroDeUsuario == numeroSecreto){
        asignarElementos("p",`Acertaste el numero , en ${intento} ${(intento === 1 ? "vez":"veces")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    //cuando la comparacion inicial es falta manda al else
    }else{
        //te hace la comparacion cuando el numero digitado es menor al numero secreto te manda el mensaje 
        if(numeroDeUsuario > numeroSecreto){
            asignarElementos("p","El numero es menor");
        //cuando es amyor te hace la comparacion y te manda el mensaje
        }else{
            asignarElementos("p","El numero es mayor");
        }
        intento++;
        limpiarCaja();
    }
    return;
    
}
//limpia la caja de texto
function limpiarCaja() {
    document.querySelector("#valorUsuario").value="";
}
//esta funcion permite asignar textos a la pagina para no estar rellenando a cada rato
function condicionesIniciales() {
    asignarElementos("h1","Bienvenido a mi juego");
    asignarElementos("p",`Indica un numero del 1 al ${numeroMaximo}`);
    intento=1;
    numeroSecreto=numeroSecretoMath();
    return;
}
function reiniciarJuego() {
    //limpia la caja de texto que se le muestra al usuario
    limpiarCaja();
    //vueve a poner las condiciones iniciales , cuando empeamos la primera vez
    condicionesIniciales();
    //desabilita el boton de juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
    return;
}
//le manda los valores a la funcion
condicionesIniciales();