"use strict";

// Selectors
const alertBox = document.getElementById("alertBox");
const alertClose = document.getElementById("alertClose");
const refreshButton = document.querySelector('main button.refresh-button')
const loginButton = document.querySelector('main button.log-in-button')







// Variables
let isAlertVisible = false







// Functions
alert = (msg) => {
  instructorCustomAlert(msg);
}



function instructorCustomAlert(msg) {
  let urlWebsite = location.href;

  // Create alert box
  const alertBox = document.createElement("div");
  alertBox.id = "alertBox";
  document.body.appendChild(alertBox);

  // Create label's alert box
  const alertBoxLabel = document.createElement("div");
  alertBoxLabel.classList.add("label");
  alertBox.appendChild(alertBoxLabel);

  // Create label's text
  const alertBoxLabelText = document.createElement("p");
  alertBoxLabelText.classList.add("text");
  alertBoxLabelText.innerHTML = `JavaScript Prompt - ${urlWebsite}`;
  alertBoxLabel.appendChild(alertBoxLabelText);

  // Create Close alert icon
  const closeAlert = document.createElement("i");
  closeAlert.className = "fa-solid fa-x";
  closeAlert.id = "alertClose";
  alertBoxLabel.appendChild(closeAlert);
  closeAlert.onclick = () => {
    alertBox.remove()
    isAlertVisible = false
  }

  // Create content's alert box
  const alertBoxContent = document.createElement("div");
  alertBoxContent.classList.add("content");
  alertBox.appendChild(alertBoxContent);

  // Create form
  const form = document.createElement("form");
  alertBoxContent.appendChild(form);

  // Create input container
  const inputContainer = document.createElement("div");
  inputContainer.classList.add('input')
  form.appendChild(inputContainer);

  // Create password input
  const passInput = document.createElement("input");
  passInput.type = 'password'
  passInput.placeholder = 'Password'
  inputContainer.appendChild(passInput);

  // Create password's label
  const labelInput = document.createElement("label");
  labelInput.innerHTML = 'ادخل كلمة المرور'
  inputContainer.appendChild(labelInput);

  // Create Show&Hide password icon
  const showPassIcon = document.createElement("i");
  showPassIcon.className = 'fa-regular fa-eye-slash show-pass'
  inputContainer.appendChild(showPassIcon);
  const hidePassIcon = document.createElement("i");
  hidePassIcon.className = 'fa-regular fa-eye hide-pass'
  inputContainer.appendChild(hidePassIcon);

  // Create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add('options')
  form.appendChild(optionsContainer);

  // Create submit button (OK)
  const okButton = document.createElement("input");
  okButton.classList.add('ok-button')
  okButton.type = 'submit'
  okButton.value = "OK"
  optionsContainer.appendChild(okButton);

  // Create cancel button (Cancel)
  const cancelButton = document.createElement("button");
  cancelButton.classList.add('cancel-button')
  cancelButton.type = 'button'
  cancelButton.innerHTML = 'Cancel'
  optionsContainer.appendChild(cancelButton);



  function handlePassInput() {
    let lengthInputText = passInput.value.length
    if (lengthInputText > '30')
      passInput.value = passInput.value.slice(0, lengthInputText - 1)
  }
  passInput.addEventListener('input', () => handlePassInput())



  showPassIcon.onclick = () => {
    showPassIcon.style.display = 'none'
    hidePassIcon.style.display = 'block'
    passInput.type = 'text'
  }

  hidePassIcon.onclick = () => {
    hidePassIcon.style.display = 'none'
    showPassIcon.style.display = 'block'
    passInput.type = 'password'
  }



  function handleSubmit(e) {
    e.preventDefault()
    if (passInput.value.length <= 6 || passInput.value.length > 30) 
      passInput.style.borderBottomColor = '#ff4f4f'
    else {
      passInput.style.borderBottomColor = '#55ff55'
      setTimeout(() => form.submit(), 1500);
    }
  }
  form.addEventListener('submit', (e) => handleSubmit(e))
}






// Events
refreshButton.onclick = () => location.reload()

loginButton.onclick = () => {
  if (!isAlertVisible) {
    alert()
    isAlertVisible = true
  }
}
