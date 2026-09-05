import { mountains } from "./mountains.js";
import { internationalSummits } from "./international.js";

import { renderMountains } from "./renderMountains.js";
import { renderInternationalSummits } from "./renderInternational.js";
import { updateProgress } from "./progress.js";

renderMountains(mountains);
updateProgress(mountains);
renderInternationalSummits(internationalSummits);