function crackpassword() {
    let secretPassword = document.getElementById('password').value;
  
    fetch("./sample.json")
      .then((res) => res.json())
      .then((data) => {
        let found = false;
  
        for (let sample of data) {
        
          if (secretPassword === sample.password) {
            document.getElementById("output").innerHTML = `<h2>Password Cracked!</h2>Your password is: ${secretPassword}`;
            found = true;
            break;
          }
        }
  
        if (!found) {
          document.getElementById("output").innerHTML = "Password not found in the data.";
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
  
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
  }
  
