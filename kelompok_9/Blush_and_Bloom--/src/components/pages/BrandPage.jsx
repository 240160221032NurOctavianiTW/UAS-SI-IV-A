import StatsCard
  from "../stats/StatsCard"

import BrandForm
  from "../brands/BrandForm"

import BrandList
  from "../brands/BrandList"

function BrandPage({

  brands,
  setBrands,

  editingBrand,
  setEditingBrand,

}) {

  return (

    <>

      <div className="hero">

        <div className="hero-text">

          <h1>
            Brands
          </h1>

          <p>
            Manage beauty brands
          </p>

        </div>

      </div>

      <div className="stats-container">

        <StatsCard
          title="Brands"
          total={brands.length}
        />

      </div>

      <BrandForm

        brands={brands}
        setBrands={setBrands}

        editingBrand={
          editingBrand
        }

        setEditingBrand={
          setEditingBrand
        }

      />

      <BrandList

        brands={brands}
        setBrands={setBrands}

        setEditingBrand={
          setEditingBrand
        }

      />

    </>

  )
}

export default BrandPage