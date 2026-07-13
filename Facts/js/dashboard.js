const percentage = 70;

const progress = document.getElementById("progressBar");

progress.style.width = percentage + "%";

progress.innerHTML = percentage + "%";

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.dataset.link.trim().toLowerCase() + '.html';
    });
});

const navmenus = document.querySelectorAll(".navmenu");

navmenus.forEach(a => {
    a.addEventListener("click", () => {
        window.location.href = a.dataset.link.trim().toLowerCase() + '.html';
    });
});