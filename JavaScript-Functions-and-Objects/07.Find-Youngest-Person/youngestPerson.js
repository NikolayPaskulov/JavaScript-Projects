function findYoungestPerson(persons) {
    var min = Number.MAX_VALUE;
    var name = ""
    for(var i = 0, l = persons.length; i < l; i++) {

        if(persons[i].age < min) {
            name = persons[i].firstname + " " + persons[i].lastname;
            min = persons[i].age;
        }
    }

    return "The youngest person is " + name;
}

console.log(findYoungestPerson([
        { firstname : 'George', lastname: 'Kolev', age: 32},
        { firstname : 'Bay', lastname: 'Ivan', age: 81},
        { firstname : 'Baba', lastname: 'Ginka', age: 40}]));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});