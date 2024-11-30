const darkTheme = {
    '--color-bg': '#131313',
    '--color-text-primary': '#ffffff',
    '--color-nav': '#0000006a',
}
const lightTheme = {
    '--color-bg': '#ffffff',
    '--color-text-primary': '#000000',
    '--color-nav': '#ffffff9f',
}

function changeTheme(variables) {
    const root = document.querySelector(':root')
    for (const [key, value] of Object.entries(variables)) {
        root.style.setProperty(key, value);
    }
}
const changebutton = document.getElementById("darklightbutton")
const changemenubutton1 = document.getElementById("darklightbutton1")

var darkmode = true
document.getElementById('toggleTheme').addEventListener('click', function() {
    if (darkmode) {
        changebutton.src = "Assets/light_mode.svg"
        changemenubutton1.src = "Assets/light_mode.svg"
        if (visible) {
            changemenubutton.src = "Assets/close_light.svg"
        } else {
            changemenubutton.src = "Assets/menu_light.svg"
        }
        changeTheme(lightTheme)
    } else {
        changebutton.src = "Assets/dark_mode.svg"
        changemenubutton1.src = "Assets/dark_mode.svg"
        if (visible) {
            changemenubutton.src = "Assets/close_dark.svg"
        } else {
            changemenubutton.src = "Assets/menu_dark.svg"
        }
        changeTheme(darkTheme)
    }
    darkmode = !darkmode
})

document.getElementById('toggleTheme1').addEventListener('click', function() {
    if (darkmode) {
        changebutton.src = "Assets/light_mode.svg"
        changemenubutton1.src = "Assets/light_mode.svg"
        if (visible) {
            changemenubutton.src = "Assets/close_light.svg"
        } else {
            changemenubutton.src = "Assets/menu_light.svg"
        }
        changeTheme(lightTheme)
    } else {
        changebutton.src = "Assets/dark_mode.svg"
        changemenubutton1.src = "Assets/dark_mode.svg"
        if (visible) {
            changemenubutton.src = "Assets/close_dark.svg"
        } else {
            changemenubutton.src = "Assets/menu_dark.svg"
        }
        changeTheme(darkTheme)
    }
    darkmode = !darkmode
})

