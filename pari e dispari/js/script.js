/*
  PARI e DISPARI
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
*/

// FUNZIONI

// funzione che genera un numero random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}

// funzione che determina pari e dispari
function sommaPariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}


// 1. chiedo all'utente di scegliere tra pari e dispari
do {
  var scelta = prompt("Scegli tra pari o dispari").toLowercase();
} while ( (scelta != "pari") && (scelta != "dispari") );
console.log("Scelta dell'utente: " + scelta);

// 2. chiedo all'utente di inserire un numero da 1 a 5
do {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1));
console.log("Numero scelto dall'utente: " + numeroUtente);

// 3. Applico la funzione ad una variabile
var numeroRandom = numeroRandom(1, 5);
console.log("Numero random generato per la cpu: " + numeroRandom);

// 4. Sommo i due numeri
var sum = parseInt(numeroUtente) + numeroRandom;
console.log("Somma del numero scelto dall'utente e del numero random della cpu " + sum);

// 5. Stabilisco se la somma è pari o dispari applicando la funzione alla somma
var pariDispari = sommaPariDispari(sum);

// 6. Dichiaro il vincitore
if (pariDispari === scelta) {
  console.log("HAI VINTO! Hai scelto " + scelta + " e il numero è " + sum + ", quindi è " + pariDispari);
} else {
  console.log("NON hai vinto! Hai scelto " + scelta + " e il numero è " + sum + ", quindi è " + pariDispari);
}
