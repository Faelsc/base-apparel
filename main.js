const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type=email]');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let ValorDoEmail = email.value;
	console.log(email.value);
	if (EmailValido(ValorDoEmail)) {
		form.classList.remove('erro');
	} else {
		form.classList.add('erro');
	}
});

function EmailValido (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}