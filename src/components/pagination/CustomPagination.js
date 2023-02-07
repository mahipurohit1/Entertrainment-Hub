import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material";

function CustomPagination(props) {
  const pageHandler = (e) => {
    props.setPage(e.target.textContent);
    window.scroll(0, 0);
  };
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={props.numOfPages || 10}
          color="primary"
          onChange={pageHandler}
          hidePrevButton
          hideNextButton
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
