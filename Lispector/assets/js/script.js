const quotes = ["It seemed to her that a shy person’s tortures had never been completely described.",

"My mystery is simple: I don’t know how to be alive.",

"Of course we should eat it, we mustn’t forget and should respect the violence inside us. Small acts of violence save us from greater ones. Maybe, if we didn’t eat animals, maybe we’d eat people in their own blood.",

"She wanted the pleasure of the extraordinary which was so simple to find in common things: the thing didn’t need to be extraordinary in order for her to feel the extraordinary in it.",

"With the conch of her hands and the haughtiness of people who never will offer explanations even to themselves: with the conch of her hands full of water, she drinks it in great gulps, good for a body’s health.",

"She put on her bathing suit and robe, and without breaking her fast walked to the beach. It was so lovely and fresh on the street! Where no one was about, except the milkman’s cart in the distance. She kept walking and looking, looking, looking, seeing.",

"And now she steps onto the sand. She knows she’s shining with water, and salt and sun. Even if she forgets, she’ll never be able to lose all this. In some obscure way her streaming hair is something from a shipwreck.",

"Lóri preferred for the discovery of what’s called living those shy hours at the vague start of the day.",

"She’d reached the conclusion that she didn’t have a day-to-day but a life-to-life.",

"'Not understanding' was so vast that it surpassed all understanding - understanding was always limited",

"Every time she had thought she'd understood herself it was because she'd understood wrongly."];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.write(selectedQuote)
}

getQuote(); // on load