import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCircleCheck,
  faBookSkull,  //Lifecycle
  faHatWizard, //About
  faBinoculars, //Watchers
  faPiggyBank, //Stores
  faFloppyDisk, //Slots
  faRadio, // Emits
  faSatelliteDish, //Props
  faParagraph //Watchers
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleCheck,
  faBookSkull,
  faBinoculars,
  faHatWizard,
  faPiggyBank,
  faFloppyDisk,
  faRadio,
  faSatelliteDish,
  faParagraph
);

export default FontAwesomeIcon;
