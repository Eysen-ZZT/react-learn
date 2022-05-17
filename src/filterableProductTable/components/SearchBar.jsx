export function SearchBar(props) {
  const { filterText, inStockOnly, onFilterTextChnage, onInStockOnlyChange } = props;
  const handleTextChange = (e) => {
    onFilterTextChnage(e.target.value)
  }
  const handleCheckChange = (e) => {
    onInStockOnlyChange(e.target.checked)
  }
  return (
    <div>
      <input type="text" value={filterText} onChange={handleTextChange} />
      <br />
      <label htmlFor="">
        <input type="checkbox" checked={inStockOnly} onChange={handleCheckChange} />
        only show products in stock
      </label>
    </div>
  )
}