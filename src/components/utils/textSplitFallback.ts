type SplitTarget = string | Element | ArrayLike<Element | string>;

interface SplitOptions {
  type?: string;
}

export interface TextSplitResult {
  chars: HTMLElement[];
  words: HTMLElement[];
  revert: () => void;
}

function resolveElements(target: SplitTarget): HTMLElement[] {
  if (typeof target === "string") {
    return Array.from(document.querySelectorAll<HTMLElement>(target));
  }

  if (target instanceof Element) {
    return target instanceof HTMLElement ? [target] : [];
  }

  return Array.from(target).flatMap((entry) => {
    if (typeof entry === "string") {
      return Array.from(document.querySelectorAll<HTMLElement>(entry));
    }

    return entry instanceof HTMLElement ? [entry] : [];
  });
}

function createInlineSpan(text: string): HTMLSpanElement {
  const span = document.createElement("span");
  span.textContent = text === " " ? "\u00A0" : text;
  span.style.display = "inline-block";
  span.style.whiteSpace = "pre";
  return span;
}

export function splitText(
  target: SplitTarget,
  options: SplitOptions = {}
): TextSplitResult {
  const elements = resolveElements(target);
  const originals = elements.map((element) => ({
    element,
    html: element.innerHTML,
  }));
  const chars: HTMLElement[] = [];
  const words: HTMLElement[] = [];
  const shouldSplitChars = options.type?.includes("chars") ?? false;
  const shouldSplitWords = options.type?.includes("words") ?? false;

  elements.forEach((element) => {
    const text = element.textContent ?? "";
    const fragment = document.createDocumentFragment();

    if (shouldSplitChars) {
      Array.from(text).forEach((character) => {
        const span = createInlineSpan(character);
        chars.push(span);
        fragment.appendChild(span);
      });
      element.innerHTML = "";
      element.appendChild(fragment);
      return;
    }

    if (shouldSplitWords) {
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) {
          return;
        }

        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }

        const span = createInlineSpan(part);
        words.push(span);
        fragment.appendChild(span);
      });
      element.innerHTML = "";
      element.appendChild(fragment);
    }
  });

  return {
    chars,
    words,
    revert: () => {
      originals.forEach(({ element, html }) => {
        element.innerHTML = html;
      });
    },
  };
}