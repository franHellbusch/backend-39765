import React from "react";
import { AdminProductList, ProductForm } from "./components";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Admin</h2>
      <AdminProductList />
      <ProductForm />
    </>
  );
};

export default AdminDashboard;
