// Переключение между регистрацией и входом
document.getElementById('openLoginForm').addEventListener('click', function() {
    document.getElementById('registrationFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
});

document.getElementById('openRegistrationForm').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registrationFormContainer').style.display = 'block';
});

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Сохраняем логин и пароль в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Регистрация прошла успешно! Теперь вы можете войти.');
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Получаем сохраненные данные
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Проверяем скрытую "фичу" для входа с логином и паролем "kali"
    if (loginUsername === 'kali' && loginPassword === 'kali') {
        alert('Вход выполнен успешно через секретный доступ!');
        // Перенаправляем пользователя на другую страницу
        window.location.href = 'indextwo.html'; // Замените 'success.html' на вашу страницу
        return;
    }

    // Проверяем обычный вход
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Вход выполнен успешно!');
        // Перенаправляем пользователя на другую страницу
        window.location.href = 'indextwo.html'; // Замените 'success.html' на вашу страницу
    } else {
        alert('Неверный логин или пароль.');
    }
});
