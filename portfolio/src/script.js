//Personal Site
//created by Michael Braverman on April 16, 2016

var pageDuration = 700;


$(function() {
  // TODO - chnage the way current pages are interacted with
  $("#about-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").hide(pageDuration).css("display", "none");
    $("#about")
    .fadeIn(pageDuration)
    .css("display", "inline-block");
  });
  $("#projects-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").hide(pageDuration).css("display", "none");
    $("#projects")
    .fadeIn(pageDuration)
    .css("display", "inline-block");
  });
  $("#resume-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").hide(pageDuration).css("display", "none");
    $("#resume")
    .fadeIn(pageDuration)
    .css("display", "inline-block");
  });
  $("#contact-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").hide(pageDuration).css("display", "none");
    $("#contact")
    .fadeIn(pageDuration)
    .css("display", "inline-block") ;
  });
});
