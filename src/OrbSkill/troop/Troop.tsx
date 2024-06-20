import styles from "./Troop.module.css";
import Character from "./character/Character";

export default function Troop(props: {troop_name: string, characters: string[], skills: {[key: string]: string}}) {
  return (
    <details>
      <summary className={styles["troop-name"]}>{props.troop_name}</summary>
      {
        props.characters.map((character: string, index: number) => {
          return (
            <Character key={index} character={character} skills={props.skills} />
          );
        })
      }
    </details>
  )
}
