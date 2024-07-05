"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import "./NavComp.css";
const NavComp = () => {
  const { user, userInfo } = useAuthContext();
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
          <div className="auth-buttons"></div>
        </div>
      </header>
    </div>
  );
};

export default NavComp;
