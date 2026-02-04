import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function CourtLayout9() {
  const [showDimensions, setShowDimensions] = useState(true);
  const [showCourtDetails, setShowCourtDetails] = useState(true);
  const [showRoofStructure, setShowRoofStructure] = useState(true);
  const [unit, setUnit] = useState('meters');
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [viewMode, setViewMode] = useState('2d');
  const [showRoof, setShowRoof] = useState(true);
  const [showPosts, setShowPosts] = useState(true);
  const [showTrusses, setShowTrusses] = useState(true);
  const [showLights, setShowLights] = useState(true);
  const [viewAngle, setViewAngle] = useState('perspective');
  const containerRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  const toFeet = (m) => (m * 3.28084).toFixed(1);
  const formatDim = (m) => unit === 'meters' ? `${m}m` : `${toFeet(m)}'`;

  // Land dimensions: 40m x 50m (2,000 sqm)
  // 10 courts in 2x5 layout with standard 60'x30' (18.3m x 9.1m) out-of-bounds spacing
  // Pickleball court: 6.1m x 13.41m (20' x 44')
  // With buffer: 18.3m x 9.1m (60' x 30') per court
  // Option B: Courts rotated - length along lot width, 2 columns x 5 rows

  // SVG scale: 1m = 10px for better visibility
  const scale = 10;
  const landWidth = 40 * scale;   // 400px
  const landHeight = 50 * scale;  // 500px

  // Court dimensions in meters (rotated orientation for Option B)
  // Display width = court length (13.41m), Display height = court width (6.1m)
  const courtWidth = 13.41;  // Court length displayed horizontally
  const courtLength = 6.1;   // Court width displayed vertically
  const kitchenDepth = 2.13; // 7 feet - non-volley zone

  // Layout: 2 courts across (x), 5 rows (y) with standard out-of-bounds spacing
  // Buffer per court: 18.3m x 9.1m
  // Court: 13.41m x 6.1m
  // Side buffer: (18.3-13.41)/2 = 2.445m, (9.1-6.1)/2 = 1.5m
  const gapX = 4.89; // 2.445m + 2.445m between courts horizontally
  const gapY = 3.0;  // 1.5m + 1.5m between courts vertically

  // Calculate margins (centering the courts on the lot)
  // Total width: 2 courts (13.41m x 2) + 1 gap (4.89m) + buffers (2.445m x 2) = 36.6m
  const totalCourtsWidth = courtWidth * 2 + gapX + 2.445 * 2; // 36.6m
  const marginX = (40 - totalCourtsWidth) / 2 + 2.445; // Start position including buffer

  // Total height: 5 courts (6.1m x 5) + 4 gaps (3m x 4) + buffers (1.5m x 2) = 45.5m
  const totalCourtsHeight = courtLength * 5 + gapY * 4 + 1.5 * 2; // 45.5m
  const marginY = (50 - totalCourtsHeight) / 2 + 1.5; // Start position including buffer

  // Individual courts for 10-court layout (2 columns x 5 rows)
  const courts = [
    // Row 1
    { id: 1, x: marginX, y: marginY, label: '1' },
    { id: 2, x: marginX + courtWidth + gapX, y: marginY, label: '2' },
    // Row 2
    { id: 3, x: marginX, y: marginY + (courtLength + gapY) * 1, label: '3' },
    { id: 4, x: marginX + courtWidth + gapX, y: marginY + (courtLength + gapY) * 1, label: '4' },
    // Row 3
    { id: 5, x: marginX, y: marginY + (courtLength + gapY) * 2, label: '5' },
    { id: 6, x: marginX + courtWidth + gapX, y: marginY + (courtLength + gapY) * 2, label: '6' },
    // Row 4
    { id: 7, x: marginX, y: marginY + (courtLength + gapY) * 3, label: '7' },
    { id: 8, x: marginX + courtWidth + gapX, y: marginY + (courtLength + gapY) * 3, label: '8' },
    // Row 5
    { id: 9, x: marginX, y: marginY + (courtLength + gapY) * 4, label: '9' },
    { id: 10, x: marginX + courtWidth + gapX, y: marginY + (courtLength + gapY) * 4, label: '10' },
  ];

  // No vacant space - all 10 courts used
  const vacantSpace = null;

  // Open Gable Roof Structure - NO WALLS, just posts
  // Roof covers the court area (40m x ~45.5m)
  // Posts placed at perimeter, spaced ~6-7m apart for structural support
  const roofStartY = marginY - 1.5; // Start before first court (include buffer)
  const roofEndY = marginY + totalCourtsHeight - 1.5; // End after last court
  const roofLength = totalCourtsHeight; // ~45.5m
  const postSize = 0.4; // 400mm x 400mm steel/concrete posts

  // Calculate post positions - posts at edges and evenly spaced along length
  // Left side posts: 8 posts along the 45.5m length (~6.5m spacing)
  // Right side posts: 8 posts along the 45.5m length (~6.5m spacing)
  // Total: 16 perimeter posts
  const numPostsPerSide = 8;
  const postSpacing = roofLength / (numPostsPerSide - 1);

  const roofPosts = [];
  // Left side posts (x = 0)
  for (let i = 0; i < numPostsPerSide; i++) {
    roofPosts.push({
      id: `L${i + 1}`,
      x: 0,
      y: roofStartY + i * postSpacing,
      side: 'left'
    });
  }
  // Right side posts (x = 40)
  for (let i = 0; i < numPostsPerSide; i++) {
    roofPosts.push({
      id: `R${i + 1}`,
      x: 40,
      y: roofStartY + i * postSpacing,
      side: 'right'
    });
  }

  // 3D View Setup
  useEffect(() => {
    if (viewMode !== '3d' || !containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e293b);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 500);
    camera.position.set(50, 35, 50);
    camera.lookAt(20, 0, 25);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 15;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2.1;
    controls.target.set(20, 0, 25);
    controlsRef.current = controls;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(30, 40, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Ground (40m x 50m lot)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 50),
      new THREE.MeshStandardMaterial({ color: 0x374151 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(20, -0.1, 25);
    ground.receiveShadow = true;
    scene.add(ground);

    // Court floor area (courts + margins)
    const courtFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(40, totalCourtsHeight),
      new THREE.MeshStandardMaterial({ color: 0x7c2d12 })
    );
    courtFloor.rotation.x = -Math.PI / 2;
    courtFloor.position.set(20, 0, marginY + totalCourtsHeight / 2);
    scene.add(courtFloor);

    // Create courts (10 courts in 2x5 layout) - Standard orientation: net vertical, NVZ on left/right
    courts.forEach((court) => {
      const x = court.x + courtWidth / 2;
      const z = court.y + courtLength / 2;

      // Left service area (blue)
      const leftService = new THREE.Mesh(
        new THREE.PlaneGeometry(courtWidth / 2 - kitchenDepth, courtLength),
        new THREE.MeshStandardMaterial({ color: 0x3b82f6 })
      );
      leftService.rotation.x = -Math.PI / 2;
      leftService.position.set(x - courtWidth / 4 - kitchenDepth / 2, 0.02, z);
      scene.add(leftService);

      // Right service area (blue)
      const rightService = new THREE.Mesh(
        new THREE.PlaneGeometry(courtWidth / 2 - kitchenDepth, courtLength),
        new THREE.MeshStandardMaterial({ color: 0x3b82f6 })
      );
      rightService.rotation.x = -Math.PI / 2;
      rightService.position.set(x + courtWidth / 4 + kitchenDepth / 2, 0.02, z);
      scene.add(rightService);

      // Kitchen zones (teal) - on left and right of net
      const kitchenMat = new THREE.MeshStandardMaterial({ color: 0x5ba3b0 });

      // Left kitchen (adjacent to net on left side)
      const leftKitchen = new THREE.Mesh(
        new THREE.PlaneGeometry(kitchenDepth, courtLength),
        kitchenMat
      );
      leftKitchen.rotation.x = -Math.PI / 2;
      leftKitchen.position.set(x - kitchenDepth / 2, 0.03, z);
      scene.add(leftKitchen);

      // Right kitchen (adjacent to net on right side)
      const rightKitchen = new THREE.Mesh(
        new THREE.PlaneGeometry(kitchenDepth, courtLength),
        kitchenMat
      );
      rightKitchen.rotation.x = -Math.PI / 2;
      rightKitchen.position.set(x + kitchenDepth / 2, 0.03, z);
      scene.add(rightKitchen);

      // Court lines
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
      const edges = new THREE.EdgesGeometry(new THREE.PlaneGeometry(courtWidth, courtLength));
      const courtLines = new THREE.LineSegments(edges, lineMat);
      courtLines.rotation.x = -Math.PI / 2;
      courtLines.position.set(x, 0.04, z);
      scene.add(courtLines);

      // Net (vertical - runs along z-axis)
      const net = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.9, courtLength),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, transparent: true, opacity: 0.8 })
      );
      net.position.set(x, 0.45, z);
      scene.add(net);

      // Net posts (at front and back of court)
      [-courtLength / 2, courtLength / 2].forEach(offset => {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03, 0.03, 1),
          new THREE.MeshStandardMaterial({ color: 0x64748b })
        );
        post.position.set(x, 0.5, z + offset);
        scene.add(post);
      });

      // Court number label
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
      ctx.fillText(court.label, 32, 32);
      const labelMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true })
      );
      labelMesh.rotation.x = -Math.PI / 2;
      labelMesh.position.set(x, 0.05, z);
      scene.add(labelMesh);
    });

    // Vacant space (only render if vacantSpace exists)
    if (vacantSpace) {
      const vacantMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(vacantSpace.width, vacantSpace.height),
        new THREE.MeshStandardMaterial({ color: 0x4b5563 })
      );
      vacantMesh.rotation.x = -Math.PI / 2;
      vacantMesh.position.set(vacantSpace.x + vacantSpace.width / 2, 0.02, vacantSpace.y + vacantSpace.height / 2);
      scene.add(vacantMesh);

      // Vacant label
      const vacantCanvas = document.createElement('canvas');
      vacantCanvas.width = 128;
      vacantCanvas.height = 64;
      const vacantCtx = vacantCanvas.getContext('2d');
      vacantCtx.fillStyle = '#9ca3af';
      vacantCtx.font = 'bold 24px Arial';
      vacantCtx.textAlign = 'center';
      vacantCtx.textBaseline = 'middle';
      vacantCtx.fillText('VACANT', 64, 32);
      const vacantLabel = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 1.5),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(vacantCanvas), transparent: true })
      );
      vacantLabel.rotation.x = -Math.PI / 2;
      vacantLabel.position.set(vacantSpace.x + vacantSpace.width / 2, 0.05, vacantSpace.y + vacantSpace.height / 2);
      scene.add(vacantLabel);
    }

    // Parking area
    const parkingArea = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 50 - marginY - totalCourtsHeight),
      new THREE.MeshStandardMaterial({ color: 0x292524 })
    );
    parkingArea.rotation.x = -Math.PI / 2;
    parkingArea.position.set(20, 0.01, marginY + totalCourtsHeight + (50 - marginY - totalCourtsHeight) / 2);
    scene.add(parkingArea);

    // Parking slots
    for (let i = 0; i < 8; i++) {
      const slot = new THREE.Mesh(
        new THREE.PlaneGeometry(2.4, 4.8),
        new THREE.MeshStandardMaterial({ color: 0x1c1917 })
      );
      slot.rotation.x = -Math.PI / 2;
      slot.position.set(i * 2.5 + 1.25, 0.02, marginY + totalCourtsHeight + 2.7);
      scene.add(slot);
    }

    // Open Gable Roof Structure
    const roofHeight = 8; // Height at eaves
    const ridgeHeight = 12; // Height at ridge (higher for wider span)
    const roofSpan = 40; // Width of roof

    if (showPosts) {
      // Roof posts (14 posts - 7 on each side)
      const postMat = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
      roofPosts.forEach((post) => {
        const px = post.side === 'left' ? 0 : 40;
        const pz = post.y;
        const postMesh = new THREE.Mesh(
          new THREE.BoxGeometry(postSize, roofHeight, postSize),
          postMat
        );
        postMesh.position.set(px, roofHeight / 2, pz);
        postMesh.castShadow = true;
        scene.add(postMesh);

        // Post base
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x991b1b });
        const base = new THREE.Mesh(new THREE.BoxGeometry(postSize + 0.2, 0.3, postSize + 0.2), baseMat);
        base.position.set(px, 0.15, pz);
        scene.add(base);
      });
    }

    if (showTrusses) {
      // A-frame trusses at each post position
      const trussMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b });

      // Calculate rafter geometry
      // Rafters go from eave (x=0 or x=40) at roofHeight to ridge (x=20) at ridgeHeight
      const halfSpan = 20; // Half of 40m width
      const rise = ridgeHeight - roofHeight; // 4m rise
      const rafterLength = Math.sqrt(halfSpan * halfSpan + rise * rise);
      const rafterAngle = Math.atan2(rise, halfSpan);

      for (let i = 0; i < numPostsPerSide; i++) {
        const zPos = roofStartY + i * postSpacing;

        // Horizontal tie beam at eave height (bottom of truss)
        const tieBeam = new THREE.Mesh(
          new THREE.BoxGeometry(roofSpan, 0.25, 0.25),
          trussMat
        );
        tieBeam.position.set(20, roofHeight, zPos);
        scene.add(tieBeam);

        // Left rafter (from left eave up to ridge)
        const leftRafter = new THREE.Mesh(
          new THREE.BoxGeometry(rafterLength, 0.2, 0.2),
          trussMat
        );
        // Position at midpoint between left eave and ridge
        leftRafter.position.set(halfSpan / 2, roofHeight + rise / 2, zPos);
        // Rotate around Z axis to create the slope
        leftRafter.rotation.z = rafterAngle;
        scene.add(leftRafter);

        // Right rafter (from right eave up to ridge)
        const rightRafter = new THREE.Mesh(
          new THREE.BoxGeometry(rafterLength, 0.2, 0.2),
          trussMat
        );
        // Position at midpoint between right eave and ridge
        rightRafter.position.set(20 + halfSpan / 2, roofHeight + rise / 2, zPos);
        // Rotate opposite direction
        rightRafter.rotation.z = -rafterAngle;
        scene.add(rightRafter);

        // King post (vertical at center) - only on main trusses
        if (i === 0 || i === numPostsPerSide - 1 || i === Math.floor(numPostsPerSide / 2)) {
          const kingPost = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, rise, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xd97706 })
          );
          kingPost.position.set(20, roofHeight + rise / 2, zPos);
          scene.add(kingPost);
        }
      }

      // Ridge beam (runs along the top of the roof)
      const ridgeBeam = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.3, roofLength),
        new THREE.MeshStandardMaterial({ color: 0xfbbf24 })
      );
      ridgeBeam.position.set(20, ridgeHeight, marginY + totalCourtsHeight / 2);
      scene.add(ridgeBeam);

      // Eave beams (horizontal beams at the top of the posts)
      const eaveMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
      const leftEave = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, roofLength), eaveMat);
      leftEave.position.set(0, roofHeight, marginY + totalCourtsHeight / 2);
      scene.add(leftEave);

      const rightEave = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, roofLength), eaveMat);
      rightEave.position.set(40, roofHeight, marginY + totalCourtsHeight / 2);
      scene.add(rightEave);

      // Purlins (horizontal beams running along the roof slope)
      const purlinMat = new THREE.MeshStandardMaterial({ color: 0xd97706 });
      [0.33, 0.66].forEach(t => {
        const y = roofHeight + rise * t;
        const xLeft = halfSpan * (1 - t); // Position along left slope
        const xRight = 20 + halfSpan * t; // Position along right slope

        const leftPurlin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, roofLength), purlinMat);
        leftPurlin.position.set(xLeft, y, marginY + totalCourtsHeight / 2);
        scene.add(leftPurlin);

        const rightPurlin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, roofLength), purlinMat);
        rightPurlin.position.set(xRight, y, marginY + totalCourtsHeight / 2);
        scene.add(rightPurlin);
      });
    }

    if (showRoof) {
      // Roof panels (semi-transparent to see structure)
      const roofMat = new THREE.MeshStandardMaterial({
        color: 0x64748b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });

      const halfSpan = 20;
      const rise = ridgeHeight - roofHeight;
      const roofPanelWidth = Math.sqrt(halfSpan * halfSpan + rise * rise) + 0.5;
      const roofAngle = Math.atan2(rise, halfSpan);

      // Left roof panel - from left eave sloping up to ridge
      const leftRoofGeom = new THREE.PlaneGeometry(roofPanelWidth, roofLength + 1);
      const leftRoof = new THREE.Mesh(leftRoofGeom, roofMat);
      // First rotate to horizontal (XZ plane), then tilt for slope
      leftRoof.rotation.order = 'ZXY';
      leftRoof.rotation.x = -Math.PI / 2; // Lay flat in XZ
      leftRoof.rotation.z = roofAngle; // Tilt up toward ridge
      leftRoof.position.set(halfSpan / 2, roofHeight + rise / 2, marginY + totalCourtsHeight / 2);
      scene.add(leftRoof);

      // Right roof panel - from right eave sloping up to ridge
      const rightRoof = new THREE.Mesh(leftRoofGeom.clone(), roofMat);
      rightRoof.rotation.order = 'ZXY';
      rightRoof.rotation.x = -Math.PI / 2;
      rightRoof.rotation.z = -roofAngle;
      rightRoof.position.set(20 + halfSpan / 2, roofHeight + rise / 2, marginY + totalCourtsHeight / 2);
      scene.add(rightRoof);
    }

    // LED Lighting Fixtures
    if (showLights) {
      // Hanging LED lights along the court area - 3 rows of lights (left, center, right)
      const lightHeight = roofHeight - 1; // Hang 1m below eave level
      const lightFixtureMat = new THREE.MeshStandardMaterial({
        color: 0xfef3c7,
        emissive: 0xfef3c7,
        emissiveIntensity: 0.8
      });
      const lightHousingMat = new THREE.MeshStandardMaterial({ color: 0x374151 });
      const wireMat = new THREE.MeshStandardMaterial({ color: 0x1f2937 });

      // Light fixture positions - 5 columns (x positions spread across 40m width) and rows along court length
      const lightColumns = [8, 16, 20, 24, 32]; // Spread across 40m width
      const numLightRows = 6; // 6 lights per column along the length
      const lightRowSpacing = roofLength / (numLightRows + 1);

      lightColumns.forEach((xPos) => {
        for (let i = 1; i <= numLightRows; i++) {
          const zPos = roofStartY + i * lightRowSpacing;

          // Wire/cable hanging from roof
          const wireLength = (xPos === 20) ? 1 : 0.5; // Center lights hang lower
          const wire = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, wireLength),
            wireMat
          );
          wire.position.set(xPos, lightHeight + wireLength / 2, zPos);
          scene.add(wire);

          // Light housing (rectangular fixture)
          const housing = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 0.15, 0.8),
            lightHousingMat
          );
          housing.position.set(xPos, lightHeight, zPos);
          scene.add(housing);

          // LED panel (glowing part)
          const ledPanel = new THREE.Mesh(
            new THREE.BoxGeometry(2.3, 0.08, 0.6),
            lightFixtureMat
          );
          ledPanel.position.set(xPos, lightHeight - 0.1, zPos);
          scene.add(ledPanel);

          // Add actual point light for illumination
          const pointLight = new THREE.PointLight(0xfff5e6, 0.3, 15);
          pointLight.position.set(xPos, lightHeight - 0.2, zPos);
          scene.add(pointLight);
        }
      });

      // Additional spot lights at court centers for better illumination
      courts.forEach((court) => {
        const courtCenterX = court.x + courtWidth / 2;
        const courtCenterZ = court.y + courtLength / 2;

        // Spotlight from above each court
        const spotLight = new THREE.SpotLight(0xffffff, 0.4, 20, Math.PI / 4, 0.5);
        spotLight.position.set(courtCenterX, lightHeight, courtCenterZ);
        spotLight.target.position.set(courtCenterX, 0, courtCenterZ);
        scene.add(spotLight);
        scene.add(spotLight.target);
      });
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      controls.dispose();
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [viewMode, showRoof, showPosts, showTrusses, showLights]);

  const setView = (view) => {
    setViewAngle(view);
    if (!cameraRef.current || !controlsRef.current) return;
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    const views = {
      top: [10, 60, 25],
      front: [10, 15, 55],
      side: [50, 15, 25],
      perspective: [30, 25, 40]
    };
    cam.position.set(...views[view]);
    ctrl.target.set(10, 0, 22);
    cam.lookAt(10, 0, 22);
  };

  const renderCourt = (court) => {
    const w = courtWidth * scale;  // 13.41m = 134.1px (court length displayed as width)
    const h = courtLength * scale; // 6.1m = 61px (court width displayed as height)
    const kitchen = kitchenDepth * scale; // 2.13m = 21.3px
    const x = court.x * scale;
    const y = court.y * scale;
    const isSelected = selectedCourt === court.id;

    // Standard court orientation: Net runs VERTICALLY, NVZ on left/right of net
    // Left half: service areas (blue) + left NVZ (green)
    // Right half: right NVZ (green) + service areas (blue)

    return (
      <g key={court.id} onClick={() => setSelectedCourt(isSelected ? null : court.id)} style={{ cursor: 'pointer' }}>
        {/* Left service area (blue) - from left edge to left kitchen line */}
        <rect
          x={x}
          y={y}
          width={w / 2 - kitchen}
          height={h}
          fill={isSelected ? '#0d9488' : '#3b82f6'}
          stroke="#1e40af"
          strokeWidth="1"
        />

        {/* Left Kitchen zone (green/teal) - adjacent to net on left */}
        <rect
          x={x + w / 2 - kitchen}
          y={y}
          width={kitchen}
          height={h}
          fill={isSelected ? '#065f46' : '#5ba3b0'}
          stroke="#166534"
          strokeWidth="1"
        />

        {/* Right Kitchen zone (green/teal) - adjacent to net on right */}
        <rect
          x={x + w / 2}
          y={y}
          width={kitchen}
          height={h}
          fill={isSelected ? '#065f46' : '#5ba3b0'}
          stroke="#166534"
          strokeWidth="1"
        />

        {/* Right service area (blue) - from right kitchen line to right edge */}
        <rect
          x={x + w / 2 + kitchen}
          y={y}
          width={w / 2 - kitchen}
          height={h}
          fill={isSelected ? '#0d9488' : '#3b82f6'}
          stroke="#1e40af"
          strokeWidth="1"
        />

        {/* Net line (vertical center) */}
        <line
          x1={x + w / 2}
          y1={y}
          x2={x + w / 2}
          y2={y + h}
          stroke="#1e293b"
          strokeWidth="3"
        />

        {/* Center line - left half (horizontal, divides Even/Odd courts) */}
        <line
          x1={x}
          y1={y + h / 2}
          x2={x + w / 2 - kitchen}
          y2={y + h / 2}
          stroke="white"
          strokeWidth="1"
        />

        {/* Center line - right half (horizontal, divides Even/Odd courts) */}
        <line
          x1={x + w / 2 + kitchen}
          y1={y + h / 2}
          x2={x + w}
          y2={y + h / 2}
          stroke="white"
          strokeWidth="1"
        />

        {/* Court outline */}
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        {/* Kitchen lines (vertical) */}
        <line x1={x + w / 2 - kitchen} y1={y} x2={x + w / 2 - kitchen} y2={y + h} stroke="white" strokeWidth="1.5" />
        <line x1={x + w / 2 + kitchen} y1={y} x2={x + w / 2 + kitchen} y2={y + h} stroke="white" strokeWidth="1.5" />

        {/* Court label */}
        <text
          x={x + w / 2}
          y={y + h / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontWeight="bold"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
        >
          {court.label}
        </text>

        {showCourtDetails && (
          <>
            {/* Kitchen labels */}
            <text x={x + w / 2 - kitchen / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="4" opacity="0.9">
              NVZ
            </text>
            <text x={x + w / 2 + kitchen / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="4" opacity="0.9">
              NVZ
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-orange-400">10-Court Standard Layout</h1>
            <p className="text-slate-400 text-sm">40m x 50m (2,000 sqm) - 60'×30' Out-of-Bounds per Court</p>
          </div>
          <a href="https://rhonneljickaincordova.github.io/pickle-pro/" className="text-teal-400 hover:text-teal-300 text-sm">
            ← Back to Calculator
          </a>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-4">
          <div className="bg-slate-700 p-1 rounded-lg flex">
            <button
              onClick={() => setViewMode('2d')}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === '2d' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              2D View
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === '3d' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              3D View
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-900/40 border border-red-600 rounded-lg p-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-lg">⚠️</span>
            <div>
              <p className="text-red-400 font-semibold text-sm">Safety Warning: No Run-off Area</p>
              <p className="text-red-300/80 text-xs">This layout has only 0.5m gaps between courts. Not recommended for competitive play. Players may collide with adjacent courts.</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {viewMode === '2d' && (
            <>
              <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg">
                <span className="text-xs text-slate-400">Unit:</span>
                <button
                  onClick={() => setUnit('meters')}
                  className={`px-2 py-1 rounded text-xs ${unit === 'meters' ? 'bg-orange-500 text-white' : 'text-slate-400'}`}
                >
                  Meters
                </button>
                <button
                  onClick={() => setUnit('feet')}
                  className={`px-2 py-1 rounded text-xs ${unit === 'feet' ? 'bg-orange-500 text-white' : 'text-slate-400'}`}
                >
                  Feet
                </button>
              </div>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={showDimensions}
                  onChange={() => setShowDimensions(!showDimensions)}
                  className="rounded w-3 h-3"
                />
                Show Dimensions
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={showCourtDetails}
                  onChange={() => setShowCourtDetails(!showCourtDetails)}
                  className="rounded w-3 h-3"
                />
                Show Court Details
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-amber-800 px-3 py-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={showRoofStructure}
                  onChange={() => setShowRoofStructure(!showRoofStructure)}
                  className="rounded w-3 h-3"
                />
                Show Roof Posts
              </label>
            </>
          )}

          {viewMode === '3d' && (
            <>
              <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-lg">
                <span className="text-xs text-slate-400 mr-1">View:</span>
                <button onClick={() => setView('perspective')} className={`px-2 py-1 rounded text-xs ${viewAngle === 'perspective' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>3D</button>
                <button onClick={() => setView('top')} className={`px-2 py-1 rounded text-xs ${viewAngle === 'top' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Top</button>
                <button onClick={() => setView('front')} className={`px-2 py-1 rounded text-xs ${viewAngle === 'front' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Front</button>
                <button onClick={() => setView('side')} className={`px-2 py-1 rounded text-xs ${viewAngle === 'side' ? 'bg-teal-500 text-white' : 'text-slate-400'}`}>Side</button>
              </div>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input type="checkbox" checked={showRoof} onChange={() => setShowRoof(!showRoof)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded bg-slate-500"></span>
                Roof Panels
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input type="checkbox" checked={showPosts} onChange={() => setShowPosts(!showPosts)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded bg-red-500"></span>
                Posts (14)
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input type="checkbox" checked={showTrusses} onChange={() => setShowTrusses(!showTrusses)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded bg-amber-500"></span>
                Trusses & Beams
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg">
                <input type="checkbox" checked={showLights} onChange={() => setShowLights(!showLights)} className="rounded w-3 h-3"/>
                <span className="w-3 h-3 rounded bg-yellow-200"></span>
                LED Lights (18)
              </label>
            </>
          )}
        </div>

        {/* 3D View */}
        {viewMode === '3d' && (
          <div className="relative mb-6">
            <div ref={containerRef} className="w-full h-96 bg-slate-900 rounded-xl border border-orange-700 overflow-hidden"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-teal-400">Orbit Mode</span>
                <span>Drag to rotate</span>
                <span>Scroll to zoom</span>
                <span>Right-click to pan</span>
              </div>
            </div>
          </div>
        )}

        {/* SVG Floor Plan (2D) */}
        {viewMode === '2d' && (
          <div className="bg-slate-800 rounded-xl p-4 border border-orange-700">
          <svg
            viewBox={`0 0 ${landWidth + 80} ${landHeight + 60}`}
            className="w-full max-w-sm mx-auto"
            style={{ maxHeight: '75vh' }}
          >
            {/* Background / Land area */}
            <rect
              x="40"
              y="30"
              width={landWidth}
              height={landHeight}
              fill="#374151"
              stroke="#f97316"
              strokeWidth="3"
              rx="4"
            />

            {/* Grid pattern for land */}
            <defs>
              <pattern id="grid9" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4b5563" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="40" y="30" width={landWidth} height={landHeight} fill="url(#grid9)" />

            {/* Land dimension labels */}
            {showDimensions && (
              <>
                {/* Width label (top) */}
                <g>
                  <line x1="40" y1="15" x2={40 + landWidth} y2="15" stroke="#f97316" strokeWidth="1" />
                  <line x1="40" y1="10" x2="40" y2="20" stroke="#f97316" strokeWidth="1" />
                  <line x1={40 + landWidth} y1="10" x2={40 + landWidth} y2="20" stroke="#f97316" strokeWidth="1" />
                  <text x={40 + landWidth / 2} y="10" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold">
                    {formatDim(40)}
                  </text>
                </g>

                {/* Height label (right) */}
                <g>
                  <line x1={landWidth + 55} y1="30" x2={landWidth + 55} y2={30 + landHeight} stroke="#f97316" strokeWidth="1" />
                  <line x1={landWidth + 50} y1="30" x2={landWidth + 60} y2="30" stroke="#f97316" strokeWidth="1" />
                  <line x1={landWidth + 50} y1={30 + landHeight} x2={landWidth + 60} y2={30 + landHeight} stroke="#f97316" strokeWidth="1" />
                  <text
                    x={landWidth + 70}
                    y={30 + landHeight / 2}
                    textAnchor="middle"
                    fill="#f97316"
                    fontSize="11"
                    fontWeight="bold"
                    transform={`rotate(90, ${landWidth + 70}, ${30 + landHeight / 2})`}
                  >
                    {formatDim(50)}
                  </text>
                </g>

                {/* Area label */}
                <text x={40 + landWidth / 2} y={landHeight + 50} textAnchor="middle" fill="#64748b" fontSize="10">
                  Total Area: {unit === 'meters' ? '2,000 sqm' : '21,528 sqft'}
                </text>
              </>
            )}

            {/* Render courts with offset for border */}
            <g transform="translate(40, 30)">
              {courts.map(renderCourt)}

              {/* Vacant Space (only render if vacantSpace exists) */}
              {vacantSpace && (
                <>
                  <rect
                    x={vacantSpace.x * scale}
                    y={vacantSpace.y * scale}
                    width={vacantSpace.width * scale}
                    height={vacantSpace.height * scale}
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeDasharray="5,3"
                  />
                  {/* Vacant label */}
                  <text
                    x={(vacantSpace.x + vacantSpace.width / 2) * scale}
                    y={(vacantSpace.y + vacantSpace.height / 2 - 1) * scale}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#9ca3af"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    VACANT
                  </text>
                  {/* Vacant space dimensions */}
                  <text
                    x={(vacantSpace.x + vacantSpace.width / 2) * scale}
                    y={(vacantSpace.y + vacantSpace.height / 2 + 1.2) * scale}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#9ca3af"
                    fontSize="7"
                  >
                    {formatDim(vacantSpace.width)} x {formatDim(vacantSpace.height)}
                  </text>
                </>
              )}
            </g>

            {/* Court dimensions */}
            {showDimensions && (
              <g transform="translate(40, 30)">
                {/* Single court dimension */}
                <text
                  x={courts[0].x * scale + (courtWidth * scale) / 2}
                  y={courts[0].y * scale - 6}
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="7"
                >
                  {formatDim(courtWidth)}
                </text>
                <text
                  x={courts[0].x * scale - 6}
                  y={courts[0].y * scale + (courtLength * scale) / 2}
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="7"
                  transform={`rotate(-90, ${courts[0].x * scale - 6}, ${courts[0].y * scale + (courtLength * scale) / 2})`}
                >
                  {formatDim(courtLength)}
                </text>

                {/* Gap dimension */}
                <text
                  x={(courts[0].x + courtWidth + gapX / 2) * scale}
                  y={courts[0].y * scale - 6}
                  textAnchor="middle"
                  fill="#ef4444"
                  fontSize="6"
                >
                  {formatDim(gapX)}
                </text>
              </g>
            )}

            {/* Parking Area - Perpendicular (8 spaces) */}
            <g transform="translate(40, 30)">
              {/* Parking area background */}
              <rect
                x={0}
                y={(marginY + totalCourtsHeight) * scale}
                width={20 * scale}
                height={(50 - marginY - totalCourtsHeight) * scale}
                fill="#1f2937"
                stroke="#4b5563"
                strokeWidth="1"
              />

              {/* Parking label */}
              <text
                x={10 * scale}
                y={(marginY + totalCourtsHeight + 0.8) * scale}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="7"
                fontWeight="bold"
              >
                PARKING (8 spaces)
              </text>

              {/* Perpendicular parking spaces - 8 spaces, 2.5m wide each */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const spaceWidth = 2.5; // 2.5m per space
                const spaceDepth = 5; // 5m deep
                const startX = 0; // start from edge
                const x = (startX + i * spaceWidth) * scale;
                const y = (marginY + totalCourtsHeight + 0.27) * scale; // small gap from courts

                return (
                  <g key={`parking-${i}`}>
                    {/* Parking space outline */}
                    <rect
                      x={x}
                      y={y}
                      width={spaceWidth * scale}
                      height={spaceDepth * scale}
                      fill="#374151"
                      stroke="#6b7280"
                      strokeWidth="1"
                    />
                    {/* Car icon */}
                    <rect
                      x={x + 3}
                      y={y + 5}
                      width={spaceWidth * scale - 6}
                      height={spaceDepth * scale - 10}
                      fill="#60a5fa"
                      rx="3"
                    />
                    {/* Car windshield */}
                    <rect
                      x={x + 5}
                      y={y + 8}
                      width={spaceWidth * scale - 10}
                      height={8}
                      fill="#1e3a5f"
                      rx="2"
                    />
                    {/* Space number */}
                    <text
                      x={x + (spaceWidth * scale) / 2}
                      y={y + spaceDepth * scale - 3}
                      textAnchor="middle"
                      fill="#9ca3af"
                      fontSize="6"
                    >
                      P{i + 1}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Open Gable Roof Structure - Posts Only (No Walls) */}
            {showRoofStructure && (
              <g transform="translate(40, 30)">
                {/* Roof outline - dashed line showing coverage area */}
                <rect
                  x={0}
                  y={roofStartY * scale}
                  width={20 * scale}
                  height={roofLength * scale}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  opacity="0.6"
                />

                {/* Gable roof ridge line (center) */}
                <line
                  x1={10 * scale}
                  y1={roofStartY * scale}
                  x2={10 * scale}
                  y2={roofEndY * scale}
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                  opacity="0.5"
                />

                {/* Roof posts */}
                {roofPosts.map((post) => {
                  const px = post.side === 'left' ? -postSize / 2 : 20 - postSize / 2;
                  return (
                    <g key={post.id}>
                      {/* Post square */}
                      <rect
                        x={px * scale}
                        y={(post.y - postSize / 2) * scale}
                        width={postSize * scale}
                        height={postSize * scale}
                        fill="#78350f"
                        stroke="#fbbf24"
                        strokeWidth="1.5"
                      />
                      {/* Post label */}
                      <text
                        x={(px + postSize / 2) * scale}
                        y={(post.y) * scale}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#fef3c7"
                        fontSize="5"
                        fontWeight="bold"
                      >
                        {post.id}
                      </text>
                    </g>
                  );
                })}

                {/* Roof label */}
                <text
                  x={10 * scale}
                  y={(roofStartY - 0.8) * scale}
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="7"
                  fontWeight="bold"
                >
                  OPEN GABLE ROOF ({numPostsPerSide * 2} POSTS)
                </text>
              </g>
            )}

            {/* Compass */}
            <g transform={`translate(25, 55)`}>
              <circle cx="0" cy="0" r="12" fill="#334155" stroke="#64748b" strokeWidth="1" />
              <text x="0" y="-3" textAnchor="middle" fill="#f8fafc" fontSize="8" fontWeight="bold">N</text>
              <polygon points="0,-8 -3,-2 3,-2" fill="#ef4444" />
              <polygon points="0,8 -3,2 3,2" fill="#94a3b8" />
            </g>
          </svg>
          </div>
        )}

        {/* Legend - show in both 2D and 3D */}
        <div className="mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700">
          <h3 className="text-sm font-bold text-white mb-3">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-xs text-slate-300">Playing Surface</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-xs text-slate-300">Kitchen (NVZ)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500/50 border border-red-500 rounded"></div>
              <span className="text-xs text-slate-300">Minimal Gap (0.5m)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-white rounded"></div>
              <span className="text-xs text-slate-300">Court Lines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span className="text-xs text-slate-300">Parking (8 spaces)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-600 border border-gray-500 border-dashed rounded"></div>
              <span className="text-xs text-slate-300">Vacant Space</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-900 border-2 border-amber-400 rounded"></div>
              <span className="text-xs text-slate-300">Roof Post (400mm)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-amber-400 border border-dashed"></div>
              <span className="text-xs text-slate-300">Roof Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-yellow-200 rounded"></div>
              <span className="text-xs text-slate-300">LED Light Fixtures</span>
            </div>
          </div>
        </div>

        {/* Covered Structure Specifications */}
        <div className="mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span>🏗️</span> Covered Structure Specifications
          </h3>

          {/* Building Dimensions */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Building Dimensions</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Length</p>
                <p className="text-white font-bold">{formatDim(Number(roofLength.toFixed(1)))}</p>
                <p className="text-slate-500 text-xs">({toFeet(roofLength)} ft)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Width</p>
                <p className="text-white font-bold">{formatDim(40)}</p>
                <p className="text-slate-500 text-xs">({toFeet(40)} ft)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-cyan-500">
                <p className="text-slate-400 text-xs">Covered Area</p>
                <p className="text-cyan-400 font-bold">{(40 * roofLength).toFixed(0)} sqm</p>
                <p className="text-slate-500 text-xs">({(40 * roofLength * 10.764).toFixed(0)} sqft)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Perimeter</p>
                <p className="text-white font-bold">{formatDim(Number((2 * 40 + 2 * roofLength).toFixed(1)))}</p>
                <p className="text-slate-500 text-xs">({toFeet(2 * 40 + 2 * roofLength)} ft)</p>
              </div>
            </div>
          </div>

          {/* Roof Structure (Open Gable) */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Roof Structure (Open Gable)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Eave Height</p>
                <p className="text-white font-bold">8m</p>
                <p className="text-slate-500 text-xs">(26.2 ft)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-yellow-500">
                <p className="text-slate-400 text-xs">Ridge Height</p>
                <p className="text-yellow-400 font-bold">12m</p>
                <p className="text-slate-500 text-xs">(39.4 ft)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-orange-500">
                <p className="text-slate-400 text-xs">Roof Pitch</p>
                <p className="text-orange-400 font-bold">11.3°</p>
                <p className="text-slate-500 text-xs">(4:20 slope)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-green-500">
                <p className="text-slate-400 text-xs">Clearance</p>
                <p className="text-green-400 font-bold">8m min</p>
                <p className="text-slate-500 text-xs">(competitive std)</p>
              </div>
            </div>
          </div>

          {/* Structural Components */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Structural Components</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-red-500">
                <p className="text-slate-400 text-xs">Steel Posts</p>
                <p className="text-red-400 font-bold">{numPostsPerSide * 2} columns</p>
                <p className="text-slate-500 text-xs">400mm × 400mm × 8m H</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-amber-500">
                <p className="text-slate-400 text-xs">Ridge Beam</p>
                <p className="text-amber-400 font-bold">1 × {roofLength.toFixed(0)}m</p>
                <p className="text-slate-500 text-xs">W300 × 300mm</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-amber-500">
                <p className="text-slate-400 text-xs">Eave Beams</p>
                <p className="text-amber-400 font-bold">2 × {roofLength.toFixed(0)}m</p>
                <p className="text-slate-500 text-xs">W250 × 250mm</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-orange-500">
                <p className="text-slate-400 text-xs">A-Frame Trusses</p>
                <p className="text-orange-400 font-bold">{numPostsPerSide} trusses</p>
                <p className="text-slate-500 text-xs">@ {postSpacing.toFixed(1)}m spacing</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-amber-500">
                <p className="text-slate-400 text-xs">Purlins</p>
                <p className="text-amber-400 font-bold">4 × {roofLength.toFixed(0)}m</p>
                <p className="text-slate-500 text-xs">C150 × 150mm</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-amber-500">
                <p className="text-slate-400 text-xs">King Posts</p>
                <p className="text-amber-400 font-bold">3 × 2m</p>
                <p className="text-slate-500 text-xs">200 × 200mm</p>
              </div>
            </div>
          </div>

          {/* Roofing Material */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Roofing Material</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Type</p>
                <p className="text-white font-bold">Metal Deck</p>
                <p className="text-slate-500 text-xs">Pre-painted</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Thickness</p>
                <p className="text-white font-bold">0.5mm</p>
                <p className="text-slate-500 text-xs">(GA 26)</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Color</p>
                <p className="text-white font-bold">Silver Gray</p>
                <p className="text-slate-500 text-xs">Heat reflective</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-cyan-500">
                <p className="text-slate-400 text-xs">Coverage</p>
                <p className="text-cyan-400 font-bold">~{((Math.sqrt(400 + 16) * roofLength) * 2).toFixed(0)} sqm</p>
                <p className="text-slate-500 text-xs">(incl. overlap)</p>
              </div>
            </div>
          </div>

          {/* Ventilation & Lighting */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Ventilation & Lighting</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-green-500">
                <p className="text-slate-400 text-xs">Wall Type</p>
                <p className="text-green-400 font-bold">Open Air</p>
                <p className="text-slate-500 text-xs">No walls/natural</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-teal-500">
                <p className="text-slate-400 text-xs">Gable Ends</p>
                <p className="text-teal-400 font-bold">Open</p>
                <p className="text-slate-500 text-xs">Cross ventilation</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-yellow-500">
                <p className="text-slate-400 text-xs">LED Lights</p>
                <p className="text-yellow-400 font-bold">30 units</p>
                <p className="text-slate-500 text-xs">500 lux @ court</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded border-l-2 border-slate-500">
                <p className="text-slate-400 text-xs">Power Load</p>
                <p className="text-white font-bold">~20 kW</p>
                <p className="text-slate-500 text-xs">Lighting system</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimated Primary Materials */}
        <div className="mt-6 bg-orange-900/20 rounded-xl p-4 border border-orange-700">
          <h3 className="text-sm font-bold text-orange-400 mb-4 flex items-center gap-2">
            <span>📦</span> Estimated Primary Materials
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="bg-slate-800/80 p-3 rounded text-center">
              <p className="text-red-400 font-bold text-lg">~12 tons</p>
              <p className="text-slate-400 text-xs">Steel Posts</p>
            </div>
            <div className="bg-slate-800/80 p-3 rounded text-center">
              <p className="text-amber-400 font-bold text-lg">~10 tons</p>
              <p className="text-slate-400 text-xs">Trusses/Beams</p>
            </div>
            <div className="bg-slate-800/80 p-3 rounded text-center">
              <p className="text-cyan-400 font-bold text-lg">~{((Math.sqrt(400 + 16) * roofLength) * 2).toFixed(0)} sqm</p>
              <p className="text-slate-400 text-xs">Roofing Sheets</p>
            </div>
            <div className="bg-slate-800/80 p-3 rounded text-center">
              <p className="text-orange-400 font-bold text-lg">~4 tons</p>
              <p className="text-slate-400 text-xs">Purlins</p>
            </div>
            <div className="bg-slate-800/80 p-3 rounded text-center">
              <p className="text-slate-300 font-bold text-lg">~50 cum</p>
              <p className="text-slate-400 text-xs">Concrete Footings</p>
            </div>
          </div>
        </div>

        {/* Layout Specs */}
        <div className="mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700">
          <h3 className="text-sm font-bold text-white mb-3">Layout Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <p className="text-slate-400">Land Size</p>
              <p className="text-white font-semibold">{formatDim(40)} x {formatDim(50)}</p>
            </div>
            <div>
              <p className="text-slate-400">Total Area</p>
              <p className="text-white font-semibold">{unit === 'meters' ? '2,000 sqm' : '21,528 sqft'}</p>
            </div>
            <div>
              <p className="text-slate-400">Number of Courts</p>
              <p className="text-orange-400 font-semibold">10 Courts</p>
            </div>
            <div>
              <p className="text-slate-400">Court Size</p>
              <p className="text-white font-semibold">{formatDim(courtWidth)} x {formatDim(courtLength)}</p>
            </div>
            <div>
              <p className="text-slate-400">Kitchen Depth</p>
              <p className="text-white font-semibold">{formatDim(kitchenDepth)} (7')</p>
            </div>
            <div>
              <p className="text-slate-400">Court Gap</p>
              <p className="text-red-400 font-semibold">{formatDim(gapX)} (minimal!)</p>
            </div>
            <div>
              <p className="text-slate-400">Side Margins</p>
              <p className="text-white font-semibold">~{formatDim(Number(marginX.toFixed(2)))}</p>
            </div>
            <div>
              <p className="text-slate-400">Parking Spaces</p>
              <p className="text-blue-400 font-semibold">8 spaces (2.5m x 5m)</p>
            </div>
          </div>
        </div>

        {/* Selected Court Info */}
        {selectedCourt && (
          <div className="mt-6 bg-orange-900/30 rounded-xl p-4 border border-orange-700">
            <h3 className="text-sm font-bold text-orange-400 mb-2">Court {selectedCourt} Selected</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div>
                <p className="text-slate-400">Dimensions</p>
                <p className="text-white">{formatDim(courtWidth)} x {formatDim(courtLength)}</p>
              </div>
              <div>
                <p className="text-slate-400">Playing Area</p>
                <p className="text-white">{unit === 'meters' ? '81.8 sqm' : '880 sqft'}</p>
              </div>
              <div>
                <p className="text-slate-400">Net Height</p>
                <p className="text-white">0.91m (36") ends, 0.86m (34") center</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
