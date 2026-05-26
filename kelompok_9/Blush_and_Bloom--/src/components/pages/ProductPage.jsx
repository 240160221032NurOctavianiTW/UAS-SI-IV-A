import StatsCard
  from "../stats/StatsCard"

import ProductForm
  from "../products/ProductForm"

import ProductList
  from "../products/ProductList"

function ProductPage({

  products,
  setProducts,

  categories,
  brands,

  editingProduct,
  setEditingProduct,

}) {

  // DELETE
  const deleteProduct = (id) => {

    const filtered = products.filter(
      (item) => item.id !== id
    )

    setProducts(filtered)
  }

  // EDIT
  const editProduct = (product) => {

    setEditingProduct(product)

  }

  return (

    <>

      {/* HERO */}

      <div className="hero">

        <div className="hero-text">

          <h1>
            Beauty Products
          </h1>

          <p>
            Manage your beauty collection
          </p>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-container">

        <StatsCard
          title="Products"
          total={products.length}
        />

      </div>

      {/* FORM */}

      <ProductForm

        products={products}
        setProducts={setProducts}

        editingProduct={
          editingProduct
        }

        setEditingProduct={
          setEditingProduct
        }

        categories={categories}
        brands={brands}

      />

      {/* LIST */}

      <ProductList

        products={products}

        deleteProduct={
          deleteProduct
        }

        editProduct={
          editProduct
        }

      />

    </>

  )
}

export default ProductPage