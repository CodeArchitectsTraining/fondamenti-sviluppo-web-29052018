/**
 * Interface of the message
 */
interface IMessage {
  userName: string;
  text: string;
  date: Date;
}

/**
 * Sends a message
 * @param username The username
 * @param secret The password
 * @param text The text of the message
 */
function sendMessage(username: string, secret: string, text: string) {
  let success = false;
  const message = {
    userName: username,
    userSecret: secret,
    text: text
  };
  const response = post('messages', message);
  if (handleResponse(response)) {
    success = true;
  }
  return success;
}

/**
 * Retrieves all messages
 */
function getMessages() {
  const response = get<IMessage[]>('messages');
  return handleResponse(response);
}
