// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 
  
   document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('#modal').hidden = true;
   
  })
  console.log(modal)


  function toggleHeart() {
     //Error being popping up on successful server call
     
    } 
  

  function showError() {
    document.getElementById('modal').hidden = false
    // makes error message appear AFTER 3 seconds
    //setTimeout(() => document.getElementById('modal').hidden = false, 3000)
    setTimeout(() => document.getElementById('#modal').hidden = true, 3000)
  }

  function like() {
    document.addEventListener('click', () => {
      //const like = document.getElementById('like-glyph')
      document.querySelector('.activated-heart')
    //document.getElementsByClassName("like-glyph") 
    
    let p1 = mimicServerCall()
    p1.then(function(resolve) {
      console.log('Okay!')
      toggleHeart();
      
      
     
    }).catch(function(e) {
      showError();
      
    })
    
    
      
    })
  }    
    like()

    // function toggleHeart() {
    //   document.getElementsByClassName("like-glyph") = FULL_HEART
    // }

  



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
