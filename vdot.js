const Daniels = require("daniels-calculator");
const daniels = new Daniels();
const VDOT = daniels.getVDOT("5k", "31:04");
console.log(VDOT);
