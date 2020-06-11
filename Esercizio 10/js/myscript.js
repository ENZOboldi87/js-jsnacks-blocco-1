// L’utente ha a disposizione un input in cui inserire
// un nome di un giocatore e una select tramite
 // la quale puoi scegliere se il giocatore va
 // inserito tra i titolari o tra le riserve.
// Quando si clicca sul button “Aggiungi”
// il nome viene aggiunto nella lista dei titolari
 // se l’utente ha scelto titolari, altrimenti tra le riserve.

$(document).ready(function() {

  $('.bottone').click(function() {
    var testo = $('.testo').val();
    var titOris = $('.prova').val();
    // se il giocatore imposta su titolari la lista dove vuole essere inserito
    if (titOris === 'tit') {
      // il nome viene appeso alla lista dei titolari
      $('.titolari ul').append('<li>' + testo + '<button class="delete" type="button" name="button">Elimina</button></li>');
    }
    else {
      // altrimenti il nome viene appeso alla lista delle riserve
      $('.riserve ul').append('<li>' + testo + '<button class="delete" type="button" name="button">Elimina</button></li>');
    }
  });

// al click su elimina, il giocatore esce dalla lista
  $(document).on('click', '.delete', function () {
    $(this).parent().remove();
  })

  

});
