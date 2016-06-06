//Portfolio Site
//created by Michael Braverman on April 16, 2016

var projectData = [
    {
      'imgFile':'01.jpg',
      'page':'intellect.html',
      'name':'Artificial Intellect Box',
      'year': 2015,
    },
    {
      'imgFile':'02.png',
      'page':'utopia-tower.html',
      'name':'Infrastructural Utopia Tower',
      'year': 2016
    },
    {
      'imgFile':'03.png',
      'name':'infORM alpha',
      'year': 2016
    },
    {
      'imgFile':'04.jpg',
      'name':'Poem Maschine',
      'year': 2015
    },
    {
      'imgFile':'05.png',
      'name':'Emotion Cube',
      'year': 2015
    },
    {
      'imgFile':'08.jpg',
      'name':'The Endevours Guide to The 21st Century',
      'year': 2015
    },
    {
      'imgFile':'06.png',
      'name':'Multiverse Clockwork',
      'year': 2016
    },
    {
      'imgFile':'07.png',
      'name':'Flowing Pagoda',
      'year': 2015
    }
];

var imageIndex = Math.floor(Math.random() * projectData.length);

// on load
$(function() {

  var pageDuration = 700;

  // change image slide on click
  $(".slide-img").click(function() {
    changeImg();
  })

  // generate project links
  $("#project-grid").empty( );
  for (var i in projectData) {
    $("#project-grid").append(
      $("<div>").attr("id","project-" + i).addClass(function(){
        // set first element to grid-sizer
        // needed for responsive Masonry grid
        if( i == 0){
          return "grid-sizer";
        } else {
          return "grid-item";
        }
      }).addClass(function(){
        // make a wide tile every other 3 tiles
        if ( i % 3 == 0 && i !=0) {
          return "grid-item--width2";
        } else {
          return null;
        }
      }).addClass(function(){
        // make a tall tile every other 3 tiles
        if ( (i+1) % 3 == 0 && i !=0) {
          return "grid-item--height2";
        } else {
          return null;
        }
      })
      .append(
        // link to project
        $("<a>", {
          href : "/pages/" + projectData[i]["page"],
          text : projectData[i]["name"]
        }),
        // span same level as <a>
        $("<span>", {text : projectData[i]["year"]})
      )
    );
  }

  // on project link click
  $("#project-grid > div > a").on('click', function(event) {
    event.preventDefault(); // ignore link paths
    var url = this.href; // get link

    $("main").fadeOut(pageDuration).css("display", "none");
    $("#ajax > .content").load(url);
    $("#ajax").fadeIn(pageDuration);
  });

  // page transitions based on nav clicks
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

    // layout tiles using Masonry jQuery plugin
    $("#project-grid").masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentagePosition: true
    });
  });
  $("#gallery-link").click(function() {
    $("li").removeClass("selected-page");
    $(this).addClass("selected-page");
    $("main").fadeOut(pageDuration).css("display", "none");
    $("#gallery").fadeIn(pageDuration);

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

function changeImg() {
  imageIndex = (imageIndex + 1) % (projectData.length);
  var imgText = projectData[imageIndex]["name"] + " (" + projectData[imageIndex]["year"]  + ")";

  $(".slide-img > img")
    .attr('src', "src/img/" + projectData[imageIndex]["imgFile"])
    .attr('alt', imgText);
  $(".img-caption").text(imgText);
}
