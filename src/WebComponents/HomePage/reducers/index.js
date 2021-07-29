import OpenAndCloseModal from "./OpenClose";
import { combineReducers } from "redux";
import ListMovieData from "./MyListData";
import MovieData from "./MovieData";
import OpenPlayer from "./OpenPlayer";
import ProfileLogData from "./ProfileLogData";
import EmailData from "./EmailData";
import PriceData from "./PriceData";
import PassData from "./PassData";

const rootReducer = combineReducers({
  OpenAndCloseModal,
  MovieData,
  ListMovieData,
  OpenPlayer,
  ProfileLogData,
  EmailData,
  PriceData,
  PassData,
});
export default rootReducer;
