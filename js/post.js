// this variable is defined get edit button
var editButton = document.getElementById('edit-button');
// this variable is defined get save button
var saveButton = document.getElementById('save-button');
// this variable is defined get post heading
var postHeading = document.getElementById('post-heading');
// this variable is defined get post content
var postContent = document.getElementById('post-content');
//this variable is defined get like button
var likeButton = document.getElementById('like-button');
//this variable is defined get liked button
var likedButton = document.getElementById('liked-button');
//this variable is defined get like label
var likeLabel = document.getElementById('like-label');
//this variable is defined to display number of people who liked
var noOfpeople = 1;
//this variable is used to get the comment added in text box
var comment = document.getElementById('comment');
//this variable is added to get the comment table
var tableComment = document.getElementById('comment-table');

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

//this method is called on click of Like button
//this will hide the like button and show liked button
//this will also change the label
function likeClicked() {
  likeButton.style.display = 'none';
  likedButton.style.display = 'block';
  likeLabel.innerHTML = noOfpeople + ' people like this!';
}

//this method is called on click of Liked button
//this will also change the label to show the no of people who has liked
function LikedClicked() {
  noOfpeople++;
  likeLabel.innerHTML = noOfpeople + ' people like this!';
}

//this method is executed on click on Comment Button
//this will add the comment in top of the box
function commentClicked() {
  console.log('get the comment:' + comment.value);
  tableComment.innerHTML =
    '<tr><td>' + comment.value + '</td></tr>' + tableComment.innerHTML;
}
