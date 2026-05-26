function StatsCard({

  title,
  total,
  icon,
  progress,

}) {

  return (

    <div className="stats-card">

      <div className="stats-glow"></div>

      <div className="stats-top">

        <div>

          <p className="stats-title">
            {title}
          </p>

          <h2>
            {total}
          </h2>

        </div>

        <div className="stats-icon">
          {icon}
        </div>

      </div>

      {/* MINI PROGRESS */}

      <div className="mini-progress">

        <div

          className="mini-progress-fill"

          style={{
            width: `${progress}%`
          }}

        ></div>

      </div>

      <span className="progress-text">

        {progress}% Growth

      </span>

    </div>
  )
}

export default StatsCard