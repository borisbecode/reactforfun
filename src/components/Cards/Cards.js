import React from "react";
import styles from "./Cards.modules.scss";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        /*   <div classNameName="col-4">
          <div classNameName="">
            <img src={image} alt="" classNameName="" />
          </div>
        </div> */
        <div classNameName="col-4 ">
          {" "}
          <div classNameName="card mb-5 position-relative" id="hauteur">
            <img src={image} classNameName="card-img-top" alt="..." />
            <div classNameName="card-body">
              <h5 classNameName="card-title">{name}</h5>
              <div classNameName="content">
                <div classNameName="fs-6">Last location : </div>
                <div classNameName="">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div classNameName="position-absolute badge bg-danger">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div classNameName="position-absolute badge bg-success">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div classNameName="position-absolute badge bg-secondary">
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </div>
      );
    });
  } else {
    display = " no characters found ";
  }

  return <>{display}</>;
};

export default Cards;
