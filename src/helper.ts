const keyCaches: Record<string, HTMLElement | null> = {};
let modeToggler: HTMLElement | null = null;
let raisedToggler: HTMLElement | null = null;

function _getKey(code: string) {
  if (!keyCaches[code]) {
    keyCaches[code] = document.querySelector(`#${code}`);
  }

  return keyCaches[code];
}

function _handleKeydown(e: KeyboardEvent) {
  _getKey(e.code)?.classList.add("active");
}

function _handleKeyup(e: KeyboardEvent) {
  _getKey(e.code)?.classList.remove("active");
}

export function start() {
  document.addEventListener("keypress", _handleKeydown);
  document.addEventListener("keyup", _handleKeyup);

  modeToggler = document.getElementById("modeToggler");
  modeToggler?.addEventListener("click", () => {
    modeToggler?.classList.toggle("checked");
    document.body.classList.toggle("sharp");
  });

  raisedToggler = document.getElementById("raisedToggler");
  raisedToggler?.addEventListener("click", () => {
    raisedToggler?.classList.toggle("checked");
    document.body.classList.toggle("raised");
  });
}

export const keys: Record<string, string[]> = {
  qwer: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  asdf: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],
  zxcv: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.']
}

export function getKeyName(code: string) {
  switch (code) {
    case ';': return 'Semicolon';
    case ',': return 'Comma';
    case '.': return 'Period';
    default: return `Key${code}`;
  }
}
