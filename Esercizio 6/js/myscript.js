// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

// genero una lista di nomi
var nomi = ['giovanni', 'giuseppe', 'francesco', 'giacomo'];

// genero una lista di cognomi
var cognomi = ['rossi', 'presti', 'rotolo', 'duca'];

// genero una lista falsa di nomi e cognomi
var fakeList = [];

// numero di falsi nomi  da generare
var falsiNomi = 5

// creo un ciclo for per stampare i rispettivi array

for (var i = 0; i < falsiNomi; i++) {
  // genero un indice casuale dei nomi
  var nomiCasInd = Math.floor(Math.random()* nomi.length);
  var nomiCas = nomi[nomiCasInd];

  // genero un indice casuale per i cognomi
  var cognomiCasInd = Math.floor(Math.random()* cognomi.length);
  var cognomiCas = cognomi[nomiCasInd];

  // genero un nome e cognome falso dato dalle precedenti variabili(casuali)
  var falsoNomeEcognome = nomiCas + ' ' + cognomiCas;

  // per aggiungere questo falso nome nella lista fake
  fakeList.push(falsoNomeEcognome);


  console.log(falsoNomeEcognome);
}
