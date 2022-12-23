'use strict';
// let data = {
//   'username' : 'ahmedelsayed',
//   'email' : 'ahmedelsayed@email.com',
//   'password': 'ahmedAH123321' ,
//   'password_confirmation' : 'ahmedAH123321'
// }
// fetch('https://goldblv.com/api/hiring/tasks/register', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })

// ------------------ declarations ------------------
let form = document.getElementById('register')

let userName = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm_password')


// ------------------ userName validations ------------------
userName.addEventListener('change' , () => {
  if(validUserName(userName.value)){
    setErorr(userName , 'please set a valid username')
  }else {
    removeError(userName)
  }

})

function validUserName(uname){
  let regexUser = /^[a-zA-Z]\w+[1-9]?[a-zA-Z^1-9]*$/
  let test = regexUser.test(uname);
  let len = uname.length ;
  let resulte = (test &&  isNaN(uname.charAt(len - 1)) && !uname.includes('_') && (len >= 5 && len <= 15) ) != true ;
  return resulte ;
}



// ------------------ email validations ------------------

email.addEventListener('change' , () => {

  if(!validEmail(email.value)){
    setErorr(email , 'Email must be in a valid format')

  }else {
    removeError(email)
  }

})

function validEmail(email){
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  
  return regexEmail.test(email)
}



// ------------------ password and confirm passowrd validations ------------------

password.addEventListener('change' ,() => {

  if(password.value.length < 8){
    setErorr(password , 'Password must be at least 8 characters')
  }else{
    removeError(password)
  }

})

confirmPassword.addEventListener( 'change',()=>{

  if(confirmPassword.value !== password.value){
    setErorr(confirmPassword , 'this not the same with password')
  }else{
    removeError(confirmPassword)
  }

})



// ------------------ Form ------------------

form.addEventListener('submit' , (e)=> {
  e.preventDefault();
  localStorage.setItem('email' , email.value);
  location.replace('/succeed.html')

})




function setErorr(input , message){
  const parent = input.parentElement.parentElement ;
  const small = parent.querySelector('small');

  small.innerText = message ;
  small.className = 'error'  
  
}

function removeError(input ){
  const parent = input.parentElement.parentElement ;
  const small = parent.querySelector('small');

  small.innerText = 'valid' ;
  small.className = ''
}


