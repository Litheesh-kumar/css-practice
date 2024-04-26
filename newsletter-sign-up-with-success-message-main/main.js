const emailInput = document.querySelector('#email');
const emailLabel = document.querySelector('.email');
const submitButton = document.querySelector('.submit');
const closeButton = document.querySelector('.close');
const cardContainer = document.querySelector('.card__container');
const successContainer = document.querySelector('.success__container');


emailInput.addEventListener('focus',(e)=>{
    if(emailInput.classList.contains('error') || emailLabel.classList.contains('error')){
        emailInput.classList.remove('error');
        emailLabel.classList.remove('error');
    }
})
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if(!isValid){
        emailLabel.classList.add('error');
        emailInput.classList.add('error');
        return
    }
    cardContainer.classList.remove('show');
    setTimeout(()=>{
        successContainer.classList.add('show');
    },400)
});

closeButton.addEventListener('click',(e)=>{
    e.preventDefault();
    successContainer.classList.remove('show');
    setTimeout(()=>{
        cardContainer.classList.add('show');
    },400)
});