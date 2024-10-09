const themeSelector = document.getElementById('theme-selector');

const body = document.body;
const logo = document.getElementById('logo');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelector.value;
    
    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'logo.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'bluelogo.png';
    }
}
