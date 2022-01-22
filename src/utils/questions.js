import { data } from './data';

let selectedQuestions;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(a) {
    let array = a || data;
    return shuffleArray(array).slice(0, 5);
}

function getFilteredQuestions(y, a) {
    let year = y || "Alle";
    let author = a || "Allen";
    let filtered = data;

    if(author !== "Allen") {
        filtered = filtered.filter(q => q.author === author);
        console.log("autorenfilter", filtered);
    }
    if(year !== "Alle") {
        filtered = filtered.filter(q => q.year === year);
        console.log("jahresfilter", filtered);
    }
    return getRandomQuestions(filtered);
}

function getNewestQuestions() {
    return data.filter(q => parseInt(q.episode) === getNewestEpisode());
}

function getNewestEpisode() {
    return Math.max.apply(Math, data.map(function(o) { return parseInt(o.episode); }));
}

function checkQuestions() {
    let logs = localStorage.getItem('questionLog') || [];
    if(logs.length !== 0) {
        for (let i = 0; i < selectedQuestions.length; i++) {
            // Find if the array contains an object by comparing the property value
            if(logs.some(log => log.id === selectedQuestions[i].id)) {
                alert("Object found inside the array.");
            } else{
                alert("Object not found.");
            }
        }
    }
}

export {
    getRandomQuestions,
    getFilteredQuestions,
    getNewestQuestions,
    getNewestEpisode
}