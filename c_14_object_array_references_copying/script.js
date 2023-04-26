// start with strings, numbers and booleans
let age = 100
let age2 = age

console.log(age, age2) // 100 100

age = 200
console.log(age, age2) // 200 100

let name ='vic'
let name2 = name
console.log(name, name2) // vic vic

name = 'poter'
console.log(name, name2) //poter vic


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log(players, team) // ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
team[3] = 'vic'
console.log(players, team) // ['Wes', 'Sarah', 'Ryan', 'vic'] ['Wes', 'Sarah', 'Ryan', 'vic'] 

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
console.log(players, team2) // ['Wes', 'Sarah', 'Ryan', 'vic'] ['Wes', 'Sarah', 'Ryan', 'vic'] 

team2[3] = 'poter'
console.log(players, team2) // ['Wes', 'Sarah', 'Ryan', 'vic'] ['Wes', 'Sarah', 'Ryan', 'poter']

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players)
team3[3] = 'hi'
console.log(team3) // ['Wes', 'Sarah', 'Ryan', 'hi']

// or use the new ES6 Spread
const team4 = [...players]
team4[3] = 'hello'
console.log(team4) // ['Wes', 'Sarah', 'Ryan', 'hello']

const team5 = Array.from(players)
team5[3] = 'good'
console.log(team5) // ['Wes', 'Sarah', 'Ryan', 'good']

//원본은 변하지 않음 
console.log(players) // ['Wes', 'Sarah', 'Ryan', 'vic']

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
console.log(person) //{name: 'Wes Bos', age: 80}

// and think we make a copy:
const captin = person
captin.number = 99
console.log(captin) //{name: 'Wes Bos', age: 80, number: 99}

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 33})
console.log(cap2) // {name: 'Wes Bos', age: 80, number: 33}

console.log(person) //{name: 'Wes Bos', age: 80, number: 99}


// We will hopefully soon see the object ...spread
const cap3 = {...person}
console.log("cap3:", cap3) //{name: 'Wes Bos', age: 80, number: 99}


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const vic = {
  name: 'vic',
  age: 1,
  social: {
    twitter: '@vic',
    facebook: 'vic.vic'
  }
}

console.log(vic) // {name: 'vic', age: 1, social: {twitter: '@vic',facebook: 'vic.vic'}}

const dev = Object.assign({}, vic)

console.log(dev) // {name: 'vic', age: 1, social: {twitter: '@vic',facebook: 'vic.vic'}}

dev.name = 'peter'
console.log(vic) // {name: 'vic', age: 1, social: {twitter: '@vic',facebook: 'vic.vic'}}
console.log(dev)// {name: 'peter', age: 1, social: {twitter: '@vic',facebook: 'vic.vic'}}

//assign은 1뎁스만 됨 
dev.social.twitter = '@peterz'
console.log(dev.social) // {twitter: '@peterz', facebook: 'vic.vic'}
console.log(vic.social) // {twitter: '@peterz', facebook: 'vic.vic'}

const dev2 = JSON.parse(JSON.stringify(vic))
console.log(dev2) //{name: 'peter', age: 1, social: {twitter: '@peterz',facebook: 'vic.vic'}}

dev2.social.twitter = '@dev2'
console.log(dev2.social) // {twitter: '@dev2', facebook: 'vic.vic'}
console.log(vic.social) // {twitter: '@peterz', facebook: 'vic.vic'}
