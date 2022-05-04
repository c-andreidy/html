const select = document.querySelector("#select");
const opciones = document.querySelector("#opciones");
const contenidoSelect = document.querySelector("#select > .contenido-select");
const hiddenInput = document.querySelector("#inputSelect");

/* le digo al DOM que busque el elemento 'opciones' y que obtenga el elemento 'hijo' que contiene la class 'opcion'
y le agregamos un bucle. por cada elemento 'opción'(elemento hijo) que contenga 'opciones' (elemento padre) realizará la función*/
document.querySelectorAll("#opciones > .opcion").forEach((opcion) => {
  /* en el código anterior accedímos al id 'opción' (es una etiqueta enlace) por defecto sú evento es dirigirnos a otra pagína,
    entonces aplicamos preventDefault en la siguiente línea.*/
  opcion.addEventListener("click", (e) => {
    //por cada elemento 'opción' agregamos una función click
    e.preventDefault();
    contenidoSelect.innerHTML = e.currentTarget.innerHTML; //básicamente le digo al título que es hijo de contenido select, que va a ser igual al título del enlace
    opciones.classList.toggle("active");
    select.classList.toggle("active");
    //en la siguiente línea le digo al valor de mi input que va a ser igual
    //al elemento que está teniendo un evento (la etiqueta) que a la vez me cargue su elemento hijo (el h1 class tittle)
    // igual a sú texto
    hiddenInput.value = e.currentTarget.querySelector(".tittle").innerText;
  });
});

select.addEventListener("click", () => {
  // función flecha, actúa como una función normal pero es límitada.
  select.classList.toggle("active"); //toggle actúa como un interruptor, de manera que sí select NO tiene la clase active se la agrega y viceversa
  opciones.classList.toggle("active");
});
