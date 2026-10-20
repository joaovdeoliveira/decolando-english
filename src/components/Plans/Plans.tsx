import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { plans } from "@/data/plans";
import { BoardingPass } from "./BoardingPass";
import styles from "./Plans.module.css";

interface PlansProps {
  onSelectPlan: (planId: string) => void;
}

export function Plans({ onSelectPlan }: PlansProps) {
  return (
    <section id="planos">
      <div className="wrap">
        <SectionHeader
          kicker="Planos"
          title={
            <>
              Escolha sua classe e <em>embarque</em>.
            </>
          }
        >
          Todos os planos incluem teste de nível, material digital e aulas personalizadas.
        </SectionHeader>

        <div className={styles.plans}>
          {plans.map((plan) => (
            <BoardingPass key={plan.id} plan={plan} onSelect={onSelectPlan} />
          ))}
        </div>
        <p className="fine">
          Valores de exemplo. Aulas em dupla e pagamento trimestral com condições especiais, sob
          consulta.
        </p>
      </div>
    </section>
  );
}
