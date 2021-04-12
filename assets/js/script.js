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

//chiedo all'utente di inserire il suo cognome;
var last_name_utente = prompt("Il tuo cognome?");

//pusho-spedisco all'array la risposta dell'utente;
lista_cognomi.push (last_name_utente);

//con .sort faccio in modo che l'array mi esca in ordine alfabetico;
lista_cognomi = lista_cognomi.sort();

//ciclo con for, imposto la variabile i = 0 di default; imposto la condizione (i<lista_cognomi.length); vado ad incrementare per il numero totale di cogomi che ho nell'array (i++);
for(var i = 0; i<lista_cognomi.length; i++){

  //crao una variabile per identificare tutti i nomi della lista_cognomi, ogni oggetto oggetto della lista è "i" quindi scriverò: nuova var = lista-cognomi[i];
  var element_list = lista_cognomi[i];

  //per non far partire da 0 aggiungo ad "i" + 1 e li racchiudo dentro una nuova variabile;
  var posizione_lista = i + 1;

  //creo un'elemento precedente per stampare le "i" che ho gia all'interno dell'array; 
  var elemento_precedente = document.getElementById("lista").innerHTML;

  //faccio stampare gli elementi precedenti + il cognome dell'utente inserito ed il posizionamento. tutto racchiuso in un "<li></li>"
  document.getElementById("lista").innerHTML = elemento_precedente + "<li>" + element_list + " il cognome si trova nella posizione n:  " + posizione_lista;
}
