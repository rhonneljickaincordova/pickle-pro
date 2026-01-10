import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function FloorPlanFull() {
  const [setupType, setSetupType] = useState('outdoor');
  const [viewMode, setViewMode] = useState('2d');
  const [showDimensions, setShowDimensions] = useState(true);
  const [showCourtDetails, setShowCourtDetails] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [unit, setUnit] = useState('meters');
  const [isRotating, setIsRotating] = useState(true);
  const [viewAngle, setViewAngle] = useState('perspective');
  const [showRoof, setShowRoof] = useState(true);
  const [showPosts, setShowPosts] = useState(true);
  const [showRidgeBeam, setShowRidgeBeam] = useState(true);
  const [showTrusses, setShowTrusses] = useState(true);
  const [showPurlins, setShowPurlins] = useState(true);
  const [showEaveBeams, setShowEaveBeams] = useState(true);
  const [showStructureLegend, setShowStructureLegend] = useState(true);
  const [cameraMode, setCameraMode] = useState('orbit'); // 'orbit' | 'walkthrough'
  const containerRef = useRef(null);
  const walkPositionRef = useRef({ x: 0, z: 25 });
  const walkRotationRef = useRef(0);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationRef = useRef(null);
  const angleRef = useRef(0);
  const keysPressed = useRef({});

  const toFeet = (m) => (m * 3.28084).toFixed(1);
  const formatDim = (m) => unit === 'meters' ? `${m}m` : `${toFeet(m)}'`;
  const isIndoor = setupType === 'indoor';

  const indoorSpecs = {
    ceilingHeight: 9,
    postHeight: 9,
    postDiameter: 0.4,
    roofPitch: 15,
    ridgeHeight: 12,
    posts: [
      { x: -24, z: -17, label: 'P1' }, { x: -12, z: -17, label: 'P2' }, { x: 0, z: -17, label: 'P3' },
      { x: 12, z: -17, label: 'P4' }, { x: 24, z: -17, label: 'P5' },
      { x: -24, z: 11, label: 'P6' }, { x: -12, z: 11, label: 'P7' }, { x: 0, z: 11, label: 'P8' },
      { x: 12, z: 11, label: 'P9' }, { x: 24, z: 11, label: 'P10' },
      { x: -24, z: -3, label: 'P11' }, { x: 24, z: -3, label: 'P12' },
      { x: -12, z: -3, label: 'P13' }, { x: 0, z: -3, label: 'P14' }, { x: 12, z: -3, label: 'P15' },
    ]
  };

  const areaDetails = {
    court: { name: `${isIndoor ? 'Covered' : 'Outdoor'} Pickleball Court`, size: '100 sqm each', dims: '9.1m × 11m (buffer)', playing: '6.1m × 13.4m', features: isIndoor ? 'Roof covered, open sides, natural ventilation' : 'Open-air, LED poles, acrylic surface' },
    coffee: { name: 'Coffee Shop', size: '30 sqm', dims: '5m × 6m', features: 'Counter, tables, covered roof' },
    maleRR: { name: 'Male Restroom', size: '4 sqm', dims: '2m × 2m', features: 'Toilet, sink, urinal' },
    maleShower: { name: 'Male Shower', size: '4 sqm', dims: '2m × 2m', features: 'Shower stall, bench' },
    femaleRR: { name: 'Female Restroom', size: '4 sqm', dims: '2m × 2m', features: 'Toilet, sink' },
    femaleShower: { name: 'Female Shower', size: '4 sqm', dims: '2m × 2m', features: 'Shower stall, bench' },
    parking: { name: 'Parking Area', size: '119 sqm', dims: '2.7m × 5.5m per slot', features: '8 slots' },
    building: { name: 'Covered Court Structure', size: '800 sqm', dims: '48m × 28m', features: `Open gable roof, NO WALLS, ${indoorSpecs.ridgeHeight}m ridge, ${indoorSpecs.roofPitch}° pitch` },
    post: { name: 'Structural Post/Column', size: '0.13 sqm', dims: '400mm diameter', features: `Steel column, ${indoorSpecs.postHeight}m height, supports roof load` },
  };

  // 3D Setup
  useEffect(() => {
    if (viewMode !== '3d' || !containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isIndoor ? 0x1e293b : 0x1a1a2e);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(60, 50, 60);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 150;
    controls.maxPolarAngle = Math.PI / 2.1; // Prevent going below ground
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    scene.add(new THREE.AmbientLight(0xffffff, isIndoor ? 0.6 : 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(30, 50, 30);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Ground
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(55, 40), new THREE.MeshStandardMaterial({ color: 0x374151 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Court floor
    const courtFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 28),
      new THREE.MeshStandardMaterial({ color: isIndoor ? 0x7c2d12 : 0x1e3a2f })
    );
    courtFloor.rotation.x = -Math.PI / 2;
    courtFloor.position.set(0, 0, -3);
    scene.add(courtFloor);

    // Courts
    const courtW = 9.1, courtD = 11, sp = 0.8;
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 4; c++) {
        const x = (c - 1.5) * (courtW + sp), z = (r - 0.5) * (courtD + sp) - 3;
        const court = new THREE.Mesh(
          new THREE.PlaneGeometry(courtW, courtD),
          new THREE.MeshStandardMaterial({ color: isIndoor ? 0xea580c : 0x166534 })
        );
        court.rotation.x = -Math.PI / 2;
        court.position.set(x, 0.05, z);
        scene.add(court);

        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.PlaneGeometry(6.1, 13.4)),
          new THREE.LineBasicMaterial({ color: 0xffffff })
        );
        edges.rotation.x = -Math.PI / 2;
        edges.position.set(x, 0.06, z);
        scene.add(edges);

        const net = new THREE.Mesh(
          new THREE.BoxGeometry(6.1, 0.9, 0.05),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, transparent: true, opacity: 0.7 })
        );
        net.position.set(x, 0.45, z);
        scene.add(net);

        [x - 3.1, x + 3.1].forEach(px => {
          const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), new THREE.MeshStandardMaterial({ color: 0x64748b }));
          post.position.set(px, 0.5, z);
          scene.add(post);
        });

        // Court number
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText((r * 4 + c + 1).toString(), 32, 32);
        const label = new THREE.Mesh(
          new THREE.PlaneGeometry(1.5, 1.5),
          new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true })
        );
        label.rotation.x = -Math.PI / 2;
        label.position.set(x, 0.07, z);
        scene.add(label);
      }
    }

    // Indoor building structure
    if (isIndoor) {
      const wallH = indoorSpecs.ceilingHeight;
      const ridgeH = indoorSpecs.ridgeHeight;
      const roofLength = 48.6;
      const roofHalfWidth = 14.3;
      const roofSlope = Math.sqrt(Math.pow(roofHalfWidth, 2) + Math.pow(ridgeH - wallH, 2));
      const roofAngle = Math.atan2(ridgeH - wallH, roofHalfWidth);

      if (showRoof) {
        const leftRoofGeom = new THREE.PlaneGeometry(roofLength, roofSlope + 1);
        const roofMat = new THREE.MeshStandardMaterial({ color: 0x64748b, side: THREE.DoubleSide });
        const leftRoof = new THREE.Mesh(leftRoofGeom, roofMat);
        leftRoof.position.set(0, (wallH + ridgeH) / 2, -3 - roofHalfWidth / 2);
        leftRoof.rotation.x = Math.PI / 2 - roofAngle;
        scene.add(leftRoof);

        const rightRoof = new THREE.Mesh(leftRoofGeom, roofMat);
        rightRoof.position.set(0, (wallH + ridgeH) / 2, -3 + roofHalfWidth / 2);
        rightRoof.rotation.x = -(Math.PI / 2 - roofAngle);
        scene.add(rightRoof);
      }

      if (showRidgeBeam) {
        const ridgeBeamMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
        const ridgeBeam = new THREE.Mesh(new THREE.BoxGeometry(roofLength, 0.4, 0.4), ridgeBeamMat);
        ridgeBeam.position.set(0, ridgeH, -3);
        scene.add(ridgeBeam);
      }

      if (showTrusses) {
        const gableMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b });
        const kingPostMat = new THREE.MeshStandardMaterial({ color: 0xd97706 });

        // Calculate proper rafter geometry
        // Rafters go from eave (at wallH) to ridge (at ridgeH)
        // The building spans from z = -17 to z = 11, center at z = -3
        const eaveZFront = -17; // Front eave
        const eaveZBack = 11;   // Back eave
        const ridgeZ = -3;      // Ridge center
        const halfSpan = 14;    // Half of the building width (28m / 2)

        // Rafter length from eave to ridge
        const rafterLength = Math.sqrt(halfSpan * halfSpan + (ridgeH - wallH) * (ridgeH - wallH));
        const rafterAngle = Math.atan2(ridgeH - wallH, halfSpan);

        // Main gable end trusses (at x = -24 and x = 24)
        [-24, 24].forEach(xPos => {
          // Front rafter (from front eave up to ridge)
          const frontRafter = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, rafterLength), gableMat);
          // Position at midpoint of rafter
          const frontMidY = wallH + (ridgeH - wallH) / 2;
          const frontMidZ = eaveZFront + halfSpan / 2;
          frontRafter.position.set(xPos, frontMidY, frontMidZ);
          frontRafter.rotation.x = -rafterAngle;
          scene.add(frontRafter);

          // Back rafter (from back eave up to ridge)
          const backRafter = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, rafterLength), gableMat);
          const backMidY = wallH + (ridgeH - wallH) / 2;
          const backMidZ = eaveZBack - halfSpan / 2;
          backRafter.position.set(xPos, backMidY, backMidZ);
          backRafter.rotation.x = rafterAngle;
          scene.add(backRafter);

          // Bottom tie beam (horizontal, at wall height)
          const tieBeam = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 28), gableMat);
          tieBeam.position.set(xPos, wallH, -3);
          scene.add(tieBeam);

          // King post (vertical center post from tie beam to ridge)
          const kingPost = new THREE.Mesh(new THREE.BoxGeometry(0.3, ridgeH - wallH, 0.3), kingPostMat);
          kingPost.position.set(xPos, wallH + (ridgeH - wallH) / 2, -3);
          scene.add(kingPost);
        });

        // Intermediate trusses (at x = -12, 0, 12)
        [-12, 0, 12].forEach(xPos => {
          // Front rafter
          const frontRafter = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, rafterLength), gableMat);
          const frontMidY = wallH + (ridgeH - wallH) / 2;
          const frontMidZ = eaveZFront + halfSpan / 2;
          frontRafter.position.set(xPos, frontMidY, frontMidZ);
          frontRafter.rotation.x = -rafterAngle;
          scene.add(frontRafter);

          // Back rafter
          const backRafter = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, rafterLength), gableMat);
          const backMidY = wallH + (ridgeH - wallH) / 2;
          const backMidZ = eaveZBack - halfSpan / 2;
          backRafter.position.set(xPos, backMidY, backMidZ);
          backRafter.rotation.x = rafterAngle;
          scene.add(backRafter);

          // Bottom tie beam
          const tieBeam = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 28), gableMat);
          tieBeam.position.set(xPos, wallH, -3);
          scene.add(tieBeam);

          // King post
          const kingPost = new THREE.Mesh(new THREE.BoxGeometry(0.25, ridgeH - wallH, 0.25), kingPostMat);
          kingPost.position.set(xPos, wallH + (ridgeH - wallH) / 2, -3);
          scene.add(kingPost);

          // Web members (diagonal struts) for structural integrity
          const strutLength = Math.sqrt(49 + 2.25); // Approx diagonal
          const strutMat = new THREE.MeshStandardMaterial({ color: 0xb45309 });

          // Front struts
          const frontStrut = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 8), strutMat);
          frontStrut.position.set(xPos, wallH + 1.5, -3 - 4);
          frontStrut.rotation.x = -Math.PI / 6;
          scene.add(frontStrut);

          // Back struts
          const backStrut = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 8), strutMat);
          backStrut.position.set(xPos, wallH + 1.5, -3 + 4);
          backStrut.rotation.x = Math.PI / 6;
          scene.add(backStrut);
        });
      }

      if (showPurlins) {
        const purlinMat = new THREE.MeshStandardMaterial({ color: 0xd97706 });
        [0.3, 0.6, 0.9].forEach(t => {
          const y = wallH + (ridgeH - wallH) * t;
          const z1 = -3 - roofHalfWidth * (1 - t);
          const z2 = -3 + roofHalfWidth * (1 - t);

          const leftPurlin = new THREE.Mesh(new THREE.BoxGeometry(roofLength, 0.15, 0.15), purlinMat);
          leftPurlin.position.set(0, y, z1);
          scene.add(leftPurlin);

          const rightPurlin = new THREE.Mesh(new THREE.BoxGeometry(roofLength, 0.15, 0.15), purlinMat);
          rightPurlin.position.set(0, y, z2);
          scene.add(rightPurlin);
        });
      }

      if (showEaveBeams) {
        const eaveMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
        [-17, 11].forEach(zPos => {
          const eaveBeam = new THREE.Mesh(new THREE.BoxGeometry(roofLength, 0.3, 0.3), eaveMat);
          eaveBeam.position.set(0, wallH, zPos);
          scene.add(eaveBeam);
        });
      }

      if (showPosts) {
        const postMat = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
        indoorSpecs.posts.forEach(p => {
          const post = new THREE.Mesh(
            new THREE.CylinderGeometry(indoorSpecs.postDiameter / 2, indoorSpecs.postDiameter / 2, indoorSpecs.postHeight),
            postMat
          );
          post.position.set(p.x, indoorSpecs.postHeight / 2, p.z);
          post.castShadow = true;
          scene.add(post);

          const baseMat = new THREE.MeshStandardMaterial({ color: 0x991b1b });
          const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.3), baseMat);
          base.position.set(p.x, 0.15, p.z);
          scene.add(base);
        });
      }

      [[-15, -10], [0, -10], [15, -10], [-15, 4], [0, 4], [15, 4]].forEach(([xPos, zPos]) => {
        const light = new THREE.Mesh(
          new THREE.BoxGeometry(3, 0.2, 1),
          new THREE.MeshStandardMaterial({ color: 0xfef3c7, emissive: 0xfef3c7, emissiveIntensity: 0.5 })
        );
        light.position.set(xPos, wallH - 0.5, zPos);
        scene.add(light);
      });
    } else {
      const fenceMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, transparent: true, opacity: 0.3 });
      [[0, 1.5, -17, 48, 3, 0.1], [0, 1.5, 11, 48, 3, 0.1], [-24, 1.5, -3, 0.1, 3, 28], [24, 1.5, -3, 0.1, 3, 28]].forEach(([xPos, yPos, zPos, w, h, d]) => {
        const f = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), fenceMat);
        f.position.set(xPos, yPos, zPos);
        scene.add(f);
      });

      [[-20, -10], [-8, -10], [8, -10], [20, -10], [-20, 4], [-8, 4], [8, 4], [20, 4]].forEach(([xPos, zPos]) => {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 8), new THREE.MeshStandardMaterial({ color: 0x64748b }));
        pole.position.set(xPos, 4, zPos);
        scene.add(pole);
        const light = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.5 }));
        light.position.set(xPos, 8.2, zPos);
        scene.add(light);
      });
    }

    // Facilities
    const facilities = [
      { pos: [-20, 1.5, 16], size: [2.5, 3, 2.5], color: 0x1e3a8a },
      { pos: [-17, 1.5, 16], size: [2.5, 3, 2.5], color: 0x1e40af },
      { pos: [-14, 1.5, 16], size: [2.5, 3, 2.5], color: 0x831843 },
      { pos: [-11, 1.5, 16], size: [2.5, 3, 2.5], color: 0x9d174d },
    ];
    facilities.forEach(f => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(...f.size), new THREE.MeshStandardMaterial({ color: f.color }));
      m.position.set(...f.pos);
      m.castShadow = true;
      scene.add(m);
    });

    const coffee = new THREE.Mesh(new THREE.BoxGeometry(6, 3.5, 5), new THREE.MeshStandardMaterial({ color: 0x78350f }));
    coffee.position.set(-5, 1.75, 16);
    coffee.castShadow = true;
    scene.add(coffee);
    const coffeeRoof = new THREE.Mesh(new THREE.BoxGeometry(7, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0xb45309 }));
    coffeeRoof.position.set(-5, 3.65, 16);
    scene.add(coffeeRoof);

    const parking = new THREE.Mesh(new THREE.PlaneGeometry(22, 5.5), new THREE.MeshStandardMaterial({ color: 0x292524 }));
    parking.rotation.x = -Math.PI / 2;
    parking.position.set(12, 0.02, 16);
    scene.add(parking);
    for (let i = 0; i < 8; i++) {
      const slot = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 5), new THREE.MeshStandardMaterial({ color: 0x1c1917 }));
      slot.rotation.x = -Math.PI / 2;
      slot.position.set(2 + i * 2.7, 0.03, 16);
      scene.add(slot);
    }

    const entry = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 2.5, 3),
      new THREE.MeshStandardMaterial({ color: 0x0ea5e9, emissive: 0x0ea5e9, emissiveIntensity: 0.3 })
    );
    entry.position.set(-1, 1.25, 12);
    scene.add(entry);

    // Walkthrough keyboard controls
    const handleKeyDown = (e) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (cameraMode === 'orbit') {
        controls.enabled = true;
        if (isRotating && viewAngle === 'perspective' && !controls.enabled) {
          angleRef.current += 0.003;
          camera.position.x = Math.sin(angleRef.current) * 70;
          camera.position.z = Math.cos(angleRef.current) * 70;
          camera.lookAt(0, 0, 0);
        }
        controls.update();
      } else if (cameraMode === 'walkthrough') {
        controls.enabled = false;
        const speed = 0.5;
        const rotSpeed = 0.03;
        const pos = walkPositionRef.current;
        let rot = walkRotationRef.current;

        // Movement based on current rotation
        if (keysPressed.current['w'] || keysPressed.current['arrowup']) {
          pos.x -= Math.sin(rot) * speed;
          pos.z -= Math.cos(rot) * speed;
        }
        if (keysPressed.current['s'] || keysPressed.current['arrowdown']) {
          pos.x += Math.sin(rot) * speed;
          pos.z += Math.cos(rot) * speed;
        }
        if (keysPressed.current['a'] || keysPressed.current['arrowleft']) {
          rot += rotSpeed;
        }
        if (keysPressed.current['d'] || keysPressed.current['arrowright']) {
          rot -= rotSpeed;
        }

        // Clamp position to facility bounds
        pos.x = Math.max(-30, Math.min(30, pos.x));
        pos.z = Math.max(-20, Math.min(25, pos.z));
        walkPositionRef.current = pos;
        walkRotationRef.current = rot;

        camera.position.set(pos.x, 1.7, pos.z); // Eye level ~1.7m
        camera.rotation.set(0, rot, 0);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationRef.current);
      controls.dispose();
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [viewMode, isRotating, viewAngle, setupType, showRoof, showPosts, showRidgeBeam, showTrusses, showPurlins, showEaveBeams, cameraMode]);

  const setView = (view) => {
    setViewAngle(view);
    if (!cameraRef.current) return;
    const cam = cameraRef.current;
    const views = { top: [0, 80, 0.1], front: [0, 20, 60], side: [70, 20, 0], perspective: [60, 50, 60] };
    cam.position.set(...views[view]);
    cam.lookAt(0, 0, 0);
  };

  const posts2D = [
    [25, 25], [140, 25], [260, 25], [375, 25], [495, 25],
    [25, 295], [140, 295], [260, 295], [375, 295], [495, 295],
    [25, 160], [495, 160], [140, 160], [260, 160], [375, 160]
  ];

  const lightPoles2D = [
    [30, 60], [140, 60], [260, 60], [370, 60],
    [30, 175], [140, 175], [260, 175], [370, 175],
    [30, 285], [370, 285]
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">8-Court Pickleball Facility</h1>
          <p className="text-slate-400 text-sm">1,000 sqm | Switch between Indoor & Outdoor setups</p>
        </div>

        {/* Setup Type Toggle */}
        <div className="flex justify-center mb-3">
          <div className="bg-slate-800 p-1 rounded-lg flex">
            <button onClick={() => setSetupType('outdoor')} className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${setupType === 'outdoor' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'}`}>
              Outdoor
            </button>
            <button onClick={() => setSetupType('indoor')} className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${setupType === 'indoor' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}>
              Covered
            </button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-3">
          <div className="bg-slate-700 p-1 rounded-lg flex">
            <button onClick={() => setViewMode('2d')} className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === '2d' ? (isIndoor ? 'bg-orange-600' : 'bg-green-600') + ' text-white' : 'text-slate-400 hover:text-white'}`}>
              2D
            </button>
            <button onClick={() => setViewMode('3d')} className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === '3d' ? (isIndoor ? 'bg-orange-600' : 'bg-green-600') + ' text-white' : 'text-slate-400 hover:text-white'}`}>
              3D
            </button>
          </div>
        </div>

        {/* Info Badge */}
        <div className="flex justify-center mb-3">
          <div className={`inline-block px-4 py-1 rounded-full text-sm ${isIndoor ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
            {isIndoor ? `COVERED: Open Gable Roof, ${indoorSpecs.ridgeHeight}m ridge, ${indoorSpecs.posts.length} posts, NO WALLS` : 'OUTDOOR: Open-air courts with perimeter fence'}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {viewMode === '2d' && (
            <>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
                <input type="checkbox" checked={showDimensions} onChange={() => setShowDimensions(!showDimensions)} className="rounded w-3 h-3"/>
                Dimensions
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
                <input type="checkbox" checked={showCourtDetails} onChange={() => setShowCourtDetails(!showCourtDetails)} className="rounded w-3 h-3"/>
                Court Details
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
                <input type="checkbox" checked={showLegend} onChange={() => setShowLegend(!showLegend)} className="rounded w-3 h-3"/>
                Legend
              </label>
              <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg">
                <button onClick={() => setUnit('meters')} className={`px-2 py-0.5 rounded text-xs ${unit === 'meters' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>m</button>
                <button onClick={() => setUnit('feet')} className={`px-2 py-0.5 rounded text-xs ${unit === 'feet' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>ft</button>
              </div>
            </>
          )}
          {viewMode === '3d' && (
            <>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
                <input type="checkbox" checked={isRotating} onChange={() => setIsRotating(!isRotating)} className="rounded w-3 h-3"/>
                Auto Rotate
              </label>
              {isIndoor && (
                <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
                  <input type="checkbox" checked={showStructureLegend} onChange={() => setShowStructureLegend(!showStructureLegend)} className="rounded w-3 h-3"/>
                  Structure Controls
                </label>
              )}
              <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg">
                <button onClick={() => setView('perspective')} className={`px-2 py-0.5 rounded text-xs ${viewAngle === 'perspective' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>3D</button>
                <button onClick={() => setView('top')} className={`px-2 py-0.5 rounded text-xs ${viewAngle === 'top' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Top</button>
                <button onClick={() => setView('front')} className={`px-2 py-0.5 rounded text-xs ${viewAngle === 'front' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Front</button>
                <button onClick={() => setView('side')} className={`px-2 py-0.5 rounded text-xs ${viewAngle === 'side' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Side</button>
              </div>
              <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg">
                <span className="text-slate-400 text-xs mr-1">Mode:</span>
                <button
                  onClick={() => { setCameraMode('orbit'); walkPositionRef.current = { x: 0, z: 25 }; walkRotationRef.current = 0; }}
                  className={`px-2 py-0.5 rounded text-xs ${cameraMode === 'orbit' ? 'bg-purple-500 text-white' : 'text-slate-400'}`}
                >
                  Orbit
                </button>
                <button
                  onClick={() => { setCameraMode('walkthrough'); setIsRotating(false); }}
                  className={`px-2 py-0.5 rounded text-xs ${cameraMode === 'walkthrough' ? 'bg-purple-500 text-white' : 'text-slate-400'}`}
                >
                  Walk
                </button>
              </div>
            </>
          )}
        </div>

        {/* Structure Component Controls (for 3D Covered view) */}
        {viewMode === '3d' && isIndoor && showStructureLegend && (
          <div className="bg-slate-800 rounded-lg p-3 mb-4 border border-slate-700">
            <h4 className="text-white font-bold text-sm mb-2">Structure Components (Toggle Visibility)</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showRoof} onChange={() => setShowRoof(!showRoof)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded" style={{backgroundColor: '#64748b'}}></span>
                <span className="text-slate-300">Roof Panels</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showPosts} onChange={() => setShowPosts(!showPosts)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded-full" style={{backgroundColor: '#dc2626'}}></span>
                <span className="text-slate-300">Posts (15)</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showRidgeBeam} onChange={() => setShowRidgeBeam(!showRidgeBeam)} className="rounded w-3 h-3"/>
                <span className="w-3 h-1.5 rounded" style={{backgroundColor: '#fbbf24'}}></span>
                <span className="text-slate-300">Ridge Beam</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showTrusses} onChange={() => setShowTrusses(!showTrusses)} className="rounded w-3 h-3"/>
                <span className="w-3 h-1.5 rounded" style={{backgroundColor: '#f59e0b'}}></span>
                <span className="text-slate-300">A-Frame Trusses</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showPurlins} onChange={() => setShowPurlins(!showPurlins)} className="rounded w-3 h-3"/>
                <span className="w-3 h-1" style={{backgroundColor: '#d97706'}}></span>
                <span className="text-slate-300">Purlins (6)</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600">
                <input type="checkbox" checked={showEaveBeams} onChange={() => setShowEaveBeams(!showEaveBeams)} className="rounded w-3 h-3"/>
                <span className="w-3 h-1.5 rounded" style={{backgroundColor: '#fbbf24'}}></span>
                <span className="text-slate-300">Eave Beams (2)</span>
              </label>
            </div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => { setShowRoof(true); setShowPosts(true); setShowRidgeBeam(true); setShowTrusses(true); setShowPurlins(true); setShowEaveBeams(true); }}
                className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Show All
              </button>
              <button
                onClick={() => { setShowRoof(false); setShowPosts(false); setShowRidgeBeam(false); setShowTrusses(false); setShowPurlins(false); setShowEaveBeams(false); }}
                className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Hide All
              </button>
              <button
                onClick={() => { setShowRoof(false); setShowPosts(true); setShowRidgeBeam(true); setShowTrusses(true); setShowPurlins(true); setShowEaveBeams(true); }}
                className="text-xs bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded"
              >
                Frame Only
              </button>
            </div>
          </div>
        )}

        {/* 2D View */}
        {viewMode === '2d' && (
          <div className="bg-slate-900 rounded-xl border border-slate-700 p-3 mb-4">
            <svg viewBox="0 0 520 420" className="w-full h-auto">
              <defs>
                <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#334155" strokeWidth="0.5"/>
                </pattern>
              </defs>

              <rect width="520" height="420" fill="#0f172a"/>
              <rect x="20" y="20" width="480" height="380" fill="url(#grid)"/>

              {/* Court Area */}
              <rect x="20" y="20" width="480" height="280" fill={isIndoor ? "#7c2d12" : "#1e3a2f"} stroke={isIndoor ? "#f97316" : "#22c55e"} strokeWidth="3" strokeDasharray={isIndoor ? "0" : "10,5"}/>

              {isIndoor && (
                <g>
                  <rect x="20" y="20" width="480" height="280" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="10,5"/>
                  <line x1="20" y1="160" x2="500" y2="160" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8,4"/>
                  <text x="510" y="163" fill="#f59e0b" fontSize="6" fontWeight="bold">RIDGE</text>
                  <polygon points="20,20 260,5 500,20" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <text x="260" y="14" textAnchor="middle" fill="#f59e0b" fontSize="6">OPEN GABLE ROOF ({indoorSpecs.ridgeHeight}m ridge)</text>
                </g>
              )}

              <text x="30" y="35" fill={isIndoor ? "#f59e0b" : "#22c55e"} fontSize="8" fontWeight="bold">
                {isIndoor ? "COVERED COURT AREA (OPEN SIDES)" : "OUTDOOR COURT AREA (OPEN AIR)"}
              </text>

              {/* Courts */}
              {[0, 1, 2, 3].map((col) =>
                [0, 1].map((row) => {
                  const x = 30 + col * 117, y = 45 + row * 120, num = row * 4 + col + 1;
                  return (
                    <g key={`court-${num}`} onMouseEnter={() => setSelectedArea('court')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                      <rect x={x} y={y} width="110" height="115" fill={isIndoor ? "#c2410c" : "#115e3a"} stroke={isIndoor ? "#f97316" : "#22c55e"} strokeWidth="2"/>
                      {showCourtDetails && (
                        <g>
                          <rect x={x + 12} y={y + 8} width="86" height="99" fill={isIndoor ? "#ea580c" : "#166534"} stroke="white" strokeWidth="1.5"/>
                          <line x1={x + 12} y1={y + 57} x2={x + 98} y2={y + 57} stroke="#1e293b" strokeWidth="3"/>
                          <rect x={x + 12} y={y + 8} width="86" height="18" fill={isIndoor ? "#dc2626" : "#15803d"} stroke="white" strokeWidth="0.5"/>
                          <rect x={x + 12} y={y + 89} width="86" height="18" fill={isIndoor ? "#dc2626" : "#15803d"} stroke="white" strokeWidth="0.5"/>
                          <line x1={x + 55} y1={y + 8} x2={x + 55} y2={y + 107} stroke="white" strokeWidth="0.5"/>
                        </g>
                      )}
                      <circle cx={x + 55} cy={y + 57} r="12" fill="#0f172a" fillOpacity="0.8"/>
                      <text x={x + 55} y={y + 61} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{num}</text>
                    </g>
                  );
                })
              )}

              {/* Indoor posts */}
              {isIndoor && posts2D.map((pos, i) => (
                <g key={`post-${i}`} onMouseEnter={() => setSelectedArea('post')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                  <circle cx={pos[0]} cy={pos[1]} r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
                  <text x={pos[0]} y={pos[1] + 3} textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">{i + 1}</text>
                </g>
              ))}

              {/* Outdoor light poles */}
              {!isIndoor && lightPoles2D.map((pos, i) => (
                <circle key={`pole-${i}`} cx={pos[0]} cy={pos[1]} r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
              ))}

              {!isIndoor && (
                <text x="260" y="15" textAnchor="middle" fill="#22c55e" fontSize="7">PERIMETER FENCE</text>
              )}

              <text x="30" y="320" fill="#94a3b8" fontSize="8" fontWeight="bold">OUTSIDE AMENITIES AREA</text>

              {/* Facilities */}
              <g onMouseEnter={() => setSelectedArea('maleRR')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="20" y="330" width="25" height="25" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2"/>
                <text x="32" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">M-RR</text>
              </g>

              <g onMouseEnter={() => setSelectedArea('maleShower')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="50" y="330" width="25" height="25" fill="#1e40af" stroke="#60a5fa" strokeWidth="2"/>
                <text x="62" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">M-SH</text>
              </g>

              <g onMouseEnter={() => setSelectedArea('femaleRR')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="80" y="330" width="25" height="25" fill="#831843" stroke="#ec4899" strokeWidth="2"/>
                <text x="92" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">F-RR</text>
              </g>

              <g onMouseEnter={() => setSelectedArea('femaleShower')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="110" y="330" width="25" height="25" fill="#9d174d" stroke="#f472b6" strokeWidth="2"/>
                <text x="122" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">F-SH</text>
              </g>

              <g onMouseEnter={() => setSelectedArea('coffee')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="145" y="330" width="60" height="45" fill="#78350f" stroke="#b45309" strokeWidth="2"/>
                <text x="175" y="355" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">COFFEE</text>
                <text x="175" y="365" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">SHOP</text>
              </g>

              <rect x="210" y="330" width="25" height="45" fill="#1e293b" stroke="#475569" strokeWidth="2" strokeDasharray="4"/>
              <text x="222" y="355" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="bold">GAP</text>

              <g onMouseEnter={() => setSelectedArea('parking')} onMouseLeave={() => setSelectedArea(null)} className="cursor-pointer">
                <rect x="240" y="330" width="260" height="45" fill="#292524" stroke="#57534e" strokeWidth="2"/>
                {[0,1,2,3,4,5,6,7].map(i => (
                  <g key={`p-${i}`}>
                    <rect x={245 + i * 31} y={332} width="28" height="40" fill="#1c1917" stroke="#44403c" strokeWidth="1"/>
                    <text x={259 + i * 31} y={355} textAnchor="middle" fill="#57534e" fontSize="8" fontWeight="bold">P{i + 1}</text>
                  </g>
                ))}
              </g>
              <text x="370" y="390" textAnchor="middle" fill="#a8a29e" fontSize="6" fontWeight="bold">PARKING (8 slots)</text>

              {!isIndoor && (
                <g>
                  <rect x="230" y="295" width="5" height="35" fill="#0ea5e9" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2"/>
                  <text x="232" y="290" textAnchor="middle" fill="#38bdf8" fontSize="6" fontWeight="bold">ENTRY</text>
                </g>
              )}

              {showDimensions && (
                <g>
                  <line x1="20" y1="12" x2="500" y2="12" stroke="#f59e0b" strokeWidth="1"/>
                  <text x="260" y="9" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">{formatDim(40)} (WIDTH)</text>
                  <line x1="508" y1="20" x2="508" y2="300" stroke="#f59e0b" strokeWidth="1"/>
                  <text x="515" y="160" fill="#f59e0b" fontSize="8" fontWeight="bold" transform="rotate(90, 515, 160)">{formatDim(23)}</text>
                </g>
              )}

              {showLegend && (
                <g transform="translate(385, 40)">
                  <rect width="110" height={isIndoor ? 145 : 120} fill="#0f172a" fillOpacity="0.95" stroke="#475569" strokeWidth="1" rx="4"/>
                  <text x="55" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">LEGEND</text>
                  <rect x="6" y="22" width="12" height="9" fill={isIndoor ? '#c2410c' : '#115e3a'} stroke={isIndoor ? '#f97316' : '#22c55e'} strokeWidth="1"/>
                  <text x="24" y="29" fill="#94a3b8" fontSize="6">Courts</text>
                  <rect x="6" y="36" width="12" height="9" fill="#78350f" stroke="#b45309" strokeWidth="1"/>
                  <text x="24" y="43" fill="#94a3b8" fontSize="6">Coffee Shop</text>
                  <rect x="6" y="50" width="12" height="9" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
                  <text x="24" y="57" fill="#94a3b8" fontSize="6">Male RR</text>
                  <rect x="6" y="64" width="12" height="9" fill="#831843" stroke="#ec4899" strokeWidth="1"/>
                  <text x="24" y="71" fill="#94a3b8" fontSize="6">Female RR</text>
                  <rect x="6" y="78" width="12" height="9" fill="#292524" stroke="#57534e" strokeWidth="1"/>
                  <text x="24" y="85" fill="#94a3b8" fontSize="6">Parking</text>
                  {isIndoor && (
                    <g>
                      <circle cx="12" cy="100" r="5" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
                      <text x="24" y="102" fill="#94a3b8" fontSize="6">Posts (15)</text>
                    </g>
                  )}
                </g>
              )}

              <text x="20" y="410" fill="#64748b" fontSize="6">Scale 1:100 | {unit}</text>
              <text x="500" y="410" textAnchor="end" fill="#64748b" fontSize="6">PB-{isIndoor ? 'IN' : 'OUT'}-001</text>
            </svg>
          </div>
        )}

        {/* 3D View */}
        {viewMode === '3d' && (
          <div className="relative">
            <div ref={containerRef} className="w-full h-96 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden mb-4"/>
            {cameraMode === 'walkthrough' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-purple-400">Walk Mode</span>
                  <span><kbd className="bg-slate-700 px-1.5 py-0.5 rounded">W</kbd>/<kbd className="bg-slate-700 px-1.5 py-0.5 rounded">↑</kbd> Forward</span>
                  <span><kbd className="bg-slate-700 px-1.5 py-0.5 rounded">S</kbd>/<kbd className="bg-slate-700 px-1.5 py-0.5 rounded">↓</kbd> Back</span>
                  <span><kbd className="bg-slate-700 px-1.5 py-0.5 rounded">A</kbd>/<kbd className="bg-slate-700 px-1.5 py-0.5 rounded">←</kbd> Turn Left</span>
                  <span><kbd className="bg-slate-700 px-1.5 py-0.5 rounded">D</kbd>/<kbd className="bg-slate-700 px-1.5 py-0.5 rounded">→</kbd> Turn Right</span>
                </div>
              </div>
            )}
            {cameraMode === 'orbit' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-teal-400">Orbit Mode</span>
                  <span>🖱️ Drag to rotate</span>
                  <span>Scroll to zoom</span>
                  <span>Right-click drag to pan</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Area Details */}
        {selectedArea && viewMode === '2d' && areaDetails[selectedArea] && (
          <div className={`rounded-lg p-3 border mb-4 ${isIndoor ? 'bg-orange-900/20 border-orange-700' : 'bg-green-900/20 border-green-700'}`}>
            <h3 className="text-white font-bold">{areaDetails[selectedArea].name}</h3>
            <div className="grid grid-cols-2 gap-2 mt-1 text-sm">
              <div><span className="text-slate-400">Size:</span> <span className="text-white">{areaDetails[selectedArea].size}</span></div>
              <div><span className="text-slate-400">Dims:</span> <span className="text-white">{areaDetails[selectedArea].dims}</span></div>
              <div className="col-span-2"><span className="text-slate-400">Features:</span> <span className="text-white">{areaDetails[selectedArea].features}</span></div>
            </div>
          </div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-2">
          <div className={`rounded-lg p-2 border ${isIndoor ? 'bg-orange-900/30 border-orange-700' : 'bg-green-900/30 border-green-700'}`}>
            <div className={`font-bold text-lg ${isIndoor ? 'text-orange-400' : 'text-green-400'}`}>8</div>
            <div className="text-slate-400 text-xs">{isIndoor ? 'Covered' : 'Outdoor'} Courts</div>
          </div>
          <div className="bg-amber-900/30 rounded-lg p-2 border border-amber-700">
            <div className="text-amber-400 font-bold text-lg">1</div>
            <div className="text-slate-400 text-xs">Coffee Shop</div>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-2 border border-purple-700">
            <div className="text-purple-400 font-bold text-lg">4</div>
            <div className="text-slate-400 text-xs">RR/Showers</div>
          </div>
          <div className="bg-stone-800/50 rounded-lg p-2 border border-stone-600">
            <div className="text-stone-400 font-bold text-lg">8</div>
            <div className="text-slate-400 text-xs">Parking</div>
          </div>
        </div>

        {/* Indoor Specs - Detailed */}
        {isIndoor && (
          <div className="mt-3 space-y-3">
            {/* Main Structure Specs */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-orange-400">🏗️</span> Covered Structure Specifications
              </h3>

              {/* Building Dimensions */}
              <div className="mb-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1">Building Dimensions</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Length</div>
                    <div className="text-white font-bold">48m</div>
                    <div className="text-slate-500 text-xs">(157.5 ft)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Width</div>
                    <div className="text-white font-bold">28m</div>
                    <div className="text-slate-500 text-xs">(91.9 ft)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Covered Area</div>
                    <div className="text-teal-400 font-bold">1,344 sqm</div>
                    <div className="text-slate-500 text-xs">(14,467 sqft)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Perimeter</div>
                    <div className="text-white font-bold">152m</div>
                    <div className="text-slate-500 text-xs">(498.7 ft)</div>
                  </div>
                </div>
              </div>

              {/* Roof Structure */}
              <div className="mb-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1">Roof Structure (Open Gable)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Eave Height</div>
                    <div className="text-white font-bold">9m</div>
                    <div className="text-slate-500 text-xs">(29.5 ft)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Ridge Height</div>
                    <div className="text-yellow-400 font-bold">12m</div>
                    <div className="text-slate-500 text-xs">(39.4 ft)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Roof Pitch</div>
                    <div className="text-orange-400 font-bold">12°</div>
                    <div className="text-slate-500 text-xs">(2.5:12 slope)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Clearance</div>
                    <div className="text-green-400 font-bold">9m min</div>
                    <div className="text-slate-500 text-xs">(competitive std)</div>
                  </div>
                </div>
              </div>

              {/* Structural Components */}
              <div className="mb-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1">Structural Components</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-red-500">
                    <div className="text-slate-400 text-xs">Steel Posts</div>
                    <div className="text-red-400 font-bold">15 columns</div>
                    <div className="text-slate-500 text-xs">400mm Ø × 9m H</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-yellow-500">
                    <div className="text-slate-400 text-xs">Ridge Beam</div>
                    <div className="text-yellow-400 font-bold">1 × 48m</div>
                    <div className="text-slate-500 text-xs">W400 × 400mm</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-yellow-500">
                    <div className="text-slate-400 text-xs">Eave Beams</div>
                    <div className="text-yellow-400 font-bold">2 × 48m</div>
                    <div className="text-slate-500 text-xs">W300 × 300mm</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-orange-500">
                    <div className="text-slate-400 text-xs">A-Frame Trusses</div>
                    <div className="text-orange-400 font-bold">5 trusses</div>
                    <div className="text-slate-500 text-xs">@ 12m spacing</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-amber-600">
                    <div className="text-slate-400 text-xs">Purlins</div>
                    <div className="text-amber-500 font-bold">6 × 48m</div>
                    <div className="text-slate-500 text-xs">C150 × 150mm</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2 border-l-4 border-amber-700">
                    <div className="text-slate-400 text-xs">King Posts</div>
                    <div className="text-amber-600 font-bold">5 × 3m</div>
                    <div className="text-slate-500 text-xs">300 × 300mm</div>
                  </div>
                </div>
              </div>

              {/* Roofing Material */}
              <div className="mb-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1">Roofing Material</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Type</div>
                    <div className="text-white font-bold">Metal Deck</div>
                    <div className="text-slate-500 text-xs">Pre-painted</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Thickness</div>
                    <div className="text-white font-bold">0.5mm</div>
                    <div className="text-slate-500 text-xs">(GA 26)</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Color</div>
                    <div className="text-slate-300 font-bold">Silver Gray</div>
                    <div className="text-slate-500 text-xs">Heat reflective</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Coverage</div>
                    <div className="text-teal-400 font-bold">~1,400 sqm</div>
                    <div className="text-slate-500 text-xs">(incl. overlap)</div>
                  </div>
                </div>
              </div>

              {/* Ventilation & Lighting */}
              <div>
                <h4 className="text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1">Ventilation & Lighting</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Wall Type</div>
                    <div className="text-green-400 font-bold">Open Air</div>
                    <div className="text-slate-500 text-xs">No walls/natural</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Gable Ends</div>
                    <div className="text-cyan-400 font-bold">Open Mesh</div>
                    <div className="text-slate-500 text-xs">Cross ventilation</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">LED Lights</div>
                    <div className="text-yellow-300 font-bold">6 units</div>
                    <div className="text-slate-500 text-xs">500 lux @ court</div>
                  </div>
                  <div className="bg-slate-900 rounded p-2">
                    <div className="text-slate-400 text-xs">Power Load</div>
                    <div className="text-white font-bold">~15 kW</div>
                    <div className="text-slate-500 text-xs">Lighting system</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Materials Summary */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-4 border border-slate-600">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>📦</span> Estimated Primary Materials
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                <div className="bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-red-400 font-bold text-lg">~12 tons</div>
                  <div className="text-slate-400">Steel Posts</div>
                </div>
                <div className="bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-orange-400 font-bold text-lg">~8 tons</div>
                  <div className="text-slate-400">Trusses/Beams</div>
                </div>
                <div className="bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-slate-300 font-bold text-lg">~1,400 sqm</div>
                  <div className="text-slate-400">Roofing Sheets</div>
                </div>
                <div className="bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-amber-500 font-bold text-lg">~3 tons</div>
                  <div className="text-slate-400">Purlins</div>
                </div>
                <div className="bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-gray-400 font-bold text-lg">~45 cum</div>
                  <div className="text-slate-400">Concrete Footings</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-slate-500 text-xs mt-3">Toggle Indoor/Outdoor - Switch 2D/3D views - Hover for details</p>
      </div>
    </div>
  );
}
