// Code your solution here
function findMatching(names, name) {
  return names.filter(el => el.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(names, name) {
  return names.filter(el => el.toLowerCase().startsWith(name.toLowerCase()))
}

function matchName(people, name) {
  return people.filter(el => el.name.toLowerCase().startsWith(name.toLowerCase()))
}

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

console.log(matchName(drivers, 'Bobby'))