import React, { useCallback } from "react";
import "./Logout.css";
import Navigation from "../RegisterUserPage/components/Navigation";
import axios from "axios";
import { useEffect } from "react";
function Logout() {
  const callCookieAuth = useCallback(() => {
    const callCookie = async () => {
      try {
        const res = await axios.get("/cookieRemAll", {
          withCredentials: true,
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    callCookie();
  }, []);
  useEffect(() => {
    callCookieAuth();
  }, [callCookieAuth]);
  return (
    <>
      <div className="backgroundarea logmessage">
        {/* <Navbar /> */}
        <Navigation />
        <div className="backdeco" />
        <div className="shades" />
        <div className="message">
          <div className="centralLogOut">
            <h1>Logged out Successfully from all devices</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
