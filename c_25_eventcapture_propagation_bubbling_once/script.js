const divs = document.querySelectorAll('div')

// function logText(e) {
//   console.log(this.classList.value)
// }

/***********************************************************/

// divs.forEach(div => {
//   div.addEventListener('click', logText)
// })

//기본 상태에서 .three 클릭 시 
//콘솔 출력 three two one 

/***********************************************************/

//document.body.addEventListener('click', logText)

//.three 클릭 시 
//콘솔 출력 three two one bod 

/***********************************************************/

// divs.forEach(div => {
//   div.addEventListener('click', logText, {
//     capture: true 
//   })
// })

//.three 클릭 시 
//콘솔 출력 one two three 
//capture: true 는 이벤트 핸들러가 
//이벤트 캡처링 단계에서 동작하도록 설정할 수 있음 
//버블링 단계보다 먼저, 
//최상위요소에서 하위요소로 전파되는 동안 이벤트 핸들러가 실행됨 
//최상위 요소부터 하위 요소로 향하는 동안 
//이벤트를 처리할 수 있는 기회를 제공합니다
//결과 : one two three 

/***********************************************************/

// function logText(e) {
//   console.log(this.classList.value)
//   e.stopPropagation()
// }

// divs.forEach(div => {
//   div.addEventListener('click', logText, {
//     capture: false 
//   })
// })

//.three 클릭시 콘솔 출력 three 
//e.stopPropagation() 으로 버블링을 멈췄기 때문 

/***********************************************************/

// function logText(e) {
//   console.log(this.classList.value)
//   e.stopPropagation()
// }

// divs.forEach(div => {
//   div.addEventListener('click', logText, {
//     capture: true 
//   })
// })

//.three 클릭시 콘솔 출력 one
//capture: true 로 설정했기 때문 

/***********************************************************/

function logText(e) {
  console.log(this.classList.value)
}

divs.forEach(div => {
  div.addEventListener('click', logText, {
    capture: false,
    once: true 
  })
})

//.three 클릭시 콘솔 출력 three two one 
//once: true로 설정했기 때문에 
//한 번 더 .three를 클릭해도 이벤트 일어나지 않음

/***********************************************************/

const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('click!!')
}, {
  once: true
})

//once:true 로 설정했기 때문에 
//버튼을 여러번 클릭해도 콘솔 출력은 한 번만 됨 