// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

alert('In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all utente il suo nome e comunicagli se puo partecipare alla festa o no');


// creo array con i nomi degli invitati
var arrayInvitati = ['Gino', 'Pino', 'Filippo', 'Daniele', 'Giuseppe', 'Vincenzo', 'Armando', 'Totuccio', 'Totino',];

// domanda intro
var messaggioBenvenuto = 'Benvenuto!! si entra solo in lista. ';
// domanda utente
var nomeUtente = prompt(messaggioBenvenuto + 'Come ti chiami?');
// messaggio
var messaggio = 'mi dispiace ' + nomeUtente + ' ma non sei in lista';
console.log(nomeUtente);


for (var i = 0; i < arrayInvitati.length; i++) {
  console.log(arrayInvitati[i]);
  if (nomeUtente === arrayInvitati[i]) {
    messaggio = 'Benvenuto ' + nomeUtente + ' buon diverimento!!';
  }

}

alert(messaggio);
