// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

// intro
alert('Chiedi un numero di 4 cifre all utente e calcola la somma di tutte le cifre che compongono il numero');

// domanda all utente
var numeroUtente = parseInt(prompt('Inserisci un numero di quattro cifre'));

// variabili
var numeroUtenteStringa = numeroUtente.toString();
var numeroUtenteArray = numeroUtenteStringa.split("");
var somma = 0;
var messaggioFinale = 'la somma dei numeri immessi e ';

for (var i = 0; i < numeroUtenteArray.length; i++) {
  somma = somma + parseInt(numeroUtenteArray[i]);

}

alert(messaggioFinale + somma)
