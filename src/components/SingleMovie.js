import React from "react";
import Badge from "@mui/material/Badge";
import { img_300, unavailable } from "../Config/Config";
import "./SingleMovie.css";
import ContentModal from "./ContentModal/ContentModal";

function SingleMovie(props) {
  return (
    <ContentModal media_type={props.media_type} id={props.id}>
      <Badge
        badgeContent={`${props.vote_average.toFixed(2)}⭐`}
        color={props.vote_average > 6 ? "primary" : "secondary"}
      ></Badge>
      <img
        className="poster"
        src={props.poster ? `${img_300}${props.poster}` : unavailable}
        alt={props.title}
      />
      <b className="title">{props.title}</b>
      <span className="subTitle">
        {props.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{props.date}</span>
      </span>
    </ContentModal>
  );
}

export default SingleMovie;
