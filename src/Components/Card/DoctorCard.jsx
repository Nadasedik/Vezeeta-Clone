
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating/StarRatingCompo'
import Mona from "../../Images/Doctors/mona.jpg";
import Peter from "../../Images/Doctors/peter.jpg";
import Eslam from "../../Images/Doctors/Islam.jpg";
import Mostafa from "../../Images/Doctors/Mostafa.jpg";


const Doctorcard = (props) => {

  const theDataAboutDoctors = [
    { id: 1, Name: "منى عزت", Image: Mona },
    { id: 2, Name: "بيتر كمال", Image: Peter },
    { id: 3, Name: "اسلام", Image: Eslam },
    { id: 4, Name: "مصطفى جمال", Image: Mostafa },
  ];

  console.log(props.doctorData);
  let theRecievedDta = props.doctorData;
  console.log(theRecievedDta);
  const [images] = useState(props.data)

  useEffect(() => {
    console.log(images)
  }, [images, props.data])

  return (
    <>
      {theRecievedDta.map((theDoct) => {
        console.log([theDoct]);
        return (
          // <!--The Card Of Each doctor-->
          <div key={theDoct.Name} className="row" style={{ width: "100%" }}>
            <div className="cardOfEachDoctor">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row d-md-flex mainDivimageAboutDoctor ">
                    <div className="d-flex flex-md-row imageAboutDoctor">
                      <div className=" d-inline float-end mt-3 ml-2 mb-3 col-md-4">
                        <img
                          src={theDoct.Image}
                          alt="..."
                          className="rounded-circle"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="infoAboutDoctor">
                      <div className="theDoctor d-flex flex-column col-md-10">
                        <p
                          className=" d-inline mt-4"
                          style={{ color: "cornflowerblue" }}
                        >
                          دكتور{" "}
                          <span style={{ fontWeight: "bolder", color: "blue" }}>
                            {/* <Link to={`/MergeDoctor/${theDoct.Name}`}className="fs-3 text-decoration-none"> {theDoct.Name}{" "}</Link> */}
                            <Link to={{ pathname: `/MergeDoctor/${theDoct.Name}`, state: { fromCovid: true } }} className="fs-3 text-decoration-none"> {theDoct.Name}{" "}</Link>
                          </span>
                          <br />
                          {theDoct.Title}{" "}
                        </p>
                        {/* <ul className="mt-0 listOfStars">
                          <li style={{ color: "orange" }}>
                            <i className="fas fa-star"></i>
                          </li>
                          <li style={{ color: "orange" }}>
                            <i className="fas fa-star"></i>
                          </li>
                          <li style={{ color: "orange" }}>
                            <i className="fas fa-star"></i>
                          </li>
                          <li style={{ color: "orange" }}>
                            <i className="fas fa-star"></i>
                          </li>
                          <li style={{ color: "orange" }}>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul> */}

                        <StarRating />
                        <p className=" d-inline">
                          التقيم العام ٢٥ زاروا الدكتور
                        </p>
                        <p>
                          <i
                            style={{
                              color: "dodgerblue",
                              textDecoration: "underline",
                            }}
                            className="fas fa-stethoscope p-1"
                          ></i>
                          دكتور{" "}
                          <span style={{ color: "dodgerblue" }}>
                            Departmebt
                          </span>
                        </p>
                        <p>
                          <i
                            style={{ color: "dodgerblue" }}
                            className="far fa-map-marker-alt p-1"
                          ></i>
                          الفروع كورونا{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col d-none d-md-flex"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="d-none d-md-flex flex-md-column col-md-4"
                    style={{ flexBasis: "50% ", display: "inline" }}
                  >
                    <div className="d-flex mt-3 me-5">
                      <div className="col-md-4 d-md-flex mainDivOfTimeTable">
                        <div className="cols-md-1 timeTable">
                          <p
                            style={{ color: "white", backgroundColor: "blue" }}
                          >
                            اليوم
                          </p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <input
                            type="button"
                            className="btn btn-danger row-cols-md-1"
                            value="احجز الان"
                          />
                        </div>

                        <div className="cols-md-4 timeTable">

                          <p
                            style={{
                              color: "white",
                              backgroundColor: "blue",
                            }}
                          >
                            اليوم
                          </p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <p style={{ color: "black" }}>٨:٠٠ ص</p>
                          <input
                            type="button"
                            className="btn btn-danger row-cols-md-1"
                            value="احجز الان"
                          />

                        </div>

                        <div
                          className="col-md-4"
                          style={{ textAlign: "center", width: "80px" }}
                        >
                          <div className="row-cols-md-1 timeTable">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                              }}
                            >
                              اليوم
                            </p>
                            <p style={{ color: "black" }}>٨:٠٠ ص</p>
                            <p style={{ color: "black" }}>٨:٠٠ ص</p>
                            <p style={{ color: "black" }}>٨:٠٠ ص</p>
                            <input
                              type="button"
                              className="btn btn-danger row-cols-md-1"
                              value="احجز الان"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row d-md-none me-1">
                  <div
                    className="d-flex flex-row mb-3 d-md-none "
                    style={{ width: "100%" }}
                  >
                    <div
                      className="d-inline ms-2 "
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "gainsboro",
                        width: " 70%",
                      }}
                    >
                      <p> متاح من ... الى ...</p>
                    </div>
                    <div className="d-inline">
                      <button type="button" className="btn btn-danger">
                        احجز الان!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Doctorcard;
