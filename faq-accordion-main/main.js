const faqContainer = document.querySelector('.faq__container');
const faqAnswers = document.querySelectorAll('.faq__answer');

faqContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('faq__question') || e.target.classList.contains('icons')){
        const faqAnswer = e.target.parentElement.querySelector('.faq__answer');
        const iconImg = e.target.parentElement.querySelector('.icons');
        if(faqAnswer.classList.contains('active')){
            faqAnswer.classList.remove('active');
            iconImg.setAttribute("src",'./assets/images/icon-plus.svg');
        } else {
            faqAnswers.forEach(el => {
                el.classList.remove('active');
                el.previousElementSibling.setAttribute("src",'./assets/images/icon-plus.svg');
            });
            faqAnswer.classList.add('active');
            iconImg.setAttribute("src",'./assets/images/icon-minus.svg');
        }
    }
});