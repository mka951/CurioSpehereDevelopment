var styles = {
    fontSize: "150px",
    opacity: "0",
    transitionDuration: "2s",
};

var welcomeElement = document.getElementById("welcome");
welcomeElement.onclick = function() {
    Object.assign(welcomeElement.style, styles);
};
