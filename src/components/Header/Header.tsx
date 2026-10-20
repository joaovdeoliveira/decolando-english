import { PlaneIcon } from "@/components/icons";
import { navLinks, site } from "@/config/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import styles from "./Header.module.css";

export function Header() {
  const progress = useScrollProgress() * 100;

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <a className={styles.logo} href="#topo">
          <b>{site.brand}</b>
          <span>{site.tagline}</span>
        </a>
        <nav className={styles.nav} aria-label="Seções">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className={styles.cta} href="#contato">
            Aula experimental
          </a>
        </nav>
      </div>

      <div className={styles.track} aria-hidden="true">
        <div className={styles.done} style={{ width: `${progress}%` }} />
        <PlaneIcon className={styles.trackPlane} style={{ left: `${Math.max(1.5, progress)}%` }} />
      </div>
    </header>
  );
}
