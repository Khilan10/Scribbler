// this variable is defined get modal for creating new post
var modalNewPost = document.getElementById('create-post-modal');

//this method is executed on click of Create Post button
//this method is used to show the modal for creating post
//thus we are adding inner HTML to div on click of button
function openCreatePost() {
  modalNewPost.innerHTML =
    '<div class="modal-content-create-post">' +
    '<div class="modal-header">' +
    '<label class="modal-heading">Pen Your Post<label>' +
    '<a class="cross-icon" onclick="closeCreatePost()"><i ' +
    'class="fa fa-times"></i></a>' +
    '<hr />' +
    '</div>' +
    '<div class="modal-body">' +
    '<form>' +
    '<label for="postTitle">Title</label>' +
    '<textarea class="title-text" placeholder="Enter title of ' +
    'your post" id="postTitle" name="postTitle"' +
    '></textarea>' +
    '<label for="postContent">Contents</label>' +
    '<label for="postContent">Contents</label>' +
    '<textarea class="content-text" placeholder="Enter the ' +
    'contents of your post"></textarea>' +
    '<button class="create-button">Create</button>' +
    '</form>' +
    '</div>' +
    '</div>';
  modalNewPost.style.display = 'block';
}

//this method is used to hide create post modal
function closeCreatePost() {
  modalNewPost.style.display = 'none';
}

//this method is executed on click of All Post button
//this method is used to navigate to bloglist page
function openAllPosts() {
  window.location.href = './html/postslist.html';
}
