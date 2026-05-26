function Sidebar({

  activePage,
  setActivePage,

  isSidebarOpen,
  setIsSidebarOpen,

}) {

  return (

    <div

      className={

        isSidebarOpen
          ? "sidebar"
          : "sidebar closed"

      }

    >

      {/* TOP */}

      <div className="sidebar-top">

        {/* LOGO */}

        {isSidebarOpen && (

          <h2 className="sidebar-logo">

            Blush & Bloom

          </h2>

        )}

        {/* TOGGLE BUTTON */}

        <button

          className="toggle-btn"

          onClick={() =>

            setIsSidebarOpen(
              !isSidebarOpen
            )

          }

        >

          ☰

        </button>

      </div>

      {/* MENU */}

      <ul className="sidebar-menu">

        {/* DASHBOARD */}

        <li

          className={

            activePage === "dashboard"
              ? "active"
              : ""

          }

          onClick={() =>

            setActivePage(
              "dashboard"
            )

          }

        >

          <span className="icon">

            📊

          </span>

          {isSidebarOpen && (

            <span>

              Dashboard

            </span>

          )}

        </li>

        {/* PRODUCTS */}

        <li

          className={

            activePage === "products"
              ? "active"
              : ""

          }

          onClick={() =>

            setActivePage(
              "products"
            )

          }

        >

          <span className="icon">

            💄

          </span>

          {isSidebarOpen && (

            <span>

              Products

            </span>

          )}

        </li>

        {/* CATEGORIES */}

        <li

          className={

            activePage === "categories"
              ? "active"
              : ""

          }

          onClick={() =>

            setActivePage(
              "categories"
            )

          }

        >

          <span className="icon">

            🧴

          </span>

          {isSidebarOpen && (

            <span>

              Categories

            </span>

          )}

        </li>

        {/* BRANDS */}

        <li

          className={

            activePage === "brands"
              ? "active"
              : ""

          }

          onClick={() =>

            setActivePage(
              "brands"
            )

          }

        >

          <span className="icon">

            ✨

          </span>

          {isSidebarOpen && (

            <span>

              Brands

            </span>

          )}

        </li>

      </ul>

    </div>
  )
}

export default Sidebar