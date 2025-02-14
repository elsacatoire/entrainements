import { capitalizeWords } from "./capitalizeWords";

test('a word', () =>{
    expect(capitalizeWords("hello")).toBe("Hello")
})

test('a sentence', () =>{
    expect(capitalizeWords("hello world")).toBe("Hello World")
})

test('Extra spaces', () =>{
    expect(capitalizeWords("   hello    world   ")).toBe("Hello World")
});

test('Invalid entry', () => {
    expect(() => capitalizeWords(4567 as unknown as string)).toThrow("Invalid text")
})

test('Empty text', () => {
    expect(() => capitalizeWords('')).toThrow("Invalid text")
})