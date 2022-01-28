import { data } from './data';

var questionDatabase = [];
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
    array = shuffleArray( getUnusedQuestions(array) ).slice(0, max);
    array.forEach(element => selectedQuestions.push(element));
    max = 5;//reset max to five for the next pack of questions
    return selectedQuestions;
}

/*gets all questions with lowest count-value. 
If the length of the result is smaller than 5, it raises minCount and sets the max value to the number of missing questions to get to 5 in total.*/
function getUnusedQuestions(a) {
    let array = a;
    a = a.filter(q => q.count === minCount);
    if(a.length < 5) {
        minCount++;
        max = 5 - a.length;
        selectedQuestions = a;
        a = getUnusedQuestions(array);
    }
    return a;
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

    if(filtered.length === 0) return [];
    return getRandomQuestions(filtered);
}

function getNewestQuestions() {
    selectedQuestions = [];
    selectedQuestions = questionDatabase.filter(q => parseInt(q.episode) === getNewestEpisode());
    return selectedQuestions;
}

function getNewestEpisode() {
    return Math.max.apply(Math, data.map(function(o) { return parseInt(o.episode); }));
}

//Synchronizes localStorage with latest questionDatabase-changes
function syncLocalStorage() {
    if(!init) {
        questionDatabase = data;
        let loc = JSON.parse(localStorage.getItem('questionLog'));
        for(let i = 0; i < loc.length; i++) {
            let index = questionDatabase.findIndex(q => q.id === loc[i].id);
            if(index > 0) questionDatabase[index].count = loc[i].count;
        }
        if(!loc || loc.length !== questionDatabase.length) {
            console.log("localstorage was outdated");
            writeLocalStorage();
        }
        init = true;
    } else {
        for(var i = 0; i < selectedQuestions.length; i++) {
            let index = questionDatabase.findIndex(q => q.id === selectedQuestions[i].id);
            questionDatabase[index].count++;
        }
        writeLocalStorage();
    }
    console.log("localStorage was synchronized");
}

//writes current questionDatabase-state into localStorage
const writeLocalStorage = () => {
    localStorage.setItem('questionLog', JSON.stringify(questionDatabase.map(q => ({id: q.id, count: q.count}))));
}

export {
    getRandomQuestions,
    getFilteredQuestions,
    getNewestQuestions,
    getNewestEpisode,
    syncLocalStorage
}