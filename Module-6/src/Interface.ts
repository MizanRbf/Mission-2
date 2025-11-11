// Interface : object type: array, object, function

type Employee = {
  name: string;
  phone: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

interface IUser {
  id: string;
}

type EmployeeManager = Employee & Manager;

interface IUserWithRoll extends IUser {
  name: string;
}

const Mizan: EmployeeManager = {
  name: "Mizan",
  phone: "01444",
  designation: "HR",
  teamSize: 33,
};

// Interface is not usable here
type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

// Interface in Array

type Friends = string[];
interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];

// Interface in Function
type AddNum = (num1: number, num2: number) => number;

interface IAddNum {
  (num1: number, num2: number): number;
}
const addNum: IAddNum = (num1, num2) => {
  return num1 + num2;
};
