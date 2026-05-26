import "./App.css"

import {
  useState,
  useEffect,
} from "react"

// COMPONENTS
import Sidebar
  from "./components/layout/Sidebar"

import LoadingScreen
  from "./components/loading/LoadingScreen"

// PAGES
import DashboardPage
  from "./components/pages/DashboardPage"

import ProductPage
  from "./components/pages/ProductPage"

import CategoryPage
  from "./components/pages/CategoryPage"

import BrandPage
  from "./components/pages/BrandPage"

function App() {

  // LOADING
  const [loading, setLoading]
    = useState(true)

  // ACTIVE PAGE
  const [activePage, setActivePage]
    = useState("dashboard")

  // SIDEBAR
  const [isSidebarOpen,
    setIsSidebarOpen]
    = useState(true)

  // PRODUCTS
  const [products, setProducts]
    = useState(() => {

      const savedProducts =
        localStorage.getItem(
          "products"
        )

      return savedProducts
        ? JSON.parse(savedProducts)
        : []

    })

  // CATEGORIES
  const [categories, setCategories]
    = useState(() => {

      const savedCategories =
        localStorage.getItem(
          "categories"
        )

      return savedCategories
        ? JSON.parse(savedCategories)
        : []

    })

  // BRANDS
  const [brands, setBrands]
    = useState(() => {

      const savedBrands =
        localStorage.getItem(
          "brands"
        )

      return savedBrands
        ? JSON.parse(savedBrands)
        : []

    })

  // NOTIFICATION
  const [notification,
    setNotification]
    = useState("")

  // FILTER CATEGORY
  const [selectedCategory,
    setSelectedCategory]
    = useState("All")

  // FILTER BRAND
  const [selectedBrand,
    setSelectedBrand]
    = useState("All")

  // SEARCH
  const [searchTerm,
    setSearchTerm]
    = useState("")

  // EDIT STATES
  const [editingProduct,
    setEditingProduct]
    = useState(null)

  const [editingCategory,
    setEditingCategory]
    = useState(null)

  const [editingBrand,
    setEditingBrand]
    = useState(null)

  // =================================
  // SHOW NOTIFICATION
  // =================================

  const showNotification = (
    message
  ) => {

    setNotification(message)

    setTimeout(() => {

      setNotification("")

    }, 3000)

  }

  // =================================
  // WRAPPER FUNCTIONS
  // =================================

  const handleSetProducts = (
    newProducts
  ) => {

    if (
      newProducts.length >
      products.length
    ) {

      showNotification(
        "✨ Product berhasil ditambahkan"
      )

    }

    setProducts(newProducts)

  }

  const handleSetCategories = (
    newCategories
  ) => {

    if (
      newCategories.length >
      categories.length
    ) {

      showNotification(
        "📁 Category berhasil ditambahkan"
      )

    }

    setCategories(newCategories)

  }

  const handleSetBrands = (
    newBrands
  ) => {

    if (
      newBrands.length >
      brands.length
    ) {

      showNotification(
        "💖 Brand berhasil ditambahkan"
      )

    }

    setBrands(newBrands)

  }

  // =================================
  // LOADING EFFECT
  // =================================

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 3000)

    return () =>
      clearTimeout(timer)

  }, [])

  // =================================
  // LOCAL STORAGE
  // =================================

  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    )

  }, [products])

  useEffect(() => {

    localStorage.setItem(
      "categories",
      JSON.stringify(categories)
    )

  }, [categories])

  useEffect(() => {

    localStorage.setItem(
      "brands",
      JSON.stringify(brands)
    )

  }, [brands])

  // =================================
  // LOADING SCREEN
  // =================================

  if (loading) {

    return <LoadingScreen />

  }

  return (

    <div className="app-layout">

      {/* BACKGROUND */}

      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>
      <div className="bg-blob blob3"></div>

      {/* NOTIFICATION */}

      {notification && (

        <div className="notification">

          {notification}

        </div>

      )}

      {/* SIDEBAR */}

      <Sidebar

        activePage={activePage}

        setActivePage={
          setActivePage
        }

        isSidebarOpen={
          isSidebarOpen
        }

        setIsSidebarOpen={
          setIsSidebarOpen
        }

      />

      {/* MAIN CONTENT */}

      <div

        className={
          isSidebarOpen
            ? "main-content"
            : "main-content full"
        }

      >

        {/* DASHBOARD */}

        {activePage ===
          "dashboard" && (

          <DashboardPage

            products={products}

            categories={categories}

            brands={brands}

            selectedCategory={
              selectedCategory
            }

            setSelectedCategory={
              setSelectedCategory
            }

            selectedBrand={
              selectedBrand
            }

            setSelectedBrand={
              setSelectedBrand
            }

            searchTerm={
              searchTerm
            }

            setSearchTerm={
              setSearchTerm
            }

          />

        )}

        {/* PRODUCTS */}

        {activePage ===
          "products" && (

          <ProductPage

            products={products}

            setProducts={
              handleSetProducts
            }

            categories={categories}

            brands={brands}

            editingProduct={
              editingProduct
            }

            setEditingProduct={
              setEditingProduct
            }

          />

        )}

        {/* CATEGORIES */}

        {activePage ===
          "categories" && (

          <CategoryPage

            categories={categories}

            setCategories={
              handleSetCategories
            }

            editingCategory={
              editingCategory
            }

            setEditingCategory={
              setEditingCategory
            }

          />

        )}

        {/* BRANDS */}

        {activePage ===
          "brands" && (

          <BrandPage

            brands={brands}

            setBrands={
              handleSetBrands
            }

            editingBrand={
              editingBrand
            }

            setEditingBrand={
              setEditingBrand
            }

          />

        )}

      </div>

    </div>
  )
}

export default App