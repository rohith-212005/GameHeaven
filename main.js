document.addEventListener("DOMContentLoaded", () => {
    const viewDetailsButtons = document.querySelectorAll(".game-card button");

    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Redirect to the details page with the game's ID as a query parameter
            window.location.href = `details.html?gameId=${index}`;
        });
    });
});
