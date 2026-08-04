import * as THREE from "three";

export const cameraPoints = [
  // Start
  new THREE.Vector3(0, 2.5, 20),

  // City
  new THREE.Vector3(0, 2.5, 0),
  new THREE.Vector3(2, 3, -20),
  new THREE.Vector3(-2, 2.5, -40),
  new THREE.Vector3(0, 3, -70),

  // Forest
  new THREE.Vector3(0, 3, -100),
  new THREE.Vector3(2, 3, -140),
  new THREE.Vector3(-2, 3, -180),

  // River
  new THREE.Vector3(0, 2.8, -220),
  new THREE.Vector3(0, 2.8, -260),

  // Mountains
  new THREE.Vector3(3, 4, -320),
  new THREE.Vector3(0, 5, -400),
];