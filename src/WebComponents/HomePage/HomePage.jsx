import "./HomePage.css";
import Banner from "./components/Banner";
import VideoListArea from "./components/VideoListArea";
import requests from "./components/Requests";
function HomePage() {
  return (
    <>
      <Banner />
      <div className="containhead" />
      <div className="containedRows">
        <VideoListArea
          title="Netflix Orignals"
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow
        />
        <VideoListArea title="Trending" fetchUrl={requests.fetchTrending} />
        <VideoListArea
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <VideoListArea
          title="Top Rated Movies"
          fetchUrl={requests.fetchTopRatedMovies}
        />
        <VideoListArea
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <VideoListArea
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <VideoListArea
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <VideoListArea
          title="Documentries"
          fetchUrl={requests.fetchDocumentries}
        />
      </div>
    </>
  );
}

export default HomePage;
