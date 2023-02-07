import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import SingleMovie from "../SingleMovie";
import "./Trending.css";

function Trending() {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div className="app">
      <Container>
        <h2 className="pageTitle">Trending</h2>
        <div className="trending">
          {content &&
            content.map((movie) => (
              <SingleMovie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.name}
                date={movie.first_air_date || movie.release_date}
                media_type={movie.media_type}
                vote_average={movie.vote_average}
              ></SingleMovie>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Trending;
