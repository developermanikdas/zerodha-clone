import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-5">
      <div className="container">
        <div className="row gy-5">
          {/* Left */}
          <div className="col-lg-3 col-md-6">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "180px" }}
              className="mb-4"
            />

            <p className="text-muted mb-1">
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>

            <p className="text-muted">All rights reserved.</p>

            <div className="d-flex gap-4 fs-3 text-secondary mt-4">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

            <hr />

            <div className="d-flex gap-4 fs-3 text-secondary mb-4">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <img
                src="media/images/googlePlayBadge.svg"
                alt=""
                style={{ width: "140px" }}
              />

              <img
                src="media/images/appstoreBadge.svg"
                alt=""
                style={{ width: "140px" }}
              />
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6" style={{ textDecoration: "none" }}>
            <h4 className="fw-semibold mb-4">Account</h4>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="#" className="footer-link">
                  Open demat account
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Minor demat account
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  NRI demat account
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  HUF demat account
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Commodity
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Dematerialisation
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Fund transfer
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  MTF
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-semibold mb-4">Support</h4>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="#" className="footer-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Support portal
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  How to file a complaint?
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Status of complaints
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Bulletin
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Circular
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Z-Connect blog
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h4 className="fw-semibold mb-4">Company</h4>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="#" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Press & media
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Zerodha Cares (CSR)
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Zerodha.tech
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Open source
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Referral program
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4 className="fw-semibold mb-4">Quick links</h4>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <Link to="#" className="footer-link">
                  Upcoming IPOs
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Brokerage charges
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Market holidays
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Economic calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Markets
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Sectors
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Gift Nifty
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Disclaimer */}
        <div
          className="border-top mt-5 pt-4 small text-muted"
          style={{ fontSize: "13px", lineHeight: "1.9" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to{" "}
            <a href="#" className="text-decoration-none">
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="#" className="text-decoration-none">
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="#" className="text-decoration-none">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances.
          </p>

          <p>
            <a href="#" className="text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="#" className="text-decoration-none">
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system.
            2) Update your email and mobile number with your stock broker. 3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on active clients.{" "}
            <a href="#" className="text-decoration-none">
              NSE broker factsheet
            </a>
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchanges/ Depositories on your mobile/email at the end of the day.
            KYC is a one time exercise while dealing in securities markets.
          </p>

          <p>
            Customers availing insurance advisory services offered by Ditto
            (Turtlemint Consulting Pvt. Ltd.) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. Any disputes
            arising with respect to such distribution activity will not have
            access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal
            Forum or Arbitration mechanism.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="border-top pt-4 mt-4">
          <ul className="list-inline text-center mb-0">
            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                NSE
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                BSE
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                MCX
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                MSEI
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Terms & Conditions
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Policies & Procedures
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Privacy Policy
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Disclosure
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                For Investor's Attention
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Investor Charter
              </Link>
            </li>

            <li className="list-inline-item mx-3">
              <Link to="#" className="footer-link">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
