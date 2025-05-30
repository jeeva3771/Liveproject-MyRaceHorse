import { useNavigate } from "react-router-dom"
import Header from "../../layout/TopNavBar"
import Dream from "../../document/dream.png"
import TrustButVerify from "../../document/trustbutverify.png"
import JustLikelucy from "../../document/justlikelucy.png"
import Eyepopnruby from "../../document/eyepopnruby.png"
import Footer from "../../layout/Footer"
import Notice from "../../component/Notice"
import { useState, useEffect } from "react"

const Buy = () => {
  const [ready, setReady] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setReady(true);
      }, 1)
      return () => clearTimeout(timer); // Cleanup
    }, []);
  const navigate = useNavigate()
  return (
    <>
     {ready && (
        <>
      <Header />
      <div className="buy-page">
          <img
            src={Dream}
            alt="MyRaceHorse Banner"
            className="img-fluid w-100 overview-image"
          />

        {/* Main Content */}
        <div className="container mt-4 mb-5">
          {/* Featured Horse */}
          <div className="card mb-4 ">
            <div className="card-body p-3 p-md-4 bg-aliceblue" >
              <div className="row">
                {/* Horse Image */}
                <div className="col-md-3 mb-3 mb-md-0">
                  <div>
                    <img
                      src={TrustButVerify}
                      alt="Trust But Verify"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">Sold: 75%</small>
                    <small className="text-muted">Available: 25%</small>
                  </div>
                </div>

                {/* Horse Details */}
                <div className="col-md-6">
                  <h3 className="mb-1 f-style-systemui">TRUST BUT VERIFY</h3>
                  <p className="text-muted mb-3 fs-14">SIRE: INTO MISCHIEF</p>

                  <div className="row mb-3">
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Trainer:</strong>
                      <span>D Wayne Lukas</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Age / Sex:</strong>
                      <span>2yo Colt</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Circuit:</strong>
                      <span>Midwest</span>
                    </div>
                  </div>

                  <p className="mb-3">
                    MyRacehorse secured its first purchase of the 2025 OBS April
                    Sale when going to $450K to land a powerful son of none
                    other than six-time leading sire, Into Mischief. This colt
                    will join Hall of Famer...
                  </p>

                  <div>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      2-Year-Old
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Unraced
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Hall of Fame Trainer
                    </span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <div className="text-center p-3">
                    <h3 className="price-display mb-1">$77</h3>
                    <p className="text-muted mb-3">0.0075% share</p>

                    <button 
                      className="btn btn-outline-primary mb-2 w-100"
                      onClick={() => navigate('/offering/') }
                    >
                      LEARN MORE
                    </button>
                    <button className="btn btn-primary mb-3 w-100">
                      BUY SHARES
                    </button>

                    <small className="text-muted d-block">
                      Min: 1 share • Max: 10 shares
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4 ">
            <div className="card-body p-3 p-md-4 bg-aliceblue">
              <div className="row">
                {/* Horse Image */}
                <div className="col-md-3 mb-3 mb-md-0">
                  <div>
                    <img
                      src={Eyepopnruby} alt="Eyepopnruby"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">Sold: 75%</small>
                    <small className="text-muted">Available: 25%</small>
                  </div>
                </div>

                {/* Horse Details */}
                <div className="col-md-6">
                  <h3 className="mb-1 f-style-systemui">EYEPOPNRUBY '23</h3>
                  <p className="text-muted mb-3 fs-14">SIRE: YAUPON</p>

                  <div className="row mb-3">
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Trainer:</strong>
                      <span>Mark Glatt</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Age / Sex:</strong>
                      <span>2yo Colt</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Circuit:</strong>
                      <span>California</span>
                    </div>
                  </div>

                  <p className="mb-3">
                    No freshman sire has generated more buzz this season than
                    brilliant Grade 1 winner Yaupon—and MyRacehorse is proud to
                    add another standout colt to the roster. This $300,000
                    acquisition is a strong ...
                  </p>

                  <div>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      2-Year-Old
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Unraced
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Hall of Fame Trainer
                    </span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <div className="text-center p-3">
                    <h3 className="price-display mb-1">$79</h3>
                    <p className="text-muted mb-3">0.01% share</p>

                    <button 
                      className="btn btn-outline-primary mb-2 w-100"
                      onClick={() => navigate('/offering/')}
                    >
                      LEARN MORE
                    </button>
                    <button className="btn btn-primary mb-3 w-100">
                      BUY SHARES
                    </button>

                    <small className="text-muted d-block">
                      Min: 1 share • Max: 10 shares
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body p-3 p-md-4 bg-aliceblue">
              <div className="row">
                {/* Horse Image */}
                <div className="col-md-3 mb-3 mb-md-0">
                  <div>
                    <img
                      src={JustLikelucy}
                      alt="Just Likelucy"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">Sold: 75%</small>
                    <small className="text-muted">Available: 25%</small>
                  </div>
                </div>

                {/* Horse Details */}
                <div className="col-md-6">
                  <h3 className="mb-1 f-style-systemui">JUST LIKE LUCY '23</h3>
                  <p className="text-muted mb-3 fs-14">SIRE: WIN WIN WIN</p>

                  <div className="row mb-3">
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Trainer:</strong>
                      <span>Saffie Joseph Jr.</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Age / Sex:</strong>
                      <span>2yo Filly</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <strong className="d-block">Circuit:</strong>
                      <span>New York/Florida</span>
                    </div>
                  </div>

                  <p className="mb-3">
                    Blazing a co-fastest :9 4/5 breeze at OBS April, this
                    athletic daughter of Win Win Win combines elite speed with
                    the scope to stretch out—and she’s already in training with
                    top conditioner Saffie ...
                  </p>

                  <div>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      2-Year-Old
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Unraced
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      Hall of Fame Trainer
                    </span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <div className="text-center p-3">
                    <h3 className="price-display mb-1">$77</h3>
                    <p className="text-muted mb-3">0.01% share</p>

                    <button 
                      className="btn btn-outline-primary mb-2 w-100"
                      onClick={() => navigate('/offering/')}
                    >
                      LEARN MORE
                    </button>
                    <button className="btn btn-primary mb-3 w-100">
                      BUY SHARES
                    </button>

                    <small className="text-muted d-block">
                      Min: 1 share • Max: 10 shares
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Horse Grid */}
          {/* <h2 className="text-center mb-4">Available Horses</h2>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="col">
                <div className="card h-100 horse-card">
                  <div className="position-relative">
                    <img 
                      src={`https://via.placeholder.com/400x250?text=Horse+${index}`} 
                      className="card-img-top"
                      alt={`Horse ${index}`}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-dark bg-opacity-50 text-white text-center">
                      <h5 className="m-0">${50 + (index * 25)}</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thoroughbred Star {index}</h5>
                    <p className="card-text text-muted mb-3">
                      {2 + (index % 3)}yo • {index % 2 === 0 ? 'Colt' : 'Filly'} • Bob Baffert
                    </p>
                    <div className="progress mb-2">
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: `${30 + (index * 10)}%`}} 
                        aria-valuenow={30 + (index * 10)} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small className="text-muted d-block mb-3">
                      {30 + (index * 10)}% Sold
                    </small>
                  </div>
                  <div className="card-footer bg-white border-top-0 pb-3">
                    <button className="btn btn-primary w-100">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-outline-dark px-4">View All Horses</button>
          </div> */}



        </div>
      </div>
      <Notice />
    <Footer />
    </>
      )}
    </>
  )
}

export default Buy
