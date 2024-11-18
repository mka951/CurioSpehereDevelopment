let style1 = {
    opacity: "0",
};

let style2 = {
    opacity: "1",
    transitionDuration: "1s",
};

let style3 = {
    opacity: "0",
    transitionDuration: "1s",
};

let style4 = {
    visibility: "hidden",
};

var welcomeElement = document.getElementById("welcome");
window.onload = function() {

    Object.assign(welcomeElement.style, style1);

    setTimeout(function() {
        Object.assign(welcomeElement.style, style2);
    }, 500);

    setTimeout(function() {
        Object.assign(welcomeElement.style, style3)
    },3000)

    setTimeout(function() {
        Object.assign(welcomeElement.style, style4)
    },3001)
};