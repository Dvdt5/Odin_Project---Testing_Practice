import { capitalize } from "./main";


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