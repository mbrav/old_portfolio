//infORM alpha
//created by Michael Braverman on March 12, 2016

var title, aboutText;


function setup() {
  noCanvas();

  title = select('#title');
  aboutText = select('#about-text');
  aboutText.hide();

  title.mouseOver(function showt(){
    aboutText.show();
    console.log("about-text: show");
  });

  title.mouseOut(function hidet(){
    aboutText.hide();
    console.log("about-text: hide");
  });

}

function draw() {
}
