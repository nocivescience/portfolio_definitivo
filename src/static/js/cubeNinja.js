window.onload = () => {
  // const lineHorizon=document.getElementById('line-right-container')
  const imagen1 = document.getElementById("imagen1");
  const imagen2 = document.getElementById("imagen2");
  const imagen3 = document.getElementById("imagen3");
  // lineHorizon.setAttribute('y2','11')
  const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("active-image");
      }
    });
  };
  const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
  });
  observador.observe(imagen1);
  observador.observe(imagen2);
  observador.observe(imagen3);

  // Create the scene
  const scene = new THREE.Scene();

  // Create the camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Create the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
  document
    .getElementById("cubeRightContainer")
    .appendChild(renderer.domElement);
  document
    .getElementById("dodecahedroRightContainer")
    .appendChild(renderer.domElement);

  // Create the geometries
  const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
  const dodecahedroGeometry = new THREE.BoxGeometry(3, 3, 3);

  // Create the material geometry
  const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    new THREE.MeshBasicMaterial({ color: 0xffff00 }),
  ];
  const dodecahedroMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    new THREE.MeshBasicMaterial({ color: 0xaaaa00 }),
    new THREE.MeshBasicMaterial({ color: 0x00aaaa }),
    new THREE.MeshBasicMaterial({ color: 0xaa00aa }),
    new THREE.MeshBasicMaterial({ color: 0x00aa00 }),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa }),
    new THREE.MeshBasicMaterial({ color: 0x555555 }),
  ];

  // Create the cube mesh
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
  const dodecahedro = new THREE.Mesh();
  // Add the cube to the scene
  scene.add(cube);

  // Set the camera position
  camera.position.z = 5;

  // Render the scene
  renderer.render(scene, camera);

  function onDocumentMouseMove(event) {
    event.preventDefault();
    cube.rotation.y = (event.clientX / window.innerWidth) * 2 * Math.PI;
    cube.rotation.x = (event.clientY / window.innerHeight) * 2 * Math.PI;
  }

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  document.addEventListener("mousemove", onDocumentMouseMove, true);
};
