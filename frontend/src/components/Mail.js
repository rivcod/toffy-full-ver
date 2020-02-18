import React, { Component } from "react";

class Mail extends Component {
  render() {
    return (
      <div className="subscribe-section section bg-gray pt-55 pb-55">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mb-15 mt-15">
              <div className="display-2">
                <h2>
                  SUBSCRIBE <span>OUR NEWSLETTER</span>
                </h2>
                <h2>
                  <span>TO GET LATEST</span> PRODUCT UPDATE
                </h2>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-15 mt-15">
              <form
                id="mc-form"
                className="mc-form subscribe-form"
                noValidate={true}
              >
                <input
                  id="mc-email"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your email here"
                  name="EMAIL"
                ></input>
                <button id="mc-submit">subscribe</button>
              </form>
              <div className="mailchimp-alerts text-centre">
                <div className="mailchimp-submitting"></div>
                <div className="mailchimp-success"></div>
                <div className="mailchimp-error"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;
