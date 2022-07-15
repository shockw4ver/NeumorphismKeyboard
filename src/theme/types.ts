export interface InnerVars {
  '--primary-color'?: string,
  '--primary-color-soft'?: string,
  '--neumorphism-box-shadow'?: string,
  '--neumorphism-box-shadow-active'?: string,
  '--key-background'?: string,
}

export type CustomVars = {
  [propName: `--${string}`]: string
} & InnerVars
