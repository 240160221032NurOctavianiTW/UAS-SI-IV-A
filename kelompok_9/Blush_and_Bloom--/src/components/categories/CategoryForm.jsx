import { useState, useEffect } from "react"

function CategoryForm({

  categories,
  setCategories,

  editingCategory,
  setEditingCategory,

}) {

  const [name, setName]
    = useState("")

  // AUTO FILL EDIT
  useEffect(() => {

    if (editingCategory) {

      setName(
        editingCategory.name
      )

    }

  }, [editingCategory])

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault()

    // VALIDATION
    if (!name) {

      alert("Input category")

      return
    }

    // EDIT
    if (editingCategory) {

      const updatedCategories =

        categories.map((category) => {

          if (
            category.id ===
            editingCategory.id
          ) {

            return {

              ...category,

              name,

            }
          }

          return category
        })

      setCategories(
        updatedCategories
      )

      setEditingCategory(null)

    }

    // ADD
    else {

      const newCategory = {

        id: Date.now(),

        name,

      }

      setCategories([

        ...categories,

        newCategory,

      ])
    }

    // RESET
    setName("")
  }

  return (

    <form
      className="category-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Input Category"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button type="submit">

        {editingCategory
          ? "Save"
          : "Add Category"}

      </button>

    </form>
  )
}

export default CategoryForm