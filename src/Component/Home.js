import React from "react";
import "./style.css";
const Home = () => {
  return (
    <div className="container section_first">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-md-3">
          <div className="sec_card me-md-1 row">
            <div className="col-md-3">
              <img src="././/image/a.png" className="w-100"></img>
            </div>
            <div className="col-md-9">
              <h3>32,14</h3>
              <p>Enjoy Enjoy</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-md-3">
          <div className="sec_card me-md-1 row">
            <div className="col-md-3">
              <img src="././/image/b.png" className="w-100"></img>
            </div>
            <div className="col-md-9">
              <h3> Time</h3>
              <p>Have a great day !</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-md-3">
          <div className="sec_card me-md-1 row">
            <div className="col-md-3">
              <img src="././/image/c.png" className="w-100"></img>
            </div>
            <div className="col-md-9">
              <h3>Learning</h3>
              <p>See yaa !!!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="online_categories pt-5 pb-4">
        <div className="online_categories_head">
          <p className="pt-md-4">Top Categories</p>
          <h1>Popular Online Categories</h1>
        </div>
      </div>
      <div className="popular_courses pt-md-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/ge1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/ge.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>General Education</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/cs1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/cs.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>Computer Science</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/ce1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/ce.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>Civil Engineering</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/bs1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/bs.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>Business Studies</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/ai1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/ai.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>Arificial Intelligence</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 cards">
            <div className="card">
              <div className="card-img">
                <img src="./image/onilne/ceng1.jpg" className="w-100" alt="" />
              </div>
              <div className="d-flex card_details">
                <div className="col-2">
                  <img
                    src="./image/onilne/ceng.png"
                    className="w-100"
                    alt="gen"
                  />
                </div>
                <div className="col-10">
                  <h3>Computer Engineering</h3>
                  <p>05 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view_all_button p-5">
          <button>View All Categories</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
