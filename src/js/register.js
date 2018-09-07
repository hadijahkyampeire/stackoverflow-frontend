"use strict";

document.getElementById('signupUser').addEventListener('submit', userSignup);
let success = document.getElementById("success");
let danger = document.getElementById("danger");

function userSignup(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    fetch("http://127.0.0.1:5000/api/v1/auth/register",{
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body:JSON.stringify({username:username, email:email, password:password})
    })
    .then((response) => response.json())
    .then((data) => {
      if ('Account created successfully' === data.message){
        success.innerHTML=data.message;
        window.location.href = 'Accounts.html'
        
      } else{
        danger.innerHTML=data.message;
      }
      
    })
    
  }
