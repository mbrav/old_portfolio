//Portfolio Site
//created by Michael Braverman on April 16, 2016

// initial animations
TweenLite.to($('body'), 0.7, {opacity:1});
TweenLite.from($('#title'), 1.5, {opacity:0.4, scale:3, rotationZ:360, rotationY:360, perspective:200, delay:0.7, ease:Elastic.easeInOut});
TweenLite.from($('nav ul'), 1.5, {opacity:0, scaleX:0, delay:1.0, ease:Elastic.easeInOut});
TweenLite.from($('#slide-img'), 1.5, {opacity:0, scale:0, rotationX:360, delay:1.5, ease:Elastic.easeOut});
TweenLite.from($('#nav-toggle-button'), 1.5, {opacity:0, scale:2, rotationX:720, delay:1.5, scale:0, ease:Elastic.easeInOut});
TweenLite.from($('.img-caption'), 1.5, {opacity:0, scale:0, delay:1,ease:Elastic.easeIn});
TweenLite.from($('.content'), 1.5, {opacity:0, scale:0, rotationY:180, delay:2.0, ease:Elastic.easeOut});
TweenLite.from($('footer'), 1.5, {opacity:0, scale:0, delay:2.0});

// on load
$( document ).ready(function() {
  // get window dimensions
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  // update values on resize
  $(window).resize(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
  });

  ////////////////////////// AJAX LOAD /////////////////////////////
  // ANY page click
  $(".page-link").click(function() {
    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
    // remove blur effect
    $("main").removeClass("blur-effect");
    $("footer").removeClass("blur-effect");
  });

  // ABOUT PAGE click
  function loadAboutPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#about");
  }
  $("#about-link").click(function() {
    loadAboutPage();
  });

  // PROJECT PAGE click
  function loadProjectPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    // load project grid
    reloadMasonry();

    pageTransition("main", "#projects");

    // fade out return text
    TweenMax.to($('#return-to-projecs'), 1, {opacity:0, onComplete:next});
    function next() {
      // clear return text
      $("#return-to-projecs").empty();
    }
  }
  $("#projects-link").click(function() {
    loadProjectPage();
  });

  // GALLERY PAGE click
  function loadGalleryPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#gallery");
  }
  $("#gallery-link").click(function() {
    loadGalleryPage();
  });

  // RESUME PAGE click
  function loadResumePage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#resume");
  }
  $("#resume-link").click(function() {
    loadResumePage();
  });

  // CONTACT PAGE click
  function loadContactPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#contact");
  }
  $("#contact-link").click(function() {
    loadContactPage();
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

    // change nav button text for mobile
    $("#nav-toggle-button").html("BACK");
    // show and animate return text for non-mobile
    $("#return-to-projecs").html("back");
    TweenMax.fromTo($('#return-to-projecs'), 0.7, {opacity:1, scale:2}, {opacity:0.5, scale:1, repeat:-1, yoyo:true});

    // load page
    $("#ajax > .content").load(url, function(){
      // scroll to top of menu
      $(window).scrollTop(0);
      // wait before loaded
      pageTransition("main", "#ajax");
    });
  });


  checkHash();
  // check if user presses back in history
  $(window).on('hashchange', function(){
    checkHash();
  });
  // open window based on hash
  function checkHash() {
    // open pages on load based on the url hash
    switch (window.location.hash) {
      case "#about":
      loadAboutPage();
      break;
      case "#gallery":
      loadGalleryPage();
      break;
      case "#projects":
      loadProjectPage();
      break;
      case "#resume":
      loadResumePage();
      break;
      case "#contact":
      loadContactPage();
      break;
      default:
      // default home page
      loadAboutPage();
      break;
    }
  }

  // General page transitions
  function pageTransition(hide, show) {
    // HIDE exeptions
    var ajaxExeption = false;
    if ($("#ajax").hasClass("current-main") && show == "#projects") {
      // different animation when returning FROM project view
      TweenLite.to($(hide), 0.75, {opacity:0.5 , rotationY:-90, transformPerspective:1000, transformOrigin:"right 0% 20%", onComplete:next1, ease:Power2.easeIn});
      ajaxExeption = true;
    } else {
      // default animation for other elements
      TweenLite.to($(hide),  0.75, {opacity:0.5 , rotationY:90, transformPerspective:1000, transformOrigin:"right 0% 20%", onComplete:next1, ease:Power2.easeIn});
    }

    function next1() {
      $(hide).removeClass("current-main");
      $(show).addClass("current-main");

      // SHOW exeptions
      if (show == "#projects") {
        // reload tiles
        reloadMasonry();
      }

      if(ajaxExeption) {
        // different animation when returning back from project view
        TweenLite.fromTo($(show), 1, {transformOrigin:"right 0% 20%", rotationY:90, transformPerspective:1200, opacity:0.5}, {rotationY:0, opacity:1, ease:Power2.easeOut});
        ajaxExeption = false;
      } else {
        // SHOW exeptions
        if (show == "#ajax") {
          // different animation when going INTO project view
          TweenLite.from($(show), 1, {transformOrigin:"left 0% 20%", rotationY:90});
          TweenLite.to($(show), 1, {opacity:1, rotationY:0, ease:Power3.easeOut});
        }
        // DEFAULT
        else {
          TweenLite.from($(show), 1, {transformOrigin:"left 0% 20%", rotationY:90});
          TweenLite.to($(show), 1, {opacity:1, rotationY:0, ease:Elastic.easeOut});
        }
      }
    }
  }

  /////////////////////// INDIVIDUAL ANIMATIONS ///////////////////////

  // change image on load
  changeImg();
  // change image slide on click
  $("#slide-img").click(function() {
    changeImg();
  })

  // change slide every 4 seconds
  setInterval(function(){
    changeImg(1000);
  }, 5000);

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

  // return to about page when clicked
  $("#title").click(function() {
    pageTransition("main", "#about");
  });

  // mobile menu click animation
  $("#nav-toggle-button").click(function() {
    var navUl = $("nav ul");
    TweenLite.fromTo($(this), 0.7, {rotationY:180, rotationX:180}, {rotationY:0, rotationX:0});

    // scroll to top of menu
    $(window).scrollTop(0);
    // add blur effect
    $("main").toggleClass("blur-effect");
    $("footer").toggleClass("blur-effect");

    // if "project view" is the the current visible main
    if ($("#ajax").hasClass("current-main")){
      // load projects page
      loadProjectPage();
      // change nav button text back to MENU when done
      $("#nav-toggle-button").html("MENU");
      // remove blur effect
      $("main").removeClass("blur-effect");
      $("footer").removeClass("blur-effect");
    } else {
      // show navigation menu for mobile
      navUl.toggleClass("show-nav-mobile");
      TweenLite.to(navUl, 0, {css:{"z-index":5, "translateZ":100}});
      TweenLite.from(navUl, 0.8, {transformOrigin:"50% 50%", scaleX:0, scaleY:0, opacity:0.4, ease:Elastic.easeOut});
    }
  });
});

function reloadMasonry() {
  // layout tiles using Masonry jQuery plugin
  $("#project-grid").masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentagePosition: true
  });
}
/////////////////////////////////// MISC ///////////////////////////////////

// var isMobile = false;
// // check if mobile device
//
// if (isMobile) {
//   $(".grid-description > a").show();
//   $(".grid-description > span").show();
// } else {
//   $(".grid-description > a").hide();
//   $(".grid-description > span").hide();
//   $(".grid-description > a").hover(function() {
//     $(this).show();
//   });
//   $(".grid-description > span").hover(function() {
//     $(this).show();
//   });
// }


// Project Metadata
var projectData = [
    {
      'imgFile':'02.png',
      'name':'Infrastructural Utopia Towerr',
      'page':'utopia-tower.html',
      'year': 2016
    },
    {
      'imgFile':'01.jpg',
      'name':'Artificial Personality Box',
      'page':'personality-box.html',
      'year': 2015,
    },
    {
      'imgFile':'02.png',
      'name':'Infrastructural Utopia Tower',
      'page':'utopia-tower.html',
      'year': 2016
    },
    {
      'imgFile':'03.png',
      'name':'infORM alpha',
      'page':'inform.html',
      'year': 2016
    },
    {
      'imgFile':'04.jpg',
      'name':'Poem Maschine',
      'page':'poem-maschine.html',
      'year': 2015
    },
    {
      'imgFile':'05.png',
      'name':'Emotion Cube',
      'page':'emotion-cube.html',
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
      'page':'flowing-pagoda.html',
      'year': 2015
    },
    {
      'imgFile':'08.jpg',
      'name':'The Endevours Guide to The 21st Century',
      'page':'endevour.html',
      'year': 2015
    },
    {
      'name':'Data Poetics',
      'page':'data-poetics.html',
      'year': 2016
    },
    {
      'name':'Stardust Music Composer',
      'page':'stardust-composer.html',
      'year': 2016
    }
];

var previousIndex;
var imageIndex;
function changeImg(time) {
  // Randomize the sequence of photos
  previousIndex = imageIndex;
  // on start
  if (previousIndex == null) {
    imageIndex = (Math.floor(Math.random() * projectData.length) + 1) % (projectData.length);
  }

  // next image until it is different
  // avoids duplicates and project without images
  while (previousIndex == imageIndex || projectData[imageIndex]["imgFile"] == null || imageIndex == 0) {
    imageIndex++;
    imageIndex = (imageIndex + 1) % projectData.length;
  }

  var imgText = projectData[imageIndex]["name"] + " (" + projectData[imageIndex]["year"]  + ")";

  var slideImg = $("#slide-img > img");
  var imgCaption = $(".img-caption");
  if (time == null || time == 0) {
    slideImg
      .attr('src', "src/img/" + projectData[imageIndex]["imgFile"])
      .attr('alt', imgText);
    imgCaption.text(imgText);
  } else {
    TweenLite.to(slideImg, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
    TweenLite.to(imgCaption, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
    function next() {
      slideImg
        .attr('src', "src/img/" + projectData[imageIndex]["imgFile"])
        .attr('alt', imgText);
      imgCaption.text(imgText);
      TweenLite.to(slideImg, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
      TweenLite.to(imgCaption, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
    }
  }
}

// Iluminati-conspiracy-surveilance Google Analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78885933-1', 'auto');
ga('send', 'pageview');
