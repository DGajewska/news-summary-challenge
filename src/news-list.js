var mykey = config.MY_KEY;

(function(exports){
  function NewsList(){
    this.newsData;
    this.stories = [];
  }

  NewsList.prototype.getHTML = function(testData) {
    if (testData === undefined){
      getNewsData(this);
    } else {
      this.newsData = testData;
    }
    return createHTMLString(this.stories);
  };

  function getNewsData(newsList) {
    var request = new XMLHttpRequest();
    url = 'https://content.guardianapis.com/search?api-key=' + mykey + '&show-fields=thumbnail';
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
      newsList.newsData = JSON.parse(request.responseText).response.results;
      createsNewsStories(newsList);
      }
    };
    request.onerror = function() {
    return url;
    };
    request.send();

    }

    function createsNewsStories(newsList) {
      for(var i=0;i<newsList.newsData.length;i++){
        newsList.stories.push(new NewsStory(newsList.newsData[i]));
      }
    }

    function createHTMLString(stories){
      htmlString = "";
      for(var i=0;i<stories.length;i++){
        htmlString += "<div name=\"newsStory\"><img src=\"" + stories[i].photo
          + "\"><a href=\"" + stories[i].url + "\">" + stories[i].headline
          + "</a></div>"
      }
      return htmlString;
    }

  exports.NewsList = NewsList;
})(this);

var news = new NewsList();
