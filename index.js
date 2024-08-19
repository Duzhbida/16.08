const questions = document.querySelectorAll('#faq .faq-quetion');
const answers = document.querySelectorAll('#faq .faq-answer');
const pluses = document.querySelectorAll('#faq .faq-quetion span');
questions.forEach((quetion) => {
    quetion.addEventListener('click', () => {
        const  answerCurrent= quetion.nextElementSibling;
        console.dir(answerCurrent)
        const plus = quetion.lastChild;
        const isOpen = answerCurrent.classList.contains('open');
    answers.forEach((answer) => {
    answer.classList.remove('open');
    answer.style.maxHeight = 0 + 'px';
});
    pluses.forEach((pl) => {
    pl.textContent = '+';
});
if (isOpen === false) {
    plus.textContent = '-';
    answerCurrent.classList.add('open');
    answerCurrent.style.maxHeight = answerCurrent.scrollHeight + 'px';
}
});
});