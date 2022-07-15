import {
  InnerVars,
  CustomVars,
} from "./types";

export const cssVars: InnerVars = {
  '--primary-color': 'rgba(146, 172, 209, 1)',
  '--primary-color-soft': 'rgba(146, 172, 209, 0.8)',
  '--neumorphism-box-shadow': `
    3px 3px 4px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 4px 0 rgba(255, 255, 255, 0.3),
    1px 1px 2px 0 rgba(255, 255, 255, 0.25) inset,
    -1px -1px 2px 0 rgba(0, 0, 0, 0.3) inset
  `,
  '--neumorphism-box-shadow-active': `
    -1px -1px 2px 0 rgba(0, 0, 0, 0.25),
    1px 1px 2px 0 rgba(255, 255, 255, 0.3),
    -2px -2px 4px 0 rgba(255, 255, 255, 0.25) inset,
    2px 2px 2px 0 rgba(0, 0, 0, 0.3) inset
  `,
  '--key-background': `rgba(146, 172, 209, 0.1)`
};

function _withCustom(customVars: CustomVars = {}) {
  return Object.assign(cssVars, customVars);
}

function _createStyleText(vars: CustomVars) {
  console.log(vars);

  return [
    ':root {',
    ...Object.entries(vars)
      .map(v => v
        .join(': ')
        .replace(/\n|\r/g, '') + ';'
      ),
    '}'
  ].join('');
}

export function registerCSSVars(selector: string, customVars?: Record<string, string>) {
  const neumorphismRoot = document.querySelector(selector);
  neumorphismRoot?.classList.add('__neumorphism_root');

  const neumorphismStyle = document.createElement('style');
  neumorphismStyle.innerText = _createStyleText(_withCustom(customVars));
  

  document.head.appendChild(neumorphismStyle);
}
