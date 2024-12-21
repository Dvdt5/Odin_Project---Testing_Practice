



export function capitalize(word){

    if (typeof(word) != "string" || word === "" ) {
        return "Please enter a string";
    }

    let tempArr = word.split("");
    let firstLetter = tempArr.shift().toUpperCase();
    tempArr.unshift(firstLetter);
    return tempArr.join("");
}

