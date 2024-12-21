import { capitalize , reverseString , calculator , caesarCipher , analyzeArray} from "./main";


test('capitalize', () => {

    // Normal words
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("World")).toBe("World");

    // Single letter
    expect(capitalize("a")).toBe("A");

    // Wrong inputs
    expect(capitalize("")).toBe("Please enter a string");
    expect(capitalize(5)).toBe("Please enter a string");
    expect(capitalize(true)).toBe("Please enter a string");
});

test('reverseString', () => {

    // Normal words
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("World")).toBe("dlroW");
    expect(reverseString("Hello World!")).toBe("!dlroW olleH")

    // Single letter
    expect(reverseString("a")).toBe("a");

    // Wrong inputs
    expect(reverseString("")).toBe("Please enter a string");
    expect(reverseString(5)).toBe("Please enter a string");
    expect(reverseString(true)).toBe("Please enter a string");
});

test('calculator', ()=> {

    // Add
    expect(calculator.add(4,6)).toBe(10);

    // Subtract
    expect(calculator.subtract(8,3)).toBe(5);
    expect(calculator.subtract(2,7)).toBe(-5);

    // Divide
    expect(calculator.divide(10,2)).toBe(5);
    expect(calculator.divide(1,2)).toBe(0.5);

    // Multiply
    expect(calculator.multiply(6,2)).toBe(12);
    expect(calculator.multiply(10,0.5)).toBe(5);
});

test('caesarCipher', ()=> {

    // Normal Text
    expect(caesarCipher("HELLO WORLD", 1)).toBe("IFMMP XPSME");

    // Normal Text With Specail char
    expect(caesarCipher("HELLO WORLD!", 1)).toBe("IFMMP XPSME!");

    // Mixed With Specail char and higher key
    expect(caesarCipher("HeLlO WorLd!", 4)).toBe("LiPpS AsvPh!");
});

test('analyzeArray', ()=>{

    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });

});