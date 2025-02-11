// 6. Create a generic arrow function called `getValueFromObject` that accepts an object and a key, 
// and returns the value associated with that key from the object.
// Use the object { js: "JavaScript", ts: "TypeScript" } and retrieve the value of the key "ts".S
// Log the result.

const getValueFromObject = <T extends object, U extends keyof T>(obj: T, key: U)  => {
    return obj[key]
}

const languages = { js: "JavaScript", ts: "TypeScript" };
console.log(getValueFromObject(languages, "ts")); // Expected output: "TypeScript"