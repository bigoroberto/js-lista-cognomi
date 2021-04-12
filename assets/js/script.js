//creo una lista cognomi;
var lista_cognomi = [
  "Capozzi",
  "Nita",
  "Beretta",
  "Pisanelli",
  "Russo",
  "Belli",
  "Logallo",
  "Ceccarelli",
  "DeSantis",
  "Laqualunque",
  "Berlusconi",
  "Ronaldo",
  "Messi"
];

//con .sort faccio in modo che l'array mi esca in ordine alfabetico;



//chiedo all'utente di inserire il suo cognome;
var last_name_utente = prompt("Il tuo cognome?");
lista_cognomi.push (last_name_utente);
lista_cognomi = lista_cognomi.sort();
for(var i = 0; i<lista_cognomi.length; i++){
  var element_list = lista_cognomi[i];
  var posizione_lista = i + 1;
  var elemento_precedente = document.getElementById("lista").innerHTML;

  document.getElementById("lista").innerHTML = elemento_precedente + "<li>" + element_list + " il tuo cognome si trova nella posizione n:  " + posizione_lista;



}
