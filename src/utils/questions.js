import { data } from './data';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions() {
    return shuffleArray(data).slice(0, 5);
}

function getNewestQuestions() {
    return data.filter(q => parseInt(q.episode) === getNewestEpisode());
}

function getNewestEpisode() {
    return Math.max.apply(Math, data.map(function(o) { return parseInt(o.episode); }));
}

function logQuestions(questions) {
    let log = localStorage.getItem('questionLog') || [];

}

export {
    getRandomQuestions,
    getNewestQuestions,
    getNewestEpisode
}