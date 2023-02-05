window.onload=()=>{
  // const lineHorizon=document.getElementById('line-right-container')
    const imagen1= document.getElementById('imagen1')
    const imagen2= document.getElementById('imagen2')
    const imagen3= document.getElementById('imagen3')
    // lineHorizon.setAttribute('y2','11')
    const cargarImagen=(entradas, observador)=>{
        entradas.forEach(entrada=>{
            if(entrada.isIntersecting){
                entrada.target.classList.add('active-image')
            }
        })
    }
    const observador= new IntersectionObserver(cargarImagen,{
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1
    })
    observador.observe(imagen1)
    observador.observe(imagen2)
    observador.observe(imagen3)


  // Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/4, window.innerHeight/4);
document.querySelector('.right-container').appendChild(renderer.domElement);

// Create the cube geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create the cube material
const materials = [
new THREE.MeshBasicMaterial({ color: 0xff0000 }),
new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
new THREE.MeshBasicMaterial({ color: 0x0000ff }),
new THREE.MeshBasicMaterial({ color: 0xff00ff }),
new THREE.MeshBasicMaterial({ color: 0x00ffff }),
new THREE.MeshBasicMaterial({ color: 0xffff00 })
];


// Create the cube mesh
const cube = new THREE.Mesh(geometry, materials);

// Add the cube to the scene
scene.add(cube);

// Set the camera position
camera.position.z = 5;

// Render the scene
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
}