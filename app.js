// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//funcion para guardar el nombre del amigo
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value; //llama al elemento de html por el id y toma el valor
    if (nombreAmigo == ''){ //crea un alerata si no se introduce un nombre
        alert('Debes añadir un nombre');
    } else {
    listaAmigos.push(nombreAmigo); //añade el nombre al array
    console.log(listaAmigos);//muestra el array en la consola
    document.getElementById('amigo').value=""; //vacia la caja
    } 
}

//funcion asigna elementos a la lista
function asignarLista(){
    let elementoHtml = document.getElementById('listaAmigosHTML');
    elementoHtml.innerHTML = ''; //limpia la lista antes de agregar
    for (let i = 0; i < listaAmigos.length; i++){ //recorre el array
        elementoHtml.innerHTML += `<li>${listaAmigos[i]}</li>`; //añade el nombre a la lista y muestra en la pagina
    }
}

//funcion para sortear amigo
function sortearAmigo(){
    let seleccionarAmigo = Math.floor(Math.random()*listaAmigos.length); //Selecciona un indice aleatorio en el  array
    let amigoSeleccionado = document.getElementById('resultado'); //actualiza el elemento seleccionado
    if (listaAmigos.length == 0){
        alert('La lista de amigos esta vacia'); //Alerta que la caja esta vacia
    } else {
        amigoSeleccionado.innerHTML = listaAmigos[seleccionarAmigo]; //muestra el nombre sorteado
    }
}