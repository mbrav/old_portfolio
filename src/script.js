//Portfolio Site
//created by Michael Braverman on April 16, 2016

// initial animations
TweenMax.fromTo($('#title'), 1.5, {opacity:0.4, scale:3, left:200}, {opacity:1, rotationX:720, delay:1.0, rotationZ:360, rotationY:360, scale:1});
TweenMax.fromTo($('nav ul'), 1, {opacity:0, scaleX:0} ,{opacity:1, delay:1.0, scale:1});
TweenMax.fromTo($('#slide-img'), 1, {opacity:0, scale:0} ,{opacity:1, rotationX:720, delay:2.0, scale:1});
TweenMax.fromTo($('.img-caption'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.0, scale:1});
TweenMax.fromTo($('.content'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.5, rotationY:360, scale:1});
TweenMax.fromTo($('footer'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.5, scale:1});

// on load
$( document ).ready(function() {

  var pageDuration = 700;

  // change image slide on click
  $("#slide-img").click(function() {
    changeImg();
  })

  $(".page-link").hover(
    function() {
      TweenLite.to($(this), 1, {scale:1.2});
    },
    function() {
      TweenLite.to($(this), 1, {scale:1});
    }
  );

  $("#title > h1").hover(
    function() {
      TweenLite.to($(this), 1, {opacity:0.3, rotationY:180});
    },
    function() {
      TweenLite.to($(this), 1, {opacity:1, rotationY:0});
    }
  );

  // generate project links
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
      })
      // make a tall tile every other 3 tiles
      .addClass(function(){
        if ( i % 2 == 0 && i !=0) {
          return "grid-item--height2";
        } else {
          return null;
        }
      })
      // project image in the background
      .css({
        "background-image" : "url(src/img/" + projectData[i]["imgFile"] + ")",
        "background-size" : "cover",
        "background-position" : "center"
      })
      // content that goes inside each grid element
      .append(
        $("<div>").addClass("grid-description").append(
          // link to project
          $("<a>", {
            href : "/pages/" + projectData[i]["page"],
            text : projectData[i]["name"]
          }),
          // span same level as <a>
          $("<span>", {text : projectData[i]["year"]})
        )
      )
    );
  }

  // on project link click
  $(".grid-description > a").on('click', function(event) {
    event.preventDefault(); // ignore default link behaviour
    var url = this.href; // get link path

    $("main").css("display", "none");
    $("#ajax > .content").load(url);
    $("#ajax").show();
  });

  // page transitions based on nav clicks
  // TODO - chnage the way current pages are interacted with
  $("#about-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");
    $("main").css("display", "none");
    $("#about").show();

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#projects-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");
    $("main").css("display", "none");
    $("#projects").show();

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");

    // layout tiles using Masonry jQuery plugin
    var projectGrid = $("#project-grid").masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentagePosition: true
    });

    // load masonry
    projectGrid.masonry('reloadItems');
  });
  $("#gallery-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");
    $("main").css("display", "none");
    $("#gallery").show();

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#resume-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");
    $("main").css("display", "none");
    $("#resume").show();

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });
  $("#contact-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");
    $("main").css("display", "none");
    $("#contact").show();

    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });

  $("#nav-toggle-button").click(function() {
    $("nav ul").toggleClass("show-nav-mobile");
  });
});

var projectData = [
    {
      'imgFile':'01.jpg',
      'page':'intellect.html',
      'name':'Artificial Intellect Box',
      'year': 2015,
    },
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
      'imgFile':'06.png',
      'name':'Multiverse Clockwork',
      'page':'multiverse-clockwork.html',
      'year': 2016
    },
    {
      'imgFile':'07.png',
      'name':'Flowing Pagoda',
      'year': 2015
    },
    {
      'imgFile':'08.jpg',
      'name':'The Endevours Guide to The 21st Century',
      'year': 2015
    }
];

var imageIndex = Math.floor(Math.random() * projectData.length);

function changeImg() {
  imageIndex = (imageIndex + 1) % (projectData.length);
  var imgText = projectData[imageIndex]["name"] + " (" + projectData[imageIndex]["year"]  + ")";

  $("#slide-img > img")
    .attr('src', "src/img/" + projectData[imageIndex]["imgFile"])
    .attr('alt', imgText);
  $(".img-caption").text(imgText);
}
