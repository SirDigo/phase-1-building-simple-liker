// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartBtn = document.querySelectorAll(".like-glyph");
let hidden = document.querySelector(".hidden");


document.addEventListener('DOMContentLoaded', () => {
  
  heartBtn.forEach(heart => {
    console.log(heart)
    heart.addEventListener('click', () => {
      if (heart.textContent === EMPTY_HEART){
        mimicServerCall()
        .then(() => {
          heart.className = "activated-heart"
          heart.textContent = FULL_HEART;
        })
        .catch(() => {
          removeAndAddHide();
        })
      }
      else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart")
      }
    })
  });
  
});


function removeAndAddHide() {
  hidden.classList.remove('hidden');
  setTimeout(() => {
    hidden.classList.add('hidden')
}, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
