// event listener to show the next quote 
// button call printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);

const bgColor = document.getElementById('bgcolor');
const quoteBox = document.getElementById('quote-box');
let message = '';
let viewedQuotes = [];

//quotes array with source, citation, year and tag details

var quotes = [
	{
	  quote: "Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.",
	source: "Michael Jordan",
	citation: "",
	year: "" ,
	tags: "Achievement"

  }, 
  {
	quote: 
	"I think it is possible for ordinary people to choose to be extraordinary.",
	source: "Elon Musk",
	citation: "",
	year: "",
	tags: "Achievement",

  },
  {
	quote: "What you think, you you become. What you feel, you attract. What you imagine you create.",
	source: "Budhha",
	citation: "",
	year: "",
	tags:"Belief",

  },
  {
	quote:"Believe you can and you're halfway there." ,
	source: "Theodore Roosevelt",
	citation: "" ,
	year: "1932 ,",
	tags: "Achievement",

  },
  {
	quote: "Its fine to celebrate success but it is more important to heed the lesson of failure",
	source: "Bill Gates",
	citation: "",
	year: "",
	tags: "Achievement"

  }
];


// Function to select a random quote from our quotes array
function getRandomQuote() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	
	let findQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(findQuote);
	if ( quotes.length <= 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return findQuote;
}

//Random color function
function getRandomColorGenerator() {
	let randomColor;
	red = Math.floor(Math.random() * 255 );
	green = Math.floor(Math.random() * 255 );
	blue = Math.floor(Math.random() * 255 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function prints ur random quote to the UI
function printQuote() {

	//function that initializing the change to our quote box 
	function print(quote) {
		quoteBox.innerHTML = quote;
	}

	// On click event, function printQuote runs, then fires the getRandomQuote function
	let quotes = getRandomQuote();
	newQuote =`
	<p class="quote">${quotes.quote}</p>
	 <p class="source">${quotes.source}
	 <span class="citation">${quotes.citation}</span>
	 <span class="year">${quotes.year}</span>
	 <span class="tags">${quotes.tags}</span></p>`
	 
	print(newQuote);

	//new background color on click
	bgColor.style.backgroundColor = getRandomColorGenerator();
}
