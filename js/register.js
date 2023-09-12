const form = document.forms["form_card"]
console.log(form);

form.onsubmit = async (event) => {
    event.preventDefault();
    const registerData = {
        name: form.nameInput.value,
        lastName: form.lastnameInput.value,
        username: form.usernameInput.value,
        email: form.emailInput.value,
        password: form.passwordInput.value
    }
    const response = await fetch("http://localhost:3000/singup",{
        method: "POST",
        body: registerData
    })
    console.log(response.json());
  }