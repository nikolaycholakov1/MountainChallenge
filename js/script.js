import { mountains } from "./mountains.js";
import { internationalSummits } from "./international.js";
import { europeanSummits } from "./european.js";

import { renderMountains } from "./renderMountains.js";
import { renderInternationalSummits } from "./renderInternational.js";
import { renderEuropeanSummits } from "./renderEuropean.js";
import { updateProgress } from "./progress.js";

import "./interactive-map.js";

renderMountains(mountains);
updateProgress(mountains);

renderInternationalSummits(internationalSummits);
renderEuropeanSummits(europeanSummits);