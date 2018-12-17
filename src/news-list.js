var mykey = config.MY_KEY;

(function(exports){
  function NewsList(){
    this.newsData;
    this.stories = [];
    this.htmlCode;
  }

  NewsList.prototype.getHTML = function(testData) {
    if (testData === undefined){
      return getNewsData(this, createsNewsStories);
    } else {
      this.newsData = testData;
    }
  };

  function getNewsData(newsList, callback) {
    var request = new XMLHttpRequest();
    url = 'https://content.guardianapis.com/search?api-key=' + mykey + '&show-fields=thumbnail';
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
      newsList.newsData = JSON.parse(request.responseText).response.results;
      displayHTMLCode(callback(newsList));
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
      return createHTMLString(newsList.stories);
    }


    function createHTMLString(stories){
      htmlString = "";
      for(var i=0;i<stories.length;i++){
        htmlString += "<div name=\"newsStory\"><img src=\"" + stories[i].photo
          + "\"><br><a href=\"" + stories[i].url + "\">" + stories[i].headline
          + "</a></div>"
      }
      return htmlString;
    }

    function displayHTMLCode(htmlCode){
      document.getElementById('newsfeed').innerHTML = htmlCode;
    }

  exports.NewsList = NewsList;
})(this);
