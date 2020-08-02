const { sum, subtract } = require('./math')

test('sum two numbers', async () => {
    const result = await sum(3, 7)
    const expected = 10
    
    expect(result).toBe(expected)
});

test('subtract two numbers', () => {
    const result = subtract(7, 3)
    const expected = 4
    
    expect(result).toBe(expected)
});