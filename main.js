



export function capitalize(word){

    if (typeof(word) != "string" || word === "" ) {
        return "Please enter a string";
    }

    let tempArr = word.split("");
    let firstLetter = tempArr.shift().toUpperCase();
    tempArr.unshift(firstLetter);
    return tempArr.join("");
}

export function reverseString(word) {

    if (typeof(word) != "string" || word === "" ) {
        return "Please enter a string";
    }

    return word.split("").reverse().join("");
}

export const calculator = {
    add : (num1, num2)=> num1 + num2,
    subtract : (num1, num2)=> num1 - num2,
    divide : (num1, num2)=> num1 / num2,
    multiply : (num1, num2)=> num1 * num2
}

export function caesarCipher (word, key) {
    let tempArr = word.split("");
    let returnArr = [];

    tempArr.forEach(letter => {
        if (!/[A-Z]/i.test(letter)){
            returnArr.push(letter);
        }
        else if (letter === letter.toUpperCase()) {
            if (letter.charCodeAt(0) + key > 90){
                returnArr.push(String.fromCharCode(letter.charCodeAt(0) + key - 26))
            }
            else {
                returnArr.push(String.fromCharCode(letter.charCodeAt(0) + key))
            }
        }
        else if (letter === letter.toLowerCase()) {
            if (letter.charCodeAt(0) + key > 122){
                returnArr.push(String.fromCharCode(letter.charCodeAt(0) + key - 26))
            }
            else {
                returnArr.push(String.fromCharCode(letter.charCodeAt(0) + key))
            }
        }
    });

    return returnArr.join("");
}