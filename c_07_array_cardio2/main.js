// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


/*
Array.prototype.some() 
주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
주어진 함수가 true를 반환하면 true를 반환 

Array.prototype.every()
배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트

Array.prototype.find()
주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 
그런 요소가 없다면 undefined를 반환

Array.prototype.findIndex()
주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 
만족하는 요소가 없으면 -1을 반환
*/


// Array.prototype.some()///////////////////////////////////////
// is at least one person 19 or older? 
// 적어도 한 사람 이상이 19세 이상인지?
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear()
  if(currentYear - person.year >= 19) {
    return true
  }
}) 
console.log(isAdult)

//더 간단하게 작성
const isAdult2 = people.some(person => ((new Date())
  .getFullYear()) - person.year >= 19)
console.log({isAdult2})


// Array.prototype.every()///////////////////////////////////////
// is everyone 19 or older? 
// 모든 사람이 19세 이상인지?
const allAdults = people.every(person => ((new Date())
  .getFullYear()) - person.year >= 19)
console.log({allAdults})


// Array.prototype.find()///////////////////////////////////////
// Find is like filter, but instead returns just the one you are looking for
// filter와 비슷하지만 찾고자 하는 것 하나만 반환
// find the comment with the ID of 823423
// ID가 823423인 댓글 찾기 
const comment = comments.find(function(comment) {
  if(comment.id === 823423) {
    return true
  }
})
console.log(comment)

//간단하게 작성
const comment2 = comments.find(comment => comment.id === 823423)
console.log(comment2)


// Array.prototype.findIndex()///////////////////////////////////////
// Find the comment with this ID
// 이 ID를 가진 댓글 찾기 
const index = comments.findIndex(comment => comment.id === 823423)
console.log(index)

// delete the comment with the ID of 823423
// ID가 823423인 댓글 삭제 
//해당 아이디의 앞과 뒤를 따로 slice로 반환받아 새 배열에 할당 
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]

console.table(newComments)