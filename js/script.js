// Seleccionar los elementos del DOM.
// const boton = document.querySelector('button');
// const color = document.getElementById('color');
// const digitos = '0123456789ABCDEF';
// Generar un color hexadecimal aleatorio.
// function generarColorHexAleatorio() {
//   let digitos = '0123456789ABCDEF'; // 16 opciones.
//   let color = '#'; // El color inicia con #.

//   for (let i = 0; i < 6; i++) {
//     // Escoger uno de los 16 digitos posibles.
//     let indiceAleatorio = Math.floor(Math.random() * 16);
//     // Agregarlo al codigo del color.
//     color += digitos[indiceAleatorio];
//   }
  
//   return color;
// }

// Event Listener.
// boton.addEventListener('click', function() {
//   let colorAleatorio = generarColorHexAleatorio();
//   document.body.style.backgroundColor = colorAleatorio;
//   color.textContent = colorAleatorio;
// });

// CODIGO MEJORADO CON ARROW FUNCTIONS
const boton = document.querySelector('button');
const color = document.getElementById('color');
const digitos = '0123456789ABCDEF';

boton.addEventListener('click', () =>{
    let colorAleatorio = '#';

    for (let i = 0 ; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorAleatorio += digitos[indiceAleatorio];
    }

    document.body.style.backgroundColor = colorAleatorio;
    color.textContent = colorAleatorio;
})