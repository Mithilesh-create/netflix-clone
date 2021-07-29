import "./Footer.css";
function Footer() {
  return (
    <>
      <footer class="footcontainer">
        <div class="footitems">
          <div className="areaone">
            Questions? Call <span className="linker">000-800-040-1843</span>
          </div>
          <div className="areatwo">
            <div className="areatwonew">
              <span className="linker">FAQ</span>
              <br />
              <span className="linker">InvestorRelations</span>
              <br />
              <span className="linker">Privacy</span>
              <br />
              <span className="linker">SpeedTest</span>
              <br />
            </div>
            <div className="areatwonew">
              <span className="linker">HelpCentre</span>
              <br />
              <span className="linker">Jobs</span>
              <br />
              <span className="linker">CookiePreferences</span>
              <br />
              <span className="linker">LegalNotices</span>
              <br />
            </div>
            <div className="areatwonew">
              <span className="linker">Account</span>
              <br />
              <span className="linker">WaystoWatch</span>
              <br />
              <span className="linker">CorporateInformation</span>
              <br />
              <span className="linker">NetflixOriginals</span>
              <br />
            </div>
            <div className="areatwonew">
              <span className="linker">MediaCentre</span>
              <br />
              <span className="linker">TermsofUse</span>
              <br />
              <span className="linker">ContactUs</span>
              <br />
            </div>
          </div>
          <div className="areathree">
            <div className="dropdown">
              <select className="drop">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
          <div className="areafour">Netflix India</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
