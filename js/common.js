// this variable is defined get modal for sign-up
var modalSignUp = document.getElementById('sign-up-modal');

// this variable is defined get modal for sign-in
var modalSignIn = document.getElementById('sign-in-modal');

// this variable is defined get modal for creating new post
var modalNewPost = document.getElementById('create-post-modal');

//this method is used to show the modal for sign-up
function openSignUp() {
  modalSignUp.style.display = 'block';
}

//this method is used to show the modal for sign-in
function openSignIn() {
  modalSignIn.style.display = 'block';
}

//this method is used to show the modal for sign-up from sign-in
//it first hides the sign-in modal and than shows sign-up modal
function openSignUpFromSignIn() {
  modalSignIn.style.display = 'none';
  modalSignUp.style.display = 'block';
}

//this method is used to hide sign-up modal
function closeSignUp() {
  modalSignUp.style.display = 'none';
}
//this method is used to hide the sign-in modal
function closeSignIn() {
  modalSignIn.style.display = 'none';
}

// When the user clicks anywhere outside modal, close it
window.onclick = function(event) {
  if (event.target == modalSignIn) {
    modalSignIn.style.display = 'none';
  } else if (event.target == modalSignUp) {
    modalSignUp.style.display = 'none';
  } else if (event.target == modalNewPost) {
    modalNewPost.style.display = 'none';
  }
};
