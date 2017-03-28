$(document).foundation();

// Setup grabbies
var myArrayNegative = [
	"You're garbage.",
	"I hate you.",
	"Everything should die.",
	"Eat your children.",
	"The day you were born you died.",
	"Kill yourself and don't think about it.",
	"Your existence is null.",
	"Breathing is not mandatory.",
	"Fall down. Stay down.",
	"Punch a fish - miss fish.",
	"There is nothing.",
	"Break the leg of a random, small dog. Devour it while softly crying. Raw.",
	"If you died tomorrow, no one would notice.",
	"Three of the clock is too late and too early for everything.",
	"This all ends.",
];

// Get the button and make it an object
var quoteButton = document.getElementById('random-quote-button');

// Add click listener to button
quoteButton.addEventListener('click', quotePop);

// Randomize a quote from grabbie grab grabs
function randomQuote() {
	var rand = myArrayNegative[Math.floor(Math.random() * myArrayNegative.length)];
	// Storing result
	return (rand);
}

function quotePop() {
	var quoteShow = document.getElementById('quoteText');
	quoteShow.textContent = randomQuote();
}
