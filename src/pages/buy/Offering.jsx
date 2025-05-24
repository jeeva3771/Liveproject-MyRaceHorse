import React, { useEffect, useState } from "react";
import Header from "../../layout/TopNavBar";
import Horse from "../../document/horse.png";
import HorseChart from "../../document/chart.png";
import Colt from "../../document/clot horse.png";
import Trainer from "../../document/trainer.png";
import Midwest from "../../document/midwest.png";
import trustPdf from "../../document/TrustButVerify_pdf.pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../../document/trustbutverify1.jpg";
import Img2 from "../../document/trustbutverify2.jpg";
import Img3 from "../../document/trustbutverify3.jpg";

import Img4 from "../../document/trustbutverify4.jpg";
import Img5 from "../../document/trustbutverify5.jpg";
import Img6 from "../../document/trustbutverify6.jpg";
import Footer from "../../layout/Footer";
import { X } from 'lucide-react';


const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-body">
        
          
          <div className="modal-message mt-5">
            We have received SEC qualification for this offering and it will be available soon.
          </div>
          
          <div className="modal-actions">
            <button className="auth-button sign-in" onClick={onClose}>
              SIGN IN
            </button>
            <button className="auth-button sign-up" onClick={onClose}>
              SIGN UP
            </button>
            <button className="cancel-button" onClick={onClose}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Offering = () => {
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [activeDetailsTab, setActiveDetailsTab] = useState("workouts");

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  const handleComingSoonClick = () => {
    setIsComingSoonModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsComingSoonModalOpen(false);
  };
  

  // Add your media images array (replace with your actual images)
  const mediaImages = [
    Img1, // Your existing imported images
    Img2,
    Img3,
    Img4,
    Img5,
    // Add more images as needed
    Img6,
  ];

  // Add this useEffect for responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setImagesPerView(1);
      } else if (window.innerWidth < 768) {
        setImagesPerView(2);
      } else {
        setImagesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated carousel navigation functions
  const goToPrevious = () => {
    setCurrentMediaIndex((prevIndex) => {
      // Move one image at a time instead of by imagesPerView
      const newIndex = prevIndex - 1;
      return newIndex < 0
        ? Math.max(0, mediaImages.length - imagesPerView)
        : newIndex;
    });
  };

  const goToNext = () => {
    setCurrentMediaIndex((prevIndex) => {
      // Move one image at a time instead of by imagesPerView
      const newIndex = prevIndex + 1;
      // Stop when we can't show a full view anymore
      const maxIndex = mediaImages.length - imagesPerView;
      return newIndex > maxIndex ? 0 : newIndex;
    });
  };

  // Updated page calculation to reflect single-image scrolling
  const totalPages = Math.max(1, mediaImages.length - imagesPerView + 1);
  const currentPage = currentMediaIndex + 1;

  const goToPage = (pageIndex) => {
    // pageIndex now represents the starting image index
    setCurrentMediaIndex(pageIndex);
  };

  // The getVisibleImages function remains the same
  const getVisibleImages = () => {
    return mediaImages.slice(
      currentMediaIndex,
      currentMediaIndex + imagesPerView
    );
  };

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionKey) => {
    setActiveAccordion(activeAccordion === accordionKey ? '' : accordionKey);
  };
  const accordionData = [
    {
      key: 'asset',
      icon: '🏆',
      iconClass: 'asset-icon',
      title: 'Asset Cost',
      subtitle: 'Horse acquisition & fees',
      content: (
        <div className="content-inner">
          <p>
            Includes the initial purchase price plus 5% bloodstock fee. Series Trust But Verify owns
            100% of the underlying asset, consisting of 13,333 total shares.
          </p>
        </div>
      )
    },
    {
      key: 'brokerage',
      icon: '🏛️',
      iconClass: 'brokerage-icon',
      title: 'Brokerage & Organizational',
      subtitle: 'Legal & compliance',
      content: (
        <div className="content-inner">
          <p>
            Offered through registered broker-dealer Dalmore Group, LLC (FINRA/SIPC member).
            Includes legal, compliance, marketing, and experiential program management.
          </p>
        </div>
      )
    },
    {
      key: 'management',
      icon: '⚡',
      iconClass: 'management-icon',
      title: 'Management & Due Diligence',
      subtitle: 'Professional oversight',
      content: (
        <div className="content-inner">
          <p>
            Active management by working with trainers, vets, bloodstock agents, and other
            stakeholders to maximize series performance. No additional management fees unless
            performance bonuses are earned.
          </p>
        </div>
      )
    },
    {
      key: 'organizational',
      icon: '📋',
      iconClass: 'organizational-icon',
      title: 'Organizational and Experiential Fee',
      subtitle: 'Legal & compliance',
      content: (
        <div className="content-inner">
          <p>
            Active management by working with trainers, vets, bloodstock agents, and other
            stakeholders to maximize series performance. No additional management fees unless
            performance bonuses are earned.
          </p>
        </div>
      )
    },
    {
      key: 'operating',
      icon: '🔧',
      iconClass: 'operating-icon',
      title: 'Operating Expense Reserve',
      subtitle: 'Ongoing care & training',
      content: (
        <div className="content-inner">
          <p>
            Active management by working with trainers, vets, bloodstock agents, and other
            stakeholders to maximize series performance. No additional management fees unless
            performance bonuses are earned.
          </p>
        </div>
      )
    },
   
  ];

  const financialCards = [
    { label: 'Share Price', value: '$77', icon: '💰' },
    { label: 'Total Offering', value: '$1.03M', icon: '🎯' },
    { label: 'Horse Equity', value: '100%', icon: '🏇' },
    { label: 'Per Share', value: '0.0075%', icon: '📊' }
  ];

  const legendItems = [
    { color: 'asset', text: 'Asset (65%)' },
    { color: 'brokerage', text: 'Brokerage (15%)' },
    { color: 'management', text: 'Management (10%)' },
    { color: 'operating', text: 'Operating (7%)' },
    { color: 'organizational', text: 'Organizational (3%)' }
  ];
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
                <button className="coming-soon-button" onClick={handleComingSoonClick}>
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
                            src={Colt}
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
                            src={Trainer}
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
                            src={Midwest}
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
                          src={Horse}
                          alt="Racing Information"
                          className="img-fluid rounded side-image"
                        />
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-md-6">
                      <div className="side-image-wrapper">
                        <img
                          src={HorseChart}
                          alt="Additional Racing Information"
                          className="img-fluid rounded side-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="horse-pedigree-link">
                <a href={trustPdf} target="_blank">
                  See full pedigree here
                </a>
                <hr />
              </div>
            </div>

            <div className="details-media-container">
              {/* DETAILS Section */}
              <div className="details-section">
                <h2 className="section-title">DETAILS</h2>

                <div className="tab-buttons">
                  <button
                    className={`tab-button ${
                      activeDetailsTab === "workouts" ? "active" : ""
                    }`}
                    onClick={() => setActiveDetailsTab("workouts")}
                  >
                    WORKOUTS
                  </button>
                  <button
                    className={`tab-button ${
                      activeDetailsTab === "results" ? "active" : ""
                    }`}
                    onClick={() => setActiveDetailsTab("results")}
                  >
                    RESULTS
                  </button>
                </div>

                <div className="tab-content">
                  <div className="no-data-message">No data available</div>
                </div>
              </div>

              {/* MEDIA Section */}
              <div className="col-12">
                <div className="media-section">
                  <h2 className="section-title">MEDIA</h2>

                  <div className="media-carousel-wrapper">
                    <div className="media-carousel-content">
                      {/* Left Arrow */}
                      <button
                        className="media-nav-button left"
                        onClick={goToPrevious}
                        disabled={mediaImages.length <= imagesPerView}
                        aria-label="Previous images"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      {/* Images Container */}
                      <div
                        className="media-grid"
                        style={{ "--images-per-view": imagesPerView }}
                      >
                        {getVisibleImages().map((src, index) => (
                          <div
                            key={currentMediaIndex + index}
                            className="media-item"
                          >
                            <img
                              src={src}
                              alt={`Trust But Verify ${
                                currentMediaIndex + index + 1
                              }`}
                              loading="lazy"
                            />
                            <div className="media-overlay">
                              <span className="media-number">
                                {currentMediaIndex + index + 1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Arrow */}
                      <button
                        className="media-nav-button right"
                        onClick={goToNext}
                        disabled={mediaImages.length <= imagesPerView}
                        aria-label="Next images"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>

                    {/* Indicators */}
                    {/* Updated Indicators */}
                    {mediaImages.length > imagesPerView && (
                      <div className="media-indicators">
                        <div className="media-page-info">
                          {currentPage} / {totalPages}
                        </div>

                        <div className="media-page-dots">
                          {Array.from({ length: totalPages }, (_, index) => (
                            <button
                              key={index}
                              className={`media-page-dot ${
                                currentPage === index + 1 ? "active" : ""
                              }`}
                              onClick={() => goToPage(index)}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-12 col-xl-11">
                      {/* Animated Header */}
                      <div className="text-center mb-5 mt-5">
                        <div className="section-header-wrapper">
                          <h2 className="section-title">Financials</h2>
                        </div>
                      </div>

                      {/* Interactive Financial Stats Cards */}
                      <div className="financial-cards-grid">
                        {financialCards.map((card, index) => (
                          <div key={index} className="financial-card">
                            <div className="card-inner">
                              <div className="card-icon">
                                <div className="icon-circle">{card.icon}</div>
                              </div>
                              <div className="card-content">
                                <p className="card-label">{card.label}</p>
                                <h3 className="card-value">{card.value}</h3>
                                <div className="card-animation-bar"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Main Content Section */}
                      <div className="main-content">
                        {/* Interactive Chart Section */}
                        <div className="chart-container">
                          <div className="chart-visual">
                            <div className="pie-chart-container"></div>
                          </div>

                          {/* Chart Legend */}
                          <div className="chart-legend">
                            {legendItems.map((item, index) => (
                              <div key={index} className="legend-item">
                                <div
                                  className={`legend-color ${item.color}`}
                                ></div>
                                <span className="legend-text">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Creative Accordion Section */}
                        <div className="creative-accordion">
                          {accordionData.map((item) => (
                            <div
                              key={item.key}
                              className={`accordion-card ${
                                activeAccordion === item.key ? "active" : ""
                              }`}
                            >
                              <button
                                className="accordion-trigger"
                                onClick={() => toggleAccordion(item.key)}
                              >
                                <div className="trigger-icon">
                                  <div
                                    className={`icon-wrapper ${item.iconClass}`}
                                  >
                                    {item.icon}
                                  </div>
                                </div>
                                <div className="trigger-content">
                                  <h5 className="trigger-title">
                                    {item.title}
                                  </h5>
                                  <p className="trigger-subtitle">
                                    {item.subtitle}
                                  </p>
                                </div>
                                <div className="trigger-arrow">
                                  <span className="arrow-icon">▼</span>
                                </div>
                              </button>
                              <div
                                className={`accordion-content ${
                                  activeAccordion === item.key ? "show" : ""
                                }`}
                              >
                                {item.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom CTA Section */}
                      <div className="coming-soon-section">
                <button className="coming-soon-button" onClick={handleComingSoonClick}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p2-9 text-white">
        <div className="noticeLabel">
          <h3 className="mb-3">NOTICES</h3>

          <p className="mb-3 f-style-systemui">
            These Offering Materials May Contain Forward-Looking Statements And
            Information Relating To, Among Other Things, The Company, Its
            Business Plan And Strategy, And Its Industry. These Forwardlooking
            Statements Are Based On The Beliefs Of, Assumptions Made By, And
            Information Currently Available To The Company’s Management. When
            Used In The Offering Materials, The Words “Estimate,” “Project,”
            “Believe,” “Anticipate,” “Intend,” “Expect” And Similar Expressions
            Are Intended To Identify Forward-Looking Statements. These
            Statements Reflect Management’s Current Views With Respect To Future
            Events And Are Subject To Risks And Uncertainties That Could Cause
            The Company’s Actual Results To Differ Materially From Those
            Contained In The Forward-Looking Statements. Investors Are Cautioned
            Not To Place Undue Reliance On These Forward-Looking Statements,
            Which Speak Only As Of The Date On Which They Are Made. The Company
            Does Not Undertake Any Obligation To Revise Or Update These
            Forward-Looking Statements To Reflect Events Or Circumstances After
            Such Date Or To Reflect The Occurrence Of Unanticipated Events.
          </p>

          <p className="mb-3 f-style-systemui">
            Please Note Investors In This Offering Will Be Clients Of The Issuer
            And Not Dalmore Group, Llc (“Dalmore”), A Registered Broker-Dealer
            And Member Finra/Sipc. Dalmore’s Role In The Transaction Is To
            Facilitate Back Office And Regulatory Functions Related To The
            Regulation A Transaction, And Acts Only As The Broker/Dealer Of
            Record For The Offering Listed.
          </p>

          <p className="mb-3 f-style-systemui">
            Dalmore Is Not Providing Investment Advice Or Recommendations, Or
            Legal Or Tax Advice. This Reg A Investment Is Speculative, Illiquid,
            And Involves A High Degree Of Risk, Including The Possible Loss Of
            Your Entire Investment. All Investors Should Make Their Own
            Determination, With The Assistance Of Their Own Financial Or Other
            Advisors, As To Whether Or Not To Make Any Investment, Based On
            Their Own Independent Evaluation, Analysis And Circumstances.
          </p>

          <p className="mb-3 f-style-systemui">
            An Offering Statement Regarding This Offering Has Been Filed With
            The Sec. The Sec Has Qualified That Offering Statement, Which Only
            Means That The Company May Make Sales Of The Securities Described By
            The Offering Statement. It Does Not Mean That The Sec Has Approved,
            Passed Upon The Merits Or Passed Upon The Accuracy Or Completeness
            Of The Information In The Offering Statement.
          </p>

          <p className="f-style-systemui">
            The Offering Circular That Is Part Of That Offering Statement Is At
            Nary Offering. Click To View The S-1a Filing.
          </p>
        </div>
      </div>
      <ComingSoonModal 
        isOpen={isComingSoonModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </>
  );
};

export default Offering;
