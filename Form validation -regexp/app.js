//Event listeners for blur
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zipcode').addEventListener('blur',validateZipcode);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(){
  const name = document.getElementById('name')
  const re = /^[a-zA-Z]{2,10}$/
  if(!re.test(name.value)){
    // name.className = 'form-control is-invalid'
    name.classList.add('is-invalid')
  }else{
    name.classList.remove('is-invalid')
  }
}

function validateZipcode(){
  const zipcode = document.getElementById('zipcode')
  const re = /^[0-9]{5}(-[0-9]{4})?$/ // usa zip code
  if(!re.test(zipcode.value)){
    // name.className = 'form-control is-invalid'
    zipcode.classList.add('is-invalid')
  }else{
    zipcode.classList.remove('is-invalid')
  }
}

function validateEmail(){
  const email = document.getElementById('email')
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ 
  if(!re.test(email.value)){
    // name.className = 'form-control is-invalid'
    email.classList.add('is-invalid')
  }else{
   email.classList.remove('is-invalid')
  }
}

function validatePhone(){
  const phone = document.getElementById('phone')
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{3}$/
  if(!re.test(phone.value)){
    // name.className = 'form-control is-invalid'
    phone.classList.add('is-invalid')
  }else{
   phone.classList.remove('is-invalid')
  }
}