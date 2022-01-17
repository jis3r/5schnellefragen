let currentBackground = "four";
let newBackground;

function changeBackground(episode) {
    if(episode <= 73) {
        newBackground = "one";
    } else if(episode <= 112) {
        newBackground = "two";
    } else if(episode <= 152) {
        newBackground = "three";
    } else {
        newBackground = "four";
    }
    console.log('1, current:', currentBackground, 'new', newBackground);
    if(currentBackground !== newBackground) {
        document.getElementsByTagName("body")[0].classList.add(newBackground);
        document.getElementsByTagName("body")[0].classList.remove(currentBackground);
        currentBackground = newBackground;
    }
}



export {
    changeBackground
}