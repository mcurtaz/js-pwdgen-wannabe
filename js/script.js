// Chiedo all'utente il nome e creo una variabile

var name = prompt("Qual è il tuo nome?");

// Chiedo all'utente il cognome e creo una variabile

var lastName = prompt("Qual è il tuo cognome?");

// Chiedo all'utente il colore preferito e creo una variabile

var color = prompt("Qual è il tuo colore preferito?");

console.log ("nome:", name, " cognome:", lastName, " colore:", color)

// Restituisco come password generata una stringa composta da nome + cognome + colore preferito + 19

document.getElementById("nuova-password").innerHTML = name + lastName + color + "19";
