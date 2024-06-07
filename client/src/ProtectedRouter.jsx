import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlate } from 'react-router-dom';

function ProtectedRouter() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return userInfo?.token ? <Outlate /> : <Navigate to="/login" />;
}

//admin router protection

function AdminRouterProtection() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo?.token ? (
    userInfo?.isAdmin ? (
      <Outlate />
    ) : (
      <Navigate to="/*" />
    )
  ) : (
    <Navigate to="/login" />
  );
}

export { ProtectedRouter, AdminRouterProtection };
