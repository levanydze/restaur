import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerWrapp">
          <div className="footerSections">
            <div className="sectionAddress sec">
              <h4>ChaCha</h4>
              <p> Praça do Município n23, </p>
              <p>Lisboa, Portugal</p>
              <p>info@ChaCha.com</p>
              <p>0707174030</p>
            </div>
            <div className="section sec">
              <h4>Working Hourss</h4>
              <p>
                MON – <span> Fri: 7.00am – 6.00pm </span>{" "}
              </p>
              <p>
                SAT – <span> Fri: 7.00am – 6.00pm </span>{" "}
              </p>
              <p>
                SUN – <span> Fri: 8.00am – 6.00pm </span>{" "}
              </p>
            </div>
            <div className="section sec">
              <h4>Follow us</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Yelp</p>
              <p>made by Levanidze</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
