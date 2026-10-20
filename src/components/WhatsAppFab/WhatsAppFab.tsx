import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/config/site";
import { buildGreetingMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./WhatsAppFab.module.css";

const href = buildWhatsAppUrl(site.whatsappNumber, buildGreetingMessage(site.teacher, site.brand));

export function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
