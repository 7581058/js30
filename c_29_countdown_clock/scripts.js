let countdown
const timerDisplay = document.querySelector('.display__time-left')

function timer(seconds) {
  const now = Date.now() 
  const then = now + seconds * 1000
  displayTimerLeft(seconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now()) / 1000

    if(secondsLeft < 0) {
      clearInterval(countdown)
      return 
    }
    displayTimerLeft(secondsLeft)
  }, 1000);
}

function displayTimerLeft(seconds) {
  const minutes = Math.floor(seconds / 60 )
  const remainderSeconds = seconds % 60
  const display = `${minutes}:${remainderSeconds}`
  timerDisplay.textContent = display
}