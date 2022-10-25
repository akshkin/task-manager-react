import { useState } from "react"
import { StyledNavbar, Avatar, Column, Dropdown } from "./navbar.styles";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import {useDispatch} from "react-redux"
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "../../store/user/user.action";


function Navbar({ user }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false)
  const currentUser = user?.user || user
 
  const logout = () => {
    dispatch(signOut())
    setTimeout(() => {
      dispatch({type: "LOGOUT"})
      navigate("/")  
      window.location.reload()
    })
  }
  
  const toggleDropwdown = () => {
    setDropdown(prevDropdown => !prevDropdown)
  }

  return (
    <StyledNavbar>
      <Link to="/">
        <h5 style={{fontWeight: 400, fontSize: "1.5em"}}>
          EasyTask
        </h5>
      </Link>
      <Column>
        { currentUser  && 
          <>
            {currentUser?.avatar ? 
              <img src={currentUser?.avatar} alt="avatar" onClick={toggleDropwdown} />
              :
              <Avatar onClick={toggleDropwdown}>
                {currentUser?.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            <Link to="/dashboard">Dashboard</Link>
          </>
        }
        {!currentUser  &&
          
            <Button>
              <Link to="/auth">Sign In</Link>
            </Button> 
            
        }
        {
          dropdown && 
            <Dropdown>
              <ul>
                <li><Link to="/profile" className="row" onClick={() => setDropdown(false)}><SettingsIcon />Settings</Link></li>
                <li className="row" onClick={logout}><LogoutIcon />Sign out</li>
              </ul>
          </Dropdown>
        }
      </Column>
    </StyledNavbar>
  )
}

export default Navbar