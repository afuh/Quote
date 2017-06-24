window.onload = function() {
  app.init();
};

var app = {
  init: function(){
      this.request();
      this.buttons();
  },
  cache: function(q, a){
      this.quote = q;
      this.autor = a;
      this.tweetQuote = "";
      this.tweetAutor = "";
  },
  request: function() {
      fetch('https://raw.githubusercontent.com/afuh/Quote/master/quotes.json')
        .then(res => res.json())
          .then(res => {
            app.cache(res.quotes, res.autores);
            app.render()
          })
  },
  randomQuote: function() {
      var i = Math.floor(Math.random() * app.quote.length);
      app.cache.tweetQuote = app.quote[i];
      return app.quote[i];
  },
  randomAutor: function() {
      var i = Math.floor(Math.random() * app.autor.length);
      app.cache.tweetAutor = app.autor[i];
      return app.autor[i];
  },
  buttons: function() {
      document.getElementById("getQuote").addEventListener("click", this.render);
      document.getElementById("tweet").addEventListener("click", this.tweet);
  },
  render: function() {
      document.getElementById('quotes').innerHTML = app.randomQuote();
      document.getElementById('autores').innerHTML = app.randomAutor();
  },
  tweet: function(){
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"'+ app.cache.tweetQuote + '" ' + "– "+   app.cache.tweetAutor +"."));
  },
};
