window.onload = function() {
  quotes = ["Talent is just pursued interest - Bob Ross", "To be or not to be - Shakespeare ","I could get a job that probably pays the bills... - NF"];
  document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

