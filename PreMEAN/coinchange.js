function coinChange(num){
    var remainder = 0;
    var val = [25,10,5];
    var change = [];
    for(i = 0; i < val.length; i++){
        if( num/val[i] >= 1 ){
                remainder = num % val[i];
                num = Math.floor( num/val[i] );
                if( val[i] == 25 ){
                    change.push("Quarters: "+num)
                    // console.log("Quarters: "+num);
                } else if( val[i] == 10 ){
                    change.push("Dimes: "+num)
                    // console.log("Dimes: "+num);
                } else if( val[i] == 5 ){
                    change.push("Nickles: "+num)
                    // console.log("Nickles: "+num);
                }
                if( remainder < 5 ){
                change.push("Pennies: "+num)
                // console.log("Pennies: "+remainder);
                } else {
                    num = remainder;
                }
        }
    }
    return change;
}
change = coinChange(184);
console.log(change);