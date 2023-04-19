const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#bada55' // 윤곽선 색 
ctx.lineJoin = 'round' // 만나는 두 선분을 연결하는 데 사용되는 모양을 결정
ctx.lineCap = 'round' // 선의 끝점을 그리는 데 사용되는 모양을 결정
ctx.lineWidth = 100

// 새 이미지가 기존이미지에 그려지는 방식 설정하거나 반환 
//ctx.globalCompositeOperation = 'multiply' 

let isDrawing = false

let lastX = 0
let lastY = 0

let hue = 0
let direction = true

function draw(e) {
  if(!isDrawing) return // 마우스다운이 아닐 때 멈추기 
  console.log(e)
  ctx.strokeStyle= `hsl(${hue}, 100%, 50%)` // 색상 변화 
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  ;[lastX, lastY] = [e.offsetX, e.offsetY]

  hue += 1
  if(hue >= 360) { // 끝색에 도달하면 
    hue = 0 // 0으로 초기화 // 계속 증가 방지 
  }

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { // 두께 최대 최소 
    direction = !direction
  }
  if(direction) {
    ctx.lineWidth += 1
  } else {
    ctx.lineWidth -= 1
  }
  
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  ;[lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
// 마우스 다운 한 상태로 움직였을 때만 동작 



