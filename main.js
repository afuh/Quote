var quoteMostrada,
    autorMostrado,
    quote = [],
    autor = [];


var request = new XMLHttpRequest(),
    url = "https://raw.githubusercontent.com/afuh/Quote/master/quotes.json";

request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function() {
  var data = this.response;
  quote = data.quotes;
  autor = data.autores;
}

function randomQ() {
    var index = Math.floor(Math.random() * quote.length);
    quoteMostrada = quote[index];
    document.getElementById('quotes').innerHTML = quote[index];

    index = Math.floor(Math.random() * autor.length);
    autorMostrado = autor[index];
    document.getElementById('autores').innerHTML = autor[index];
}

function shareTweet(){
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"'+ quoteMostrada + '" ' + "– "+ autorMostrado +"."));
}

window.onload = function() {
   document.getElementById("hit").addEventListener("click", randomQ, false);
   document.getElementById("tweet").addEventListener("click", shareTweet, false);

    function delay() {
    setTimeout(randomQ, 200);
  }
  delay();
};
