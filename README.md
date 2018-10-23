# Creenv HUD 

The HUD object can be used to regroup different elements from the **@creenv** Creative Environment, such as . Any element added to the HUD must inherit the [@creenv/hud-element HUDElement class](https://github.com/bcrespy/creenv-hud-element).

Right now, @creenv supports officialy those elements: 

* [@creenv/gui GUI](https://github.com/bcrespy/creenv-gui) - a panel used to have a graphical control over parameters used within the algorithms 
* [@creenv/stats Stats](https://github.com/bcrespy/creenv-stats) - a wrapper of [mrdoob stat.js](https://github.com/mrdoob/stats.js), used to display statistics about the render

## How to use 

```js
import HUD from "@creenv/hud";

// hud elements 
import Stats from "@creenv/stats";
import GUI from "@creenv/gui";


let hud = new HUD();

let stats = new Stats();
hud.add(stats);

let controls = /* bla bla, see @creenv/gui for more details */;
let gui = new GUI(controls);
hud.add(gui);
``` 

That is done, stats will be added to the page so will the controls.

## Full doc 

Following is a full list of **@creenv/hud** available methods.

___

### constructor (**visible**: *?boolean*, **toggleKey**: *?string*, **infoMessage**: *false|string*)

| Name | Type | Definition | Default |
| --- | --- | --- | --- |
| **visible** | *boolean* | *(Optional)* Weither the HUD is visible at first or not | true |
| **toggleKey** | *string* | *(Optional)* The keyboard key which toggle the visibility of all the items within the HUD (visible/hidden) | h |
| **infoMessage** | *false\|string* | *(Optional)* If set to false, no message will be displayed. However if a string is set it will be displayed at the bottom of the screen as a reminder for the users |

___

### .toggle (**visible**: *?boolean*)

Can force the visibility of the HUD if visible is defined, otherwise toggles the HUD to its opposite state.

| Name | Type | Definition | Default |
| --- | --- | --- | --- |
| **visible** | *boolean* | If undefined, the elements from the HUD will be toggle to the opposite state of what they actually are. However if set to true or false, will force the visibility of the HUD to specified state |

___ 

### .add (**element**: *HUDElement*)

Adds an element to the HUD. The element must be intance or child of [@creenv/hud-element HUDElement](https://github.com/bcrespy/creenv-hud-element).

| Name | Type | Definition | Default |
| --- | --- | --- | --- |
| **element** | *HUDElement* | The HUDElement to be added | |
