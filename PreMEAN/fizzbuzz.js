function fizzBuzz(n){
    if (n > 0){
        for(var i = 1; i <= n; i++){
            if(i % 3 === 0 && i % 5 !== 0){
                console.log('Fizz');
            }
            else if(i % 5 === 0 && i % 3 !== 0){
                console.log('Buzz');
            }
            else if(i % 5 === 0 && i % 3 === 0 ){
                console.log('FizzBuzz');
            }
            else {
                console.log(i);
            }
        }
    }
    else {
        console.log('Paramter must be a positive number');
    }
}
fizzBuzz(15);