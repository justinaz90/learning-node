const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Bartosz', 'Cezary', 'Daniel', 'Edward', 'Filip'];
const femaleNames = ['Anna', 'Bianka', 'Celina', 'Dorota', 'Ewa', 'Franciszka'];
const lastNames = ['Ambroziak', 'Bachleda', 'Cichy', 'Dancewicz', 'Engel', 'Frączek'];

function randomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for(let i=0; i<20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if(person.gender === 'F') {
    person.name = randChoice(femaleNames);
  } else {
    person.name = randChoice(maleNames);
  }

  person.lastname = randChoice(lastNames);

  person.age = randomAge(18, 78);

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});