//Portfolio Site
//created by Michael Braverman on April 16, 2016

// welcome animations
if(!window.location.hash){
  TweenLite.to($('body'), 0.7, {opacity:1});
  TweenLite.from($('#title'), 1.5, {opacity:0.4, scale:3, rotationZ:360, rotationY:360, perspective:200, delay:0.7, ease:Elastic.easeInOut});
  TweenLite.from($('nav ul'), 1.5, {opacity:0, scaleX:0, delay:1.0, transformOrigin:"left", ease:Elastic.easeInOut});
  TweenLite.from($('#slide-img'), 1.5, {opacity:0, scale:0, rotationX:360, delay:1.5, ease:Elastic.easeOut});
  TweenLite.from($('#nav-toggle-button'), 1.5, {opacity:0, scale:2, rotationX:720, delay:1.5, scale:0, ease:Elastic.easeInOut});
  TweenLite.from($('.img-caption'), 1.5, {opacity:0, scale:0, delay:1,ease:Elastic.easeIn});
  TweenLite.from($('.content'), 1.5, {opacity:0, scale:0, rotationY:180, delay:2.0, ease:Elastic.easeOut});
  TweenLite.from($('footer'), 1.5, {opacity:0, scale:0, delay:2.0});
} else {
  // when something other than home is specified
  TweenLite.to($('body'), 0, {opacity:1});
  TweenLite.from($('#title'), 1, {opacity:0});
  TweenLite.from($('nav ul'), 1, {opacity:0, transformOrigin:"left", scaleX:0, ease:Elastic.easeInOut});
  TweenLite.from($('footer'), 0.5, {opacity:0, scale:0, delay:1});
}

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

  // CHECK THE URL
  checkHash();
  // check if user presses back in history
  $(window).on('hashchange', function(){
    checkHash();
  });
  // open window based on hash
  function checkHash() {
    // open pages on load based on the url hash
    var windowHash = window.location.hash;
    switch (windowHash  ) {
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
      // check if it's a project
      var project = false;
      for (var i in mediaData) {
        var url = "/pages/" + mediaData[i]["page"];
        if (("#"+mediaData[i]["page"]) == windowHash) {
          $("#ajax > .content").load(url, function(){
            // scroll to top of menu
            $(window).scrollTop(0);
            // wait before loaded
            pageTransition("main", "#ajax");
            project = true;
          });
        }
      }
      // default home page
      if (!project) {
        loadAboutPage();
      }
      break;
    }
  }

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
    // reloadMasonry();

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
  for (var i in mediaData) {
    if(mediaData[i]["type"] == "project"){
      $("#project-grid").append(
        $("<div>").attr("id","project-" + i).addClass("grid-item")

        // make a tall tile every other 3 tiles
        .addClass(function(){
          if ( mediaData[i]["priority"] == 2) {
            return "grid-item--height2";
          } else if ( mediaData[i]["priority"] == 3) {
            return "grid-item--height3";
          } else {
            return null;
          }
        })

        // background-image
        .css({
          "background-image" : function(){
            var mediaURL = " ";
            // load the Gif if availabe
            if (mediaData[i]["gifFile"] != null) {
              var mediaURL = "url(" + mediaData[i]["gifFile"] + ")";
            } else if (mediaData[i]["imgFile"] != null) {
              var mediaURL = "url(" + mediaData[i]["imgFile"] + ")";
            }
            return mediaURL;
          },
          "background-size" : "cover",
          "background-position" : "center"
        })

        // content that goes inside each grid element
        .append(
          $("<div>").addClass("grid-description").append(
            // link to project
            $("<a>", {
              href : "#" + mediaData[i]["page"],
              text : mediaData[i]["name"]
            }),
            ("  "),
            // span same level as <a>
            $("<span>", {text : mediaData[i]["year"]})
          )
        )
      );
    }
  }

  // Generate Media for Gallery PAGE
  var j = 0;
  for (var i in mediaData) {
    if(mediaData[i]["type"] != "project"){
      $("#gallery-grid").append(
        $("<div>").attr("id","media-" + j).addClass("grid-item")

        // make a tall tile every other 3 tiles
        .addClass(function(){
          if ( j % 2 == 0 && j !=0) {
            return "grid-item--height2";
          } else {
            return null;
          }
        })
        // media image in the background
        .css({
          "background-image" : "url(" + mediaData[i]["tumbnail"] + ")",
          "background-size" : "cover",
          "background-position" : "center"
        })
      );
      j++;
    }
  }

  // On project link click load AJAX
  $(".grid-description > a").on('click', function(event) {
    // event.preventDefault(); // ignore default link behaviour
    var url = "/pages/" + $(this).attr("href"); // get link path

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
      if (show == "#projects" || show == "#gallery") {
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
  changeImg(100);
  // change image slide on click
  $("#slide-img").click(function() {
    changeImg(100);
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
  $(".tile-grid").masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentagePosition: true
  });
}
/////////////////////////////////// MISC ///////////////////////////////////

var previousIndex;
var imageIndex;
function changeImg(time) {
  // Randomize the sequence of photos
  previousIndex = imageIndex;
  // on start
  if (previousIndex == null) {
    imageIndex = (Math.floor(Math.random() * 16)) % (mediaData.length);
    console.log("SHUFFLE slides ");
  }

  // next image until it is different
  // avoids duplicates and projects without images
  while (previousIndex == imageIndex || mediaData[imageIndex]["imgFile"] == null || mediaData[imageIndex]["type"] != "project") {
    imageIndex++;
    imageIndex = (imageIndex) % mediaData.length;
  }

  console.log("slide " + imageIndex);

  var imgText = mediaData[imageIndex]["name"] + " (" + mediaData[imageIndex]["year"]  + ")";

  var slideImg = $("#slide-img > img");
  var imgCaption = $(".img-caption");
  TweenLite.to(slideImg, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  TweenLite.to(imgCaption, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  function next() {
    slideImg
      .attr('src', mediaData[imageIndex]["imgFile"])
      .attr('alt', imgText);
    imgCaption.text(imgText);
    TweenLite.to(slideImg, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
    TweenLite.to(imgCaption, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
  }
}

// Project Metadata
var mediaData = [
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/6/5706/30441769776_245fc2f92d_c.jpg',
      'priority' : 1,
      'name':'Ice Nine',
      'page':'ice-nine.html',
      'year': 2016,
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8600/29629268244_e10ab41e98_c.jpg',
      'priority' : 1,
      'name':'Sleep Data Abyss',
      'page':'data-abyss.html',
      'year': 2016,
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8438/29417930580_3822ebf3c5_c.jpg',
      'priority' : 1,
      'name':'600 Grief',
      'page':'600-grief.html',
      'year': 2016,
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7484/29628885231_f997dba9e5_c.jpg',
      'priority' : 1,
      'name':'Hummin',
      'page':'hummin.html',
      'year': 2016,
    },
    {
      'type':'project',
      'gifFile':'http://i.giphy.com/26BoEscVHpDa5XYre.gif',
      'imgFile':'https://c1.staticflickr.com/9/8695/28808877635_c977be1337_c.jpg',
      'priority' : 2,
      'name':'Ossacip Bot',
      'page':'ossacip-bot.html',
      'year': 2016,
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8674/28310046481_76696628b6_c.jpg',
      'name':'Infrastructural Utopia Tower',
      'priority' : 3,
      'page':'utopia-tower.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8802/28388678085_ac9fdce3fe_c.jpg',
      'gifFile':'http://i.giphy.com/3o6Zt8gmabVDL2AQV2.gif',
      'name':'Multiverse Clockwork',
      'page':'multiverse-clockwork.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7570/27772929823_ae1922ff53_c.jpg',
      'name':'infORM',
      'priority' : 1,
      'page':'inform.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8578/28524788990_3f76b39b23_c.jpg',
      'name':'Data Poetics',
      'priority' : 1,
      'page':'data-poetics.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7656/27772929453_622e677747_c.jpg',
      'name':'Emotion Cube',
      'priority' : 2,
      'page':'emotion-cube.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8638/28388677955_4c28b7db75_z.jpg',
      'name':"The Endevour's Guide to The 21st Century",
      'priority' : 1,
      'page':'endevour.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8277/27772929903_68a55209e1_c.jpg',
      'name':'Artificial Personality Box',
      'priority' : 3,
      'page':'personality-box.html',
      'year': 2015,
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7675/28284474322_5efdb11d54_c.jpg  ',
      'name':'Poem Maschine',
      'priority' : 2,
      'page':'poem-maschine.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8819/27772928563_557a48d304_o.png',
      'name':'Flowing Pagoda',
      'priority' : 2,
      'page':'flowing-pagoda.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8787/28389454205_6c3c3ffe1a_c.jpg',
      'name':'Stardust Music Composer',
      'page':'stardust-composer.html',
      'priority' : 1,
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8692/28206313953_c4b26799de_c.jpg',
      'name':'Logos',
      'page':'logos.html',
      'priority' : 1,
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8157/28744393481_a61f2cb437_c.jpg',
      'name':'9x6',
      'page':'9x6.html',
      'priority' : 1,
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://usercontent1.hubstatic.com/1137335_f496.jpg',
      'name':'Feeduino',
      'page':'feeduino.html',
      'priority' : 1,
      'year': 2012
    },

    // IMAGES
];

// Iluminati-conspiracy-surveilance Google Analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78885933-1', 'auto');
ga('send', 'pageview');
