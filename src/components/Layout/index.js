import TemporaryDrawer from "../DrawerCompo/DrawerCompo";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const signOutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="dashboard-wrap">
        <TemporaryDrawer />
        <h1>Songs/Playlist App</h1>

        <div className="footer-form">
          <button onClick={signOutBtn}>Logout</button>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
