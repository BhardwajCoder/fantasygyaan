import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Middle() {
  return (
    <>
      <h2 class="pb-2 border-bottom my-2 container">Trending Matches</h2>
      <div className="middle mx-4  ">
        <Helmet>
          <table>Trending Matches</table>
          <meta
            name="description"
            content="Get full details about daily matches and stay updates with daily match predictions and dream11 teams"
          />
          <meta
            name="keywords"
            content="Daily Matches,Trending cricket matches,"
          />
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
        </Helmet>
        <header>
          <div className="my- middle " style={{ fontFamily: "serif,Georgia" }}>
          <div className="col-md-6 card1 ">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    CRICKET
                  </strong>
                  <h2 className="mb-0 my-1">MUM-W vs UP-W</h2>
                  <p
                    style={{ fontSize: "1.3rem", fontStyle: "oblique" }}
                    className="mb-1 text-body-secondary"
                  >
                    check the{" "}
                    <strong>Fantasy Cricket Teams and Match Predictions</strong>{" "}
                  </p>
                  <Link to={`/MUM-W-vs-UP-W-Dream11-Predictions`}>
                    <button className="btn btn-primary my-2"> View </button>
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block"></div>
              </div>
            </div>
            <div className="col-md-6 card1 ">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    CRICKET
                  </strong>
                  <h2 className="mb-0 my-1">QUE VS KAR</h2>
                  <p>06-Mar-2024</p>
                  <p
                    style={{ fontSize: "1.3rem", fontStyle: "oblique" }}
                    className="mb-1 text-body-secondary"
                  >
                    check the{" "}
                    <strong>Fantasy Cricket Teams and Match Predictions</strong>{" "}
                  </p>
                  <Link to={`/QUE-vs-KAR/Match-Predictions`}>
                    <button className="btn btn-primary my-2"> View </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 card1 ">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    CRICKET
                  </strong>
                  <h2 className="mb-0 my-1">LAH VS ISL</h2>
                  <p>6-MAR-2024</p>
                  <p
                    style={{ fontSize: "1.3rem", fontStyle: "oblique" }}
                    className="mb-1 text-body-secondary"
                  >
                    {" "}
                    check the{" "}
                    <strong>Fantasy Cricket Teams and Match Predictions</strong>
                  </p>
                  <Link to={`/LAH-vs-ISL/Match-Predictions`}>
                    <button className="btn btn-primary my-2"> View </button>
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        </header>
      </div>
    </>
  );
}
export default Middle;
