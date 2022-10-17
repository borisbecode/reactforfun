import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };
  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-light"
      previousClassName="btn btn-light"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      breakLabel="..."
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
