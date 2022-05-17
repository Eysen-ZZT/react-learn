export function BoilongVerdict(props) {
  // return 后不能接 else 所以直接返回默认 虚拟dom
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}