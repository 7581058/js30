const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')

// Interpolated //보간
console.log('hello i am a %s string', 'TEXT')

// Styled
console.log('%c i am some great text', 'font-size:30px; background:black; color:#fff;')

// warning!
console.warn('warning test')

// Error :|
console.error('error test')

// Info
console.info('crocodiles eat 3-4 people per year')

// Testing
//어설션이 false인 경우 오류 메시지를 콘솔에 기록
//어설션이 참이면 아무 일도 일어나지 않
const p = document.querySelector('p')
console.assert( p.classList.contains('ouch'), 'that is wrong!')

// clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  //console.group(`${dog.name}`)
  console.groupCollapsed(`${dog.name}`) //접힌 상태로 나옴 
  console.log(`this is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('a')
console.count('a')
console.count('b')
console.count('b')
console.count('a')
console.count('c')
console.count('a')
console.count('a')


// timing
console.time('fetching data')
fetch('url')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data) // fetching data: 84.822ms 같이 나옴 
  })

//table
console.table(dogs)  