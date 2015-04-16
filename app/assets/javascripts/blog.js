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
      $.each(first_three, function(i, post) {
        var article = $('<article/>');
        var title = $('<h1/>').addClass('title');
        var postAnchor = $('<a/>').attr({ href: post['post_url'] });
        var date = $('<p/>').addClass('date');
        var body = $('<div/>').addClass('body');
        var full_date = new Date(post.timestamp * 1000);
        var month = full_date.getMonth() + 1;
        var day = full_date.getDate();
        var year = full_date.getFullYear().toString().substring(2, 4);
        var pretty_date = month + '.' + day + '.' + year;
        var titleText = post.title;
        var bodyHTML = post.body;

        if (post.type === 'photo') {
          // put the post caption into a container div so we can pull out
          // the specific things that we want.
          var container = $('<div/>');
          container.append(post.caption);
          titleText = container.find('h2').text();
          bodyHTML = container.find('p').html();
        }
        postAnchor.append(titleText);
        title.append(postAnchor);
        date.append(pretty_date);
        body.append(bodyHTML);
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