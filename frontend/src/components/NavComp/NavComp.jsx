import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import "./NavComp.css";
const NavComp = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">Paddle</div>
          <nav>
            <ul>
              <li>
                <a href="#">Ride Experience</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#">System Map</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </nav>
          <div className="auth-buttons">
    
<LoginLink>Sign in</LoginLink>

<RegisterLink className="join-btn">Sign up</RegisterLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavComp;
