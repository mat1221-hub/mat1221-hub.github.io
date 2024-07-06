document.addEventListener("DOMContentLoaded", function() {
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8333",
        "#A633FF", "#33FFF5", "#FF5733", "#FF333F", "#33FF9F"
    ];

    let currentColorIndex = 0;

    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    changeBackgroundColor();
    setInterval(changeBackgroundColor, 60000);
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show-menu');
}
