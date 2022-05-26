const loginFormEl = document.querySelector(".login-form");

function processesForm(evn) {
    evn.preventDefault();
    const { email, password } = evn.target.elements;

    const emailVel = email.value.trim();
  const passwordVel = password.value.trim();

     if (emailVel === "" || passwordVel ==="" ) {
         alert('Все поля должны быть заполнены!')
     }
    
    const object = {
        [email.name]: emailVel,
        [password.name]: passwordVel ,
    }
    evn.currentTarget.reset(); 
    console.log(object);
}

loginFormEl.addEventListener("submit", processesForm);

