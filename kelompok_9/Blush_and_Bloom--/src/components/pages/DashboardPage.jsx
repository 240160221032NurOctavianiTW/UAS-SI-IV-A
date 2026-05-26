import StatsCard
from "../stats/StatsCard"

import ProductList
from "../products/ProductList"

function DashboardPage({

  products,

  categories,
  brands,

  selectedCategory,
  setSelectedCategory,

  selectedBrand,
  setSelectedBrand,

  searchTerm,
  setSearchTerm,

}) {

  const filteredProducts =

    products.filter((product) => {

      const matchCategory =

        selectedCategory === "All"
        ||

        product.category ===
        selectedCategory

      const matchBrand =

        selectedBrand === "All"
        ||

        product.brand ===
        selectedBrand

      const matchSearch =

        product.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

      return (

        matchCategory &&
        matchBrand &&
        matchSearch

      )

    })

  return (

    <>

    <div className="hero">

  <div className="hero-left">

    <div className="hero-badge">
      ✨ Beauty Dashboard
    </div>

    <h1>
      Blush And Bloom
    </h1>

    <p>
      Manage your beauty collection with elegant modern dashboard.
    </p>

  </div>

  <div className="hero-chart">

    <div className="chart-top">

      <h3>📊 Collection Growth</h3>

      <span className="chart-number">
        +{products.length}
      </span>

    </div>

    <div className="mini-chart">

      <div className="mini-bar bar1"></div>
      <div className="mini-bar bar2"></div>
      <div className="mini-bar bar3"></div>
      <div className="mini-bar bar4"></div>
      <div className="mini-bar bar5"></div>

    </div>

  </div>

</div>
      {/* STATS */}

      <div className="stats-container">

        <StatsCard

          title="Products"

          total={products.length}

          icon="💄"

          progress={
            products.length * 10
          }

        />

        <StatsCard

          title="Categories"

          total={categories.length}

          icon="🧴"

          progress={
            categories.length * 15
          }

        />

        <StatsCard

          title="Brands"

          total={brands.length}

          icon="✨"

          progress={
            brands.length * 12
          }

        />

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <input

          type="text"

          placeholder=
          "Search product..."

          value={searchTerm}

          onChange={(e) =>

            setSearchTerm(
              e.target.value
            )

          }

        />

      </div>

      {/* FILTER */}

      <div className="filters">

        <select

          value={selectedCategory}

          onChange={(e) =>

            setSelectedCategory(
              e.target.value
            )

          }

        >

          <option value="All">
            All Categories
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

        <select

          value={selectedBrand}

          onChange={(e) =>

            setSelectedBrand(
              e.target.value
            )

          }

        >

          <option value="All">
            All Brands
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

      </div>

      {/* PRODUCT LIST */}

      <ProductList

        products={filteredProducts}

        deleteProduct={() => {}}

        editProduct={() => {}}

      />

    </>
  )
}

export default DashboardPage