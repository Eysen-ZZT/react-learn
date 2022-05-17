export function ProductRow(props) {
  return (
    <div>
      <span style={{ width: 100, display: 'inline-block' }}>{props.name}</span>
      <span style={{ width: 100, display: 'inline-block' }}>{props.price}</span>
    </div>
  )
}