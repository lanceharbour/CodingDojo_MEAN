function Ninja(name) {
    var speed = 3;
    var strength = 3;

    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log('My ninja name is '+this.name+'!');
    }
    this.showStats = function() {
        console.log('Name: '+this.name+', Health: '+this.health+', Speed: '+speed+', Strength: '+strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }

    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name+' was punched by '+this.ninja+' and lost 5 Health');
        }
    }

    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= (strength * 15);
            console.log(ninja.name+' was kicked by '+this.ninja+' and lost 15 Health');
        }
    }

}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();