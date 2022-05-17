import { ListItem } from "./components/ListItem";
export function LoopList() {
  const numbers = [1, 2, 3, 4, 5];
  const LoopList = numbers.map(item => {
    return <ListItem key={item.toString()} value={item} />
  })
  return (
    <ul>
      {LoopList}
    </ul>
  );
}