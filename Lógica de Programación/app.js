


let numeroSecreto = null;
let intentos = null;



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

    return Math.floor(Math.random()*10)+1;

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido Maistro al juego Secreto');
    asignarTextoElemento('p', 'Indicame un numero del 1 al 10');
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
