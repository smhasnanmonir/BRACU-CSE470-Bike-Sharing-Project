"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import "./NavComp.css";
import Link from "next/link";
const NavComp = () => {
  const { user, userInfo } = useAuthContext();
  return (
    <div>
      <header>
        <div className="container">
          {/* <div className="logo">Paddle</div> */}
          <Link className="logo" href="/">
            Paddle
          </Link>
          <nav>
            <ul>
              <li>
                <a href="#">Ride Experience</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                {/* <a href="#">System Map</a> */}
                <Link href="/system-map">System Map</Link>
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
