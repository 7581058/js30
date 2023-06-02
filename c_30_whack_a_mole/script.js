const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole
let timeUp = false
let score  = 0

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]
  
  //중복방지 
  if(hole === lastHole) {
    return randomHole(holes)
  }

  lastHole = hole 
  return hole 
}

function peep() {
  const time = randomTime(200, 1000) //시간을 조절해서 난이도 조절 
  const hole = randomHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    if(!timeUp) peep() //timeUp이 true 면 중지됨  
  }, time)
}

function startGame() {
  scoreBoard.textContent = 0
  timeUp = false 
  score = 0
  peep()

  //10초뒤에 자동 중지 
  setTimeout(() => {
    timeUp = true
  }, 10000)
}

function bonk(e) {
  if(!e.isTrusted) return 
  score += 1
  this.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))