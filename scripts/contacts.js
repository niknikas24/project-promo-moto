const form = document.forms.user;
const perms = document.querySelector('.form-checkbox');
const permsCheckbox = document.querySelector(".form-checkbox-input");
const acc = document.getElementsByClassName("accordion");
let i;

const getPanel = function () {
  let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", getPanel);
}

form.addEventListener("submit", function(e) {
	e.preventDefault();

	const answers = {}

	for (let i = 0; i < form.elements.length; i++) {
		let el = form.elements[i];
		if (el.name) {
			answers[el.name] = el.value;
		}
	}

	console.log(answers);
})

const changeColor = (e) => {
  switch(e.key) {
		case "Shift":
			if (!perms.classList.contains("active")) {
				perms.classList.add("active");
				permsCheckbox.checked = true;
			}
			break;
		case "Escape":
			perms.classList.remove("active");
			permsCheckbox.checked = false;
			break;
	}
}

document.body.addEventListener("keydown", changeColor);
