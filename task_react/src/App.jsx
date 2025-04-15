import React from "react";
import "./App.css";
export default function App() {
  return (
    <>
      {/* <!-- Start Why Section --> */}
      <div className="container">
        <div className="row">
          <div className="inline-container">
            <h4 className="capsule-heading">Why</h4>
          </div>
        </div>

        <div className="row mb-5">
          <img
            src="./pic/img-1.png"
            alt="Task"
            style={{ width: "100px" }}
          />
          <div className="col-md-6 ">
            <h2 className="section-title">
              Choose us <span>...Let's work together</span>
            </h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <p>
              <strong>
                vintage <em>adj.</em>
              </strong>
              <br /> — of old, recognized and enduring interest, importance or
              quality: classNameic
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>
                hippo <em>n.</em>
              </strong>
              <br />— meaning versatile, strong, friendly, assertive, caring,
              quirky and supportive
            </p>
          </div>
        </div>
      </div>

      <div className="why-section">
        <div className="container">
          <div className="row justify-content-center gx-4">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <img src="./pic/img-2.png" alt="Task" className="img-fluid" />
                <div className="post-content-entry">
                  <hr />
                  <h3>
                    Why <span className="post-span1">We're unique</span>
                  </h3>
                  <div className="meta">
                    <p>
                      We believe in support, customer service and being
                      available to our clients 24/7. We answer our phones,
                      emails and texts. We're unique that way! We provide our
                      clients with the best service and care
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <img src="./pic/img-3.png" alt="Task" className="img-fluid" />
                <div className="post-content-entry">
                  <hr />
                  <h3>
                    Why <span className="post-span2">We're traditional</span>
                  </h3>
                  <div className="meta">
                    <p>
                      Our values are traditional, but our approach is not. Our
                      clients are people we want to work with. We enjoy the work
                      we do, the people and business we do it with and for. Get
                      in touch...you'll see the difference
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <img src="./pic/img-4.png" alt="Task" className="img-fluid" />
                <div className="post-content-entry">
                  <hr />
                  <h3>
                    Why <span className="post-span3">We're special</span>
                  </h3>
                  <div className="meta">
                    <p>
                      We enjoy what we do and who we do it with! Our passion is
                      very apparent. Get in touch...You'll see the difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button className="btn btn-dark rounded-pill">Learn More</button>
          <button className="btn btn-warning rounded-pill">Contact Us</button>
        </div>
      </div>

      {/* <!-- End Why Section --> */}

      {/* <!-- Start Who Section --> */}
      <div className="who-section">
        <div className="section">
          <div className="image-container">
            <img src="./pic/img-5.png" alt="Task" />
          </div>
          <div className="heading-container">
            <h5>We live and work by the</h5>
            <h1 className="heading1">GOLDEN RULE</h1>
            <p className="para">
              <q>Do unto others as you would have then do unto you</q>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="inline-container">
              <h4 className="capsule-heading">Who</h4>
            </div>
          </div>

          <div className="container">
            <div className="row mb-5">
              <div className="inline-container">
                <img src="./pic/img-6.png" alt="Logo" />
                <h2 className="section-title">
                  We are <span>Frequent Research</span>
                </h2>
              </div>
            </div>

            <div className="row justify-content-center gx-4">
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry polaroid">
                  <img src="./pic/img-7.png" alt="Task" className="img-fluid" />
                  <hr />
                  <div className="post-content-entry">
                    <h3>
                      We are a group of...
                      <br />
                      <span className="post-span1">dedicated, creative people</span>
                    </h3>
                    <div className="meta">
                      <p>
                        We love print. We love graphics and design.
                        <br /> We love our team. come Check us Out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry polaroid">
                  <img src="./pic/img-8.png" alt="Task" className="img-fluid" />
                  <hr />
                  <div className="post-content-entry">
                    <h3>
                      Our <span className="post-span2">bread & butter</span>
                    </h3>
                    <div className="meta">
                      <p>
                        Trusted long lasting relationships are the b & b of VHM.
                        We value & build relationships with our clients,
                        vendors, friends, family and each other. It is important
                        for a healthy & happy work enviorment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry polaroid">
                  <img src="./pic/img-9.png" alt="Task" className="img-fluid" />
                  <hr />
                  <div className="post-content-entry">
                    <h3>
                      Got an Idea?
                      <br />
                      <span className="post-span3">Let's talk</span>
                    </h3>
                    <div className="meta">
                      <p>
                        We know that listening is an invaluble skill. We like to
                        listen. Run your ideas by us and we'll give you our
                        honest opinion. Call, email or text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Who Section --> */}
    </>
  );
}
