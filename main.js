const button = document.getElementById("fumo");
const sound = document.getElementById("squek");

button.addEventListener("click", () => {
  sound.play();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    
    const validUsername = 'JhepoyGaming';
    const validPassword = '123456789';

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'https://youtu.be/xvFZjo5PgG0?si=6x8jMBl8ULq9-HCJ';
    } else {
        errorMessage.textContent = 'Incorrect Username or Password';
        errorMessage.style.display = 'block';
    }
});