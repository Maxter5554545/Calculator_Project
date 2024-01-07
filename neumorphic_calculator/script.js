const themeToggle = document.getElementById("theme-toggle")

const store = localStorage.getItem('theme')

// themeToggle.addEventListener("change", function(){
    if(store =='dark'){
        // light to dark
        document.documentElement.style.setProperty("--bg-color", "#10032b")
        document.documentElement.style.setProperty("--text-color", "#2d9c33")
        document.documentElement.style.setProperty("--keypad-bg-color", "#030f27")
        document.documentElement.style.setProperty("--keypad-bg-color_2", "##5900ff")
        themeToggle.checked = true;
    }
    else{
        //dark to light
        document.documentElement.style.setProperty("--bg-color", "#F1EAFF")
        document.documentElement.style.setProperty("--text-color", "#D67BFF")
        document.documentElement.style.setProperty("--keypad-bg-color", "#F1EAFF")
        document.documentElement.style.setProperty("--keypad-bg-color_2", "#5900ff")
    }


themeToggle.addEventListener("change", function(){
    if(this.checked){
        // light to dark
        document.documentElement.style.setProperty("--bg-color", "#10032b")
        document.documentElement.style.setProperty("--text-color", "#2d9c33")
        document.documentElement.style.setProperty("--keypad-bg-color", "#030f27")
        document.documentElement.style.setProperty("--keypad-bg-color_2", "##5900ff")
        localStorage.setItem('theme', 'dark')
    }
    else{
        //dark to light
        document.documentElement.style.setProperty("--bg-color", "#F1EAFF")
        document.documentElement.style.setProperty("--text-color", "#D67BFF")
        document.documentElement.style.setProperty("--keypad-bg-color", "#F1EAFF")
        document.documentElement.style.setProperty("--keypad-bg-color_2", "#5900ff")
        localStorage.setItem('theme', 'light')
    }
})




// results
let results = document.getElementById("result")
function appendToResult(value){
    results.value += value
    playButtonSound()
}

function backspace(){
    if(results.value=='Error'){
        results.value = ''
    }
    results.value = results.value.slice(0,-1)
    playButtonSound()
}

function allthings(){
    results.value = '';
    playButtonSound()
}

function calculate(){
    playButtonSound()
    try{
        if(results.value == ''){
            results.value == 0;
        }
        else{
            results.value = eval(results.value)
        }
    }
    catch(e){
        results.value = 'Error'
    }
}
function playButtonSound(){
    const buttonSound = document.getElementById("button_sound")
    buttonSound.currentTime = 0;

}