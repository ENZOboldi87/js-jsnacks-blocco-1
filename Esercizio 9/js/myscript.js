// Crea due tag div con due id diversi: un div avrà il testo
// colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i
// numeri dispari e in verde i numeri pari.

// variabili
var boxRosso = document.getElementById('rosso');
var boxVerde = document.getElementById('verde')

 // devo creare un array di numeri
 var arrayNumeri = [1, 2, 4, 6, 10, 3, 4, 67, 78, 87, 98, 45, 20];
// ciclo for per leggere l array
 for (var i = 0; i < arrayNumeri.length; i++) {
 // se il numero e pari
 if (arrayNumeri[i] % 2===0) {
   var numeriPari = arrayNumeri[i];
   boxVerde.innerHTML = boxVerde.innerHTML + ' ' + numeriPari;
 }
 // se il numero e dispari
 else {
   var numeriDispari = arrayNumeri[i];
   boxRosso.innerHTML =  boxRosso.innerHTML + ' ' + numeriDispari;
  }
 }
