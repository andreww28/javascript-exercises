const findTheOldest = function(persons) {
  person_year = persons.map(person => (person.yearOfDeath == undefined) ? person['yearOfDeath'] = new Date().getFullYear() : person['yearOfDeath'] = person['yearOfDeath']);
  return persons.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1: -1)[persons.length - 1];
};

module.exports = findTheOldest;
