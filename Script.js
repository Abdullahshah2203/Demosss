const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const itemList = document.getElementById('item-list');
const newItemInput = document.getElementById('new-item');

addButton.addEventListener('click', () => {
  const newItemText = newItemInput.value.trim();
  if (newItemText) {
    const listItem = document.createElement('li');
    listItem.textContent = newItemText;
    itemList.appendChild(listItem);
    newItemInput.value = '';
  }else{
    alert("Enter Deta")
  }
});

clearButton.addEventListener('click', () => {
  itemList.innerHTML = '';
});
