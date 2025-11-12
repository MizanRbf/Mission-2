// Rules set kore deya,,,

type Student = {
  id: number;
  name: string;
};

const addStudentWithCourse = <T extends Student>(studentInfo: T) => {
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
const student3 = {
  id: 44,
  name: "Fahim",
  hasPen: true,
};
console.log(addStudentWithCourse(student3));
