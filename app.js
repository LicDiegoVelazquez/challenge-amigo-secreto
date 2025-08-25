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
    let elementoHtml = document.getElementById('listaAmigos');
    elementoHtml.innerHTML = '';
    return;
}