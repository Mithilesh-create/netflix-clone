import OpenAndCloseModal from "./OpenClose";
import { combineReducers } from "redux";
import ListMovieData from "./MyListData";
import MovieData from "./MovieData";
import OpenPlayer from "./OpenPlayer";
import ProfileLogData from "./ProfileLogData";
import EmailData from "./EmailData";
import PriceData from "./PriceData";
import PassData from "./PassData";
import ImgData from "./ImgData";
import ImgDataNum from "./ImgDataNum";
import OpenAndCloseProfile from "./OpenCloseProf";

const rootReducer = combineReducers({
  OpenAndCloseModal,
  MovieData,
  ListMovieData,
  OpenPlayer,
  ProfileLogData,
  EmailData,
  PriceData,
  PassData,
  ImgData,
  ImgDataNum,
  OpenAndCloseProfile,
});
export default rootReducer;
