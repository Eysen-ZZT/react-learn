export function LogoutButton(props) {
  console.log('LogoutButton', props);
  return (
    <button onClick={props.onClick}>Logout</button>
  )
}