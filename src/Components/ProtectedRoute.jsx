import { Navigate, Outlet } from "react-router-dom";
import {  useQueryClient } from "@tanstack/react-query";

const ProtectedRoute = () => {
  // useQuery 
 
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(["user"])
 
  console.log("Protected Route Debugging:", user?.role);
  

  if (!user||!user.role) return <Navigate to="/login" replace />;
  if (user.role !== "admin" && user.role !== "user") {
    return <Navigate to="/unauthorized" replace />;
  }
   return <Outlet />;
 
};

export default ProtectedRoute;
