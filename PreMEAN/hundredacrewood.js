var eeyore = { character: "Eeyore" };
eeyore.south = kanga;
eeyore.east = heffalumps;

var heffolumps = { character: "Heffolumps"};
heffalumps.west = eeyore;

var kanga = { character: "Kanga" };
kanga.north = eeyore;
kanga.south = crobbin;

var crobbin = { character: "Christopher Robbing" };
crobbin.north = kanga;
crobbin.south = pooh;
crobbin.east = rabbit;
crobbin.west = owl;

var owl = { character: "Owl"};
owl.south = piglet;
owl.east = crobbin;

var rabbit = { character: "Rabbit" };
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = crobbin;

var gopher = { character: "Gopher"};
gopher.west = rabbit;

var piglet = { character: "Piglet"};
piglet.north = owl;
piglet.east = pooh;

var pooh = { character: "Winnie the Pooh"};
pooh.north = crobbin;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

var bees = { character: "Bees" };
bees.north = rabbit;
bees.west = pooh;

var tigger = {character: "Tigger"};
tigger.north = pooh;

var player = { location: tigger};

function move(direction){
    if (direction == "north"){
        player.location = player.location.north;
        return "You are now at "+player.location.character+"'s house.";
    }
    if (direction == "south"){
        player.location = player.location.north;
        return "You are now at "+player.location.character+"'s house.";
    }
    if (direction == "east"){
        player.location = player.location.north;
        return "You are now at "+player.location.character+"'s house.";
    }
    if (direction == "west"){
        player.location = player.location.north;
        return "You are now at "+player.location.character+"'s house.";
    } else {
        return "You can't go this way."
    }
}