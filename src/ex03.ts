// 3. Create a generic arrow function called `createPair` that accepts two arguments of different types
// and returns them as a tuple/array. 
// Pass `true` and `42` as arguments and log the result.

const createPair = <T, U>(first: T, second:U): [T, U] => {
    return [first, second];
}

console.log(createPair(true, 42)); // Expected output: [true, 42]