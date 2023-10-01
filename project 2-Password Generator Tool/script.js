function generatePassword() {
    const passwordLength = document.getElementById('passwordLength').value;
    const password = randomPasswordGeneration(passwordLength);
    document.getElementById('output').innerText = 'Generated Password: ' + password;
  }
  
  function randomPasswordGeneration(length) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^&*?';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  