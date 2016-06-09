//Portfolio Site
//created by Michael Braverman on April 16, 2016

// initial animations
TweenLite.to($('body'), 1.0, {opacity:1});
TweenLite.from($('#title'), 1.5, {opacity:0.4, scale:3, left:200, delay:1,rotationZ:360, rotationY:360, perspective: 400});
TweenLite.fromTo($('nav ul'), 1, {opacity:0, scaleX:0} ,{opacity:1, delay:1.0, scale:1});
TweenLite.fromTo($('#slide-img'), 1, {opacity:0, scale:0} ,{opacity:1, rotationX:720, delay:2.0, scale:1});
TweenLite.fromTo($('#nav-toggle-button'), 1, {opacity:0, scale:0} ,{opacity:1, rotationX:720, delay:2.0, scale:1});
TweenLite.fromTo($('.img-caption'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.0, scale:1});
TweenLite.fromTo($('.content'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.5, rotationY:360, scale:1});
TweenLite.fromTo($('footer'), 1, {opacity:0, scale:0} ,{opacity:1, delay:2.5, scale:1});

// on load
$( document ).ready(function() {

  ////////////////////////// AJAX LOAD /////////////////////////////

  // ANY page click
  $(".page-link").click(function() {
    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
  });

  // ABOUT PAGE click
  $("#about-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#about");
  });

  $("#projects-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    TweenLite.to($('main'), 1, {opacity:0, onComplete:next1});
    function next1() {
      TweenLite.to($('main'), 0, {css:{display:"none"}});
      TweenLite.to($('#projects'), 0, {css:{display:"block"}, onComplete:reloadMasonry});
      TweenLite.fromTo($('#projects'), 1, {opacity:0}, {opacity:1, rotationY:0, rotationX:0});
    }

    reloadMasonry();

    function reloadMasonry() {
      // layout tiles using Masonry jQuery plugin
      $("#project-grid").masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentagePosition: true
      });
    }
  });

  // GALLERY PAGE click
  $("#gallery-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#gallery");
  });

  // RESUME PAGE click
  $("#resume-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#resume");
  });

  // CONTACT PAGE click
  $("#contact-link").click(function() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#contact");
  });

  // Generate project links for PROJECT PAGE
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

  // On project link click load AJAX
  $(".grid-description > a").on('click', function(event) {
    event.preventDefault(); // ignore default link behaviour
    var url = this.href; // get link path

    // load page
    $("#ajax > .content").load(url);
    pageTransition("main", "#ajax");
  });

  /////////////////////// INDIVIDUAL ANIMATIONS ///////////////////////

  // change image slide on click
  $("#slide-img").click(function() {
    changeImg();
  })

  // cool nav select effect
  $(".page-link").hover(
    function() {
      TweenLite.to($(this), 1, {scale:1.2});
    },
    function() {
      TweenLite.to($(this), 1, {scale:1});
    }
  );

  // get the user busy with the title
  $("#title > h1").hover(
    function() {
      TweenLite.to($(this), 1, {opacity:0.3, rotationY:180});
    },
    function() {
      TweenLite.to($(this), 1, {opacity:1, rotationY:0});
    }
  );

  // mobile menu click animation
  $("#nav-toggle-button").click(function() {
    TweenLite.fromTo($(this), 1.0, {rotationY:0, rotationX:0} ,{rotationY:360, rotationX:360});

    // Show nav in mobile view
    $("nav ul").toggleClass("show-nav-mobile");
  });

});

// General page transition
function pageTransition(_from, _to) {
  TweenLite.to($(_from), 0.5, {opacity:0, rotationY:180, rotationX:180,  perspective:400, transformOrigin:"right 40% 100", onComplete:next1});
  function next1() {
    TweenLite.set($(_from), {css:{display:"none"}});
    TweenLite.set($(_to), {css:{display:"block"}});

    TweenLite.from($(_to), 1, { rotationY:180, rotationX:180,  perspective:400, transformOrigin:"right 40% 100"});
    TweenLite.to($(_to), 1, {opacity:1, rotationY:0, rotationX:0});
  }
}

/////////////////////////////////// MISC ///////////////////////////////////

// Project Metadata
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

// Randomize the sequence of photos
var imageIndex = Math.floor(Math.random() * projectData.length);
// Slide image change function
function changeImg() {
  imageIndex = (imageIndex + 1) % (projectData.length);
  var imgText = projectData[imageIndex]["name"] + " (" + projectData[imageIndex]["year"]  + ")";

  $("#slide-img > img")
    .attr('src', "src/img/" + projectData[imageIndex]["imgFile"])
    .attr('alt', imgText);
  $(".img-caption").text(imgText);
}

// Iluminati-conspiracy-surveilance Google Analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78885933-1', 'auto');
ga('send', 'pageview');
