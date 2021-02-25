function checkPalindrome(inputString) {
    let midIdx = Math.floor(inputString.length/2)
    if (inputString.length % 2 !== 0){
        let left = inputString.slice(0,midIdx)
        let right = inputString.slice(midIdx+1).split('').reverse().join("")
        return left === right
    } else {
        let left = inputString.slice(0,midIdx)
        let right = inputString.slice(midIdx).split('').reverse().join("")

        return left === right
    }
}

string = "hlbeeykoqqqqokyeeblh"

console.log(checkPalindrome(string))