const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// evenment
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// ouvrir
function openModal() {
	modal.style.display = 'block';
}

// fermer
function closeModal() {
	modal.style.display = 'none';
}

// fermer si c'est cliquer
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}
// reprise des id grace au getElmentById
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// enlever les espaces blanc
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();
	// condition pour que le formulaire soit bon et s'envoie
	if (usernameValue === '') {
		setErrorFor(username, 'Le nom ne peut pas être vide');
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, "L'email ne peut pas être vide");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "L'email n'est pas valide'");
	} else {
		setSuccessFor(email);
	}

	if (messageValue === '') {
		setErrorFor(message, 'Le message ne peut pas être vide');
	} else {
		setSuccessFor(message);
	}
}
// fonction d'erreur
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
}
// fonction success
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	alert('Votre message a bien été envoyé');
}
// fonction pour qu'il y est un email correct
function isEmail(email) {
	return /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
