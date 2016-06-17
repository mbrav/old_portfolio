//Free Special Letters
//created by Michael Braverman on June 2nd, 2016

var characters = [
  [
    ['𝓐','𝓑','𝓒','𝓓','𝓔','𝓕','𝓖','𝓗','𝓘','𝓙','𝓚','𝓛','𝓜','𝓝','𝓞','𝓟','𝓠','𝓡','𝓢','𝓣','𝓤','𝓥','𝓦','𝓧','𝓨','𝓩'],
    ['𝓪','𝓫','𝓬','𝓭','𝓮','𝓯','𝓰','𝓱','𝓲','𝓳','𝓴','𝓵','𝓶','𝓷','𝓸','𝓹','𝓺','𝓻','𝓼','𝓽','𝓾','𝓿','𝔀','𝔁','𝔂','𝔃']
  ],
  [
    ['𝔸','𝔹','𝕔','𝔻','𝔼','𝔽','𝔾','𝕙','𝕀','𝕁','𝕂','𝕃','𝕄','𝕆','𝕊','𝕋','𝕌','𝕍','𝕎','𝕏','𝕐'],
    ['𝕒','𝕓','𝕔','𝕕','𝕖','𝕗','𝕘','𝕙','𝕚','𝕛','𝕜','𝕝','𝕞','𝕟','𝕠','𝕡','𝕢','𝕣','𝕤','𝕥','𝕦','𝕧','𝕨','𝕩','𝕪','𝕫'],
    ['𝟘','𝟙','𝟚','𝟛','𝟜','𝟝','𝟞','𝟟','𝟠','𝟡']
  ],
  [
    ['𝙰','𝙱','𝙲','𝙳','𝙴','𝙵','𝙶','𝙷','𝙸','𝙹','𝙺','𝙻','𝙼','𝙽','𝙾','𝙿','𝚀','𝚁','𝚂','𝚃','𝚄','𝚅','𝚆','𝚈','𝚉'],
    ['𝚊','𝚋','𝚌','𝚍','𝚎','𝚏','𝚐','𝚑','𝚒','𝚓','𝚔','𝚕','𝚖','𝚗','𝚘','𝚙','𝚚','𝚛','𝚜','𝚝','𝚞','𝚟','𝚠','𝚡','𝚢','𝚣'],
    ['𝟶','𝟷','𝟸','𝟹','𝟺','𝟻','𝟼','𝟽','𝟾','𝟿']
  ],
  [
    ['Ⓐ','Ⓑ','Ⓒ','Ⓓ','Ⓔ','Ⓕ','Ⓖ','Ⓗ','Ⓘ','Ⓙ','Ⓚ','Ⓛ','Ⓜ︎','Ⓝ','Ⓞ','Ⓟ','Ⓠ','Ⓡ','Ⓢ','Ⓣ','Ⓤ','Ⓥ','Ⓦ','Ⓧ','Ⓨ','Ⓩ'],
    ['🅐','🅑','🅒','🅓','🅔','🅕','🅖','🅗','🅘','🅙','🅚','🅛','🅜','🅝','🅞','🅟','🅠','🅡','🅢','🅣','🅤','🅥','🅦','🅧','🅨','🅩']
  ],
  [
    ['𝐀','𝐁','𝐂','𝐃','𝐄','𝐅','𝐆','𝐇','𝐈','𝐉','𝐊','𝐋','𝐌','𝐍','𝐎','𝐏','𝐐','𝐑','𝐒','𝐓','𝐔','𝐕','𝐖','𝐗','𝐘','𝐙'],
    ['𝐚','𝐛','𝐜','𝐝','𝐞','𝐟','𝐠','𝐡','𝐢','𝐣','𝐤','𝐥','𝐦','𝐧','𝐨','𝐩','𝐪','𝐫','𝐬','𝐭','𝐮','𝐯','𝐰','𝐱','𝐲','𝐳']
  ]
];



function generate() {
  var input = document.getElementById('inputField').value;
  var lower;

  // text conversion

  for (var i in characters) {
    var convertedText = "";
    console.log("hello");
    for (var j in input) {
      var unknown = false;
      var space = false;
      var asciiCode;
      if (input[j].charCodeAt(0) >= 65 && input[j].charCodeAt(0) <= 90) {
        // Capital letters
        asciiCode = input[j].charCodeAt(0) - 65;
        lower = 0;
      } else if (input[j].charCodeAt(0) >= 97  && input[j].charCodeAt(0) <= 122) {
        // Lower-case letters
        asciiCode = input[j].charCodeAt(0) - 97;
        lower = 1;
      } else if (input[j].charCodeAt(0) == 40 ) {
        space = true;
      } else  {
        // for unknown characters
        unknown = true;
      }

      if (unknown || space) {
        // space for unknown chracters
        convertedText += ' ';
      } else {
        convertedText += characters[i][lower][asciiCode];
      }
    }

    var newP = document.createElement('div');
    newP.setAttribute('class','letters')
    newP.innerHTML = '<p>'+convertedText+'</p>';
    var main = document.getElementById('main');

    main.appendChild(newP);
  }
}
