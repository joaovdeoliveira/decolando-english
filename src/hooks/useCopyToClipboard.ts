import { useCallback, useEffect, useRef, useState } from "react";

function selectContents(node: Node) {
  const range = document.createRange();
  range.selectNodeContents(node);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

/**
 * Copia o texto de um elemento. Se a Clipboard API não estiver disponível,
 * seleciona o conteúdo para a pessoa copiar manualmente.
 */
export function useCopyToClipboard<T extends HTMLElement>(resetMs = 1800) {
  const ref = useRef<T>(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    const node = ref.current;
    if (!node) return;
    try {
      await navigator.clipboard.writeText(node.textContent ?? "");
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), resetMs);
    } catch {
      selectContents(node);
    }
  }, [resetMs]);

  return { ref, copied, copy };
}
