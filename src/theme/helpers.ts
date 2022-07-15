import { CustomVars, InnerVars } from './types';

export function getVar<T extends {
  [propName: `--${string}`]: string
} = {}>(name: keyof (T & InnerVars)): string {
  return `var(${name as string})`;
}