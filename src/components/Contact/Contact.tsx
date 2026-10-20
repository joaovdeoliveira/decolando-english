import { site } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { FlightPlanner, type FlightPlannerProps } from "./FlightPlanner";
import styles from "./Contact.module.css";

export function Contact(plannerProps: FlightPlannerProps) {
  const { ref, copied, copy } = useCopyToClipboard<HTMLElement>();

  return (
    <section className="alt" id="contato">
      <div className={`wrap ${styles.contact}`}>
        <div className={styles.copy}>
          <span className="kicker">Contato</span>
          <h2>
            Pronto para a <em>decolagem?</em>
          </h2>
          <p>
            Agende uma aula experimental pelo WhatsApp. Conte seu objetivo e seu nível, e eu
            respondo com um horário e a sugestão de plano ideal para você.
          </p>
          <div className={styles.number}>
            <small>WhatsApp</small>
            <div>
              <code ref={ref}>{site.whatsappDisplay}</code>
              <button className={styles.copyButton} type="button" onClick={copy}>
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          </div>
        </div>

        <FlightPlanner {...plannerProps} />
      </div>
    </section>
  );
}
