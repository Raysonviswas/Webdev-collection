//counting elements in jQuery
$('.someclass').length

$('.someclass').size()

//Array to li(html list itemListElement)
var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var cList = $('ul.mylist')
$.each(countries, function(i)
{
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(cList);
    var aaa = $('<a/>')
        .addClass('ui-all')
        .text(countries[i])
        .appendTo(li);
});

//or

const countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
const $ul = $('<ul>', {class: "mylist"}).append(
  countries.map(country =>
    $("<li>").append($("<a>").text(country))
  )
);
