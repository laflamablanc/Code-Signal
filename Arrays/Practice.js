function firstDuplicate(a) {
    let dictionary = {}
    a.forEach(num => {
        if (dictionary[num]){
            return num
        }
        dictionary[num] = true
        console.log(dictionary)
    })
    return -1
}