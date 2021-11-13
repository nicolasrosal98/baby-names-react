import { sortBabyArray } from "./sortBabies";
import babyData from "../babyNamesData.json";

test("sortBabyArray sorts an object array with baby names by alphabetical order (ascending)", () => {
  expect(sortBabyArray(babyData.slice(0, 2))).toStrictEqual([
    { id: 1, name: "Parsa", sex: "m" },
    { id: 0, name: "Zahra", sex: "f" },
  ]);
  expect(sortBabyArray(babyData.slice(2, 4))).toStrictEqual([
    { id: 2, name: "Avah", sex: "f" },
    { id: 3, name: "Lala", sex: "f" },
  ]);
});
