const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value.trim() === ""|| password.value.trim() === "") {
        return alert('All form fields must be filled in');
    };
     
    

   console.log({ Email: `${email.value}`, Password: `${password.value}`});
    event.currentTarget.reset();
}  

