(function(exports){
  function Newsfeed(newsList){
    this.newsInFeed = newsList;
  }

  Newsfeed.prototype.loadNewsStories = function () {
    newsList = this.newsInFeed;
    document.addEventListener("DOMContentLoaded", function(){
      newsList.getHTML();
    });
  };

  exports.Newsfeed = Newsfeed;
})(this);

var newsList = new NewsList();
var newsfeed = new Newsfeed(newsList);
newsfeed.loadNewsStories();
