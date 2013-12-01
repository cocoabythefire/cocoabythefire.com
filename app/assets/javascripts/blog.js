$(function () {
  var blog = $('body#static_pages section.blog');
  var first_three = tumblr_api_read['posts'].slice(0,3);

  $.each( first_three, function( i, l ){
    var article = $('<article/>');
    var title = $('<h1/>').addClass('title');
    var date = $('<p/>').addClass('date');
    var body = $('<div/>').addClass('body');
    // var hr = $('<hr/>');
    var full_date = new Date(l['date']);
    var month = full_date.getMonth() + 1;
    var day = full_date.getDate();
    var year = full_date.getFullYear().toString().substring(2, 4);
    var pretty_date = month + '.' + day + '.' + year;
    date.append(pretty_date);
    title.append(l['regular-title']);
    body.append(l['regular-body']);
    article.append(date);
    article.append(title);
    article.append(body);
    // article.append(hr);
    blog.append(article);
  });
});