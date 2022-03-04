const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// array
const pepsi = ["brown", true, 40];

// turning array to tuple
const pepsiTuple: [string, boolean, number] = ["brown", true, 40];

// using type alias
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 10];
