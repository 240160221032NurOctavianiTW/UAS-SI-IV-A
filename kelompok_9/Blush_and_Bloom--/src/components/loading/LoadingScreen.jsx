import logo from "../../assets/blooshbloom.jpeg"

function LoadingScreen() {

  return (

    <div className="loading-screen">

      {/* GLITTER */}

      <span></span>
      <span></span>
      <span></span>
      <span></span>

      {/* LOGO */}

      <img
        src={logo}
        alt="logo"
        className="loading-character"
      />

      {/* TITLE */}

      <h2 className="loading-title">
        Blush & Bloom
      </h2>
      <h3 className="loading-title">
        aplikasi ini dibuat oleh Della, Fauzan, Nur
      </h3>

      {/* BAR */}

      <div className="loading-bar">

        <div className="loading-progress">

        </div>

      </div>

    </div>
  )
}

export default LoadingScreen