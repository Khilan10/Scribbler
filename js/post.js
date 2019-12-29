// this variable is defined get edit button
var editButton = document.getElementById('edit-button');
// this variable is defined get save button
var saveButton = document.getElementById('save-button');
// this variable is defined get post heading
var postHeading = document.getElementById('post-heading');
// this variable is defined get post content
var postContent = document.getElementById('post-content');

// this method is called on click of edit button
// this will show the save button and hide the edit button
// And add the border around the post heading and post content
// It will also make content editable
function editClicked() {
  editButton.style.display = 'none';
  saveButton.style.display = 'block';
  postHeading.style.border = '2px solid pink';
  postContent.style.border = '2px solid pink';
  postHeading.setAttribute('contenteditable', true);
  postContent.setAttribute('contenteditable', true);
}
//this method is called on click of save button
//this will show the edit button and hide the save button
//And remove the border around the post heading and post content
//It will also make content non-editable
function saveClicked() {
  editButton.style.display = 'block';
  saveButton.style.display = 'none';
  postHeading.style.border = 'none';
  postContent.style.border = 'none';
  postHeading.setAttribute('contenteditable', false);
  postContent.setAttribute('contenteditable', false);
}
