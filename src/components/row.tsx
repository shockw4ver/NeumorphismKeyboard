import './row.css';

export function Row({
  children,
  name
}: React.PropsWithChildren & {
  name: string
}) {
  return (
    <div className={`row ${name}`}>
      { children }
    </div>
  )
}
