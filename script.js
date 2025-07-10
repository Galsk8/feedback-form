const form = document.getElementById('feedback-form');
const response = document.getElementById('response');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    response.textContent = `Thank you, ${name}! Your feedback: "${message}"`;
});