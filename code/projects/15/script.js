// three.js reated June 1st, 2016

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/pixelation, window.innerHeight/pixelation,false);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0x2aaaaa } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 7;
var pixelation = 1;

cube.matrix.setPosition(12000, 1231, 123);
cube.updateMatrix();
function render() {
  renderer.setSize( window.innerWidth/pixelation, window.innerHeight/pixelation,false);
	requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.03;
  cube.rotation.z += 0.02;
  renderer.render( scene, camera );

}
render();

setTimeout( function () {
}, 200);
