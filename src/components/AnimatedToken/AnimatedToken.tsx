import './AnimatedToken.css'

export const AnimatedToken = () => {
  return (
    <div className="animation-container">
      <div className="y-axis-container">
        <div className="container">
          <div className="flash" />
          <div className="coin side">
            <div className="shine" style={{ transform: 'rotate(-30deg)' }} />
          </div>
          <div className="side-coin" />
          <div className="coin">
            <div className="dai">
              <div className="inner-dai">
                <div className="inner-inner-dai" />
              </div>
              <div className="cutout" />
              <div className="dai-shadow" />
            </div>
            <div className="shine" />
          </div>
        </div>
      </div>
      <div className="shadow" />
    </div>
  )
}
