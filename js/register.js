function register() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');

    if (name === '' || surname === '' || username === '' || password === '' || confirmPassword === '') {
        message.textContent = 'Barcha maydonlarni to\'ldiring!';
        message.className = 'error';
    } else if (password !== confirmPassword) {
        message.textContent = 'Parollar mos kelmadi';
        message.className = 'error';
    } else if (password.length < 8) {
        message.textContent = 'Parol kamida 8 belgidan iborat bo\'lishi kerak';
        message.className = 'error';
    } else {
        // Display the input data
        message.textContent = 'Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz:';
        message.className = 'success';

        // Create a string with the input data
        let inputData = `Ism: ${name}, Familya: ${surname}, Foydalanuvchi nomi: ${username}, Parol: ${password}`;

        // Display the input data
        alert(inputData);
    }
}