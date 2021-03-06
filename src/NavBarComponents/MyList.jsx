import React, { useState } from "react";
import "./MyList.css";
import Banner from "../WebComponents/HomePage/components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DeleteDataMyList } from "../WebComponents/HomePage/actions";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";
function MyList() {
  const history = useHistory();
  const callCookieAuth = useCallback(() => {
    const callCookie = async () => {
      try {
        const res = await axioslocal.get("/cookieVerification", {
          withCredentials: true,
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };
    callCookie();
  }, [history]);
  useEffect(() => {
    callCookieAuth();
  }, [callCookieAuth]);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const baseLink = "https://image.tmdb.org/t/p/original/";

  const MyListState = useSelector((state) => state.ListMovieData);

  useEffect(() => {
    const DataLength = MyListState.MyListData.length;
    if (DataLength === undefined || DataLength === 0) {
      setshow(false);
    } else if (DataLength > 0) {
      setshow(true);
    }
  }, [MyListState.MyListData.length]);
  return (
    <>
      <Banner />
      {show ? (
        <div className="imageArea">
          <h1 className="mainTitle">My List</h1>
          <div className="secondparthere">
            {MyListState.MyListData.map((elm) => {
              return (
                <div
                  className="listContainingMovies"
                  onClick={() => {
                    dispatch(DeleteDataMyList(elm.id));
                  }}
                >
                  <img
                    src={`${baseLink}${
                      elm.data.poster_path || elm.data.backdrop_path
                    }`}
                    alt=""
                    className="MyListMovie"
                  />
                  <span className="DeleteFromList">
                    <p>Delete</p>
                    <i class="fas fa-trash-alt" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="MylistArea">
          <div className="showContentsHere">You Have Nothing On Your List</div>
        </div>
      )}
    </>
  );
}

export default MyList;
