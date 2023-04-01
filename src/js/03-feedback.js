import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';

//create variable for localstorage with type object
let formData = {};
//set data to variable from localstorage
formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//initiate function to view form fields from localstorage datakey
onSavedDataForm();

//add listeners to form
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

//function of set input data to localstorage
function onFormInput(evt) {
  evt.preventDefault();

  if (!formData) {
    return (formData = {});
  }

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//function of view inputed fields on form after refreshing page
function onSavedDataForm() {
  if (!formData) {
    return (formData = {});
  }

  //   const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   const savedForm = formData;
  //     if (savedForm.email !== undefined) {
  //       refs.form.email.value = savedForm.email.trim();
  //     }
  //     if (savedForm.message !== undefined) {
  //       refs.form.message.value = savedForm.message.trim();
  //     }

  if (formData.email !== undefined) {
    refs.form.email.value = formData.email.trim();
  }
  if (formData.message !== undefined) {
    refs.form.message.value = formData.message.trim();
  }
}

//function of tasks after submiting form
function onFormSubmit(evt) {
  evt.preventDefault();
  showObjectSubmitForm();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

// function to show log at console
function showObjectSubmitForm() {
  //console.log('Submit Form', JSON.parse(localStorage.getItem(STORAGE_KEY)));
  console.log('Submit Form', formData);
}
