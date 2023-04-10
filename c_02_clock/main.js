const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourdHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const mins = now.getMinutes()
  const minDegrees = ((mins / 60) * 360) + 90
  minsHand.style.transform = `rotate(${minDegrees}deg)`

  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) + 90
  hourdHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)