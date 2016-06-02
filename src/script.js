//Portfolio Site
//created by Michael Braverman on April 16, 2016

var imgData = [
    {
      'file':'01.jpg',
      'name':'Artificial Intellect Box',
      'year': 2015},
    {
      'file':'02.png',
      'name':'Infrastructural Utopia',
      'year': 2016},
    {
      'file':'03.png',
      'name':'infORM alpha',
      'year': 2016},
    {
      'file':'04.jpg',
      'name':'Poem Maschine',
      'year': 2015},
    {
      'file':'05.png',
      'name':'Emotion Cube',
      'year': 2015},
    {
      'file':'06.png',
      'name':'Multiverse Clockwork',
      'year': 2016},
    {
      'file':'07.png',
      'name':'Flowing Pagoda',
      'year': 2015},
    {
      'file':'08.jpg',
      'name':'The Endevours Guide to The 21st Century',
      'year': 2015}
];

var imageIndex = Math.floor(Math.random() * imgData.length);

$(function() {

  var pageDuration = 700;

  $(".crop-img > img").click(function() {
    changeImg(300);
  })

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

function changeImg(transition) {
  imageIndex = (imageIndex + 1) % (imgData.length);
  var imgText = imgData[imageIndex]["name"] + " (" + imgData[imageIndex]["year"]  + ")";

  $(".crop-img > img")
    .attr('src', "src/img/" + imgData[imageIndex]["file"])
    .attr('alt', imgText);
  $(".img-caption").text(imgText);
}
