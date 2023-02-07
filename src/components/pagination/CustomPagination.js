import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination(props) {
  const pageHandler = (e) => {
    props.setPage(e.target.textContent);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Pagination
        count={props.numOfPages || 10}
        color="primary"
        onChange={pageHandler}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default CustomPagination;
