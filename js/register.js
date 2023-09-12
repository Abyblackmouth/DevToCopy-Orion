import { BADHINTS } from "dns";

const form = document.forms["form_card"]
console.log(form);

form.onsubmit = async (event) => {
    event.preventDefault();
    const registerData = {
        avatar: form.actual-btn.value,
        name: form.nameInput.value,
        username: form.usernameInput.value,
        email: form.emailInput.value,
        password: form.passwordInput.value
    }
    const response = await fetch("http://localhost:3002/singup",{
        method: "POST",
        body: registerData
    })
    console.log(response.json());
  }