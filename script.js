const quoteId = document.getElementById("quote-id");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

function getQuote() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quote.innerHTML = data.content;
        quoteId.innerHTML = data._id;
    });
}

window.addEventListener("load", getQuote());