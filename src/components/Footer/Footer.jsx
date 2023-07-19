import React from "react";
import "./Footer.css";
import FooterLink from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="gridone">
          <h6 className="footer__title">QUICK LINKS</h6>
          <div className="footer__top">
            <div>
              <ul className="footer__list">
                <FooterLink className="b1" href="" text="MSME" />
                <FooterLink className="b1" href="" text="RTI" />
                <FooterLink
                  className="b1"
                  href=""
                  text="CSR & Sustainability"
                />
                <FooterLink className="b1" href="" text="Tenders" />
                <FooterLink className="b1" href="" text="Media Centre" />
                <FooterLink className="b1" href="" text="Vigilance" />
                <FooterLink className="b1" href="" text="Bill Status" />
                <FooterLink
                  className="b1"
                  href=""
                  text="Supplier Bill Status"
                />
                <FooterLink className="b1" href="" text="Advocate Login" />
                <FooterLink className="b1" href="" text="AKAM" />
                <FooterLink
                  className="b1"
                  href=""
                  text="Azadi Ka Amrit Mahotsav"
                />
              </ul>
            </div>
            <div>
              <ul className="footer__list">
                <FooterLink
                  className="b1"
                  href=""
                  text="Buddhist Special Tourist Train"
                />
                <FooterLink className="b1" href="" text="Maharajas' Express" />
                <FooterLink className="b1" href="" text="Air Ticketing" />
                <FooterLink className="b1" href="" text="Tourism" />
                <FooterLink className="b1" href="" text="Train Ticket" />
                <FooterLink className="b1" href="" text="E Catering" />
                <FooterLink className="b1" href="" text="TReDS" />
                <FooterLink
                  className="b1"
                  href=""
                  text="Office Order/Circular"
                />
                <FooterLink
                  className="b1"
                  href=""
                  text="International Yoga day"
                />
                <FooterLink className="b1" href="" text="Cooked Food Menu" />
              </ul>
            </div>
            <div>
              <ul className="footer__list">
                <FooterLink className="b1" href="" text="MOU" />
                <FooterLink className="b1" href="" text="Site Map" />
                <FooterLink className="b1" href="" text="Privacy Policy" />
                <FooterLink className="b1" href="" text="Contact us" />
                <FooterLink className="b1" href="" text="Photo gallery" />
                <FooterLink className="b1" href="" text="Empanelment" />
                <FooterLink className="b1" href="" text="Empanelment IT" />
                <FooterLink className="b1" href="" text="Hunar Se Rojgar Tak" />
                <FooterLink
                  className="b1"
                  href=""
                  text="Golden Chariot Train"
                />
                <FooterLink className="b1" href="" text="Bus Ticket Booking" />
                <FooterLink
                  className="b1"
                  href=""
                  text="Rajbhasa Sambandhit Samagri"
                />
                <FooterLink
                  className="b1"
                  href=""
                  text="Corporate Coordination"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="gridone">
          <h6 className="footer__title">FOLLOW US</h6>
          <div className="imgeffects">
            <div className="contactimg">
              <img
                src="./image/fblogo.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="contactimg">
              <img
                src="./image/twitterlogo.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="contactimg">
              <img
                src="./image/linkedinlogo.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
          <h6 className="footer__title">CHOOSE LANGUAGE</h6>
          <div class="custom-select">
            <select>
              <option value="0">Select Language</option>
              <option value="1">Assamese</option>
              <option value="2">Aymara</option>
              <option value="3">Bambara</option>
              <option value="4">Dhivehi</option>
              <option value="5">Ewe</option>
              <option value="6">Guarani</option>
              <option value="7">Hindi</option>
              <option value="8">Illocano</option>
              <option value="9">Kinyarwanda</option>
              <option value="10">Knokani</option>
              <option value="11">Krio</option>
              <option value="12">Kurdish(sorani)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
