import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";

import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedDAta] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedDAta(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center ubuntu my-4">
          Rick & Morty <span className="text-primary">Wiki</span>{" "}
        </h1>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-3">
            {" "}
            <Filters />{" "}
          </div>

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
