let darkmode = true

const darkTheme = {
    '--color-bg': '#131313',
    '--color-text-primary': '#ffffff',
}
const lightTheme = {
    '--color-bg': '#ffffff',
    '--color-text-primary': '#000000',
}

function changeTheme(variables) {
    for (const [key, value] of Object.entries(variables)) {
        document.documentElement.style.setProperty(key, value);
    }
}

document.getElementById('toggleTheme').addEventListener('click', function() {
    if (darkmode) {
        changeTheme(lightTheme)
    } else {
        changeTheme(darkTheme)
    }
    darkmode = !darkmode
})


// function changeTheme() {
// if (theme == "dark") {
//     Object.assign(document.documentElement, darktheme)
//     theme = "light"
// } else {
//     Object.assign(document.documentElement, lightheme)
//     theme = "dark"
// }}

// document.getElementById('theme-toggle-button').addEventListener('click', changeTheme);

// document.documentElement.style.setProperty()