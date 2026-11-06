
// Obtener los elementos del HTML
const botonDesplegable = document.getElementById("botonDesplegable");
const listaOpciones = document.getElementById("listaOpciones");
const textoSeleccionado = document.getElementById("textoSeleccionado");
const flecha = document.getElementById("flecha");

// Obtener todas las opciones de la lista
const opciones = document.querySelectorAll(".opcion");


// ABRIR Y CERRAR EL MENÚ

// Detectar cuando el usuario hace clic en el botón
botonDesplegable.addEventListener("click", function() {

    // Agregar o quitar la clase abierto
    listaOpciones.classList.toggle("abierto");

    // Cambiar la dirección de la flecha
    if (listaOpciones.classList.contains("abierto")) {
        flecha.textContent = "⌃";
    } else {
        flecha.textContent = "⌄";
    }

});


// SELECCIONAR UNA OPCIÓN

// Recorrer todas las opciones de la lista
opciones.forEach(function(opcion) {

    // Detectar cuando el usuario selecciona una opción
    opcion.addEventListener("click", function() {

        // Mostrar el texto de la opción seleccionada
        textoSeleccionado.textContent = opcion.textContent;

        // Quitar la selección anterior
        opciones.forEach(function(elemento) {
            elemento.classList.remove("seleccionado");
        });

        // Resaltar la opción seleccionada
        opcion.classList.add("seleccionado");

        // Cerrar el menú después de seleccionar
        listaOpciones.classList.remove("abierto");

        // Cambiar la flecha hacia abajo
        flecha.textContent = "⌄";

    });

});


// CERRAR EL MENÚ AL HACER CLIC FUERA

document.addEventListener("click", function(event) {

    // Comprobar si el clic fue fuera del menú
    if (!botonDesplegable.contains(event.target) &&
        !listaOpciones.contains(event.target)) {

        // Cerrar la lista
        listaOpciones.classList.remove("abierto");

        // Cambiar la flecha
        flecha.textContent = "⌄";

    }

});
