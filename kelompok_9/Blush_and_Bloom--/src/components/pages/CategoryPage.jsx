import StatsCard
  from "../stats/StatsCard"

import CategoryForm
  from "../categories/CategoryForm"

import CategoryList
  from "../categories/CategoryList"

function CategoryPage({

  categories,
  setCategories,

  editingCategory,
  setEditingCategory,

}) {

  return (

    <>

      <div className="hero">

        <div className="hero-text">

          <h1>
            Categories
          </h1>

          <p>
            Manage beauty categories
          </p>

        </div>

      </div>

      <div className="stats-container">

        <StatsCard
          title="Categories"
          total={categories.length}
        />

      </div>

      <CategoryForm

        categories={categories}
        setCategories={setCategories}

        editingCategory={
          editingCategory
        }

        setEditingCategory={
          setEditingCategory
        }

      />

      <CategoryList

        categories={categories}
        setCategories={setCategories}

        setEditingCategory={
          setEditingCategory
        }

      />

    </>

  )
}

export default CategoryPage