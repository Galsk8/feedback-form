let selectedRating = "";

const form = document.getElementById('feedback-form');
const response = document.getElementById('response');
const emojis = document.querySelectorAll(".emoji");

emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        emojis.forEach(e => e.classList.remove("selected"));
        emoji.classList.add("selected");
        selectedRating = emoji.dataset.value;
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    form.style.display = 'none';

    response.innerHTML = `
    <div class="thank-you">
    <h2>Thank you for your feedback, ${name}!</h2>
    </div>
    `; 
});