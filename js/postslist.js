var modalDelete = document.getElementById('delete-modal');
var card;
//function added to delete card
function deleteCard(cardNo) {
  card = document.getElementById(cardNo);
  modalDelete.style.display = 'flex';
}
//function to be exected on click of no button
function noClicked() {
  modalDelete.style.display = 'none';
}

//function to be exected on click of yes button
function yesClicked() {
  modalDelete.style.display = 'none';
  card.style.display = 'none';
}
