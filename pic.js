document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".about-card");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.querySelector(".about-card-inner").style.transform = "rotateY(180deg)";
        });

        card.addEventListener("mouseout", () => {
            card.querySelector(".about-card-inner").style.transform = "rotateY(0deg)";
        });
    });
});
