
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export function ProductTable(props) {
  const { products } = props;
  return (
    <div>
      <strong style={{ width: 100, display: 'inline-block' }}>Name</strong>
      <strong style={{ width: 100, display: 'inline-block' }}>Price</strong>
      {
        Object.keys(products)?.map(category => {
          return (
            <div key={category}>
              <ProductCategoryRow category={category} />
              {
                products[category]?.map(product => {
                  const { name, price } = product;
                  return (
                    <ProductRow key={name} name={name} price={price} />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}