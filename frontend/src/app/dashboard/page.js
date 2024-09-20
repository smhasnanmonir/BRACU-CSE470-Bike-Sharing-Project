"use client";

import AdminDashBoard from "@/components/Dashboard/AdminDashBoard";
import UserDashboard from "@/components/Dashboard/UserDashboard";
import { useAuthContext } from "@/providers/AuthProvider";

const page = () => {
  const { user, userInfo, loading } = useAuthContext();
  console.log(userInfo);
  return (
    <div>
      {loading ? (
        <>
          <div className="h-screen grid place-content-center">
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <>
          {user ? (
            <>
              <div>
                {userInfo?.data?.role == "admin" ? (
                  <>
                    <AdminDashBoard></AdminDashBoard>
                  </>
                ) : (
                  <>
                    <UserDashboard></UserDashboard>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="h-screen grid place-content-center">
                <h1>Please login to access dashboard</h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default page;
