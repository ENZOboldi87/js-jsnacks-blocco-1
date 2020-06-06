// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali
// tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


// devo far inserire un numero n all utente
var numUtente = parseInt(prompt('inserisci un numero da 1 a 100'));

// devo generare un array di 10 numeri casuali a 1 a 100
for (var i = 0; i < numUtente; i++) {
  var arrayGenerato = generaArray();
  console.log(arrayGenerato);

}
// stampare l array


// funzione per generare array casuali
function generaArray() {
  var arrayGenerato = [];
  for (var i = 0; i < 10; i++) {
    var numeroCasuale = Math.floor(Math.random() * 100) + 1;
    arrayGenerato.push(numeroCasuale);
  }
  return arrayGenerato;
}
