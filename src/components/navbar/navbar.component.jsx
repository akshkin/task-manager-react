import { useState } from "react";
import { StyledNavbar, Avatar, Column, Dropdown } from "./navbar.styles";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { signOut } from "../../store/user/user.action";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const user = useSelector(
    (state) => state.user?.currentUser?.user || state.user?.currentUser
  );
  const currentUser = user?.user || user;

  const logout = () => {
    dispatch(signOut());
    setTimeout(() => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      window.location.reload();
    }, 300);
  };

  const toggleDropwdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  return (
    <StyledNavbar>
      <Link to="/">
        <h5 style={{ fontWeight: 400, fontSize: "1.5em" }}>EasyTask</h5>
      </Link>
      <Column>
        {currentUser && (
          <>
            <Avatar>{currentUser?.name?.charAt(0).toUpperCase()}</Avatar>
            {!dropdown ? (
              <ArrowDropDownIcon className="arrow" onClick={toggleDropwdown} />
            ) : (
              <ArrowDropUpIcon className="arrow" onClick={toggleDropwdown} />
            )}
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}

        {!currentUser && (
          <Button>
            <Link to="/auth">Sign In</Link>
          </Button>
        )}
        {dropdown && (
          <Dropdown dropdown={dropdown}>
            <ul>
              <li>
                <Link
                  to="/profile"
                  className="row"
                  onClick={() => setDropdown(false)}
                >
                  <SettingsIcon />
                  Settings
                </Link>
              </li>
              <li className="row" onClick={logout}>
                <LogoutIcon />
                Sign out
              </li>
            </ul>
          </Dropdown>
        )}
      </Column>
    </StyledNavbar>
  );
}

export default Navbar;
