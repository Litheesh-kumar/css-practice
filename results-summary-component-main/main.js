const resultSummary = document.querySelector('.summary__title');

fetch('./data.json')
.then(res => {
    if(res.ok != true){
        throw new Error("Response not ok");
    }
    return res.json()
})
.then(res => {
    res.forEach(element => {
        const category = element.category.toLowerCase();
        const score = element.score;
        const icon = element.icon;
        const html = `
                    <div class="result__subjects subject--${category}">
                    <p class="subject"><img src=${icon} alt="reaction icons" class="subject__icon">Reaction</p>
                    <p class="subject__score"><span class="marks">${score}</span> / 100</p>
                     </div>
                    `
        resultSummary.insertAdjacentHTML('afterend',html);
    });
})
.catch(err => console.log(err));