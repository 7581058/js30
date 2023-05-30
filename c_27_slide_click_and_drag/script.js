const slider = document.querySelector('.items')

let isDown = false 
let startX 
let scrollLeft 

slider.addEventListener('mousedown', (e) => {
  isDown = true 
  slider.classList.add('active')
  //pageX : 전체 문서의 왼쪽 가장자리를 기준으로 
  //마우스를 클릭한 가로 좌표를 반환 
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false 
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false 
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return 
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  // const walk = (x - startX) * 3
  const walk = (x - startX) 
  slider.scrollLeft = scrollLeft - walk
})