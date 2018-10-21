import HUD from "../lib/index";
import Stats from "@creenv/stats";
import GUI from "@creenv/gui";


let hud = new HUD(true, "W", true);

let conf = {
  str: "test"
};

let controls = {
  object: conf,
  controls: [
    {
      property: "str"
    }
  ]
};

let stats = new Stats();
hud.add(stats);

let gui = new GUI(controls);
hud.add(gui);