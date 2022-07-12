import './key.css';

export interface IKeyProps {
  name: string,
  text: string
}

export function Key({
  name,
  text
}: IKeyProps) {
  return (
    <button id={name} className={`key ${name}`}>
      { text }
    </button>
  )
}
