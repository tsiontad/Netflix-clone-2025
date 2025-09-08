import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import request from "../../utils/requests";
import "../Banner/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // ✅ changed 'request' to 'response' here
        const response = await axios.get(request.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;