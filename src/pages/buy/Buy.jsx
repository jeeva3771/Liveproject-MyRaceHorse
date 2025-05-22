import { useNavigate } from "react-router-dom"
import Header from "../../layout/TopNavBar"


const Buy = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="buy-page">
          <img
            src="https://cdnm.myracehorse.com/wp-content/uploads/2022/09/Group-1.png"
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
                      src="https://store-m2-cdn.myracehorse.com/catalog/product/t/r/trustbutverify_listing_desktop_1.png"
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

          <div className="card mb-4 ">
            <div className="card-body p-3 p-md-4 bg-aliceblue">
              <div className="row">
                {/* Horse Image */}
                <div className="col-md-3 mb-3 mb-md-0">
                  <div>
                    <img
                      src="https://store-m2-cdn.myracehorse.com/catalog/product/e/y/eyepopnruby_listing_desktop_1.png" alt="Trust But Verify"
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
                      src="https://store-m2-cdn.myracehorse.com/catalog/product/j/u/justlikelucy_listing_desktop_1.png"
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
      <div className="bg-black mt-5 p2-9 text-white">
        <div className="noticeLabel">
        <h3 className="mb-3">NOTICES</h3>

        <p className="mb-3">
          These Offering Materials May Contain Forward-Looking Statements And Information Relating To, 
          Among Other Things, The Company, Its Business Plan And Strategy, And Its Industry. 
          These Forwardlooking Statements Are Based On The Beliefs Of, Assumptions Made By, 
          And Information Currently Available To The Company’s Management. When Used In The Offering Materials, 
          The Words “Estimate,” “Project,” “Believe,” “Anticipate,” “Intend,” “Expect” And Similar Expressions 
          Are Intended To Identify Forward-Looking Statements. These Statements Reflect Management’s Current Views 
          With Respect To Future Events And Are Subject To Risks And Uncertainties That Could Cause The Company’s 
          Actual Results To Differ Materially From Those Contained In The Forward-Looking Statements. Investors Are 
          Cautioned Not To Place Undue Reliance On These Forward-Looking Statements, Which Speak Only As Of The Date 
          On Which They Are Made. The Company Does Not Undertake Any Obligation To Revise Or Update These Forward-Looking 
          Statements To Reflect Events Or Circumstances After Such Date Or To Reflect The Occurrence Of Unanticipated 
          Events.
        </p>

        <p className="mb-3">
          Please Note Investors In This Offering Will Be Clients Of The Issuer And Not Dalmore Group, Llc (“Dalmore”), 
          A Registered Broker-Dealer And Member Finra/Sipc. Dalmore’s Role In The Transaction Is To Facilitate Back Office 
          And Regulatory Functions Related To The Regulation A Transaction, And Acts Only As The Broker/Dealer Of Record 
          For The Offering Listed.
        </p>

        <p className="mb-3">
          Dalmore Is Not Providing Investment Advice Or Recommendations, Or Legal Or Tax Advice. This Reg A Investment Is
          Speculative, Illiquid, And Involves A High Degree Of Risk, Including The Possible Loss Of Your Entire Investment.
          All Investors Should Make Their Own Determination, With The Assistance Of Their Own Financial Or Other Advisors, 
          As To Whether Or Not To Make Any Investment, Based On Their Own Independent Evaluation, Analysis And Circumstances.
        </p>

        <p className="mb-3">
          An Offering Statement Regarding This Offering Has Been Filed With The Sec. The Sec Has Qualified That Offering 
          Statement, Which Only Means That The Company May Make Sales Of The Securities Described By The Offering 
          Statement. It Does Not Mean That The Sec Has Approved, Passed Upon The Merits Or Passed Upon The Accuracy Or 
          Completeness Of The Information In The Offering Statement.
        </p>

        <p>
          The Offering Circular That Is Part Of That Offering Statement Is At Nary Offering. 
          Click To View The S-1a Filing.
        </p>
      </div>
    </div>
    </>
  )
}

export default Buy
