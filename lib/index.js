/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * This class can handle HUDElements, display/hide them using a key
 **/

import HUDElement from "@creenv/hud-element";


class HUD {
  /**
   *  
   * @param {?boolean} visible if the HUD is displayed at init (default = true)
   * @param {?string} toggleKey the key used to toggle the HUD, default = h. if 
   *                  set to null, HUD can't be toggled
   * @param {?boolean} infoMessage if set to true, a message will be shown at
   *                   the bottom of the page 
   */
  constructor (visible = true, toggleKey = "h", infoMessage = false) {
    this.visible = visible;
    this.key = toggleKey.toLowerCase();
    this.infoMessage = infoMessage;

    /**
     * the HUDElements contained within the interface
     * @type {Array.<HUDElement}
     * @private
     */
    this.elements = [];

    document.addEventListener("keydown", (event) => {
      if (event.key === this.key) {
        this.toggle();
      }
    });

    if (infoMessage) {
      let message = `You can toggle the HUD by pressing the ${this.key.toUpperCase()} key`;
      let messageDom = document.createElement("div");
      messageDom.innerHTML = message;
      messageDom.setAttribute("style", `position:absolute;bottom:10px;left:50%;transform:translateX(-50%);`);
      messageDom.classList.add("creenv-hud-info-message");
      document.body.appendChild(messageDom);
    }
  }

  /**
   * Hide/show the elements of the HUD
   * 
   * @param {?boolean} visible if the elements are displayed or not. if 
   *                   undefined, will be the opposite of last state
   */
  toggle (visible) {
    this.visible = visible===undefined ? !this.visible : visible;
    this.elements.forEach(elem => {
      elem.show(this.visible);
    });
  }

  /**
   * adds an HUDElement to the HUD 
   * 
   * @param {HUDElement} element to be added
   */
  add (element) {
    element.show(this.visible);
    this.elements.push(element);
  }
}

export default HUD;