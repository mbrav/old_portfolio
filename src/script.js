//Personal Site
//created by Michael Braverman on April 16, 2016

var images = ['01.jpg', '02.png', '03.png', '04.jpg', '05.png',
            '06.png','07.png','08.jpg'];


var text = ['Artificial Intellect Box (2015)',
            'Infrastructural Utopia (2016)',
            'infORM alpha (2016)',
            'Poem Maschine (2015)',
            'Emotion Cube (2015)',
            'Multiverse Clockwork (2016)',
            'Flowing Pagoda (2015)',
            'The Endevours Guide to The 21st Century (2015)'
            ];
var imageIndex = Math.floor(Math.random() * images.length);

$(".crop-img > img").click(function() {
  imageIndex = (imageIndex + 1) % (images.length);
  $(this).attr('src', "src/img/" + images[imageIndex]);
  $(".img-caption").text(text[imageIndex]);
})

var pageDuration = 700;

$(function() {
  // TODO - chnage the way current pages are interacted with
  $("#about-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").fadeOut(pageDuration).css("display", "none");
    $("#about").fadeIn(pageDuration);

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#projects-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").fadeOut(pageDuration).css("display", "none");
    $("#projects").fadeIn(pageDuration);

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#resume-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").fadeOut(pageDuration).css("display", "none");
    $("#resume").fadeIn(pageDuration);

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#contact-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").fadeOut(pageDuration).css("display", "none");
    $("#contact").fadeIn(pageDuration);

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });

  $("#nav-toggle-button").click(function() {
    $("nav ul").toggleClass("show-nav-mobile");
  });
});
