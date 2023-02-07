import React, { useCallback, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import SingleMovie from "../SingleMovie";
import "./Trending.css";
import CustomPagination from "../pagination/CustomPagination";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region="india"`
    );
    setContent(data.results);
  }, [page]);
  useEffect(() => {
    fetchTrending();
  }, [fetchTrending, page]);
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
        <CustomPagination setPage={setPage} />
      </Container>
    </div>
  );
}

export default Trending;
