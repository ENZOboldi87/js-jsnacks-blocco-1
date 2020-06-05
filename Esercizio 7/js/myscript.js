// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
//
// fino a quando ne avrà tanti quanti l’altro.

// creo due array di diversi contenuti
var arrayUno = [5, 15, 16, 22];
var arrayDue = [74, 25, 65, 48, 68, 12];

// decido la lunghezza del primo e del secondo array
var lunghezzaPrimoArray = arrayUno.length;
var lunghezzaSecondoArray = arrayDue.length;

// comparando i due array
if (lunghezzaPrimoArray > lunghezzaSecondoArray) {
  arrayDue = riempiArray(arrayDue, lunghezzaPrimoArray);
  console.log('lunghezza array due ', arrayDue);

}
else if (lunghezzaSecondoArray > lunghezzaPrimoArray) {
  arrayUno = riempiArray(arrayUno, lunghezzaSecondoArray);
  console.log('lunghezza array uno ', arrayUno);

}
else {
  // nothing
}


// funzione
function riempiArray(arrayDaRiempire, lunghezzaDaRaggiungere) {
  // aggiungo un elemento all array se la stessa non e uguale o minore
  while (arrayDaRiempire.length < lunghezzaDaRaggiungere) {
      // genero un numero casuale
    var numeroCasuale = Math.floor(Math.random() * 100 ) +1;
    // lo aggiungo all array
    arrayDaRiempire.push(numeroCasuale)
  }
  return arrayDaRiempire
}
