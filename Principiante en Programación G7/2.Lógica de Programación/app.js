


let numeroSecreto = null;
let intentos = null;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



asignarTextoElemento = (elemento, texto) =>{
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

};  


function verificarIntento(){

        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

        console.log(numeroDeUsuario === numeroSecreto);
        console.log(intentos)

        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el numero en ${intentos} 
                ${(intentos === 1) ? 'vez' : 'veces'}`)
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            //El usuario no acertó
                if(numeroDeUsuario<numeroSecreto){ 
                    asignarTextoElemento('p', 'el numero secreto es mayor')}
                else{
                    asignarTextoElemento('p', 'el numero secreto es menor')
                }
                intentos++;
                limpiarCaja();
        return;
};
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';


}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos  los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }else{
        // si el numero generado esta incluido en la lista, hacemos una operacion
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado)
                return numeroGenerado
            }  
    }





    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido Maistro al juego Secreto');
    asignarTextoElemento('p', `Indicame un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de numero del 1 al 10
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton del nuevo juego

    document.querySelector('#reiniciar').setAttribute('disabled','true')


}

condicionesIniciales();
