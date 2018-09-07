"use strict";

document.getElementById('loginUser').addEventListener('submit', userLogin);
function userLogin(event){
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    fetch("http://127.0.0.1:5000/api/v1/auth/login",{
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body:JSON.stringify({email:email, password:password})
    })
    .then((response) => response.json())
    .then((data) => {
      if("token" in data){
        localStorage.setItem("access_token", data.token);
        document.getElementById("message").innerHTML=data.message;
        window.location.href = './all_questions.html'
        
      }else{
        danger.innerHTML=data.message;
      }
      
    })
    
  }