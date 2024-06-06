import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.165.0/three.module.js';
/////////////////////////////////////////////////////
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set (0,2,5);
camera.lookAt(new THREE.Vector3(0,0,0))
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

///////////////////////////////////////////////////////

const sizes = {

    with: window.innerWidth,
    height: window.innerHeight
}


const light = new THREE.AmbientLight(0xffffff, 1.0)
scene.add(light);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 * Math.random() });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

renderer.setAnimationLoop(render)

///////////////////////////////////////////////////////
function render(){
    
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    antialias:true
    renderer.render( scene, camera );

}

window.addEventListener('resize',()=>{
    sizes.with=window.innerWidth;
    sizes.height=window.innerHeight;

    camera.aspect=sizes.with/sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.with,sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
})



