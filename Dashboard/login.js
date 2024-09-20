let login = document.querySelector('#login');
let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let cross1 = document.querySelector('.cross1');
let cross2 = document.querySelector('.cross2');
let log = document.querySelector('.log');
let sign = document.querySelector('.sign');
let body = document.querySelector('body');
let eyeicons = document.querySelectorAll('.eyeicon');
let overlay = document.querySelector('#overlay');

form1.style.display = 'none';
form2.style.display = 'none';

function clearFormInputs(form) {
    let inputs = form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
    inputs.forEach(input => input.value = '');
    // Clear all error messages
    let errors = form.querySelectorAll('.popup-message.error');
    errors.forEach(error => error.textContent = '');
}

login.addEventListener('click', () => {
    form2.style.display = 'block';
    form1.style.display = 'none';
    overlay.style.display = 'block'; // Show overlay
    clearFormInputs(form1);
    document.body.classList.add('no-scroll'); // Prevent scrolling
    document.body.style.overflow = 'hidden';
});

sign.addEventListener('click', () => {
    form2.style.display = 'none';
    form1.style.display = 'block';
    overlay.style.display = 'block'; // Show overlay
    clearFormInputs(form2);
});

log.addEventListener('click', () => {
    form1.style.display = 'none';
    form2.style.display = 'block';
    overlay.style.display = 'block'; // Show overlay
    clearFormInputs(form1);
});

cross1.addEventListener('click', () => {
    form1.style.display = 'none';
    overlay.style.display = 'none'; // Hide overlay
    clearFormInputs(form1);
    document.body.style.overflow = 'auto';
});

cross2.addEventListener('click', () => {
    form2.style.display = 'none';
    overlay.style.display = 'none'; // Hide overlay
    clearFormInputs(form2);
    document.body.style.overflow = 'auto';
});

eyeicons.forEach(icon => {
    icon.addEventListener('click', () => {
        let passwordInput = icon.previousElementSibling;

        if (icon.classList.contains('fa-eye-slash')) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
            passwordInput.type = 'text';
        } else {
            icon.classList.add('fa-eye-slash');
            icon.classList.remove('fa-eye');
            passwordInput.type = 'password';
        }
    });
});

function validateGmail(email) {
    return email.endsWith('@gmail.com');
}

function isAdminEmail(email) {
    return email.startsWith('admin') && email.endsWith('@gmail.com');
}

function showError(inputElement, message) {
    const errorElement = inputElement.parentNode.querySelector('.popup-message.error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(inputElement) {
    const errorElement = inputElement.parentNode.querySelector('.popup-message.error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.querySelector('#signup-btn');

    signupButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.querySelector('#signup-username');
        const email = document.querySelector('#signup-email');
        const password = document.querySelector('#signup-password');
        const confirmPassword = document.querySelector('#signup-confirm-password');

        let isValid = true;

        // Validate username
        if (!username.value.trim()) {
            showError(username, 'Please enter your username.');
            isValid = false;
        } else {
            hideError(username);
        }

        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Please enter your email.');
            isValid = false;
        } else if (!validateGmail(email.value.trim())) {
            showError(email, 'Email must end with @gmail.com.');
            isValid = false;
        } else {
            hideError(email);
        }

        // Validate password
        if (!password.value) {
            showError(password, 'Please enter your password.');
            isValid = false;
        } else {
            hideError(password);
        }

        // Validate confirm password
        if (!confirmPassword.value) {
            showError(confirmPassword, 'Please confirm your password.');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match.');
            isValid = false;
        } else {
            hideError(confirmPassword);
        }

        if (isValid) {
            if (isAdminEmail(email.value.trim())) {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'index.html';
            }
        }
    });
});

document.querySelector('#form2 .btn').addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.querySelector('#form2 input[type="email"]');
    const password = document.querySelector('#form2 input[type="password"]');
    
    let isValid = true;

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Please enter your email.');
        isValid = false;
    } else if (!validateGmail(email.value.trim())) {
        showError(email, 'Email must end with @gmail.com.');
        isValid = false;
    } else {
        hideError(email);
    }

    // Validate password
    if (!password.value) {
        showError(password, 'Please enter your password.');
        isValid = false;
    } else {
        hideError(password);
    }

    if (isValid) {
        if (isAdminEmail(email.value.trim())) {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }
});
