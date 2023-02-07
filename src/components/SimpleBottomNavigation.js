import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trandings"
          icon={
            <Link to="/" style={{ color: "#39445a" }}>
              {" "}
              <WhatshotIcon />{" "}
            </Link>
          }
        />{" "}
        <BottomNavigationAction
          label="Movies"
          icon={
            <Link to="/movies" style={{ color: "#39445a" }}>
              <MovieCreationIcon />{" "}
            </Link>
          }
        />
        <BottomNavigationAction
          label="Tv Series"
          icon={
            <Link to="/tvSeries" style={{ color: "#39445a" }}>
              <TvIcon />{" "}
            </Link>
          }
        />
        <BottomNavigationAction
          label="Search"
          icon={
            <Link to="/search" style={{ color: "#39445a" }}>
              {" "}
              <SearchIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Box>
  );
}
