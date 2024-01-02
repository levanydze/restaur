import React from "react";
import styled from "styled-components";
import image1 from "../../images/ThreePhoto/side1.jpg";
import image2 from "../../images/ThreePhoto/side2.jpg";
import image3 from "../../images/ThreePhoto/side3.jpg";

const ThreePhoto = () => {
  return (
    <THREEPHOTO>
      <EACHPHOTO>
        <img src={image1} alt="123" />
        <div></div>
        <TEXTBOX>
          <h3>Lunch Menu</h3>
          <h4> Mon-Fri</h4>
          <h5>12:00 - 14:00</h5>
        </TEXTBOX>
      </EACHPHOTO>
      <EACHPHOTO>
        <img src={image2} alt="345" />
        <div></div>

        <TEXTBOX>
          <h3>Lunch Menu</h3>
          <h4> Saturday</h4>
          <h5>12:00 - 14:00</h5>
        </TEXTBOX>
      </EACHPHOTO>
      <EACHPHOTO>
        <img src={image3} alt="2123" />
        <div></div>

        <TEXTBOX>
          <h3>Lunch Menu</h3>
          <h4> Sunday</h4>
          <h5>12:00 - 14:00</h5>
        </TEXTBOX>
      </EACHPHOTO>
    </THREEPHOTO>
  );
};

export default ThreePhoto;

const THREEPHOTO = styled.div`
  background-color: var(--dark);
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 3rem 1rem;
`;

const EACHPHOTO = styled.div`
  img {
    width: 80%;
    opacity: 0.7;
  }
  position: relative;
  height: 100%;
`;

const TEXTBOX = styled.div`
  color: var(--light);
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 10px;
  height: 30%;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;

  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 15px;
  }
`;
