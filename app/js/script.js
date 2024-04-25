const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setColorMode = () => {
    console.log(setColorMode);
    console.log(localStorage.getItem('colorMode'));
    
    if(localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkButton.click();
    } else {
        setLightMode();
        lightButton.click();
    }
}

const checkMode = () => {
    if (window.matchMedia("(prefers-color-scheme: light").matches){
        lightButton.click();
    }
    else if (window.matchMedia("(prefers-color-scheme: dark").matches){
        darkButton.click();
    }
}

const checkModeCHange = () => {
    window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        console.log('checkModeChange');
        checkMode();
    })
}

const setDarkMode = () => {
    console.log('setDarkMode');
    document.querySelector('body').classlist = 'dark';
}

const setLightMode = () => {
    console.log('setLightMode');
    document.querySelector('body').classlist = 'light';
}

setColorMode();
checkMode();
checkModeCHange();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (event) => {
        console.log('radio button clicked');
        if (darkButton.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else if (localStorage.getItem('colorMode' == 'light')) {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }
    });
}

