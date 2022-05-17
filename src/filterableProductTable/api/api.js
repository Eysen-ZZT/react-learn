export function getProducts(query) {
  const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];
  return new Promise((resolve) => {
    const { filterText = '', inStockOnly = false } = query;
    // console.log(filterText, inStockOnly);
    setTimeout(() => {
      const resp = products.filter(product => product.name.includes(filterText)).filter(product => {
        if (inStockOnly) {
          return product.stocked
        }
        return product
      })
      resolve({
        code: 0,
        data: {
          products: resp
        }
      })
    }, 300)
  })
}