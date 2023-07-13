import React from "react";
import { AdminProductList, ProductForm } from "./components";
import { Navigate, useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/models";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Admin</h2>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)}>
        Go home
      </button>
      <AdminProductList />
      <ProductForm />
    </>
  );
};

export default AdminDashboard;
