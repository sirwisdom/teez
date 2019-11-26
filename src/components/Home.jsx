import React from "react";
import Img1 from "../images/image1.jpg";
import Img2 from "../images/image2.jpg";
import Img3 from "../images/image3.jpeg";
import Img4 from "../images/image4.jpg";
import Img5 from "../images/image5.jpg";
import Img6 from "../images/image6.jpg";

export const Home = () => {
  return (
    <>
      <section className="first">
        <div className="info-one-wrapper">
          <div className="info-one">
            <div className="info-one-text">
              <h2>
                We come in <strong>Peace</strong> but mean{" "}
                <strong>Business</strong>
              </h2>

              <h4>
                We are liberals and are out to compete healthily with that
                comfortable African conservatism for equal recognition and
                respect.
              </h4>
            </div>
            <div className="first-btn-div">
              <button className="first-btn">Pre-Order Now</button>
            </div>
          </div>
          <div className="launch">
            <h4>LAUNCH DATE</h4>
            <h4 className="blue">FEB &nbsp; 14 &nbsp; 2020</h4>
          </div>
        </div>

        <div className="info-one-img">
          <img src={Img1} alt="fine nigerian girl" className="image" />
        </div>
      </section>

      <section className="second">
        <div className="second-circle"></div>
        <div className="second-image-div">
          <img src={Img3} alt="Young man" className="second-image" />
        </div>
        <div className="second-info">
          <h4>
            <strong> A brand for young people</strong> Who wish to acceletrate
            that transition into that much needed liberal orientation for
            societal progress
          </h4>
        </div>
      </section>
      <section className="third">
        <div className="third-info">
          <h4>
            Its all about wearing defiance in style and heightening the
            visibility of diverse community of people especially young people
            that don't fit the typical conservative mold that the African
            society has long held as the only acceptable human model
          </h4>
        </div>
        <div className="third-image-div">
          <img src={Img4} alt="girl" className="third-image" />
        </div>
      </section>
      <section className="fourth">
        <div className="fourth-image-div">
          <img src={Img5} alt="girl" className="fourth-image" />
        </div>
        <div className="fourth-info">
          <h4>
            We Recognise that it is very important that people feel comfortable
            being themselves if they must be their best
          </h4>
        </div>
      </section>
      <section className="fifth">
        <h4 className="fifth-info">
          We provide young liberals with their chance at expressing themselves
          without drawing the wrath of much older misinformed conservatives.
        </h4>

        <div className="fifth-image-div">
          <img src={Img2} alt="girl" className="fifth-image" />
        </div>
        <h4 className="fifth-info-heading">NOT LIKE WE CARE ANYWAY</h4>
      </section>
      <section className="sixth">
        <div className="fifth-image-div">
          <img src={Img6} alt="girl" className="fifth-image" />
        </div>
      </section>
    </>
  );
};

export default Home;
