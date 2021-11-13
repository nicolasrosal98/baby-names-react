import { Baby } from "../components/Baby";

export function sortBabyArray(objectArray: Baby[]): Baby[] {
  const objectArraySorted = objectArray.sort((x, y) => {
    if (x.name < y.name) {
      return -1;
    } else if (x.name > y.name) {
      return 1;
    }
    return 0;
  });
  return objectArraySorted;
}
