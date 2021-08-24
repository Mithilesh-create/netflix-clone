import { Route, Switch } from "react-router-dom";
import FrontPAGE from "./WebComponents/FrontPage/FrontPAGE.jsx";
import Login from "./WebComponents/LoginPage/Login";
import HomePage from "./WebComponents/HomePage/HomePage";
import TvShows from "./NavBarComponents/TvShows";
import Movies from "./NavBarComponents/Movies";
import RecentlyAdded from "./NavBarComponents/RecentlyAdded";
import MyList from "./NavBarComponents/MyList";
import WhoisWatching from "./WebComponents/SignUpPage/WhoisWatching";
import RegisterNewUser from "./WebComponents/SignUpPage/components/RegisterNewUser";
import UpdateProfile from "./WebComponents/SignUpPage/components/UpdateProfile.jsx";
import ProfileLogos from "./WebComponents/SignUpPage/components/ProfileLogos";
import RegisCust from "./WebComponents/RegisterUserPage/RegisCust";
import StepOne from "./WebComponents/RegisterUserPage/components/StepOne";
import StepTwo from "./WebComponents/RegisterUserPage/components/StepTwo";
import StepThree from "./WebComponents/RegisterUserPage/components/StepThree";
import Payment from "./WebComponents/RegisterUserPage/components/Payment";
import PaymentGateway from "./WebComponents/paymentGateway/PaymentGateway.jsx";
import ChangePlans from "./WebComponents/RegisterUserPage/components/ChangePlans";
import Logout from "./WebComponents/Logout/Logout";
import LogoutAll from "./WebComponents/Logout/LogoutAll";
import Error from "./WebComponents/error404/Error.jsx";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={FrontPAGE} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/home/tvshows" component={TvShows} />
        <Route exact path="/home/movies" component={Movies} />
        <Route exact path="/home/recentlyadded" component={RecentlyAdded} />
        <Route exact path="/home/mylist" component={MyList} />
        <Route exact path="/wiw" component={WhoisWatching} />
        <Route exact path="/RegisterNewUser" component={RegisterNewUser} />
        <Route exact path="/updateProfile" component={UpdateProfile} />
        <Route exact path="/profileLogos" component={ProfileLogos} />
        <Route exact path="/RegisCust" component={RegisCust} />
        <Route exact path="/RegisCust/stepone" component={StepOne} />
        <Route exact path="/RegisCust/steptwo" component={StepTwo} />
        <Route exact path="/RegisCust/stepthree" component={StepThree} />
        <Route exact path="/RegisCust/payment" component={Payment} />
        <Route exact path="/paymentGateway" component={PaymentGateway} />
        <Route exact path="/changeplans" component={ChangePlans} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/logoutall" component={LogoutAll} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
