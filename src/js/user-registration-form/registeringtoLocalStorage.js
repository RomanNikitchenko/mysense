// Функция для регистрации пользователя
function register(username, password) {
  // Получаем сохраненных пользователей из локального хранилища
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Проверяем, не занят ли выбранный username
  var isUsernameTaken = users.some(function (user) {
    return user.username === username;
  });

  if (isUsernameTaken) {
    alert('Имя пользователя уже занято.');
    return;
  }

  // Создаем нового пользователя
  var newUser = {
    username: username,
    password: password,
  };

  // Добавляем нового пользователя в список
  users.push(newUser);

  // Сохраняем обновленный список пользователей в локальное хранилище
  localStorage.setItem('users', JSON.stringify(users));

  alert('Пользователь успешно зарегистрирован.');
}

// Функция для выполнения входа пользователя
function login(username, password) {
  // Получаем сохраненных пользователей из локального хранилища
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Ищем пользователя с указанным именем пользователя
  var user = users.find(function (user) {
    return user.username === username;
  });

  if (user && user.password === password) {
    // Сохраняем информацию о текущем пользователе в локальное хранилище
    localStorage.setItem('currentUser', JSON.stringify(user));

    alert('Вы успешно вошли в систему.');
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    // Неверное имя пользователя или пароль
    alert('Неверное имя пользователя или пароль.');
  }
}

// Функция для разлогинивания пользователя
function logout() {
  // Удаляем информацию о текущем пользователе из локального хранилища
  localStorage.removeItem('currentUser');

  alert('Вы успешно вышли из системы.');
  // Вы можете выполнить перенаправление на страницу входа или другую страницу
}

// Функция для проверки, вошел ли пользователь в систему
function checkLoggedIn() {
  // Проверяем, есть ли информация о текущем пользователе в локальном хранилище
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    alert('Пользователь уже вошел в систему.');
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    alert('Пользователь не вошел в систему.');
    // Вы можете выполнить перенаправление на страницу входа или другую страницу
  }
}

// Пример использования функций:

// Регистрация нового пользователя
// register('admin', 'password');

// Вход пользователя
// login('admin', 'password');

// Проверка, вошел ли пользователь в систему
// checkLoggedIn();

// Разлогинивание пользователя
// logout();

// Проверка, вошел ли пользователь в систему после разлогинивания
// checkLoggedIn();
