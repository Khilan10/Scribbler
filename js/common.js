// this variable is defined get modal for sign-up
var modalSignUp = document.getElementById('sign-up-modal');

// this variable is defined get modal for sign-in
var modalSignIn = document.getElementById('sign-in-modal');

// this variable is defined get modal for creating new post
var modalNewPost = document.getElementById('create-post-modal');

//this variable is defined get modal for delete post card
var modalDelete = document.getElementById('delete-modal');

//this method is used to show the modal for sign-up
//this will add the html code to div modalSignUp
function openSignUp() {
  modalSignUp.innerHTML =
    '<div class="modal-content-sign-up">' +
    '<div class="modal-header">' +
    '<label class="modal-heading">Get Started<label>' +
    '<a class="cross-icon" onclick="closeSignUp()">' +
    '<i class="fa fa-times"></i></a><hr />' +
    '</div><div class="modal-body">' +
    '<form>' +
    '<label for="name">Name</label>' +
    '<input type="text" placeholder="Enter your name" ' +
    'name="name" id="name" required />' +
    '<label for="username">Username</label>' +
    '<input type="text" placeholder="Enter your username"' +
    'name="username" id="username" required />' +
    '<label for="password">Password</label>' +
    '<input type="password" placeholder="Enter your password"' +
    'id="password" name="password" required />' +
    '<label for="confirmPassword">Confirm Password</label>' +
    '<input type="password" placeholder="Re-enter your password" id="confirmPassword" name="confirmPassword"' +
    'required />' +
    '<button class="sign-up-button">Sign Up</button>' +
    '</form>' +
    '</div>' +
    '</div>';
  modalSignUp.style.display = 'block';
}

//this method is used to show the modal for sign-in
//this will add the html code to div modalSignIn
function openSignIn() {
  modalSignIn.innerHTML =
    '<div class="modal-content-sign-in">' +
    '<div class="modal-header">' +
    '<label class="modal-heading">Welcome Back!<label>' +
    '<a class="cross-icon" onclick="closeSignIn()"><i ' +
    'class="fa fa-times"></i></a>' +
    '<hr />' +
    '</div>' +
    '<div class="modal-body">' +
    '<form>' +
    '<label for="usernameSignIn">Username</label>' +
    '<input type="text" placeholder="Enter your username"' +
    'id="usernameSignIn" name="usernameSignIn" required />' +
    '<label for="passwordSingIn">Password</label>' +
    '<input type="password" placeholder="Enter your password" ' +
    'id="passwordSingIn" name="passwordSingIn" required />' +
    '<button class="sign-in-button">Sign In</button>' +
    '<h4>Not a member? <a class="signUpText" ' +
    'onclick="openSignUpFromSignIn()">Sign Up<a></h4>' +
    '</form>' +
    '</div>' +
    '</div>';
  modalSignIn.style.display = 'block';
}

//this method is used to show the modal for sign-up from sign-in
//it first hides the sign-in modal and than shows sign-up modal
function openSignUpFromSignIn() {
  modalSignIn.style.display = 'none';
  modalSignUp.innerHTML =
    '<div class="modal-content-sign-up">' +
    '<div class="modal-header">' +
    '<label class="modal-heading">Get Started<label>' +
    '<a class="cross-icon" onclick="closeSignUp()">' +
    '<i class="fa fa-times"></i></a><hr />' +
    '</div><div class="modal-body">' +
    '<form>' +
    '<label for="name">Name</label>' +
    '<input type="text" placeholder="Enter your name" ' +
    'name="name" id="name" required />' +
    '<label for="username">Username</label>' +
    '<input type="text" placeholder="Enter your username"' +
    'name="username" id="username" required />' +
    '<label for="password">Password</label>' +
    '<input type="password" placeholder="Enter your password"' +
    'id="password" name="password" required />' +
    '<label for="confirmPassword">Confirm Password</label>' +
    '<input type="password" placeholder="Re-enter your password" id="confirmPassword" name="confirmPassword"' +
    'required />' +
    '<button class="sign-up-button">Sign Up</button>' +
    '</form>' +
    '</div>' +
    '</div>';
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
  } else if (event.target == modalDelete) {
    modalDelete.style.display = 'none';
  }
};
