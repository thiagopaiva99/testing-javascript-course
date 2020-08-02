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

global.test = test
global.expect = expect