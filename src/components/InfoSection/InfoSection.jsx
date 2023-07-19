import React from "react";
import "./InfoSection.css";

const Info = () => {
  return (
    <header>
      <div className="wrapper">
        <div class="grid">
          <div id="item-0">
            <div className="headings">
              <h3>CMD'S Desk</h3>
              <hr />
            </div>
            <div className="content">
              <p>
                On the occasion of 21st Foundation Day of IRCTC, I extend my
                warm greetings and best wishes for future to all of you. Having
                made a beginning on 27thSept 1999, with a paid up capital of Rs
                20 crs, in a short span of 20-21 years, the Company has grown up
                to a stage where its Market Capitalisation is more than Rs 20000
                Crs. This is a result of the persistent efforts of all the
                members of Team IRCTC and able leadership of our predecessors.
                IRCTC, over a period of time has risen to the challenges arising
                at different points of time in the form of transfer of Catering
                to Railways , withdrawal of Service charge and so on and has
                come out in flying colours every time. It is because of
                outstanding efforts, hard work and dedication and contribution
                of each member of our team.
              </p>
            </div>
          </div>
          <div id="item-1">
            <div className="headings">
              <h3>Latest News</h3>
              <hr />
            </div>
            <div className="links">
              <div class="container2 blur">
                <ul class="slider">
                  <li>
                    <p>Public Notice-Recruitment Fraud</p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <p>
                      Request to Shareholders for Updation of their Email
                      Address,etc.
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <p>State wise GST Number of IRCTC</p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <p>
                      Sconcierge(Cab/Coach) & Porter Sevice at Major Railway
                      Stations(24-10-2018)
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <p>Public Notice-Recruitment Fraud.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contactlinks">
              <div class="grid2">
                <div className="contactlogo">
                  <div className="contactlogo-wrapper">
                    <a href="/">
                      <img
                        src="./image/fb.png"
                        alt=""
                        style={{ width: "90px", height: "70px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="contactlogo">
                  <div className="contactlogo-wrapper">
                    <a href="/">
                      <img
                        src="./image/twitter.png"
                        alt=""
                        style={{ width: "90px", height: "70px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="contactlogo">
                  <div className="contactlogo-wrapper">
                    <a href="/">
                      <img
                        src="./image/youtube.png"
                        alt=""
                        style={{ width: "90px", height: "70px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="contactlogo">
                  <div className="contactlogo-wrapper">
                    <a href="/">
                      <img
                        src="./image/linkdin.png"
                        alt=""
                        style={{ width: "90px", height: "70px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="item-2">
            <div className="headings">
              <h3>Log In</h3>
            </div>
            <div className="grid3">
              <div className="emplog">
                <button className="emplogbtn">
                  <i
                    class="fa-solid fa-right-to-bracket fa-lg"
                    style={{ color: "#000075" }}
                  ></i>
                  <span className="empfont">Employee Log In</span>
                </button>
              </div>
              <div className="otherlogs">
                <div className="stats">
                  <img className="hits" src="./image/hits3.png" alt="" />
                  <div>25016615</div>
                  <div>SITE HITS SINCE 26 JULY, 2019</div>
                </div>
                <div className="G20img">
                  <img src="./image/G20final.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Info;
