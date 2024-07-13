import "./Navbar.css";
import { assets } from "../../assets/admin_assets/assets";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={assets.logo_admin} alt="logo" />
      <img
        className="profile-img"
        src={assets.profile_image}
        alt="profile pic"
      />
    </nav>
  );
};

export default Navbar;
