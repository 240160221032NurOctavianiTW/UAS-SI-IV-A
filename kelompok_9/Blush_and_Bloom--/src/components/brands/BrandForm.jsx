import { useState, useEffect } from "react"

function BrandForm({

  brands,
  setBrands,

  editingBrand,
  setEditingBrand,

}) {

  const [name, setName]
    = useState("")

  // AUTO FILL EDIT
  useEffect(() => {

    if (editingBrand) {

      setName(
        editingBrand.name
      )

    }

  }, [editingBrand])

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault()

    if (!name) {

      alert("Input brand")

      return
    }

    // EDIT
    if (editingBrand) {

      const updatedBrands =

        brands.map((brand) => {

          if (
            brand.id ===
            editingBrand.id
          ) {

            return {

              ...brand,

              name,

            }
          }

          return brand
        })

      setBrands(updatedBrands)

      setEditingBrand(null)
    }

    // ADD
    else {

      const newBrand = {

        id: Date.now(),

        name,

      }

      setBrands([

        ...brands,

        newBrand,

      ])
    }

    setName("")
  }

  return (

    <form
      className="brand-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Input Brand"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button type="submit">

        {editingBrand
          ? "Save"
          : "Add Brand"}

      </button>

    </form>
  )
}

export default BrandForm