import React, { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import Button from '../Ui/Button';
import '../../assets/css/Style.css';
import Button from '../Ui/Button';

const Header = () => {
//   const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Vehicle Booking System</h1>
        </div>
        
        {/* <nav className="nav">
          {user && (
            <div className="user-info">
              <span>Welcome</span>
              <Button variant="outline" size="small" onClick={logout}>
                Logout
              </Button>
            </div>
          )}
        </nav> */}
        <nav className="nav">
         
            <div className="user-info">
              <span>Welcome</span>
              <Button variant="outline" size="small">
                Logout
              </Button>
            </div>
        
        </nav>
      </div>
    </header>
  );
};

export default Header;