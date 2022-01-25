import { data } from './data';

let questionDatabase;
let selectedQuestions = [];
let init = false;
let max = 5;
let minCount = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(a) {
    let array = a || questionDatabase;
    selectedQuestions = [];
    array = getUnusedQuestions(array);
    array = shuffleArray(array).slice(0, max);
    array.forEach(element => selectedQuestions.push(element));
    synchLocalStorage();
    return selectedQuestions;
}

function getUnusedQuestions(a) {
    let array = a;
    a.filter(q => q.count === minCount);
    console.log(a);
    if(a.length <= 5) {
        minCount++;
        max = 5 - a.length;
        selectedQuestions = a;
        synchLocalStorage();
        getUnusedQuestions(array);
    } else {
        return a;
    }
}

function getFilteredQuestions(y, a) {
    let year = y || "Alle";
    let author = a || "Allen";
    let filtered = questionDatabase;

    if(year !== "Alle") {
        filtered = filtered.filter(q => q.year === year);
    }
    if(author !== "Allen") {
        filtered = filtered.filter(q => q.author === author);
    }
    return getRandomQuestions(filtered);
}

function getNewestQuestions() {
    selectedQuestions = [];
    selectedQuestions = questionDatabase.filter(q => parseInt(q.episode) === getNewestEpisode());
    synchLocalStorage();
    return selectedQuestions;
}

function getNewestEpisode() {
    return Math.max.apply(Math, data.map(function(o) { return parseInt(o.episode); }));
}

function trackQuestions() {
    let logs = JSON.parse(localStorage.getItem('questionLog'));
    if(logs) {
        if(logs.length !== data.length) localStorage.setItem('questionLog', JSON.stringify(data));

    } else {
        localStorage.setItem('questionLog', JSON.stringify(data));
        logs = data;
    }
    /*if(logs.length !== 0) {
        for (let i = 0; i < questionDatabase.length; i++) {
            // Find if the array contains an object by comparing the property value
            if(logs.some(log => log.id === questionDatabase[i].id)) {
                alert("Object found inside the array.");
            } else{
                alert("Object not found.");
            }
        }
    }*/
}

function synchLocalStorage() {
    if(!init) {
        questionDatabase = JSON.parse(localStorage.getItem('questionLog'));
        if(!questionDatabase || questionDatabase.length !== data.length) {
            console.log("localstorage was outdated");
            writeLocalStorage();
            questionDatabase = data;
        }
        init = true;
        console.log("localStorage was synchronized");
    } else {
        for(var i = 0; i < selectedQuestions.length; i++) {
            questionDatabase[selectedQuestions[i].id].count++;
        }
        writeLocalStorage();
    }
}

const writeLocalStorage = () => {
    localStorage.setItem('questionLog', JSON.stringify(data));
}

export {
    getRandomQuestions,
    getFilteredQuestions,
    getNewestQuestions,
    getNewestEpisode,
    synchLocalStorage
}