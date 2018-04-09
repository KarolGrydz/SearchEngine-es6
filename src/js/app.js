import variables from "./variables.js";
import { getSchemat } from "./logic.js";
import { autocomplete } from "./autocomplete.js";

const searchEngine = document.querySelector('#searchEngine');
searchEngine.addEventListener('input', start);


function start() {
	return autocomplete(searchEngine), getSchemat();
}
