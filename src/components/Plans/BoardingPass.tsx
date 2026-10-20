import { PlaneIcon } from "@/components/icons";
import type { Plan } from "@/data/types";
import { formatPrice, formatTwoDigits } from "@/lib/format";
import styles from "./BoardingPass.module.css";

interface BoardingPassProps {
  plan: Plan;
  onSelect: (planId: string) => void;
}

export function BoardingPass({ plan, onSelect }: BoardingPassProps) {
  const className = plan.featured ? `${styles.pass} ${styles.featured}` : styles.pass;

  return (
    <article className={className}>
      <div className={styles.top}>
        <span>Boarding pass</span>
        <span>{plan.cabin}</span>
      </div>

      <div className={styles.main}>
        <h3>{plan.name}</h3>
        <p className={styles.tagline}>{plan.tagline}</p>

        <div className={styles.route}>
          <span className={styles.code}>
            BR<span className={styles.city}>Hoje</span>
          </span>
          <span className={styles.dashes}>
            <PlaneIcon />
          </span>
          <span className={styles.code}>
            EN<span className={styles.city}>{plan.arrival}</span>
          </span>
        </div>

        <dl>
          {plan.features.map(({ term, detail }) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>

        <p className={styles.price}>
          <small>Investimento mensal</small>
          <b>
            {formatPrice(plan.monthlyPrice)} <span>/ mês</span>
          </b>
        </p>
      </div>

      <div className={styles.stub}>
        <div className={styles.meta}>
          <span>
            Aulas/mês<b>{formatTwoDigits(plan.classesPerMonth)}</b>
          </span>
          <span>
            Assento<b>{plan.seat}</b>
          </span>
          <span>
            Portão<b>{plan.gate}</b>
          </span>
        </div>
        <div className={styles.barcode} aria-hidden="true" />
        <a
          className={plan.featured ? "btn btn-primary" : "btn"}
          href="#contato"
          onClick={() => onSelect(plan.id)}
        >
          Quero o {plan.name}
        </a>
      </div>
    </article>
  );
}
