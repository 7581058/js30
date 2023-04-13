// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];




// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 1. 1500년대에 태어난 발명가 찾기 
/* 기존 */
/*
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true
  }
})
*/

/* 수정 */
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen)







// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// 2. 발명가들의 성과 이름으로 이루어진 배열 만들기 
const fullNames= inventors.map(inventor => `${inventor.first}  ${inventor.last}`)
console.log(fullNames)






// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 3. 발명가들을 생년월일 순으로 오름차순으로 정렬 
/* 기존 */
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1
//   } else {
//     return -1
//   }
// })

/* 삼항으로 수정 */
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered)






// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// 4. 모든 발명가들의 총 생애기간은?
/* 기존 방식 */
/*
let totalYears = 0

for (let i = 0; i < inventors.length; i += 1 ) {
  totalYears += inventors[i].year
}

console.log(totalYears)
*/

/* reduce 로 수정 */
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)

console.log(totalYears)







// 5. Sort the inventors by years lived
// 5. 발명가들을 생애 기간에 따라 정렬 (내림차순)
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year
  const nextGuy = b.passed - b.year
  
  return lastGuy > nextGuy ? -1 : 1
})

console.table(oldest)






// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 6. Paris의 'de'가 이름에 포함된 Boulevards 거리들의 목록을 작성 => 위 사이트에서 개발자도구에서 코드 작성 후 de 로 결과 확인 
// const category = document.querySelector('.mw-category')
// const links = [...category.querySelectorAll('a')]
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'))






// 7. sort Exercise
// Sort the people alphabetically by last name
// 7. 사람들(people 배열)의 성을 알파벳 순으로 정렬 
const alpha = people.sort((lastOne, nextOne) => {
  const [alast, afirst] = lastOne.split(', ')
  const [blast, bfirst] = nextOne.split(', ')
  return alast > blast ? 1 : -1
})
console.log(alpha)







// 8. Reduce Exercise
// Sum up the instances of each of these
// 8. 각각의 인스턴스들의 총 갯수를 계산 
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
  //초기화를 일일히 지정하지 않고 동적으로 아이템 따라 함, 다른 종류 아이템 추가시 동적으로 추가됨 
  if(!obj[item]) {
    obj[item] = 0
  }
  obj[item] += 1
  return obj
}, {})

console.log(transportation)