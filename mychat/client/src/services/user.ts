/**
 * Interface of the user
 */
interface IUser {
  name: string;
  secret: string;
  age: number;
  profileImageUrl: string;
}

/**
 * Retrieves an user by username and password
 * @param username The username
 * @param secret The password
 */
function getUser(username: string, secret: string) {
  const response = get<IUser>('users', { key: 'name', value: username }, { key: 'secret', value: secret });
  return handleResponse(response);
}

/**
 * Performs login
 * @param username The username
 * @param secret The password
 */
function login(username: string, secret: string) {
  const user = getUser(username, secret);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  return !!user;
}

/**
 * Performs logout
 */
function logout() {
  localStorage.removeItem('user');
}

/**
 * Registers new user
 * @param username The username
 * @param secret The password
 * @param age The age
 * @param profileImageUrl The profile image url
 */
function register(username: string, secret: string, age: number, profileImageUrl: string) {
  let success = false;
  const user = {
    name: username,
    secret: secret,
    age: age,
    profileImageUrl: profileImageUrl
  };
  const response = post('users', user);
  if (handleResponse(response)) {
    localStorage.setItem('user', JSON.stringify(user));
    success = true;
  }
  return success;
}

/**
 * Verifies if there is a logged user
 */
function check() {
  const currentUser = localStorage.getItem('user');
  if (!currentUser) {
    logout();
  }
}

/**
 * Retrieves current logged user
 */
function getLoggedUser() {
  let user: IUser;
  const storageUser = localStorage.getItem('user');
  if (storageUser) {
    user = JSON.parse(storageUser);
  }
  return user;
}
