const darkTheme = {
    '--color-bg': '#131313',
    '--color-text-primary': '#ffffff',
}
const lightTheme = {
    '--color-bg': '#ffffff',
    '--color-text-primary': '#000000',
}

function changeTheme(variables) {
    const root = document.querySelector(':root')
    for (const [key, value] of Object.entries(variables)) {
        root.style.setProperty(key, value);
    }
}
const image = document.getElementById("darklightbutton")
let darkmode = true
document.getElementById('toggleTheme').addEventListener('click', function() {
    if (darkmode) {
        changeTheme(lightTheme)
        image.src = "Assets/light_mode.svg"
    } else {
        changeTheme(darkTheme)
        image.src = "Assets/dark_mode.svg"
    }
    darkmode = !darkmode
})