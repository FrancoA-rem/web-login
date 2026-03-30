// Cambio de login a registro
const container = document.getElementById("main-container");
const btnRegister = document.getElementById("btn-show-register");
const btnLogin = document.getElementById("btn-show-login");

// Cuando haces clic en "Register", añade la clase 'active'
btnRegister.addEventListener("click", () => {
  container.classList.add("active");
});

// Cuando haces clic en "Login", quita la clase 'active'
btnLogin.addEventListener("click", () => {
  container.classList.remove("active");
});

//Validacion de datos login
const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.getElementById("miFormulario");
const parrafo = document.getElementById("user-warnings");
const parrafo2 = document.getElementById("password-warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Con esto evito que la pagina se recargue

  //Limpio las advertencias previas
  parrafo.innerHTML = "";
  parrafo2.innerHTML = "";

  let hayErrores = false;

  //Validacion del usuario
  if (user.value.length < 6) {
    parrafo.innerHTML = "Username is not valid";
    hayErrores = true;
  }
  //Validacion de contra
  if (password.value.length < 8) {
    parrafo2.innerHTML = "The password is not valid";
    hayErrores = true;
  }
  //Si no hay ningun error se resetea
  if (!hayErrores) {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      parrafo.innerHTML = "User not found";
      return;
    }

    if (
      user.value === storedData.user &&
      password.value === storedData.password
    ) {
      alert("Welcome " + user.value);
      form.reset();
    } else {
      parrafo2.innerHTML = "Incorrect credentials";
    }
  }

  if (!hayErrores) {
    form.reset();
  }
});

// Validacion de datos register
const formRegister = document.getElementById("form-register");
const userReg = document.getElementById("user-reg");
const emailReg = document.getElementById("email-reg");
const passReg = document.getElementById("pass-reg");
const passConfirmReg = document.getElementById("pass-confirm-reg");
const user_warning_reg = document.getElementById("user-warning-reg");
const email_warning_reg = document.getElementById("email-warning-reg");
const pass_warning_reg = document.getElementById("pass-warning-reg");
const cpass_warning_reg = document.getElementById("cpass-warning-reg");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  user_warning_reg.innerHTML = "";
  email_warning_reg.innerHTML = "";
  pass_warning_reg.innerHTML = "";
  cpass_warning_reg.innerHTML = "";

  let hayErrores = false;

  // Validación de Usuario (mínimo 6 caracteres)
  if (userReg.value.length < 6) {
    user_warning_reg.innerHTML = "Username is not valid";
    hayErrores = true;
  }

  // Validación de Email básica
  if (!emailReg.value.includes("@")) {
    email_warning_reg.innerHTML = "Email is not valid";
    hayErrores = true;
  }

  // Validación de Contraseña (mínimo 8 caracteres)
  if (passReg.value.length < 8) {
    pass_warning_reg.innerHTML = "The Password is not valid";
    hayErrores = true;
  }

  // VALIDACIÓN CLAVE: ¿Coinciden las contraseñas?
  if (passReg.value !== passConfirmReg.value) {
    cpass_warning_reg.innerHTML = "Passwords do not match";
    hayErrores = true;
  }

  // Resultado final
  if (!hayErrores) {
    const userData = {
      //Crea un objeto en la memoria
      user: userReg.value, //y agrupa esta informacion
      email: emailReg.value,
      password: passReg.value,
    };

    localStorage.setItem("userData", JSON.stringify(userData)); //el stringify converte el objet en cadena de texto y el setItem guarda este texto en el disco duro del navegador

    alert("Account created successfully!");
    formRegister.reset();
  }
  /*if (!hayErrores) {
    alert("Account created successfully!");
    formRegister.reset();
  }*/
});
