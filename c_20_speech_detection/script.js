window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true 
recognition.lang = 'ko';

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

  p.textContent = transcript
  //다음문장 생성 
  if(e.results[0].isFinal) {
    p = document.createElement('p')
    words.appendChild(p)
  }

  //해당 말이 포함되면 동작 
  if(transcript.includes('알림')) {
    console.log('알림설정하기')
  }
  
  console.log(transcript)
})

recognition.addEventListener('end', recognition.start)

recognition.start()