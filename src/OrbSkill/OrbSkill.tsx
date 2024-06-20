import styles from "./OrbSkill.module.css";
import OrbSkills from "./OrbSkills.json";
import Characters from "../Characters.json";
import Troop from "./troop/Troop";

export default function OrbSkill() {
  const characters: { [key: string]: string[] } = Characters;
  const orbSkills: { [key: string]: string } = OrbSkills;

  return (
    <main>
      <h1 className={styles.title}>
        オーブスキル
        <wbr />
        取得状況
      </h1>
      <div className={styles["skill-table"]}>
        {Object.keys(characters).map((troop: string, troopIndex: number) => {
          return (
            <Troop
              key={troopIndex}
              troop_name={troop}
              characters={characters[troop]}
              skills={orbSkills}
            />
          );
        })}
      </div>
    </main>
  );
}
