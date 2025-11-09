type Employee = {
  name: string;
  phone: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;

const Mizan: EmployeeManager = {
  name: "Mizan",
  phone: "01444",
  designation: "HR",
  teamSize: 33,
};
