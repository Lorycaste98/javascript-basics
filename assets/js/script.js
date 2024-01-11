// Inizializza il contatore a 0
let contatore = 0;

document.querySelector('.js-plus-button')
  .addEventListener ('click', () => {
    aumentaContatore();
  })

document.querySelector('.js-minus-button')
  .addEventListener ('click', () => {
    diminuisciContatore();
  })

document.querySelector('.js-reset-button')
  .addEventListener ('click', () => {
    azzeraContatore();
  })

// condizione per poter utilizzare anche la tastiera
document.body.addEventListener('keydown', (event) => {
  if (event.key === '+') {
    aumentaContatore();
  } else if (event.key === '-') {
    diminuisciContatore();
  } else if (event.key === 'Backspace') {
    diminuisciContatore();
  } else if (event.key === 'r') {
    azzeraContatore();
  } else if (event.key === 'Delete') {
    azzeraContatore();
  }
})

// document.body.addEventListener('keydown', (event) => {
//   console.log(event.key);
// })

// Funzione per aumentare il contatore di 1
function aumentaContatore() {
  contatore++;
  updateContatore();
}

// Funzione per diminuire il contatore di 1
function diminuisciContatore() {
  contatore--;
  updateContatore();
}

// Funzione per azzerare
function azzeraContatore() {
  contatore = 0;
  updateContatore();
}

// Funzione per aggiornare il testo del paragrafo con il valore del contatore
function updateContatore() {
  document.getElementById("contatore").innerHTML = contatore;
}
