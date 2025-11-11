type user = {
  name: {
    firstName: string;
    lastName: string;
  };
  gender: string;
  number: string;
};

const user1: user = {
  name: {
    firstName: "Mizan",
    lastName: "RBF",
  },
  gender: "male",
  number: "014444",
};
const user2: user = {
  name: {
    firstName: "Rakib",
    lastName: "Hasan",
  },
  gender: "female",
  number: "014444544",
};

// Function
type addFunc = (num1: number, num2: number) => number;

const add: addFunc = (num1, num2) => {
  return num1 + num2;
};
