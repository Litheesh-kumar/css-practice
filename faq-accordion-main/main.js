const faqElements = document.querySelectorAll('.faq__elements');
const faqQuestion = document.querySelectorAll('.faq__question');
const faqAnswer = document.querySelectorAll('.faq__answer');

const revealAnswer = (i) =>{
    for(k = 0 ; k < faqQuestion.length; k++){
        if(k != i){
        faqAnswer[k].classList.remove('active');
        faqicons[k].classList.remove('minus');
        faqicons[k].src = "./assets/images/icon-plus.svg";
        }
    }

    if(!faqAnswer[i].classList.contains('active')){
        faqAnswer[i].classList.add('active');
        faqicons[i].classList.remove('plus');
        faqicons[i].classList.add('minus');
        faqicons[i].src = "./assets/images/icon-minus.svg"
    } else {
        faqAnswer[i].classList.remove('active');
        faqicons[i].classList.remove('minus');
        faqicons[i].classList.remove('plus');
        faqicons[i].src = "./assets/images/icon-plus.svg"
    }
}
faqQuestion.forEach((el,i) => {
    el.addEventListener('click',()=>{
        revealAnswer(i);
    });
    const html = `<img src="./assets/images/icon-plus.svg" alt="" class="icons plus">`;
    faqElements[i].insertAdjacentHTML("afterbegin",html);
})

const faqicons = document.querySelectorAll('.icons');
faqicons.forEach((el,i) =>{
    el.addEventListener('click',()=>{
        revealAnswer(i);
    });
});
