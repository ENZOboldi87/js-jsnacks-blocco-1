// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// intro
alert('Il software deve chiedere per 5 volte all utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti');

// variabili
var somma = 0;


// ciclo for
for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt('inserisci un numero'));
  somma = somma + numeroUtente;
}

// messaggio di Stampa
alert('la somma dei tuoi numeri e ' + somma);
