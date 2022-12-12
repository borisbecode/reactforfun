import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <>
      <div class="container ">
        <select
          onChange={(e) => {
            setID(e.target.value);
          }}
          class="form-select  h-100 w-100"
          aria-label=""
          id={name}
        >
          <option value="1" selected>
            Choose...
          </option>
          {[...Array(total).keys()].map((x) => {
            return (
              <option value={x + 1}>
                {name} - {x + 1}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default InputGroup;
