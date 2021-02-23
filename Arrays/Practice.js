function firstDuplicate(a) {
    let dictionary = {}
    for (let i =0; i<a.length; i++){
        if (dictionary[a[i]]){
            return a[i]
        }
        dictionary[a[i]] = true
    }
    return -1
}

array = [2,1,3,5,3,2]

console.log(firstDuplicate(array))