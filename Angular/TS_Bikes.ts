class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo= () => {
        console.log("Price: " + this.price + " Max Speed: " + this.max_speed + " Total miles: " + this.miles)
        return this;
    }
    ride = () => {
        console.log("Riding")
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing")
        if (this.miles <= 0) {
            return this;
        }
        else {
            this.miles -= 5
            return this;
        }
    }
}

const bike1 = new Bike(125, "20mph")
const bike2 = new Bike(120, "25mph")
const bike3 = new Bike(130, "30mph")
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();