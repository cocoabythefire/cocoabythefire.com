$(function () {
  $('[data-tumblr]').each(function() {
    var $this = $(this);
    var tumblr = {};
    tumblr.apiKey = 'ztxXpydJ8LtcWgeMo5HywjQUcIb7v1mPvOoxvxpquZQBaiQWhI';
    tumblr.blogName = $this.data('tumblr');
    tumblr.requstURL = 'http://api.tumblr.com/v2/blog/' +
      tumblr.blogName + '.tumblr.com/posts?api_key=' +
      tumblr.apiKey;
    $.ajax(tumblr.requstURL, { 'dataType': 'jsonp' }).done(function(data) {
      var posts = data && data.response && data.response.posts;
      var first_three = posts.slice(0,3);
      console.log(first_three);
      $.each(first_three, function(i, l) {
        var article = $('<article/>');
        var title = $('<h1/>').addClass('title');
        var post_url = $('<a href=' + l['post_url'] + '/>');
        var date = $('<p/>').addClass('date');
        var body = $('<div/>').addClass('body');
        var full_date = new Date(l['timestamp'] * 1000);
        var month = full_date.getMonth() + 1;
        var day = full_date.getDate();
        var year = full_date.getFullYear().toString().substring(2, 4);
        var pretty_date = month + '.' + day + '.' + year;
        post_url.append(l['title']);
        title.append(post_url);
        date.append(pretty_date);
        body.append(l['body']);
        article.append(date);
        article.append(title);
        article.append(body);
        $this.append(article);
      });
      var read_more = $('<p/>').addClass('more');
      var blog_url = $('<a href=' + 'http://blog.cocoabythefire.com/' + '/>');
      blog_url.append('Read More');
      read_more.append(blog_url);
      $this.append(read_more);
    });
  });
});