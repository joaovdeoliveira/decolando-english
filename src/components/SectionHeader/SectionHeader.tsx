import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}

export function SectionHeader({ kicker, title, children }: SectionHeaderProps) {
  return (
    <div className={styles.head}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
