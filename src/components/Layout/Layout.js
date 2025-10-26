import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const openMobileSidebar = () => setIsMobileOpen(true);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className={`layout-container ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        isMobileOpen={isMobileOpen}
        closeMobileSidebar={closeMobileSidebar}
      />
       {isMobileOpen && (
      <div 
        className="overlay active" 
        onClick={closeMobileSidebar}
      />
    )}
      <div className="main-section">
        <Navbar openMobileSidebar={openMobileSidebar} />
        <main className="main-content" onClick={isMobileOpen ? closeMobileSidebar : undefined}>
          {children}  
           <Outlet />
           <Footer/>
        </main>
      </div>
    </div>
  );
};

export default Layout;
