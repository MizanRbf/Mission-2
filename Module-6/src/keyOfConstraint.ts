type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

// *************************************
type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 444,
  name: "Mizan",
  address: {
    city: "ctg",
  },
};

const myId = user.id;
const myName = user["name"];
const myAddress = user["address"];
console.log(myId, myName, myAddress);

// Make Function to get value of a object
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const result = getPropertyFromObj(user, "name");
console.log(result);

// but if object will be different what should we do?
const product = {
  brand: "hp",
};
const student = {
  id: 333,
  name: "Sakhi",
  result: "A+",
};
const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "name");
