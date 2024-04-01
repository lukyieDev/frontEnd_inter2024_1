let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

function carroussel() {
  if(currentItem >= maxItems) {
    currentItem = 0
  }else{
    let firstItem = items[currentItem];
    let parent = firstItem.parentNode;
    parent.removeChild(firstItem);
    parent.appendChild(firstItem);
    firstItem.classList.add('imagem_principal') 
    currentItem++
  }
}
setInterval(()=>{
carroussel()
}, 2500)
