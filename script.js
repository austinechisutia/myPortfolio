document.addEventListener("DOMContentLoaded", function () {
    const numStars = 20; // Number of stars
    const container = document.createElement("div");
    container.classList.add("stars-container");
    document.body.appendChild(container);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random distance from center (circular layout)
        const radius = Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.6;
        const angle = Math.random() * 360;

        // Convert polar coordinates to Cartesian
        const x = radius * Math.cos(angle) + window.innerWidth / 2;
        const y = radius * Math.sin(angle) + window.innerHeight / 2;

        // Star size and opacity
        const size = Math.random() * 6 + 2; // 2px to 8px
        const opacity = Math.random() * 0.7 + 0.3; // 0.3 to 1

        // Random animation speeds
        const twinkleSpeed = Math.random() * 3 + 2; // 2s to 5s
        const rotationSpeed = Math.random() * 20 + 10; // 10s to 30s

        // Apply styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = opacity;
        star.style.animation = `twinkle ${twinkleSpeed}s infinite alternate, rotateAround ${rotationSpeed}s linear infinite`;

        container.appendChild(star);
    }
});


// xxxxxx