const submit = document.getElementById('login');
const loginError = document.querySelector('.login-message-error');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == "admin@alura.com"){
        if(password.value == "123456"){
            window.location.href = './admin.html'
        } else {
            loginError.classList.add('invalid-login')
        }
    } else {
        loginError.classList.add('invalid-login')
    }
})



