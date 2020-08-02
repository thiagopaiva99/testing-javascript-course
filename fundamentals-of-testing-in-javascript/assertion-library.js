const { sum, subtract } = require('./math')

let result = sum(3, 7)
let expected = 10

expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4

expect(result).toBe(expected)

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