import {Globe} from "./Globe-6F7GSCMU.js";

var globe;

const importGlobe = () => {
  const e = document.getElementById("canvas");

  globe = new Globe(e);
  globe && globe.play();
};

importGlobe();
