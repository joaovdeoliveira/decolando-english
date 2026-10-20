import logo from "@/assets/decolando-logo.jpg";
import { site } from "@/config/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="alt" id="sobre">
      <div className={`wrap ${styles.about}`}>
        <div className={styles.portrait}>
          {/* TODO: trocar pelo retrato da Débora. */}
          <img src={logo} alt="" width={360} height={360} loading="lazy" />
          <div className={styles.caption}>
            <span>{site.teacherName}</span>
            <span>Teacher</span>
          </div>
        </div>

        <div>
          <span className="kicker">Sobre</span>
          <h2>
            Inglês se aprende <em>usando</em>, não decorando.
          </h2>
          {/* TODO: trocar pela história real da Débora (formação, experiência, vivências). */}
          <p>
            Sou a Débora, professora de inglês e criadora do Decolando. Criei o projeto para quem já
            tentou aprender do jeito tradicional e travou na hora de falar.
          </p>
          <p>
            Cada aluno chega com um destino diferente. Por isso não sigo um livro do começo ao fim:
            monto as aulas em volta do seu nível, da sua rotina e do que você precisa dizer em
            inglês.
          </p>
          <blockquote className={styles.pull}>
            “Meu trabalho é tirar a vergonha de falar e mostrar seu progresso a cada etapa.”
          </blockquote>
          <p>As aulas são online, ao vivo, individuais ou em dupla, do nível zero ao avançado.</p>
        </div>
      </div>
    </section>
  );
}
