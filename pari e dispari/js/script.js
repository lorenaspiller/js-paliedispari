/*
  PARI e DISPARI
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
*/

// 1. chiedo all'utente di scegliere tra pari e dispari
do {
  var scelta = prompt("Scegli tra pari o dispari");
} while ( (scelta != "pari") || (scelta != "dispari") );
console.log(scelta);

// 2. chiedo all'utente di inserire un numero da 1 a 5
do {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1));
console.log(numeroUtente);

// 3. Genero un numero random da 1 a 5 con una funzione
function numeroRandom() {
  var random = Math.floor(Math.random()* 5) + 1;
  return random;
}

// 3. Applico la funzione ad una variabile
var numeroRandom = numeroRandom();
console.log(numeroRandom);

// 4. Sommo i due numeri
var sum = parseInt(numeroUtente) + numeroRandom;
console.log(sum);

// 5. Stabilisco se la somma dei due numeri è pari o dispari usando una funzione

function sommaPariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

// 6. Stabilisco se la somma è pari o dispari applicando la funzione alla somma
var pariDispari = sommaPariDispari(sum);
console.log(pariDispari);

// 7. Dichiaro il vincitore
if (pariDispari === scelta) {
  console.log("HAI VINTO! Hai scelto " + scelta + " e il numero è " + sum);
} else {
  console.log("NON hai vinto! Hai scelto " + scelta + " e il numero è " + sum);
}
