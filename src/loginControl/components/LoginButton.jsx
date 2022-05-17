export function LoginButon(props) {
  console.log('LoginButon', props);
  return (
    <button onClick={props.onClick}>Login</button>
  )
}