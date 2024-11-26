const wElement = document.getElementById("wtext");
const wElementBg = document.getElementById("wsec");
window.onload = function() {

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
    
    // Object.assign(wElement.style, style1);

    // setTimeout(function() {
    //     Object.assign(wElement.style, style2);
    // }, 1000);

    // setTimeout(function() {
    //     Object.assign(wElement.style, style3)
    // },3500)
    // setTimeout(function() {
    //     Object.assign(wElementBg.style, style3)
    // },4000)

    setTimeout(function() {
        Object.assign(wElement.style, style4)
    },0)
    setTimeout(function() {
        Object.assign(wElementBg.style, style4)
    },0)
};
