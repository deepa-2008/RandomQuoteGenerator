const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Your only limit is your mind.",
        author: "Unknown"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");

function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = selectedQuote.text;

    authorElement.textContent = "— " + selectedQuote.author;
}

newQuoteBtn.addEventListener("click", generateQuote);

copyBtn.addEventListener("click", async function () {

    const text = quoteElement.textContent +
        "\n" + authorElement.textContent;

    try {
        await navigator.clipboard.writeText(text);

        copyBtn.textContent = "Copied! ✓";

        setTimeout(() => {
            copyBtn.textContent = "Copy Quote";
        }, 1500);

    } catch (error) {
        copyBtn.textContent = "Copy unavailable";
    }

});

// Display a random quote when the website opens
generateQuote();