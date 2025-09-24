import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import PrivateRoute from '../components/PrivateRoute';

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      {/* A RegisterScreen would be needed for a full flow, but is omitted for brevity */}
      <Route path="/register" element={<LoginScreen />} /> 

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardScreen />} />
        {/* Add more private routes here, e.g., /projects/:id */}
      </Route>
    </Routes>
  );
};

export default AppNavigator;
