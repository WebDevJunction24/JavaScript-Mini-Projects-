const quote = document.getElementById("quote");
const generate = document.getElementById("generate");

let myQuotes =  [`The only way to do great work is to love what you do.`,
    `In the middle of every difficulty lies opportunity.`,
    `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
    `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`,
    `It does not matter how slowly you go as long as you do not stop.`,
    `Everything you’ve ever wanted is on the other side of fear.`,
    `Success is not final, failure is not fatal: it is the courage to continue that counts.`
];

let a = Math.floor(Math.random() * myQuotes.length);
quote.innerHTML = myQuotes[a];

generate.addEventListener("click", function () {
    let val = Math.floor(Math.random() * myQuotes.length);
    quote.innerHTML = myQuotes[val];
});