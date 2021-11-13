import BabyName from "./Baby";
import babyData from "../babyNamesData.json";
import { sortBabyArray } from "../utils/sortBabies";

export default function MainBody(): JSX.Element {
  const babyDataSorted = sortBabyArray(babyData);

  const listBabies = babyDataSorted.map((baby, index) => (
    <BabyName id={baby.id} name={baby.name} sex={baby.sex} key={index} />
  ));

  return <>{listBabies}</>;
}
