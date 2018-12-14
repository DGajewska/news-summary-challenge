var newsStory;

testNewsStoryHash = {"id":"politics/blog/live/2018/dec/14/theresa-may-returns-to-uk-to-face-backbenchers-after-brussels-knockback-politics-live","type":"liveblog","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-12-14T13:28:28Z","webTitle":"Brexit: Theresa May holds press conference in Brussels – Politics live","webUrl":"https://www.theguardian.com/politics/blog/live/2018/dec/14/theresa-may-returns-to-uk-to-face-backbenchers-after-brussels-knockback-politics-live","apiUrl":"https://content.guardianapis.com/politics/blog/live/2018/dec/14/theresa-may-returns-to-uk-to-face-backbenchers-after-brussels-knockback-politics-live","fields":{"thumbnail":"https://media.guim.co.uk/a7ea6e8d0daf0cd6a75e98b994566d8a5c1d472d/0_178_5339_3204/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}
newsStory = new NewsStory(testNewsStoryHash);

test("News Story is created with an id attribute",
    anticipate.toBeTheSame(newsStory.id, 0));
test("News Story is created with a headline attribute",
    anticipate.toBeTheSame(newsStory.headline, "Brexit: Theresa May holds press conference in Brussels – Politics live"));
test("News Story is created with a photo attribute",
    anticipate.toBeTheSame(newsStory.photo, "https://media.guim.co.uk/a7ea6e8d0daf0cd6a75e98b994566d8a5c1d472d/0_178_5339_3204/500.jpg"));
test("News Story is created with a url attribute",
    anticipate.toBeTheSame(newsStory.url, "https://www.theguardian.com/politics/blog/live/2018/dec/14/theresa-may-returns-to-uk-to-face-backbenchers-after-brussels-knockback-politics-live"));
