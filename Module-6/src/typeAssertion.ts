// Type script theke jokhon better type define korte parbo,, overconfirm thaka

const kgToGm = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Output is: ${Number(value) * 1000}`;
  }
};
const result1 = kgToGm(2) as number;
const result2 = kgToGm("3 kg") as string;
console.log(result1, result2);

type CustomError = {
  message: string;
};
try {
} catch (err) {
  console.log((err as CustomError).message);
}
