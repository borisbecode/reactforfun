import React from "react";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location } = x;
      return (
        /*   <div className="col-4">
          <div className="">
            <img src={image} alt="" className="" />
          </div>
        </div> */
        <div className="col-4">
          {" "}
          <div className="card mb-5" id="hauteur">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="content">
                <div className="fs-6">Last location : </div>
                <div className="">{location.name}</div>
              </div>

              {/*   <p className="card-text">
                Some quick example text to build on the card title and make up
                the bu lk of the card's content.
              </p> */}
            </div>
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
