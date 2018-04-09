import variables from "./variables.js";

let currentFocus = -1;

function movingOnList(e) {
	let x = document.querySelector('.autocomplete-list');
	x ? x = x.getElementsByTagName('div') : null;
	if (e.keyCode == 40) {
		e.preventDefault();
		currentFocus++;
		addActive(x);
	} else if (e.keyCode == 38) {
		e.preventDefault();
		currentFocus--;
		addActive(x);
	} else if(e.keyCode == 13)  {
		e.preventDefault();
		(currentFocus > -1) ? x[currentFocus].click() : null;
	}
}

function closeAllLists(elem) {
	currentFocus = -1;
    let x = document.getElementsByClassName("autocomplete-list");
	for (let value of x) { (elem != value && elem != searchEngine) ? value.parentNode.removeChild(value) : null; }
 }

function addActive(x) {
    !x ? false : null;
    closeActive(x);
    (currentFocus >= x.length) ? currentFocus = 0 : null;
    (currentFocus < 0) ? currentFocus = (x.length - 1) : null;
    x[currentFocus].classList.add("autocomplete-active");
    x[currentFocus].scrollIntoView({block: "center"});
}

function closeActive(x) {
	for (let value of x) { value.classList.remove('autocomplete-active'); }
}

document.addEventListener("click" , (e) => closeAllLists(e.target) );

export { movingOnList, closeAllLists, addActive, closeActive };