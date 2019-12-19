function binarySearch(val, arr){
    var low = 0;
    var high = arr.length - 1;
    while (low <= high){
        var mid = Math.floor((low + high) /2);
        if (val < arr[mid]) {
            high = mid - 1;
        }
        else if (val > arr[mid]) {
            low = mid + 1;
        }
        else {
            return 'Found '+val+' in array.';
        }
    }
    return "Value not in array.";
}

var array = [1,2,4,6,7,8,9,10,23,40];
console.log(binarySearch(5, array));