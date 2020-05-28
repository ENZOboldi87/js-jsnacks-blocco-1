// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// intro
alert('l utente inserisce due parole in successione, con due prompt. il software stampa prima la parola piu corta, poi la parola piu lunga')

// creo due domande da porre all utente
var primaDomanda = prompt('inserisci la prima parola').toUpperCase();
var secondaDomanda = prompt('inserisci la seconda parola').toUpperCase();

// variabili
var messaggioPredif = 'Hai inserito ' + primaDomanda + ' nella prima domanda e ' + secondaDomanda + ' nella seconda domanda';
var messaggioFinale = '';
var messaggioStampa = '';

// creo un ciclo
if (primaDomanda.length > secondaDomanda.length) {
  messaggio = primaDomanda + " piu lunga di " + secondaDomanda;
  messaggioStampa = primaDomanda + ' e la parola che stampo';
}

else if (primaDomanda.length < secondaDomanda.length) {
  messaggio = primaDomanda + " e meno lunga di " + secondaDomanda;
  messaggioStampa = secondaDomanda + ' e la parola che stampo';
}

else {
  messaggio = primaDomanda.length + ' e ' + secondaDomanda.length + ' sono parole della stessa lunghezza ';
  messaggioStampa = ' ritenta sarai fortunato';
}

alert(messaggioPredif);
alert(messaggio);
alert(messaggioStampa);
