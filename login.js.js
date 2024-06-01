function validateForm() {
    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let isValid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    } else if (username.length < 6) {
        document.getElementById('usernameError').textContent = 'Username must be at least 6 characters long';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 9) {
        document.getElementById('passwordError').textContent = 'Password must be at least 9 characters long';
        isValid = false;
    }

    return isValid;
}
