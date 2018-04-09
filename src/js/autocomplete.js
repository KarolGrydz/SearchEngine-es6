import variables from "./variables.js";
import { getSchemat } from "./logic.js";
import { movingOnList, closeAllLists, addActive, closeActive } from "./autocompleteFun.js";

const hock = document.querySelector('.autocomplete');

function autocomplete(variable) {
	createList(variable.value);
	searchEngine.addEventListener('keydown', movingOnList);
	searchEngine.addEventListener('keydown', (e) => (e.keyCode == 13) ? closeAllLists() : null );
};

function createList(val) {
	let a, b, i;

	closeAllLists();
	if (!val) return false;

	a = document.createElement("DIV");
	a.setAttribute('class', 'autocomplete-list');
	hock.appendChild(a);
	for (let value of variables.machines) {
		if (value.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			b = document.createElement("DIV");
			b.innerHTML = `${value.substr(0, val.length).toUpperCase().bold()}${value.substr(val.length).toUpperCase()} <input type='hidden' class='autohelper' value='${value}'>`;
			b.addEventListener("click", (e) => {
				let targetClick = e.target.querySelector('.autohelper').value.toUpperCase();
				searchEngine.value = targetClick;
				closeAllLists();
				getSchemat();
			});
			a.appendChild(b);
		}
	}
};
 
export { autocomplete };