document.querySelector('#search-input').addEventListener('input', filterlist);

function filterlist(){
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.list-group-item');

  listItems.forEach((item) =>{
    let text = item.textContent;
    if(text.toLowerCase().includes(filter.toLowerCase())){
      item.style.display = '';
    }
    else {
      item.style.display = 'none';
    }
  });
}