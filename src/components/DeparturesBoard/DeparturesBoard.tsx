import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { destinations } from "@/data/destinations";
import { useClock } from "@/hooks/useClock";
import styles from "./DeparturesBoard.module.css";

export function DeparturesBoard() {
  const time = useClock();

  return (
    <section className="alt" id="destinos">
      <div className="wrap">
        <SectionHeader
          kicker="Destinos"
          title={
            <>
              Para onde o seu inglês precisa <em>te levar?</em>
            </>
          }
        >
          Cada objetivo tem uma rota própria de aulas. Escolha o seu portão.
        </SectionHeader>

        {/* tabIndex permite rolar a tabela pelo teclado em telas estreitas. */}
        <div className={styles.board} role="region" aria-label="Painel de embarque" tabIndex={0}>
          <table>
            <caption>
              Partidas · Departures <time>{time}</time>
            </caption>
            <thead>
              <tr>
                <th scope="col">Voo</th>
                <th scope="col">Destino</th>
                <th scope="col">O que você treina</th>
                <th scope="col">Portão</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((d) => (
                <tr key={d.id} className={d.boarding ? styles.boarding : undefined}>
                  <td>{d.flight}</td>
                  <td className={styles.destination}>{d.name}</td>
                  <td className={styles.description}>{d.description}</td>
                  <td className={styles.gate}>{d.gate}</td>
                  <td>
                    <span className={styles.status}>{d.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine">
          Seu destino não está no painel? Conte no WhatsApp e montamos a rota juntos.
        </p>
      </div>
    </section>
  );
}
