const form = document.querySelector("#form");
const passWordOne = document.querySelector("#password1")
const passWordTwo = document.querySelector ("#password2")
const errorMessage = document.querySelector (".error-message")
const message = document.querySelector ("#message")


let formValid = false;
let passWordMatch = false;

function validateForm() {

	formValid = form.checkValidity();

	if (!formValid) {
		message.textContent = "please fill in the blank space";
		message.style.color = "red";
		errorMessage.style.borderColor = "red";
		return;
	}


	if (passWordOne.value === passWordTwo.value){
		passWordMatch = true;
		passWordOne.style.color ="green"
		passWordTwo.style.color ="green"
		passWordOne.style.borderColor = "green"
		passWordTwo.style.borderColor = "green"
	} else{
	    passWordMatch = false;
		passWordOne.style.color ="red"
		passWordTwo.style.color ="red"
		passWordOne.style.borderColor = "red"
		passWordTwo.style.borderColor = "red"
		message.textContent = "passWord doesn't match"
		message.style.color = "red"
		errorMessage.style.borderColor = "red"
		return;
	}

	if ( formValid && passWordMatch){
		message.textContent = "successful.........";
        message.style.color = "green";
        errorMessage.style.borderColor = "green";

	}
	
}


function storeData() {
	const client = {
		fullname: form.fullname.value,
		phoneunmber: form.phonenumber.value,
		email: form.email.vale,
		website: form.website.value,
		password: form.password.value,
	};
}

function processFormData(event) {
	event.preventDefault();

	validateForm();
	if (formValid && passWordMatch){
		storeData();
	}
}

form.addEventListener("submit", processFormData);

// console.log (landmarkS)