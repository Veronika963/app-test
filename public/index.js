const form = document.querySelector(".add-contact");
const number = document.querySelector(".number");
const name = document.querySelector(".name");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(number.value, name.value)
})


  

