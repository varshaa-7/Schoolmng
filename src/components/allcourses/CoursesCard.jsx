// eslint-disable-next-line no-unused-vars
import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val, index) => (
            <div className="items" key={index}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img
                      src={val.cover || "/images/default-course.jpg"}
                      alt={val.coursesName || "Course Image"}
                    />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher &&
                      val.courTeacher.map((details, idx) => (
                        <div className="box" key={idx}>
                          <div className="dimg">
                            <img
                              src={details.dcover || "/images/default-teacher.jpg"}
                              alt={details.name || "Teacher"}
                            />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                          <span>{details.totalTime}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="outline-btn">ENROLL NOW!</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
