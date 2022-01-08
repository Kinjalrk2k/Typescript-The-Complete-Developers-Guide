const carMarkers: string[] = ["ford", "toyata", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// incompatable values
// carMarkers.push(20);

// map
carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "3-01-2022"];
