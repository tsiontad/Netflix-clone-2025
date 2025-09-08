
import "./Header/Header.css";
// import NetflixLogo from "../assets/images/Netflixlogo.png";
import SearchIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBoxRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownRounded";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              {/* <img src={NetflixLogo} alt="Netflix Logo" width="100" /> */}
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
