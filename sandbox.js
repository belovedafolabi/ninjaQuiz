// Form Element
const form = document.getElementById("ninjaForm");
// Score Display Element
const scoreContent = document.getElementById("scoreContent");
// Score Percentage
const scorePercentage = document.getElementById("scorePercentage");


form.addEventListener('submit', e =>{
    e.preventDefault();
    // Mark quiz function from quiz.js
    const score = markQuiz(questionAnswers);

    // Percentage based on user score
    const scorePercent = ( score / questionAnswers.length) * 100;
    let i = 0;
    // Timer to animate score by increasing from zero to actual score
    const timer = setInterval(()=>{
        i++;
        scorePercentage.textContent = ` ${i}% `;
        if(i === scorePercent){
            clearInterval(timer);
        }
    }, 50);

    // Display the score percentage after quiz is submitted
    scoreContent.classList.remove('hidden');
    
    // Scroll back to top smoothly
    function smoothScrollToTop() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 11);
        }
    }
    smoothScrollToTop();
});