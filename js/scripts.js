/*
1. Chiedo il nome all'utente e salvo il valore
*/

const userFirstName = prompt('Qual è il tuo nome?');
console.log('Il nome dell utente è:', userFirstName);
/*
2. Chiedo il cognome all'utente e salvo il valore
*/

const userLastName = prompt('Qual è il tuo cognome?');
console.log('Il cognome dell utente è:', userLastName);

/*
3. Chiedo il colore all'utente e mi salvo il valore
*/

const userFavColor = prompt('Qual è il tuo colore preferito?');
console.log('Il colore preferito dell utente è:', userFavColor);

/*
4. Inserire la concatenazione dei valore salvati e della scritta 130 alla fine della pagina
*/

const pwd = userFirstName + userLastName + userFavColor + '130';

console.log('La password è:', pwd);

document.writeln('La tua password è: ' + pwd);