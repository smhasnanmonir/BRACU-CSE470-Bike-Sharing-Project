"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import "./NavComp.css";
import Link from "next/link";

const NavComp = () => {
  const { user, loading, signOutFromWeb } = useAuthContext();
  console.log(user);

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
                <Link href="/system-map">System Map</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li>
                {user ? (
                  <>
                    <button onClick={signOutFromWeb}>Logout</button>
                  </>
                ) : (
                  <Link href="/login">Login</Link>
                )}
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
