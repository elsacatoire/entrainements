const reverseString = require('./reverseString')

// Normal cases
test('How do you say hello in verlan ?', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('test a sentence', () => {
    expect(reverseString("J'ai bien faire du kayak.")).toBe(".kayak ud eriaf neib ia'J");
});