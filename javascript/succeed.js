console.log(localStorage.getItem('email'));
if(localStorage.getItem('email')){
  let email_text = document.getElementById('contentemail') ;
  console.log('email valid');
  email_text.innerText = localStorage.getItem('email') ;
}