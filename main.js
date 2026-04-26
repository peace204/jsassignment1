

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');


my-form.addEventListener('submit' onSubmit);
function onSubmit(e) {
e.preventDefault();

if(nameInput.value === '' || emailInput.value '') {
    alert('please enter fields');
} else {
    console.log('success');
}
}
