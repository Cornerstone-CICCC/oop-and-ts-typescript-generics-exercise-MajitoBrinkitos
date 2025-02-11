// 2. Create a generic interface called `Data` with two properties: 
// `id` (number) and `value` (of any type). 
// Define an object of type `Data` where `value` is a string "Generic" and `id` is 1.
// Log the object.

//In a generic interface don't need to specify the types in the interface
interface Data<T> {
    id: number;
    value: T;
}

const data: Data <string> = { 
    id: 1, 
    value: "Generic" 
};
console.log(data); // Expected output: { id: 1, value: "Generic" }