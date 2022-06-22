import "./intro.scss"
const IntroSection = () => {
  return (
    <section className="introSection">
        <div className="intoSection-wrapper">
            <div className="intro-left">
              <div className="delivery-info">
                icon
                <span>Faster Delivery Guaranteed</span>
              </div>
              <header className="intro-header">
                <h1 className="main-title">You would Love</h1>
                <div className="second-title">
                  <h1 className="main-title">our</h1>
                  <h1 className="main-title coloured">hot pizza</h1>
                </div>
              </header>
              <div className="intro-text-container">
                <p className="intro-text">
                  Get 10% instant off for all order and $200 signup bonus
                </p>
                <p>today for new registration</p>
              </div>
              <div className="intro-left-bottom">
                <img src="" alt="playstore" />
                <img src="" alt="applestore" />
              </div>
            </div>
            <div className="intro-right">
              <img src="" alt="" />
            </div>
        </div>
    </section>
  )
}

export default IntroSection