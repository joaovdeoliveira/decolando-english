import { useEffect, useState } from "react";
import { formatClock } from "@/lib/format";

/** Hora local "HH:MM", atualizada a cada `intervalMs`. */
export function useClock(intervalMs = 30_000): string {
  const [time, setTime] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatClock(new Date())), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return time;
}
