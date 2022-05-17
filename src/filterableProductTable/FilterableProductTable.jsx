import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ProductTable } from "./components/ProductTable";
import { getProducts } from "./api/api";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const onFilterTextChnage = (filterText) => {
    // console.log(filterText);
    setFilterText(filterText);
  }
  const onInStockOnlyChange = (inStockOnly) => {
    // console.log(inStockOnly);
    setInStockOnly(inStockOnly);
  }
  const [products, setProducts] = useState({});
  async function fetchProducts() {
    const query = { filterText, inStockOnly }
    const { data: { products } } = await getProducts(query);
    const obj = {};
    products.forEach(product => {
      const { category } = product;
      if (obj[category]) {
        obj[category].push(product);
      } else {
        obj[category] = [];
        obj[category].push(product);
      }
      return obj;
    })
    console.log(obj);
    setProducts(obj);
  }
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText, inStockOnly]);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChnage={onFilterTextChnage}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <ProductTable
        products={products}
      />
    </div>
  )
}