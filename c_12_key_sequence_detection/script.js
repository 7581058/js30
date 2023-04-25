const pressed = []
const secretCode = 'victus'

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  pressed.push(e.key)

  //배열 계속 push 돼도
  //시크릿코드길이 만큼 만들기 
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  
  if(pressed.join('').includes(secretCode)) {
    console.log('ding ding')
    cornify_add()
  }
  console.log(pressed)
})