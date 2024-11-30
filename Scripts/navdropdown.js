const showfalse = {
    'height': '56px',
}
const showtrue = {
    'height': '100vh',
}
const showfalse1 = {
    'opacity': '0',
}
const showtrue1 = {
    'opacity': '1',
}



function dropDownMenuShow(variables) {
    const nav = document.getElementById("nav")
    for (const [key, value] of Object.entries(variables)) {
        nav.style.setProperty(key, value);
    }
}
function dropDownMenuShow1(variables) {
    const navMenu = document.getElementById("navMenu")
    for (const [key, value] of Object.entries(variables)) {
        navMenu.style.setProperty(key, value);
    }
}



const changemenubutton = document.getElementById("menuButtonIcon")
let visible = false
document.getElementById('menuButton').addEventListener('click', function() {
    if (visible) {
        dropDownMenuShow(showfalse)
        dropDownMenuShow1(showfalse1)
        if (darkmode) {
            changemenubutton.src = "Assets/menu_dark.svg"
        } else {
            changemenubutton.src = "Assets/menu_light.svg"
        }
    } else {
        dropDownMenuShow(showtrue)
        dropDownMenuShow1(showtrue1)
        if (darkmode) {
            changemenubutton.src = "Assets/close_dark.svg"
        } else {
            changemenubutton.src = "Assets/close_light.svg"
        }
    }
    visible = !visible
})

var mode = null;
var checkwidth = window.matchMedia("(max-width: 650px)")

function somethingIsChanging(checkwidth) {
    if (checkwidth.matches) {
        mode = "mobile"
        
    } else {
        visible = false
        mode = "desktop"
    }
}

somethingIsChanging(checkwidth);

checkwidth.addEventListener("change", function() {
  somethingIsChanging(checkwidth);
});

checkwidth.addEventListener("change", function() {
    if (mode == "desktop") {
        dropDownMenuShow(showfalse)
        dropDownMenuShow1(showfalse1)
        if (darkmode) {
            changemenubutton.src = "Assets/menu_dark.svg"
        } else {
            changemenubutton.src = "Assets/menu_light.svg"
        }
    }
})