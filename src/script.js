//Personal Site
//created by Michael Braverman on April 16, 2016

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
