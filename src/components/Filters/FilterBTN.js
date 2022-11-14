import React from "react";
import styles from "./btn.scss";

const FilterBTN = ({ name, index, items }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
      {/*      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="btn btn-outline-primary" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div> */}
    </div>
  );
};

export default FilterBTN;
