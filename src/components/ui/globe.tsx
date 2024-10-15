import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface Technology {
  name: string;
  icon: string;
}

const TechGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    // Globe
    const globeGeometry = new THREE.SphereGeometry(4, 32, 32);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x2c3e50,
      shininess: 50,
      transparent: true,
      opacity: 0.7,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Technologies
    const technologies: Technology[] = [
      { name: "React", icon: "/assets/react.webp" },
      { name: "Node.js", icon: "/assets/nodejs.webp" },
      { name: "AWS", icon: "/assets/aws.webp" },
      { name: "Docker", icon: "/assets/docker.webp" },
      { name: "TypeScript", icon: "/assets/typescript.webp" },
      { name: "Python", icon: "/assets/python.webp" },
      { name: "CSS", icon: "/assets/css.webp" },
      { name: "MySQL", icon: "/assets/mysql.webp" },
      { name: "HTML", icon: "/assets/html.webp" },
      { name: "FastAPI", icon: "/assets/fastapi.webp" },
      { name: "Vite", icon: "/assets/vite.webp" },
      { name: "Git", icon: "/assets/git.webp" },
      { name: "Firebase", icon: "/assets/firebase.webp" },
      { name: "JavaScript", icon: "/assets/js.webp" },
      { name: "MongoDB", icon: "/assets/mongodb.webp" },
    ];

    const nodes: THREE.Mesh[] = [];
    const iconSize = 0.8;

    technologies.forEach((tech, i) => {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(tech.icon);

      const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
      const iconMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);

      const phi = Math.acos(-1 + (2 * i) / technologies.length);
      const theta = Math.sqrt(technologies.length * Math.PI) * phi;

      const x = 7 * Math.cos(theta) * Math.sin(phi);
      const y = 7 * Math.sin(theta) * Math.sin(phi);
      const z = 7 * Math.cos(phi);

      iconMesh.position.set(x, y, z);
      iconMesh.userData.name = tech.name;

      scene.add(iconMesh);
      nodes.push(iconMesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Raycasting for hover effect
    const raycaster = new THREE.Raycaster();
    const onMouseMove = (event: MouseEvent) => {
      if (!isInteracting) return;

      const rect = mountRef.current!.getBoundingClientRect();
      const mouse = new THREE.Vector2();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes);

      if (intersects.length > 0) {
        const intersectedNode = intersects[0].object as THREE.Mesh;
        setHoveredTech(intersectedNode.userData.name);
        intersectedNode.scale.set(1.2, 1.2, 1.2);
      } else {
        setHoveredTech(null);
        nodes.forEach((node) => node.scale.set(1, 1, 1));
      }
    };

    const onMouseEnter = () => setIsInteracting(true);
    const onMouseLeave = () => {
      setIsInteracting(false);
      setHoveredTech(null);
      nodes.forEach((node) => node.scale.set(1, 1, 1));
    };

    mountRef.current.addEventListener("mouseenter", onMouseEnter);
    mountRef.current.addEventListener("mouseleave", onMouseLeave);
    mountRef.current.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (isInteracting) {
        controls.update();
      } else {
        globe.rotation.y += 0.001;
      }
      nodes.forEach((node) => {
        node.quaternion.copy(camera.quaternion);
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle container resize
    const handleResize = () => {
      if (mountRef.current) {
        const { width, height } = mountRef.current.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    // Initial size setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mouseenter", onMouseEnter);
        mountRef.current.removeEventListener("mouseleave", onMouseLeave);
        mountRef.current.removeEventListener("mousemove", onMouseMove);
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isInteracting]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        cursor: isInteracting ? "grab" : "default",
      }}
    >
      {hoveredTech && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "rgba(255,255,255,0.1)",
            color: "#00ff00",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {hoveredTech}
        </div>
      )}
    </div>
  );
};

export default TechGlobe;
