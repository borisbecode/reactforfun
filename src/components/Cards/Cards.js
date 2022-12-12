import React from "react";
import styles from "./Cards.modules.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  /*  console.log(results); */

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-4 text-dark"
        >
          {" "}
          <div className="card mb-5 position-relative" id="hauteur">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="content">
                <div className="fs-6">Last location : </div>
                <div className="">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div className="position-absolute badge bg-danger">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="position-absolute badge bg-success">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className="position-absolute badge bg-secondary">
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </Link>
      );
    });
  } else {
    display = " no characters found ";
  }

  return <>{display}</>;
};

export default Cards;
