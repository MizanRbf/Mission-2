// Dynamically Generalize kora

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Alim", "Mahfuz", "Rifat"];
// const friends: Array<string> = ["Alim", "Mahfuz", "Rifat"];
const friends: GenericArray<string> = ["Alim", "Mahfuz", "Rifat"];

// const rollNumbers: number[] = [1, 4, 3, 5];
// const rollNumbers: Array<number> = [1, 4, 3, 5];
const rollNumbers: GenericArray<number> = [1, 4, 3, 5];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// *******************************
// Generic in Array
type coordinates<x, y> = [x, y];
const coordinates1: coordinates<number, number> = [14, 34];
const coordinates2: coordinates<string, string> = ["A", "B"];

// ************************************
// Generic in Array of Object
type User = { name: string; age: number };
const userList: GenericArray<User> = [
  {
    name: "Mahmud",
    age: 55,
  },
  {
    name: "Muhammad",
    age: 32,
  },
];
