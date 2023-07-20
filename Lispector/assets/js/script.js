const quotes = ["It seemed to her that a shy person’s tortures had never been completely described — in the taxi that sped along she was dying a bit.", "The mask was making her uncomfortable, she knew moreover that she was prettier without makeup. But without makeup it would be the nakedness of soul.", "The sleeping pill had started to calm her down. And the unfathomable night of dreams began, vast, levitating."];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];
 
  document.write(selectedQuote)
}

getQuote(); // on load