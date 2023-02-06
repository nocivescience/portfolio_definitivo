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

  function cubeRender() {
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

    // Create the geometries
    const geometry = new THREE.BoxGeometry(3, 3, 3);

    // Create the material geometry
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
      new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    ];

    // Create the geometries mesh
    const cube = new THREE.Mesh(geometry, materials);

    // Add the cube to the scene
    scene.add(cube);

    // Set the camera position
    camera.position.z = 5;

    // Render the scene
    renderer.render(scene, camera);

    function onDocumentMouseMove(event) {
      event.preventDefault();
      cube.rotation.z = (event.clientX / window.innerWidth) * 2 * Math.PI;
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
  }
  function dodecahedroRender() {
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
      .getElementById("dodecahedroRightContainer")
      .appendChild(renderer.domElement);

    // Create the dodecahedron geometry
    const geometry = new THREE.DodecahedronGeometry(1, 0);

    // Create the materials for each face
    const materials = [
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

    // Create a group to hold the faces
    const group = new THREE.Group();

    // Add each face as a separate mesh to the group
    for (let i = 0; i < geometry.faces.length; i++) {
      const face = new THREE.Mesh(geometry, [materials[i % materials.length]]);
      face.position.x = (Math.random() - 0.5) * 10;
      face.position.y = (Math.random() - 0.5) * 10;
      face.position.z = (Math.random() - 0.5) * 10;
      face.updateMatrix();
      group.add(face);
    }

    // Add the group to the scene
    scene.add(group);

    // Set the camera position
    camera.position.z = 5;

    // Render the scene
    renderer.render(scene, camera);

    function onDocumentMouseMove(e) {
      e.preventDefault();
      group.rotation.z = (e.clientX / window.innerWidth) * 2 * Math.PI;
      group.rotation.x = (e.clientY / window.innerHeight) * 2 * Math.PI;
    }

    function animate() {
      requestAnimationFrame(animate);
      group.rotation.x += 0.01;
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    document.addEventListener(
      "mousemove",
      (e) => onDocumentMouseMove(e),
      false
    );
  }

  function piramidRender() {
    //create the camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // create the Render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document
      .getElementById("piramidRightContainer")
      .appendChild(renderer.domElement);

    // Crear la geometría de la pirámide
    const geometry = new THREE.TetrahedronGeometry(3, 0);

    // Crear los materiales para cada cara de la pirámide
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    ];
    const faces = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(1, 0, 3),
      new THREE.Face3(2, 1, 3),
    ];
    for (let i = 0; i < faces.length; i++) {
      geometry.faces[i].materialIndex = i;
    }
    // Crear la malla de la pirámide utilizando los materiales
    const pyramid = new THREE.Mesh(geometry, materials);

    // Agregar la pirámide a la escena
    scene.add(pyramid);
    camera.position.z = 5;
    renderer.render(scene, camera);
    function onDocumentMouseMove(e) {
      e.preventDefault();
      pyramid.rotation.z = (e.clientX / window.innerWidth) * 2 * Math.PI;
      pyramid.rotation.x = (e.clientY / window.innerHeight) * 2 * Math.PI;
    }
    function animate() {
      requestAnimationFrame(animate);
      pyramid.rotation.x += 0.01;
      pyramid.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    document.addEventListener("mousemove", onDocumentMouseMove, true);
  }

  function torusRender() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document
      .getElementById("torusRightContainer")
      .appendChild(renderer.domElement);
    var geometry = new THREE.TorusGeometry(2, 1, 16, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    function onDocumentMouseMove(e) {
      e.preventDefault();
      torus.rotation.y = (e.clientX / window.innerWidth) * 2 * Math.PI;
      torus.rotation.x = (e.clientY / window.innerHeight) * 2 * Math.PI;
    }
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    animate();
  }

  cubeRender();
  dodecahedroRender();
  piramidRender();
  torusRender();
};
