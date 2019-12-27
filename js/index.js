// this variable is defined get modal for creating new post
var modalNewPost = document.getElementById('create-post-modal');

//this method is used to show the modal for creating post
function openCreatePost() {
  modalNewPost.style.display = 'block';
}

//this method is used to hide create post modal
function closeCreatePost() {
  modalNewPost.style.display = 'none';
}

//this method is used to navigate to bloglist page
function openAllPosts() {
  window.location.href = '../html/bloglist.html';
}
