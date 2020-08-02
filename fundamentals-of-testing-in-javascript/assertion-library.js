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

async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch(error) {
        console.log(`✕ ${title}`)
        console.log(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${expected} is not equal to ${actual}`)
            }
        },

        toEqual(expected) {
            /** @TODO implement toEqual assertion */
        },

        toBeGreaterThan(expected) {
            /** @TODO implement toBeGreaterThan assertion */
        }
    }
}