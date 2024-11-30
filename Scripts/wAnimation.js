window.onload = function() {
    const wElement = document.getElementById("wtext");
    const wElementBg = document.getElementById("wsec");
    const ISEC = document.getElementById("isecid");
    const urlParams = new URLSearchParams(window.location.search);
    let stopAnimation = 0;
    let check = urlParams.get('stopA')
    if (check) {
        stopAnimation = urlParams.get('stopA');
    }
    
    let style1 = {
        opacity: "0",
        visibility: "visible",
    };

    let style2 = {
        opacity: "1",
        transitionDuration: "0",
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
    let forcestylehide = {
        opacity: "0",
        visibility: "hidden",
    }
    let forcestyleshow = {
        opacity: "1",
        visibility: "visible",
    }
    
    if (stopAnimation == "0") {
        console.log("animation started")
        Object.assign(wElement.style, style1)
        Object.assign(wElementBg.style, style1)

        setTimeout(function() {
            Object.assign(wElement.style, style2)
            Object.assign(wElementBg.style, style2)
        }, 100);

        setTimeout(function() {
            Object.assign(wElement.style, style3)
        },1600)
        setTimeout(function() {
            Object.assign(wElementBg.style, style3)
        },2100)

        setTimeout(function() {
            Object.assign(wElement.style, style4)
        },2600)
        setTimeout(function() {
            Object.assign(wElementBg.style, style4)
        },3100)
        setTimeout(function() {
            Object.assign(ISEC.style, style5)
        },2600)

    } else {
        Object.assign(wElement.style, forcestylehide)
        Object.assign(wElementBg.style, forcestylehide)
    }

    // Skip Welcome Animation
//     let executeonce = true
//     document.addEventListener('keyup', event => {
        
//             if (executeonce == true) {
//                 if (event.code === 'Space') {
//                     clearTimeout(timeout1)
//                     clearTimeout(timeout2)
//                     clearTimeout(timeout3)
//                     clearTimeout(timeout4)
//                     clearTimeout(timeout5)
//                     Object.assign(wElement.style, style3)
//                     Object.assign(wElement.style, style4)
//                     Object.assign(ISEC.style, style5)
//                     setTimeout(function(){
//                         Object.assign(wElementBg.style, style3)
//                     },500)
//                     setTimeout(function(){
//                         Object.assign(wElementBg.style, style4)
//                     },1500)
//                     console.log("animation skipped")
//                     executeonce = !executeonce
//                 }
//             }
//     })
 };




// window.addEventListener('keydown', function(e) {
//     if(e.keyCode == 32 && e.target == document.body) {
//       e.preventDefault();
//     }
//   });