// function firstDuplicate(a) {
//     let dictionary = {}
//     for (let i =0; i<a.length; i++){
//         if (dictionary[a[i]]){
//             return a[i]
//         }
//         dictionary[a[i]] = true
//     }
//     return -1
// }

// array = [2,1,3,5,3,2]

// console.log(firstDuplicate(array))

function centuryFromYear(year) {
    if (year.length === 2){
        year = "00" + year.toString()
    } else if (year.length ===3 ){
        year = "0" + year.toString()
    }
    
    console.log(year)
}

centuryFromYear(10)

centuryFromYear(570)