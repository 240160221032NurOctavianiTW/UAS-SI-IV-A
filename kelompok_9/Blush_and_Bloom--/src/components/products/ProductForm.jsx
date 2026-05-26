import { useState, useEffect } from "react"

function ProductForm({

  products,
  setProducts,

  editingProduct,
  setEditingProduct,

  categories,
  brands,

}) {

  const [name, setName] =
    useState("")

  const [category, setCategory] =
    useState("")

  const [brand, setBrand] =
    useState("")

  const [price, setPrice] =
    useState("")

  const [image, setImage] =
    useState("")

  // AUTO FILL EDIT
  useEffect(() => {

    if (editingProduct) {

      setName(
        editingProduct.name
      )

      setCategory(
        editingProduct.category
      )

      setBrand(
        editingProduct.brand
      )

      setPrice(
        editingProduct.price
      )

      setImage(
        editingProduct.image
      )

    }

  }, [editingProduct])

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault()

    if (

      !name ||
      !category ||
      !brand ||
      !price ||
      !image

    ) {

      alert("Please fill all fields")

      return
    }

    // EDIT
    if (editingProduct) {

      const updatedProducts =

        products.map((product) => {

          if (
            product.id ===
            editingProduct.id
          ) {

            return {

              ...product,

              name,
              category,
              brand,
              price,
              image,

            }
          }

          return product
        })

      setProducts(updatedProducts)

      setEditingProduct(null)

    }

    // ADD
    else {

      const newProduct = {

        id: Date.now(),

        name,
        category,
        brand,
        price,
        image,

      }

      setProducts([

        ...products,

        newProduct,

      ])
    }

    // RESET
    setName("")
    setCategory("")
    setBrand("")
    setPrice("")
    setImage("")
  }

  return (

    <form
      className="product-form"
      onSubmit={handleSubmit}
    >

      {/* PRODUCT NAME */}

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      {/* CATEGORY */}

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >

        <option value="">
          Select Category
        </option>

        {categories.map((item) => (

          <option
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>

        ))}

      </select>

      {/* BRAND */}

      <select
        value={brand}
        onChange={(e) =>
          setBrand(e.target.value)
        }
      >

        <option value="">
          Select Brand
        </option>

        {brands.map((item) => (

          <option
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>

        ))}

      </select>

      {/* PRICE */}

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      {/* IMAGE URL */}

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) =>
          setImage(e.target.value)
        }
      />

      <button type="submit">

        {editingProduct
          ? "Save Changes"
          : "Add Product"}

      </button>

    </form>
  )
}

export default ProductForm