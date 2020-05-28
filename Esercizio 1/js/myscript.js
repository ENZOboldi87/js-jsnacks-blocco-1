// esercizio 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// intro
alert("L\’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.")

// creo le domande da porre
var primaDomanda = parseInt(prompt("inserisci un numero"));
var secondaDomanda = parseInt(prompt("inserisci un altro numero"));

// variabili
var messaggioPredif = 'Hai inserito ' + primaDomanda + ' nella prima domanda e ' + secondaDomanda + ' nella seconda domanda';
var messaggioFinale = '';
var messaggioStampa = '';
<<<<<<< HEAD
=======
var messaggioErrore = 'devi inserire un numero valido';

>>>>>>> master

// creo un ciclo
if (primaDomanda > secondaDomanda) {
  messaggio = primaDomanda + " e maggiore di " + secondaDomanda;
  messaggioStampa = primaDomanda + ' e il numero che stampo';
}

else if (primaDomanda < secondaDomanda) {
  messaggio = primaDomanda + " e minore di " + secondaDomanda;
  messaggioStampa = secondaDomanda + ' e il numero che stampo';
}

else {
  messaggio = primaDomanda + ' e ' + secondaDomanda + ' sono numeri uguali';
  messaggioStampa = ' non ce nessun numero maggiore';
}

alert(messaggioPredif);
alert(messaggio);
alert(messaggioStampa);
