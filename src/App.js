// import React, { useEffect } from 'react';
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './components/Pages/Home/Home';
// import '../src/assets/css/Style.css';

// // FleetLink Components
// import AddVehiclePage from './components/Pages/Vehicles/VehicleForm';
// import SearchBookPage from './components/Pages/Shared/SearchForm';
// import VehicleList from './components/Pages/Vehicles/VehicleList';
// import Login from './components/Pages/Login/Login';

// function App() {
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const currentPath = window.location.pathname;
    
//     if (!token && currentPath !== '/login') {
//       alert('Token is missing. Please log in again.');
//       navigate('/login', { replace: true });
//     }
//   }, [navigate]);

//   // Check if user is authenticated
//   const isAuthenticated = () => {
//     return localStorage.getItem('token');
//   };

//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
      
//       {/* Protected Routes */}
//       <Route path="/" element={
//         isAuthenticated() ? <Layout><Home /></Layout> : <Navigate to="/login" replace />
//       } />
      
//       <Route path="/add-vehicle" element={
//         isAuthenticated() ? <Layout><AddVehiclePage /></Layout> : <Navigate to="/login" replace />
//       } />
      
//       <Route path="/search-book" element={
//         isAuthenticated() ? <Layout><SearchBookPage /></Layout> : <Navigate to="/login" replace />
//       } />
      
//       <Route path="/vehicleList" element={
//         isAuthenticated() ? <Layout><VehicleList /></Layout> : <Navigate to="/login" replace />
//       } />

//       {/* Catch all route */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

// export default App;
// src/App.js
  import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import './assets/css/Style.css';

// Import pages correctly based on your folder structure
import AddVehicle from './components/Pages/Vehicles/AddVehicle';
import SearchBook from './components/Pages/Bookings/SearchBook';
import VehicleList from './components/Pages/Vehicles/VehicleList';
import Login from './components/Pages/Auth/Login';
import BookingsList from './components/Pages/Bookings/BookingsList';
// import Register from './pages/Auth/Register';

// Import context providers
// import { AuthProvider, useAuth } from './components/Context/AuthContext';
// import { NotificationProvider } from './components/Context/NotificationContext';
// import { AppProvider } from './components/Context/AppContext';

// Import common components
import LoadingSpinner from './components/Common/Spinner';

// Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useAuth();
  
//   if (loading) {
//     return <LoadingSpinner />;
//   }
  
//   return user ? children : <Navigate to="/login" replace />;
// };

// // Public Route Component (redirect to dashboard if already authenticated)
// const PublicRoute = ({ children }) => {
//   const { user, loading } = useAuth();
  
//   if (loading) {
//     return <LoadingSpinner />;
//   }
  
//   return !user ? children : <Navigate to="/dashboard" replace />;
// };

function App() {
  return (
    // <Router>
    //   <NotificationProvider>
    //     <AuthProvider>
    //       <AppProvider>
    //         <div className="App">
    //           <Routes>
    //             {/* Public routes */}
    //             <Route path="/login" element={
    //               <PublicRoute>
    //                 <Login />
    //               </PublicRoute>
    //             } />
    //             {/* <Route path="/register" element={
    //               <PublicRoute>
    //                 <Register />
    //               </PublicRoute>
    //             } /> */}
                
    //             {/* Protected routes */}
    //             <Route path="/" element={
    //               <ProtectedRoute>
    //                 <Layout />
    //               </ProtectedRoute>
    //             }>
    //               <Route index element={<Navigate to="/dashboard" replace />} />
    //               <Route path="dashboard" element={<Dashboard />} />
    //               <Route path="vehicles" element={<VehicleList />} />
    //               <Route path="vehicles/add" element={<AddVehicle />} />
    //               <Route path="vehicles/edit/:id" element={<AddVehicle />} />
    //               <Route path="bookings" element={<BookingsList />} />
    //               <Route path="bookings/search" element={<SearchBook />} />
    //             </Route>
                
    //             {/* Catch all route */}
    //             <Route path="*" element={<Navigate to="/dashboard" replace />} />
    //           </Routes>
    //         </div>
    //       </AppProvider>
    //     </AuthProvider>
    //   </NotificationProvider>
    // </Router>
   <Router>
      <div className="App">
        <Routes>
          {/* Layout with nested routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Vehicles */}
            <Route path="vehicles" element={<VehicleList />} />
            <Route path="vehicles/add" element={<AddVehicle />} />
            <Route path="vehicles/edit/:id" element={<AddVehicle />} />

            {/* Bookings */}
            <Route path="bookings" element={<BookingsList />} />
            <Route path="bookings/search" element={<SearchBook />} />

            {/* Settings & Reports (from Sidebar) */}
            <Route path="settings" element={<h2>Settings Page</h2>} />
            <Route path="reports" element={<h2>Reports Page</h2>} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;