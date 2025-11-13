const arrayOfNum: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());

// console.log(arrayOfStringUsingMap);

// ************************************

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: boolean; width: number }> = {
  height: true,
  width: 44,
};
