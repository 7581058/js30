const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
  e.preventDefault() //새로고침방지 
  const text = (this.querySelector('[name=item')).value
  const item = {
    //text: text, 처럼 같으면 하나만 적어주기 
    text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset() //submit되면 입력된거 지워주기 
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return /*HTML*/`
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}

function toggleDone(e) {
  if(!e.target.matches('input')) return 
  const el = e.target 
  const index = el.dataset.index
  items[index].done = !items[index].done //토글 
  localStorage.setItem('items', JSON.stringify(items)) //변경된토글상태저장
  populateList(items, itemsList) //반영 
} 

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList)

