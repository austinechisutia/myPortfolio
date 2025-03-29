document.addEventListener("DOMContentLoaded", function () {
    const numStars = 120; // Increased number of stars
    const container = document.createElement("div");
    container.classList.add("stars-container");
    document.body.appendChild(container);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position within viewport
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // Larger sizes, adding variety
        const size = Math.random() * 6 + 2; // Between 2px and 8px
        const opacity = Math.random() * 0.7 + 0.3; // Between 0.3 and 1

        // Random color (subtle blue/white variations)
        const colors = ["#ffffff", "#ddeeff", "#aaccee", "#ffffdd"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Apply styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = opacity;
        star.style.backgroundColor = color;

        // Random animation duration for twinkling effect
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;

        container.appendChild(star);
    }
});
