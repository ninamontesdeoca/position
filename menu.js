// menubar.js; con el comentario de barra barra solo podemos escribir una linea de comentario
// el lenguaje es JavaScript, no es lo mismo que JAVA. labura con camelCase (se respetan las mayusculas luego de que termina un palabra)
// Para llamar al boton tenemos que tippear todo esto
// entre comillas la accion que tiene que dar el usuario para que se cumpla el evento que ponemos despues de eso
// Seleccionamos al boton con ID "toogle" y le decimos que escuche el evento click
toggle.addEventListener (
    "click",
    function () {
        //Esto sucede cuando se hace click
        //Buena forma de poner chistes si es que alguien va a f12 cuando hacemos click
        console.log("hiciste click");
        // classList
        // add (me prende la clase )
        // remove (la suspende)
        // toggle (hace las dos en una, un click para cada funcion)
        // llamo al id menu; llamo en el parentesis a la clase que creamos en css. Dijimos que a todas las clases de lista le agregue la propiedad que le dimos a la clase mostrar
        // apago y prendo la clase "mostrar" en el elemento con ID menu
        menu.classList.toggle("mostrar")
        // si quiero buscar error vot a inspeccionar en el navegador, veo cuando llama al elemento y veo si la pagina me reconoce el codigo
    }
);