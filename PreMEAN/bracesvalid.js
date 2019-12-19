function validBraces(braces){
    let leftBrace = []
    for (let i = 0; i < leftBrace.length; i++){
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{'){
            leftBrace.push(braces[i])
        } else {
            if ( leftBrace.length === 0) return false
            let lastLeft = leftBrace[leftBrace.length-1]
            if ( (braces[i] === ')' && lastLeft === '(') || (braces[i] === '}' && lastLeft === '{') || (braces[i] === '}' && lastLeft === '[')){
                lastLeft.pop()
            } else {
                break;
            }
        }
    }
}

console.log(validBraces( "()" ))
console.log(validBraces( "[]" ))
console.log(validBraces( "{}" ))