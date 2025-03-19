const array = [43, 54, 2, 3, 1, 2, 5, 3, 6, 3, 6];

// Primera forma
const result = array.filter((e) => {
  return e === 2;
});

const resulTerc = array.filter((e) => e === 2);

console.log(resulTerc);

//Find
const findElement = array.find((e) => e === 1);
console.log("Find ->", findElement);

const findIndex = array.findIndex((e) => e === 1);
console.log("FindIndex ->", findIndex);

const findSome = array.some((e) => e === 1);
console.log("Some ->", findSome);

// Split
const token = "Bearer eyljhjsd45678ytgbhd.6ttryutdghcgshvghf.hsavdhggvvv";
console.log("Split ->", token.split(".")[10]);
