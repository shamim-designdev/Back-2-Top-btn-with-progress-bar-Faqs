document.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const progressCircle = document.querySelector('.progress-circle circle');
    const scrollPosition = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    
    // Calculate the stroke-dashoffset based on the scroll percentage
    const offset = 176 - (scrollPercentage / 100) * 176;
    progressCircle.style.strokeDashoffset = offset;

    // Show or hide the button based on scroll position
    if (scrollPosition > 200) {
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// faqs section
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            this.classList.toggle('active');

            // Smooth toggle for answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.remove('show');
                answer.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close other answers if needed (accordion effect)
                faqQuestions.forEach(q => {
                    if (q !== this) {
                        const otherAnswer = q.nextElementSibling;
                        otherAnswer.style.maxHeight = null;
                        otherAnswer.classList.remove('show');
                        q.classList.remove('active');
                        q.querySelector('i').style.transform = 'rotate(0deg)';
                    }
                });

                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.add('show');
                answer.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
