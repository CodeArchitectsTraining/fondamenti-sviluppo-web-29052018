let loggedUser = getLoggedUser();

/**
 * Performs logout
 */
function onLogout() {
  // Funzione da chiamare nel momento in cui si clicca sul pulsante di logout
  // Deve eseguire il logout e reindirizzare alla pagina di login
}

function send() {
  // Funzione da chiamare nel momento in cui si clicca sul pulsante "Invia messaggio"
  // Deve inviare il messaggio scritto nella textarea e svuotare il contenuto
  // della textarea stessa. Infine deve rieseguire il setup dei messaggi
}

function setupMessages() {
  // Recuperare i messaggi dal server
  const messagesElement = document.getElementById('messages');
  messagesElement.innerHTML = '';
// -----------------------------------------------------------
  // Ciclare tutti i messaggi e creare per ognuno di essi un elemento HTML
  // contenente il messaggio, il nome dell'utente e la foto del profilo.
  // Tali elementi HTML andranno "appesi" all'elemento con id "messages"
}

setTimeout(() => {
  setupMessages();
}, 1);
