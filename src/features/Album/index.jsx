import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Những bài hát hay nhất của Kai Đinh",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/0/2/3/502387e02101dec6d35965b50108e345.jpg",
    },
    {
      id: 2,
      name: "Flow buồn ngày mưa",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/7/8/e/678e47a458a0c8372e2bd0d54e240fe7.jpg",
    },
    {
      id: 3,
      name: "Ái",
      thumbnailUrl: 
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/7/0137422e6a4e4f375c058c4d260db396.jpg",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", width: "670px" }}>Album list</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
