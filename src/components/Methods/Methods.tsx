import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { methods } from "@/data/methods";
import styles from "./Methods.module.css";

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi"];

export function Methods() {
  return (
    <section id="aulas">
      <div className="wrap">
        <SectionHeader
          kicker="As aulas"
          title={
            <>
              Aulas que fazem você <em>participar</em>.
            </>
          }
        >
          Uma combinação de ferramentas que tira o inglês do papel e deixa o seu progresso visível.
        </SectionHeader>

        <div className={styles.methods}>
          {methods.map((method, i) => (
            <article key={method.title} className={styles.method}>
              <span className={styles.number}>{romanNumerals[i]}.</span>
              <div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <span className={styles.example}>{method.example}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
