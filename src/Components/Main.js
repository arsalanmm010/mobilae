import "../App.css";
import trapLift from "../assets/traplift-header-desktop.jpg";
import afro from "../assets/afspraak.png";
import catalog from "../assets/catalogue.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main-img-one">
        <img src={trapLift} alt="trapLift" width="100%" className="main-img" />
      </div>
      <div className="main-two-two">
        <div className="main-two-box">
          <div className="main-two-col1">
            <img src={catalog} alt="catalog" className="main-two-img" />
            <h2 className="main-two-col1-head">
              Safer living in your own home
            </h2>
            <p className="main-two-col1-para">
              If you have more difficulty climbing stairs, a stairlift can be a
              solution. You will be taken up and down safely and comfortably. In
              our free stairlift brochure you can read everything about
              stairlifts at your leisure. This brochure gives you an idea of
              ​​the possibilities and models, but also the purchase and
              financing.
            </p>
            <h3 className="main-two-col1-head2">
              Request our brochure and discover:
            </h3>
            <ol className="main-two-col1-ol">
              <li>Tips and advice</li>
              <li>Largest range of makes and models</li>
              <li>Stairlifts in every price range</li>
              <li>
                Enter your details on the right and receive the free stairlift
                brochure
              </li>
            </ol>
          </div>
          <div className="main-two-col2">
            <h2 className="main-two-col2-head">
              Compare 17 stairlifts from 6 manufacturers
            </h2>
            <button className="main-two-col2-butt">
              Request the free and non-binding brochure
            </button>
            <div className="form-div">
              <h3 className="form-div-head">
                YES, send me the free stairlift brochure
              </h3>
              <form className="form">
                <label for="saturation">Saturation:</label>
                <select id="saturation" name="saturation">
                  <option value="saturation">Saturation</option>
                  <option value="Mr">Mr.</option>
                  <option value="madam">Madam.</option>
                </select>
                <label for="firstName">First name:</label>
                <input
                  type="firstName"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Eg. lore"
                />

                <label for="lastName">Last name:</label>
                <input
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Eg. Peters"
                />
                <label for="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Eg. 0471123456"
                />

                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Eg. lore.peeters@gmail.com"
                />

                <div>
                  <input type="checkbox" id="subscribe" name="subscribe" />
                  <label for="subscribe">
                    Yes, I would like to receive this information and Mobilae
                    may contact me by e-mail and/or telephone. I agree to the
                    terms and conditions. *:
                  </label>
                </div>

                <button type="submit" className="form-button">
                  Request Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="main-three">
        <div className="main-three-box">
          <div className="main-three-content">
            <h1 className="main-three-head">
              Find the right stairlift for your situation
            </h1>
            <p className="main-three-para">
              Do you want to go up or down again easily? With a Mobilae
              stairlift you remain mobile, safe and independent at home. As an
              independent advisor at your side, we help you choose the right
              stairlift. Our extensive range contains only high-quality models
              from top manufacturers. Together with you we go through the
              various options. We look at which model from which manufacturer
              best suits your personal living situation, your wishes and needs.
              With 30 years of experience across Europe, we ensure that every
              step towards your new stairlift is simple and well thought out.
              From advice to installation and customer service. Our unique
              guarantees and annual maintenance ensure that you are satisfied
              for years to come.
            </p>
          </div>
          <div className="main-three-img">
            <img src={afro} alt="img" className="main-3-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
