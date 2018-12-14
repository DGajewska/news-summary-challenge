(function(exports){
  var newsStoryCounter = 0;

  function NewsStory(newsStoryHash){
    this.id = newsStoryCounter;
    this.headline = newsStoryHash.webTitle;
    this.photo = newsStoryHash.fields.thumbnail;
    this.url = newsStoryHash.webUrl;
    newsStoryCounter++;
  }
  
    exports.NewsStory = NewsStory;
})(this);
