import variables from "./variables.js";
import { addLink, showLinks } from "./logicFun.js";

function getSchemat() {
	let word = searchEngine.value.toUpperCase();
	let v = variables;
	
	fetch('schematy.json')
	.then((res) => res.json())
	.then((data) => {
		//searching the json file
		data.wysoka.forEach( (wysoka) => { wysoka.tag.forEach( (tag) => word == tag ? showLinks(v.title6kV, wysoka, v.arr6kV) : null ) });
		data.silowe.forEach( (silowe) => { silowe.tag.forEach( (tag) => word == tag ? showLinks(v.title500V, silowe, v.arr500V) : null) });
		data.schematy230V.forEach( (schematy230V) => { schematy230V.tag.forEach( (tag) => word == tag ? showLinks(v.title230V, schematy230V, v.arr230V) : null ) });
		data.sterowanie.forEach( (sterowanie) => { sterowanie.tag.forEach( (tag) => word == tag ? showLinks(v.titleSterowanie, sterowanie, v.arrSterowanie) : null ) });
		//display the result
		document.getElementById('area-text-6kV').innerHTML = v.arr6kV.join(" ");
		document.getElementById('area-text-500V').innerHTML = v.arr500V.join(" ");
		document.getElementById('area-text-230V').innerHTML = v.arr230V.join(" ");
		document.getElementById('area-text-sterowanie').innerHTML = v.arrSterowanie.join(" ");
	})
	.catch(err => console.log(err));
	//cleaning the screen
	v.title6kV.style.display = v.title500V.style.display = v.title230V.style.display = v.titleSterowanie.style.display = 'none';
	v.arr6kV = [], v.arr500V = [], v.arr230V = [], v.arrSterowanie = [];
	document.getElementsByTagName('h1')[0].style.paddingTop = '4em';
}

export { getSchemat };
