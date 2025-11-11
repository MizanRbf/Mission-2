// It is used when I have different different property

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}
interface BrandCharaWatch {
  name: string;
  clock: boolean;
}
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}
interface Bike {
  model: string;
  price: number;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
  name: "Rakib",
  salary: 1000,
  device: {
    brand: "Walton",
    model: "Xr4r",
    releasedYear: 2023,
  },
  smartWatch: {
    name: "samda",
    clock: true,
  },
};
const richDeveloper: Developer<AppleWatch, Bike> = {
  name: "Rakib",
  salary: 1000,
  device: {
    brand: "Walton",
    model: "Xr4r",
    releasedYear: 2023,
  },
  smartWatch: {
    heartRate: "4546",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
  bike: {
    model: "Yamaha",
    price: 400000,
  },
};
