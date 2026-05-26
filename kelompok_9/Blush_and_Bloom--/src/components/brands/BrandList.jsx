function BrandList({

  brands,
  setBrands,
  setEditingBrand,

}) {

  const handleDelete = (id) => {

    const filtered =

      brands.filter(
        (item) =>
          item.id !== id
      )

    setBrands(filtered)

  }

  return (

    <div className="modern-list">

      {brands.length === 0 ? (

        <div className="empty-state">

          <h2>
            No brands yet ✨
          </h2>

        </div>

      ) : (

        brands.map((brand) => (

          <div
            className="modern-card"
            key={brand.id}
          >

            <h3>
              ✨ {brand.name}
            </h3>

            <div className="card-buttons">

              <button
                onClick={() =>
                  setEditingBrand(
                    brand
                  )
                }
              >

                Edit

              </button>

              <button
                onClick={() =>
                  handleDelete(
                    brand.id
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

export default BrandList