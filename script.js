var styles = {
    opacity: "0",
    transitionDuration: "1s",
};

var welcomeElement = document.getElementById("welcome");
welcomeElement.onclick = function() {
    Object.assign(welcomeElement.style, styles);
};