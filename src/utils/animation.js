let currentBackground = "coverFour";
let newBackground;

function changeBackground(episode) {
    if(episode <= 73) {
        newBackground = "coverOne";
    } else if(episode <= 112) {
        newBackground = "coverTwo";
    } else if(episode <= 152) {
        newBackground = "coverThree";
    } else {
        newBackground = "coverFour";
    }
    if(currentBackground !== newBackground) {
        document.getElementsByTagName("body")[0].classList.add(newBackground);
        document.getElementsByTagName("body")[0].classList.remove(currentBackground);
        currentBackground = newBackground;
    }
}



export {
    changeBackground
}