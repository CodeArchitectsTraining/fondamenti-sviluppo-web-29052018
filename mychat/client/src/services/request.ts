/**
 * Interface of the server response
 */
interface IResponse<T> {
  data?: T;
  error?: string;
}

/**
 * Retrieves data from server
 * @param route Server route
 * @param params Request parameters
 */
function get<T>(route: string, ...params: { key: string, value: string }[]): IResponse<T> {
  let parameter = '';
  params.forEach((p, i) => parameter = `${parameter}${i > 0 ? '&' : ''}${p.key}=${p.value}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:3000/${route}?${parameter}`, false);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  return xhr.responseText && JSON.parse(xhr.responseText);
}

/**
 * Posts data to server
 * @param route Server route
 * @param body Body to post
 */
function post<T>(route: string, body: T): IResponse<boolean> {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `http://localhost:3000/${route}`, false);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(body));
  return xhr.responseText && JSON.parse(xhr.responseText);
}

/**
 * Handles server response
 * @param response Response received from server
 */
function handleResponse<T>(response: IResponse<T>) {
  if (!response) {
    alert('Internal error');
  } else if (response.error) {
    alert(response.error);
  } else {
    return response.data;
  }
}

/**
 * Go to previous page
 */
function back() {
  window.history.back();
}
