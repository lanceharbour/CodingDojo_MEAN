let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'},
]

function printStudents(students){
    console.log("Students for loop")
    for(let student of students){
        console.log("Name: "+student.name+", Cohort: "+student.cohort);
    }
}

printStudents(students);

// ********************************************************
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
    {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
    {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function printUsers(users){
    console.log("Print Users");
    for(let group in users){
        let count = 1;
        console.log(group.toUpperCase());
        for(let user in users[group]){
            let firstName = users[group][user].first_name;
            let lastName = users[group][user].last_name;
            let nameLength = firstName.length + lastName.length;
            console.log(count+' - '+lastName+" , "+firstName+' - '+nameLength);
            count++;
        }
    }
}

printUsers(users);