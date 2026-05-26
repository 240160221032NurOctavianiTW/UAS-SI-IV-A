function ProductCard({

  product,
  deleteProduct,
  editProduct,

}) {

  return (

    <div className="product-card">

      <img
        src={
          product.image ||
          "https://via.placeholder.com/300"
        }
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>
        {product.category}
        {" • "}
        {product.brand}
      </p>

      <h4>
        Rp {product.price}
      </h4>

      <div className="card-buttons">

        <button>
          ♡ Favorite
        </button>

        <button
          className="edit-btn"
          onClick={() =>
            editProduct(product)
          }
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteProduct(product.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default ProductCard