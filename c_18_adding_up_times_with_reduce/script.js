const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

//nodeList 라서 배열 메소드, map 사용할 수 없음 
//배열처럼 사용하려면 전개연산자, Array.from, foreach 
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    //:로 분과 초를 분리하고 숫자로 변환 
    const [mins, secs] = timeCode.split(':').map(parseFloat)
    return (mins * 60) + secs //초단위로 변환 
  })
  //reduce 는 배열의 각 요소를 누적하여 하나의 결과값을 만들어냄 
  //total : 누적된 시간값, seconds : 현재 요소의 시간값 
  .reduce((total, seconds) => total + seconds) //총 시간 구하기

  //계산된 총 시간 할당 
  let secondsLeft = seconds 
  
  const hours = Math.floor(secondsLeft / 3600)
  secondsLeft = secondsLeft % 3600 

  const mins = Math.floor(secondsLeft / 60)
  secondsLeft = secondsLeft % 60

  console.log(hours, mins, secondsLeft)
