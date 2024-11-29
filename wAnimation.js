window.onload = function() {
const wElement = document.getElementById("wtext");
const wElementBg = document.getElementById("wsec");
const ISEC = document.getElementById("isecid");

    let style1 = {
        opacity: "0",
        visibility: "visible",
    };

    let style2 = {
        opacity: "1",
        transitionDuration: "0.5s",
    };

    let style3 = {
        opacity: "0",
        transitionDuration: "0.5s",
    };

    let style4 = {
        visibility: "hidden",
    };

    let style5 = {
        opacity: "1",
        transitionDuration: "0.5s",
    }
    
    Object.assign(wElement.style, style1);

    const timeout1 = setTimeout(function() {
        Object.assign(wElement.style, style2);
    }, 100);

    const timeout2 = setTimeout(function() {
        Object.assign(wElement.style, style3)
    },1600)
    const timeout3 = setTimeout(function() {
        Object.assign(wElementBg.style, style3)
    },2100)

    const timeout4 = setTimeout(function() {
        Object.assign(wElement.style, style4)
    },2600)
    const timeout5 = setTimeout(function() {
        Object.assign(wElementBg.style, style4)
    },3100)
    setTimeout(function() {
        Object.assign(ISEC.style, style5)
    },2600)

    // Skip Welcome Animation
    let executeonce = true
    document.addEventListener('keyup', event => {
        
            if (executeonce == true) {
                if (event.code === 'Space') {
                    clearTimeout(timeout1)
                    clearTimeout(timeout2)
                    clearTimeout(timeout3)
                    clearTimeout(timeout4)
                    clearTimeout(timeout5)
                    Object.assign(wElement.style, style3)
                    Object.assign(wElement.style, style4)
                    Object.assign(ISEC.style, style5)
                    setTimeout(function(){
                        Object.assign(wElementBg.style, style3)
                    },500)
                    setTimeout(function(){
                        Object.assign(wElementBg.style, style4)
                    },1500)
                    console.log("animation skipped")
                    executeonce = !executeonce
                }
            }
      })
};
