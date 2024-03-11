const QuoteEl = document.getElementById('Quote');
const QuoteBtn = document.getElementById('QuoteBtn');

QuoteBtn.addEventListener('click', generateQuote);

generateQuote();

// USING ASYNC/AWAIT
async function generateQuote() {
  try {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();

    // Choose a random quote from the data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    QuoteEl.innerHTML = `${randomQuote.text} - ${randomQuote.author || 'Unknown'}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
