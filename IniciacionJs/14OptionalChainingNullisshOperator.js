



//optional chaining

const user = {
    id: 101,
    email: 'dfsf@dsf.com',
    personalInfo: {
        name: 'John',
        address: {
            line1: '123 Main St',
            line2: 'Apt 4'
        }
    }
}

console.log(user?.personalInfo?.address?.line1); //123 Main St


//Nullish coalescing operator
// Path: app.js

let user2 = {
    name: 'John',
    age: 0
};

// || operator returns the first truthy value. 0 is falsy value, 25 is truthy value
console.log(user2.age || 25); //25

// ?? operator returns the first defined value. 0 is defined value, 25 is defined value
console.log(user2.age ?? 25); //0




