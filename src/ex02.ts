// 2. Create a generic interface called `Data` with two properties: 
// `id` (number) and `value` (of any type). 
// Define an object of type `Data` where `value` is a string "Generic" and `id` is 1.
// Log the object.

interface Data<number, any> {
    id: number;
    value: any;
}

const data: Data <number, any> = { 
    id: 1, 
    value: "Generic" 
};
console.log(data); // Expected output: { id: 1, value: "Generic" }