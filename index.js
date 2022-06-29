
const STOIC_QUOTES = require('./quotes');

const openingMessage = '\n--- Wisdom -- Courage -- Justice -- Temperance ---';
const acknowlege = 'Collected from https://dailystoic.com/stoic-quotes/'
const endingMessage = '\n\n=======================  ============================='

function getRandomIndex(quotes) {
    return Math.floor(Math.random() * (quotes.length - 1));
}

function getRandomMessage(author) {
    const randomAuthorQuoteIndex = getRandomIndex(author);
    const randomAuthorQuote = STOIC_QUOTES[author[randomAuthorQuoteIndex]];
    const randomQuoteIndex = getRandomIndex(randomAuthorQuote);
    return randomAuthorQuote[randomQuoteIndex]
}

function combineMessage(messages) {
    return openingMessage + '\n\n' + messages.join('\n\n') + '\n\n' + acknowlege  + endingMessage;
}


function generateStoicMessage() {
    const messageAmmount = 3;
    const messages = [];
    const author = Object.keys(STOIC_QUOTES);
    for (let i = 0; i < messageAmmount; i++) {
        const randomMessage = getRandomMessage(author)
        messages.push(randomMessage)
    }
    return combineMessage(messages);
}

console.log(generateStoicMessage()) // print message to the terminal
