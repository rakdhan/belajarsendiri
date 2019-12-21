// kalo huruf terakhrinya aiueo return true lain false

function cekLastIndex(str) {
    if (str[str.length-1] === 'a' || str[str.length-1] === 'i' || str[str.length-1] === 'u' ||
    str[str.length-1] === 'e' || str[str.length-1] === 'o') {
        return true
    }
    // else if (str[str.length-1] === 'i'){
    //     return true
    // }
    // else if (str[str.length-1] === 'u'){
    //     return true
    // }
    // else if (str[str.length-1] === 'e'){
    //     return true
    // }
    // else if (str[str.length-1] === 'o'){
    //     return true
    // }
    else{
        return false
    }
}
console.log(cekLastIndex('Raka'));
console.log(cekLastIndex('Adel'));
console.log(cekLastIndex('Audrick'));
