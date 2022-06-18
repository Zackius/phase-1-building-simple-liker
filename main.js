// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll(" spin.like-glyph")
  hearts.forEach (heart => {
  hearts.addEventListener('click', () =>{
     if(heart.innerText === FULL_HEART){
      heart.classList.remove('activated-heart')
      heart.innerText = EMPTY_HEART
     }else{
      mimicServerCall()
      .then(() =>{
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      })
      .catch(() =>{
        let errorMessage = document.querySelectorAll('modal')
        errorMessage.classList.remove('hidden')
        let message = document.querySelectorAll('modal-message')
        message.innerText = "Try again, Server Down!"
        setTimeout(() => {
          errorMessage.classList.add('hidden')
        }, 4000);
      })
    }
      })
     })
     
  } )
  


// ------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
// ------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
l