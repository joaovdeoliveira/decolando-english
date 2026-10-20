import { site } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <b>{site.brand}</b>
        <span>
          {site.tagline} · {site.teacher}
        </span>
        <span>
          © {site.year} {site.brand}. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
