import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { AuthContextProvider } from "../../context/AuthContext";
import ProtectedRoute from "../protectedRoute";
import { DashboardProvider } from "../../context/DashboardContext";
import PlayListDisplay from "../PlayListDisplay/PlayListDisplay";
import Layout from "../Layout";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/" element={<SignUp />}></Route>
      </Routes>
      <Layout>
        <AuthContextProvider>
          <Routes>
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              exact
              path="/playlist"
              element={
                <ProtectedRoute>
                    <PlayListDisplay />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </AuthContextProvider>
      </Layout>
    </Router>
  );
};

export default PageRouter;
