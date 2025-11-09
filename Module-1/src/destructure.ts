// Object Destructuring
const user = {
  id: 123,
  name: {
    firstName: "Mizan",
    middleName: "Bin",
    lastName: "Fayser",
  },
};
const {
  id,
  name: { firstName: myFirstName },
} = user;
console.log(id, myFirstName);

// Array Destructuring

const friends = ["Mizan", "Rifat", "Mahfuz"];
const [A, B, C] = friends;

console.log(A, B);
