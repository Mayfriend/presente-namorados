document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const equationForm = document.getElementById('equationForm');
    const feedback = document.getElementById('feedback');

    if (yesButton) {
        yesButton.addEventListener('click', function() {
            window.location.href = 'equation.html';
        });
    }

    if (noButton) {
        noButton.addEventListener('click', function() {
            alert('Esta opção faz você voltar para o início da página');
            window.location.href = 'index.html';
        });
    }

    if (equationForm) {
        equationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const answer = document.getElementById('answer').value.trim();
            const correctAnswer = 'i <3 u';
            if (answer === correctAnswer) {
                window.location.href = 'photos.html';
            } else {
                feedback.textContent = 'Tente novamente, não desista do amor.';
                feedback.classList.remove('hidden');
            }
        });
    }
});
