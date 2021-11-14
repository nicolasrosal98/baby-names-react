import BabyName from "./Baby";
// import { Baby } from "./Baby";
import babyData from "../babyNamesData.json";
import { sortBabyArray } from "../utils/sortBabies";
import { useState } from "react";

export default function MainBody(): JSX.Element {
  // const [babyNames, setBabyNames] = useState<Baby[]>(sortBabyArray(babyData))
  const [searchValue, setSearchValue] = useState<string>("")

  const selectedBabyNames = sortBabyArray(
    babyData.filter((baby) => 
      baby.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const listBabies = selectedBabyNames.map((baby, index) => (
    <BabyName id={baby.id} name={baby.name} sex={baby.sex} key={index} />
  ));
  
  return (
    <div className="body-div">
      <input
        className="search-bar"
        value={searchValue}
        placeholder="Search for a name..."
        onChange={(event) => {
          setSearchValue(event.target.value)
        }
        }
      />
      <h2 className="subtitle">My Favourite Names:</h2>
      {listBabies}
    </div>
  );
}
