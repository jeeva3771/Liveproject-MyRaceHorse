import React, { useState } from "react";
import Header from "../../layout/TopNavBar";

const Offering = () => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  return (
    <>
      <Header />
      <div className="offering-page">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <img
                src="https://store-m2-cdn.myracehorse.com/catalog/product/t/r/trustbutverify_desktop_header.png"
                alt="Trained Horse"
                className="img-fluid w-100 rounded"
              />
            </div>

            <div className="col-12">
              {/* Coming Soon Section */}
              <div className="coming-soon-section">
                <button className="coming-soon-button">
                  <span className="button-glow"></span>
                  <span className="button-text">COMING SOON</span>
                  <div className="button-particles">
                    <span className="particle particle-1"></span>
                    <span className="particle particle-2"></span>
                    <span className="particle particle-3"></span>
                  </div>
                </button>
                <p className="sec-description">
                  We have received SEC qualification for this offering and it
                  will be available soon.
                </p>
              </div>

              {/* Content and Video Section */}
              <div className="content-video-wrapper">
                <div className="row">
                  {/* Quote Content */}
                  <div className="col-md-6 content-column">
                    <div className="quote-content">
                      <p className="special-char">"</p>
                      <div className="quote-text">
                        <p>He's the type of</p>
                        <p className="special-content"> Into Mischief </p>
                        <p>who certainly has the potential</p>
                        <p>to play a role on next year's</p>
                        <p className="special-content">
                          {" "}
                          Kentucky Derby trail.{" "}
                        </p>
                      </div>
                      <div className="trainer-name">
                        - Nick Hines
                        <br />
                        Bloodstock Consultant
                      </div>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="col-md-6 video-column">
                    <div className="video-wrapper">
                      <video
                        className="w-100 video cursor-pointer rounded"
                        src="https://cdnb-media.myracehorse.com/blog/video/MRH2023Commercial2_1674759600059/MP4/MRH2023Commercial2_1674759600059.mp4"
                        poster="https://cdnb-media.myracehorse.com/blog/image/245_1745351620102.png"
                        controls
                        controlsList="nodownload"
                        loop
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Image Gallery Section */}
            <div className="col-12">
              <div className="gallery-section">
                <div className="container">
                  <div className="row gallery-row">
                    {/* All Three Images with Same Style */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="gallery-card champion-card">
                        <div className="image-overlay-container">
                          <img
                            src="https://store-m2-cdn.myracehorse.com/catalog/product/t/r/trust_but_verify.png"
                            alt="Trust But Verify Colt"
                            className="img-fluid rounded gallery-img"
                          />
                          <div className="image-overlay">
                            <div className="overlay-content">
                              <h5 className="overlay-title">The Champion</h5>
                              <p className="overlay-text">2-Year-Old Colt</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="gallery-card trainer-card">
                        <div className="image-overlay-container">
                          <img
                            src="https://store-m2-cdn.myracehorse.com/catalog/product/t/r/trust_but_verify_trainer.png"
                            alt="D Wayne Lukas Trainer"
                            className="img-fluid rounded gallery-img"
                          />
                          <div className="image-overlay">
                            <div className="overlay-content">
                              <h5 className="overlay-title">Hall of Fame</h5>
                              <p className="overlay-text">D. Wayne Lukas</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-4">
                      <div className="gallery-card circuit-card">
                        <div className="image-overlay-container">
                          <img
                            src="https://store-m2-cdn.myracehorse.com/catalog/product/2/9/29_1.png"
                            alt="Midwest Racing Circuit"
                            className="img-fluid rounded gallery-img"
                          />
                          <div className="image-overlay">
                            <div className="overlay-content">
                              <h5 className="overlay-title">Racing Circuit</h5>
                              <p className="overlay-text">Midwest</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Section with Expandable Content */}
                  <div className="row">
                    <div className="col-12">
                      <div className="description-card">
                        <div className="card-body p-4 p-md-5">
                          <div className="row align-items-center">
                            <div className="col-md-2 text-center mb-3 mb-md-0">
                              <div className="price-highlight">
                                <span className="price-amount">$450K</span>
                                <span className="price-label">
                                  Purchase Price
                                </span>
                              </div>
                            </div>
                            <div className="col-md-10">
                              {/* Initial Content */}
                              <p className="description-text mb-3">
                                MyRacehorse secured its first purchase of the
                                2025 OBS April Sale when going to
                                <strong className="highlight-text">
                                  {" "}
                                  $450K{" "}
                                </strong>
                                to land a powerful son of none other than
                                six-time leading sire,
                                <strong className="highlight-text">
                                  {" "}
                                  Into Mischief
                                </strong>
                                . This colt will join Hall of Famer
                                <strong className="highlight-text">
                                  {" "}
                                  D. Wayne Lukas{" "}
                                </strong>
                                on the Midwest circuit.
                              </p>

                              {/* Expandable Content */}
                              <div
                                className={`expandable-content ${
                                  showFullOverview ? "expanded" : ""
                                }`}
                              >
                                <p className="description-text mb-3">
                                  Already named{" "}
                                  <strong className="highlight-text">
                                    Trust But Verify
                                  </strong>
                                  , the Apr. 17 foal overcame a slow lead switch
                                  to blaze his way through a{" "}
                                  <strong>:10 flat breeze</strong> while
                                  displaying tons of athleticism and scope. The
                                  MyRacehorse team noted how light on his feet
                                  he was. The bay galloped out in :20 3/5 and
                                  :33 2/5 and his stride measured in the first
                                  quartile among his cohort (25.3 ft.).
                                </p>

                                <p className="description-text mb-3">
                                  Back at the barn, there was very little to
                                  pick on. He's an extremely balanced individual
                                  with all parts exactly where you'd want them
                                  to be. He takes more after his broodmare sire{" "}
                                  <strong className="highlight-text">
                                    Speightstown
                                  </strong>{" "}
                                  in that he's on the more average size, but he
                                  still has plenty of leg and stretch. He seems
                                  very forward mentally, and that coupled with
                                  his build gives the impression he could be
                                  early and quick enough to debut at{" "}
                                  <strong className="highlight-text">
                                    Saratoga this summer
                                  </strong>
                                  .
                                </p>

                                <p className="description-text mb-3">
                                  <strong className="highlight-text">
                                    Into Mischief's
                                  </strong>{" "}
                                  list of accomplishments is so long that it is
                                  hard to summarize succinctly. He is the{" "}
                                  <strong>
                                    six-time reigning champion sire
                                  </strong>
                                  ; responsible for 23 highest-level winners
                                  (and 84 total graded) including MyRacehorse's
                                  very own Horse of the Year{" "}
                                  <strong className="highlight-text">
                                    Authentic
                                  </strong>{" "}
                                  and exceptionally talented superstars such as
                                  Gamine, Life Is Good and Laurel River; and
                                  could have as many as two entrants in this
                                  year's G1 Kentucky Derby, including last
                                  year's champion juvenile Citizen Bull.
                                </p>

                                <p className="description-text mb-3">
                                  Trust But Verify's dam sire is also a
                                  breedshaper in{" "}
                                  <strong className="highlight-text">
                                    Speightstown
                                  </strong>
                                  , and the Into Mischief over Speightstown
                                  cross has already produced Grade 1 winners Mia
                                  Mischief and Mischievious Alex. Speightstown
                                  is the grand sire of MyRacehorse's 2024
                                  champion sprinter Straight No Chaser and is
                                  the broodmare sire of MG1SW and highly
                                  regarded young sire Vekoma and 2021 G1
                                  Breeders' Cup Sprint hero Aloha West.
                                </p>

                                <p className="description-text mb-3">
                                  The colt is out of a young half-sister to
                                  multi-millionaire and G1 Breeders' Cup Mile
                                  hero{" "}
                                  <strong className="highlight-text">
                                    Tourist
                                  </strong>{" "}
                                  as well as three other stakes winners. His
                                  second dam is by another top broodmare sire
                                  Unbridled's Song–a line MyRacehorse has also
                                  done extremely well with (Seize the Grey,
                                  Caldera, Here's the Kicker, etc.).
                                </p>

                                <p className="description-text mb-3">
                                  After a brief post-sale respite at Highlander
                                  Training Center in Texas, Trust But Verify
                                  will join the barn of legendary Hall of Famer{" "}
                                  <strong className="highlight-text">
                                    D. Wayne Lukas
                                  </strong>
                                  , the four-time Kentucky Derby, seven-time
                                  Preakness and four-time Belmont S.-winning
                                  conditioner who guided the career of
                                  aforementioned 2024 Preakness hero Seize the
                                  Grey and active multiple stakes-placed
                                  sophomore Caldera.
                                </p>

                                <div className="expected-track">
                                  <strong>
                                    Expected on track: Summer 2025
                                  </strong>
                                </div>
                              </div>

                              {/* Toggle Button */}
                              <button
                                className="overview-toggle-btn"
                                onClick={toggleOverview}
                              >
                                {showFullOverview ? (
                                  <>
                                    <span>Hide full overview</span>
                                    <i className="toggle-icon up">▲</i>
                                  </>
                                ) : (
                                  <>
                                    <span>Read full overview</span>
                                    <i className="toggle-icon down">▼</i>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side by Side Images Section */}
            <div className="col-12">
              <div className="side-images-section">
                <div className="container">
                  <div className="row">
                    {/* Left Image */}
                    <div className="col-md-6 mb-3 mb-md-0">
                      <div className="side-image-wrapper">
                        <img
                          src="https://store-m2-cdn.myracehorse.com/catalog/product/i/n/into_mischief_x_modern_masterpiece.png"
                          alt="Racing Information"
                          className="img-fluid rounded side-image"
                        />
                      </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="col-md-6">
                      <div className="side-image-wrapper">
                        <img
                          src="https://store-m2-cdn.myracehorse.com/catalog/product/t/r/trust_but_verify_1.png"
                          alt="Additional Racing Information"
                          className="img-fluid rounded side-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offering;