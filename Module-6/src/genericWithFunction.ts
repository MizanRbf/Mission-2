// Generic Function
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObj = (value: { name: string }) => [value];

const createArrayWithGeneric = <T>(value: T) => [value];

console.log(createArrayWithGeneric("jjj"));
console.log(createArrayWithGeneric(55));
console.log(createArrayWithGeneric({ name: "Mizan" }));

// Tuple

const createArrayWithTuble = <X, Y>(param1: X, param2: Y) => [
  {
    param1,
    param2,
  },
];
console.log(createArrayWithTuble("A", 44));

// ***********************************

const addStudentWithCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 434,
  name: "Mizan",
  hasPen: true,
};
const student2 = {
  id: 344,
  name: "Mahmud",
  hasPen: false,
};
console.log(addStudentWithCourse(student2));
