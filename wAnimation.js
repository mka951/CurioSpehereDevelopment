window.onload = function() {
const wElement = document.getElementById("wtext");
const wElementBg = document.getElementById("wsec");

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
    
    Object.assign(wElement.style, style1);

    setTimeout(function() {
        Object.assign(wElement.style, style2);
    }, 100);

    setTimeout(function() {
        Object.assign(wElement.style, style3)
    },2600)
    setTimeout(function() {
        Object.assign(wElementBg.style, style3)
    },3100)

    setTimeout(function() {
        Object.assign(wElement.style, style4)
    },3600) // remember to change to 3600 debugging purpose only
    setTimeout(function() {
        Object.assign(wElementBg.style, style4)
    },4100) // 4100
};
