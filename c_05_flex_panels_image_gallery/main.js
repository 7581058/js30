const panels = document.querySelectorAll('.panel')

function toggleOpen() {
  this.classList.toggle('open')
}


function toggleActive(e) {
  // console.log(e.propertyName) //적용되는 transition 확인 

  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))