/*
PAROLA PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// 1. chiedo la parola all'utente
var parolaUtente = prompt("Inserisci la parola");

// 2. funzione per capire se parola è palindroma
function palindroma(parola) {
  // 3. Creo una variabile stringa vuota
  var reverse = "";

  // 4. Genero la parola scritta al contrario
  for (var i = (parola.length - 1) ; i >= 0 ; i--) {
    // console.log(parolaUtente[i]);
    reverse += parola[i];
  }
  return reverse;
}

// 5. Uso la funzione in una variabile
var palindroma = palindroma(parolaUtente);

// 6. console log per l'utente
if ( parolaUtente === palindroma) {
  console.log("La parola E' PALINDROMA!");
} else {
  console.log("la parola NON è palindroma!");
}
