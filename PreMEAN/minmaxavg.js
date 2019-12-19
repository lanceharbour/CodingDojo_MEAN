function minMaxAvg(arr){
    var min = arr[0]
    var max = arr[0];
    var avg=0;
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg/arr.length;
    var string = 'The minimum is '+min+', the maximum is '+max+', and the average is '+avg+'.'
    return string
}

x=minMaxAvg([1, -2, 9, 4])
console.log(x);