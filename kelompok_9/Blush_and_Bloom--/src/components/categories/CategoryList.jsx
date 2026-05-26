function CategoryList({

  categories,
  setCategories,
  setEditingCategory,

}) {

  const handleDelete = (id) => {

    const filtered =

      categories.filter(
        (item) =>
          item.id !== id
      )

    setCategories(filtered)

  }

  return (

    <div className="modern-list">

      {categories.length === 0 ? (

        <div className="empty-state">

          <h2>
            No categories yet ✨
          </h2>

        </div>

      ) : (

        categories.map((category) => (

          <div
            className="modern-card"
            key={category.id}
          >

            <h3>
              🧴 {category.name}
            </h3>

            <div className="card-buttons">

              <button
                onClick={() =>
                  setEditingCategory(
                    category
                  )
                }
              >

                Edit

              </button>

              <button
                onClick={() =>
                  handleDelete(
                    category.id
                  )
                }
              >

                Delete

              </button>

            </div>

          </div>

        ))
      )}

    </div>

  )
}

export default CategoryList