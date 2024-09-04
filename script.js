document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#signup .error').forEach(el => el.style.display = 'none');

    // Validate Name
    const name = document.getElementById('signupName').value;
    if (name.trim() === '') {
        document.getElementById('signupNameError').textContent = 'Name is required';
        document.getElementById('signupNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('signupEmail').value;
    if (!validateEmail(email)) {
        document.getElementById('signupEmailError').textContent = 'Invalid email format';
        document.getElementById('signupEmailError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('signupPassword').value;
    if (password.length < 6) {
        document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters long';
        document.getElementById('signupPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Sign Up Successful');
        // Proceed with form submission
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#login .error').forEach(el => el.style.display = 'none');

    // Validate Email
    const email = document.getElementById('loginEmail').value;
    if (!validateEmail(email)) {
        document.getElementById('loginEmailError').textContent = 'Invalid email format';
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('loginPassword').value;
    if (password.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters long';
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Login Successful');
        // Proceed with form submission
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
