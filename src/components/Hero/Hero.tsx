import globeVideo from "@/assets/globe.mp4";
import { PlaneIcon } from "@/components/icons";
import { site } from "@/config/site";
import styles from "./Hero.module.css";

/** Mesma curva usada no SVG decorativo e no `offset-path` do avião (Hero.module.css). */
const FLIGHT_PATH = "M -40 470 C 240 520, 380 110, 700 170 S 1180 70, 1560 -40";

const plainWords = ["Seu", "inglês,"];
const accentWords = ["pronto", "para", "decolar."];
const signs = ["Learn", "Practice", "Explore", "Achieve"];

function Word({ text, index }: { text: string; index: number }) {
  return (
    <span className={styles.word} style={{ animationDelay: `${index * 0.08}s` }}>
      {text}
    </span>
  );
}

function withSpaces(words: string[], offset = 0) {
  return words.flatMap((word, i) => [
    i > 0 ? " " : null,
    <Word key={word} text={word} index={offset + i} />,
  ]);
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <svg
        className={styles.flight}
        viewBox="0 0 1500 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={FLIGHT_PATH} />
      </svg>
      <PlaneIcon className={styles.flyer} />

      <div className={`wrap ${styles.grid}`}>
        <div>
          <span className={`kicker ${styles.reveal}`}>{site.teacher} · Aulas de inglês online</span>
          <h1>
            {withSpaces(plainWords)} <em>{withSpaces(accentWords, plainWords.length)}</em>
          </h1>
          <p className={styles.reveal}>
            Aulas personalizadas para o lugar aonde você quer chegar: uma viagem, uma conversa com
            quem você ama, a entrevista de emprego ou as reuniões do trabalho.
          </p>
          <div className={`${styles.actions} ${styles.reveal}`}>
            <a className="btn btn-primary" href="#contato">
              Agendar aula experimental
            </a>
            <a className="btn" href="#planos">
              Ver planos
            </a>
          </div>
          <ul className={`${styles.signs} ${styles.reveal}`} aria-label={signs.join(", ")}>
            {signs.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
        </div>

        <figure className={styles.frame}>
          <div className={styles.ring} />
          <div className={styles.orbit} aria-hidden="true">
            <PlaneIcon />
          </div>
          <div className={styles.disc}>
            <video
              src={globeVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Planeta Terra girando, com um avião voando de São Paulo a Londres"
            />
          </div>
          <figcaption>A bigger world with English</figcaption>
        </figure>
      </div>
    </section>
  );
}
