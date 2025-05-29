//Selecciona el botón con la clase "next" (flecha derecha) y lo guarda en la variable next
let next = document.querySelector('.next');

//Selecciona el botón con la clase "prev" (flecha izquierda) y lo guarda en la variable "prev"
let prev = document.querySelector('.prev');

//agrega un evento al botón "next" que se ejecuta al hacer clic
next.addEventListener('click', function(){
    //selecciona todos los elementos con la clase item (slides) y los guarda en la variable 'items'
    let items = document.querySelectorAll('.item');
    //mueve el slide al final del contenedor slide, simula un deslizamiento hacia la izquierda
    document.querySelector('.slide').appendChild(items[0]);
} );

//agrega un evento al botón "prev" que se ejecuta al hacer click
prev.addEventListener('click', function(){
//vuelve a seleccionar todos los slides actualizados
let items = document.querySelectorAll('.item');
//mueve el último slide al principio del contenedor "slide", simula un deslizamiento hacia la derecha
document.querySelector('.slide').prepend(items[items.length - 1]);

});


