export interface Baby {
  id: number;
  name: string;
  sex: string;
}

export default function BabyName(props: Baby): JSX.Element {
  return (
    <>
      {props.sex === "m" ? (
        <button className="m">{props.name}</button>
      ) : (
        <button className="f">{props.name}</button>
      )}
    </>
  );
}
