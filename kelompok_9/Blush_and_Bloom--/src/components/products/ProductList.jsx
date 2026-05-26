import ProductCard from "./ProductCard"

function ProductList({
  products,
  deleteProduct,
  editProduct,
}) {

  if (products.length === 0) {

    return (

      <div className="empty-state">

        <h2>
          No beauty products found ✨
        </h2>

        <p>
          Try adding a new product
        </p>

      </div>

    )
  }

  return (

    <div className="product-grid">

      {products.map((item) => (

        <ProductCard
          key={item.id}
          product={item}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />

      ))}

    </div>

  )
}

export default ProductList