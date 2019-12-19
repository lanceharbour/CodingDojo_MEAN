const users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(users){
    for (i = 0; i < users.length; i++){
        var str = users[i].fname + ' '+users[i].lname+' knows ';
        for (x = 0; x < users[i].languages.length; x++){
            if (x === users[i].languages.length-1){
                str = str + 'and '+users[i].languages[x]+'.';
            }
            else {
            str = str + users[i].languages[x]+', ';
            }
    }
    console.log(str);
    }
}

userLanguages(users);