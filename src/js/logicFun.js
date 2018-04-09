function addLink(path, title) {
		let p = document.createElement("p");
		p = `<a target="_blank" href="${path}">${title}</a><br>`;
		return p;
	}

function showLinks(title, dataType, arrType) {
		title.style.display = 'block';
		let a = addLink(dataType.path, dataType.title);
		arrType.push(a);
		document.getElementsByTagName('h1')[0].style.paddingTop = '1em';
	}

export { addLink, showLinks };