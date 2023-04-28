import { Col } from "antd";
import React from "react";
import RowMovies from "./RowMovies";
import requests from "../Requests";

const ListMovies: React.FC = () => {
  return (
    <Col span={22} offset={1}>
      <RowMovies title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <RowMovies title='Trending Now' fetchUrl={requests.fetchTrending} />
      <RowMovies title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <RowMovies title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <RowMovies title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <RowMovies title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <RowMovies title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <RowMovies title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </Col>
  );
};

export default ListMovies;
