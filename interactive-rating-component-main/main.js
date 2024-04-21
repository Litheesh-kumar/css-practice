const stars = document.querySelector('.stars');
const starCount = document.querySelectorAll('.star__count');
const submitButton = document.querySelector('.btn__submit');
const thankContainer = document.querySelector('.thank__container');
const ratingContainer = document.querySelector('.rating__container');
stars.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('star__count')){
        starCount.forEach(el =>{
            el.classList.remove('selected');
        })
        e.target.classList.add('selected');
    }
});

submitButton.addEventListener('click',()=>{
    const count = document.querySelector('.selected').textContent;
    if(count == null){
        return;
    }
    ratingContainer.classList.add('hidden');
    thankContainer.classList.remove('hidden');
    document.querySelector('.selection').textContent= `You selected out ${count} of 5`;
    setTimeout(() => {
        ratingContainer.classList.remove('hidden');
        thankContainer.classList.add('hidden');
    }, 3000);
});