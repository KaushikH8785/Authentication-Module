import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { AuthContextProvider } from "../../context/AuthContext";
import ProtectedRoute from "../protectedRoute";
import PlayListDisplay from "../PlayListDisplay/PlayListDisplay";
import Layout from "../Layout";

const PageRouter = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/" element={<SignUp />}></Route>
          <Route
            exact
            path="/dashboard"
            element={
              <Layout>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/playlist"
            element={
              <Layout>
                <ProtectedRoute>
                  <PlayListDisplay />
                </ProtectedRoute>
              </Layout>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default PageRouter;
