import Row from "../Row/Row";
import "../RowList/RowList.css";
import request from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals} // ✅ Make sure this matches
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={request.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row title="TV Shows" fetchUrl={request.fetchTvShow} isLargeRow={true} />
      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
        isLargeRow={true}
      />
    </>
  );
};

export default RowList;