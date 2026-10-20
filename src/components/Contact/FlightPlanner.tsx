import { useId, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/config/site";
import { destinations } from "@/data/destinations";
import { defaultLevel, levels, type Level } from "@/data/levels";
import { plans } from "@/data/plans";
import { buildTrialMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./FlightPlanner.module.css";

const UNDECIDED = "";

export interface FlightPlannerProps {
  /** Id do plano escolhido, ou `null` para "Ainda não sei". */
  planId: string | null;
  onPlanChange: (planId: string | null) => void;
}

/** Formulário que monta a mensagem de aula experimental e abre o WhatsApp. */
export function FlightPlanner({ planId, onPlanChange }: FlightPlannerProps) {
  const id = useId();
  const [name, setName] = useState("");
  const [destinationId, setDestinationId] = useState(destinations[0]?.id ?? "");
  const [level, setLevel] = useState<Level>(defaultLevel);

  const destination = destinations.find((d) => d.id === destinationId);
  const plan = plans.find((p) => p.id === planId);
  const message = buildTrialMessage(site.teacher, {
    name,
    goal: destination?.goal ?? "",
    level,
    plan: plan?.name ?? null,
  });

  return (
    <form className={styles.planner} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.header}>
        <span>Plano de voo</span>
        <span>DY · {site.year}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.field}>
          <label htmlFor={`${id}-name`}>Seu nome</label>
          <input
            id={`${id}-name`}
            type="text"
            placeholder="Ana"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <fieldset className={styles.field}>
          <legend>Destino</legend>
          <div className={styles.chips}>
            {destinations.map((d) => (
              <label key={d.id}>
                <input
                  type="radio"
                  name={`${id}-destination`}
                  value={d.id}
                  checked={d.id === destinationId}
                  onChange={() => setDestinationId(d.id)}
                />
                <span>{d.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.columns}>
          <div className={styles.field}>
            <label htmlFor={`${id}-level`}>Nível hoje</label>
            <select
              id={`${id}-level`}
              value={level}
              onChange={(e) => setLevel(e.target.value as Level)}
            >
              {levels.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor={`${id}-plan`}>Plano</label>
            <select
              id={`${id}-plan`}
              value={planId ?? UNDECIDED}
              onChange={(e) => onPlanChange(e.target.value || null)}
            >
              <option value={UNDECIDED}>Ainda não sei</option>
              {plans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.label}>Sua mensagem</span>
          <p className={styles.preview} aria-live="polite">
            “{message}”
          </p>
        </div>

        <a
          className="btn btn-wa"
          href={buildWhatsAppUrl(site.whatsappNumber, message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Enviar no WhatsApp
        </a>
      </div>
    </form>
  );
}
