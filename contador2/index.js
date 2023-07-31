const incrementBtn = document.getElementById("incrementBtn");
const counterElement = document.getElementById("counter");
const cambiaColor = document.getElementById("color");

let counter = 0;

// Agregamos un evento de clic al botón para incrementar el contador
incrementBtn.addEventListener("click", () => {

  counter++;


  counterElement.textContent = counter;
});

cambiaColor.addEventListener("click", () => {
  counter--;

  counterElement.textContent = counter;
});
