import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar, isMobileOpen, closeMobileSidebar }) => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

const menuItems = [
  {
    title: 'MAIN NAVIGATION',
    items: [
      { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    ],
  },
  {
    title: 'Fleet Management',
    items: [
      { path: '/vehicles', icon: '🚚', label: 'View Vehicles' },
      { path: '/vehicles/add', icon: '➕', label: 'Add New Vehicle' },
    ],
  },
  {
    title: 'Bookings',
    items: [
      { path: '/bookings', icon: '📅', label: 'Bookings List' },
      { path: '/bookings/search', icon: '🔍', label: 'Search & Book' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { path: '/settings', icon: '⚙️', label: 'Settings' },
      { path: '/reports', icon: '📈', label: 'Reports' },
    ],
  },
];


  return (
    <div
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${
        isMobileOpen ? 'mobile-open' : ''
      }`}
    >
      <div className="sidebar-header">
        {!isCollapsed && (
          <>
            <h2>FleetLink</h2>
            {/* <span>Logistics Management</span> */}
          </>
        )}
        <button
          className="toggle-btn"
          onClick={isMobileOpen ? closeMobileSidebar : toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-menu">
        <div className="menu-section">
          {menuItems.map((group, idx) => (
            <div key={idx} className="menu-group">
              {!isCollapsed && (
                <div className="menu-group-title">{group.title}</div>
              )}
              {group.items.map((item) => (
                <div
                  key={item.path}
                  className={`menu-item ${isActive(item.path)}`}
                >
                  <Link to={item.path}>
                    <span className="menu-icon">{item.icon}</span>
                    {!isCollapsed && (
                      <span className="menu-text">{item.label}</span>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
